#!/usr/bin/env python3
"""
Lightweight checker for problematic characters in Persian/RTL Markdown/MDX.

Usage:
  python3 tools/check_persian_chars.py blog/post.mdx
  python3 tools/check_persian_chars.py blog/*.md blog/*.mdx
"""

from __future__ import annotations

import argparse
import re
import sys
import unicodedata
from pathlib import Path


FORBIDDEN_CHARS: dict[str, str] = {
    "\u200f": "RLM (Right-to-Left Mark)",
    "\u0654": "ٔ (ARABIC HAMZA ABOVE / کسرهٔ ترکیبی)",
    "\u202a": "LRE (Left-to-Right Embedding)",
    "\u202b": "RLE (Right-to-Left Embedding)",
    "\u202c": "PDF (Pop Directional Formatting)",
    "\u202d": "LRO (Left-to-Right Override)",
    "\u202e": "RLO (Right-to-Left Override)",
    "\u2066": "LRI (Left-to-Right Isolate)",
    "\u2067": "RLI (Right-to-Left Isolate)",
    "\u2068": "FSI (First Strong Isolate)",
    "\u2069": "PDI (Pop Directional Isolate)",
    "\u06c0": "ۀ (HEH WITH YEH ABOVE)",
    "\u2190": "← (Left arrow)",
    "\u2192": "→ (Right arrow)",
    "\u2013": "– (En dash)",
    "\u2014": "— (Em dash)",
    "\u2026": "… (Ellipsis)",
    "\u0640": "ـ (Tatweel/kashida)",
}

FORBIDDEN_SEQUENCES: dict[str, str] = {
    "--": "double hyphen (--)",
}


def _is_frontmatter_delimiter(line: str) -> bool:
    return line.strip() == "---"


def _is_markdown_table_separator(line: str) -> bool:
    stripped = line.strip()
    if not stripped.startswith("|") or not stripped.endswith("|"):
        return False
    cells = [cell.strip() for cell in stripped.strip("|").split("|")]
    return bool(cells) and all(re.fullmatch(r":?-{3,}:?", cell) for cell in cells)


def iter_issues(text: str):
    lines = text.splitlines(keepends=False)
    in_fence = False
    for line_index, line in enumerate(lines, start=1):
        stripped = line.strip()
        if stripped.startswith("```") or stripped.startswith("~~~"):
            in_fence = not in_fence
            continue
        if in_fence:
            continue

        # Forbidden characters
        for col_index, ch in enumerate(line, start=1):
            if ch in FORBIDDEN_CHARS:
                yield (line_index, col_index, ch, FORBIDDEN_CHARS[ch])

        # Forbidden sequences
        for seq, desc in FORBIDDEN_SEQUENCES.items():
            if seq == "--" and (
                _is_frontmatter_delimiter(line) or _is_markdown_table_separator(line)
            ):
                continue
            start = 0
            while True:
                pos = line.find(seq, start)
                if pos == -1:
                    break
                yield (line_index, pos + 1, seq, desc)
                start = pos + len(seq)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("paths", nargs="+", help="Files to check")
    args = parser.parse_args()

    had_issue = False
    for p_str in args.paths:
        path = Path(p_str)
        if not path.exists():
            print(f"[skip] {path} (not found)", file=sys.stderr)
            continue
        if path.is_dir():
            print(f"[skip] {path} (is a directory)", file=sys.stderr)
            continue

        try:
            text = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            text = path.read_text(encoding="utf-8", errors="replace")

        for line, col, token, desc in iter_issues(text):
            had_issue = True
            if len(token) == 1:
                cp = f"U+{ord(token):04X}"
                name = unicodedata.name(token, "UNKNOWN")
                token_repr = f"'{token}' ({cp}, {name})"
            else:
                token_repr = f"\"{token}\""
            print(f"{path}:{line}:{col}: {desc}: {token_repr}")

    return 1 if had_issue else 0


if __name__ == "__main__":
    raise SystemExit(main())
