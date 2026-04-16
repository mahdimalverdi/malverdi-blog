#!/usr/bin/env python3
"""
Apply conservative Persian typography normalizations to Markdown/MDX text.

The script is designed for this Docusaurus blog. It normalizes Arabic variants
of Persian letters, adds ZWNJ in common places, and leaves fenced code blocks
and inline code untouched.

Usage:
  python3 tools/apply_persian_typography.py blog/post.mdx
  python3 tools/apply_persian_typography.py --in-place blog/post.mdx
"""

from __future__ import annotations

import argparse
import re
from dataclasses import dataclass
from pathlib import Path


ZWNJ = "\u200c"
HAMZA_ABOVE = "\u0654"  # combining hamza above in forms such as هٔ
def _normalize_arabic_variants(text: str) -> str:
    return (
        text.replace("ي", "ی")
        .replace("ك", "ک")
        .replace("ى", "ی")
    )


@dataclass(frozen=True)
class Replacement:
    pattern: re.Pattern[str]
    repl: str
    desc: str


def _protect_pattern(text: str, pattern: re.Pattern[str], prefix: str):
    blocks: list[str] = []

    def _sub(match: re.Match[str]) -> str:
        blocks.append(match.group(0))
        return f"@@{prefix}{len(blocks)-1}@@"

    return pattern.sub(_sub, text), blocks


def _restore_blocks(text: str, blocks: list[str], prefix: str) -> str:
    for i, block in enumerate(blocks):
        text = text.replace(f"@@{prefix}{i}@@", block)
    return text


def _protect_markdown_code(text: str):
    fenced = re.compile(r"(^```.*?^```|^~~~.*?^~~~)", re.MULTILINE | re.DOTALL)
    text, fenced_blocks = _protect_pattern(text, fenced, "FENCE")
    inline = re.compile(r"`[^`\n]+`")
    text, inline_blocks = _protect_pattern(text, inline, "INLINE")
    return text, fenced_blocks, inline_blocks


def _restore_markdown_code(text: str, fenced_blocks: list[str], inline_blocks: list[str]):
    text = _restore_blocks(text, inline_blocks, "INLINE")
    text = _restore_blocks(text, fenced_blocks, "FENCE")
    return text


def _protect_mdx_tags(text: str):
    """
    Keep MDX/HTML-like single-line tags intact. This is intentionally simple
    and aimed at imports/components such as <SomeComponent />.
    """
    tag_pattern = re.compile(r"^[ \t]*<[^>\n]+>[ \t]*$", re.MULTILINE)
    return _protect_pattern(text, tag_pattern, "TAG")


def _restore_mdx_tags(text: str, tag_blocks: list[str]) -> str:
    return _restore_blocks(text, tag_blocks, "TAG")


def _protect_markdown_link_urls(text: str):
    url_pattern = re.compile(r"(?<=\]\()[^) \n]+(?:\s+\"[^\"]*\")?(?=\))")
    return _protect_pattern(text, url_pattern, "URL")


def _restore_markdown_link_urls(text: str, url_blocks: list[str]) -> str:
    return _restore_blocks(text, url_blocks, "URL")


def _protect_markdown(text: str):
    text, fenced_blocks, inline_blocks = _protect_markdown_code(text)
    text, tag_blocks = _protect_mdx_tags(text)
    text, url_blocks = _protect_markdown_link_urls(text)
    return text, fenced_blocks, inline_blocks, tag_blocks, url_blocks


def _restore_markdown(
    text: str,
    fenced_blocks: list[str],
    inline_blocks: list[str],
    tag_blocks: list[str],
    url_blocks: list[str],
) -> str:
    text = _restore_markdown_link_urls(text, url_blocks)
    text = _restore_mdx_tags(text, tag_blocks)
    text = _restore_markdown_code(text, fenced_blocks, inline_blocks)
    return text


def _protect_lr_blocks(text: str):
    """
    Keep compatibility with older LaTeX article files, but do not introduce
    LaTeX-specific constructs in Markdown output.
    """
    lr_pattern = re.compile(r"\\lr\{[^{}]*\}")
    blocks: list[str] = []

    def _sub(match: re.Match[str]) -> str:
        blocks.append(match.group(0))
        return f"@@LR{len(blocks)-1}@@"

    protected = lr_pattern.sub(_sub, text)
    return protected, blocks


def _restore_lr_blocks(text: str, blocks: list[str]) -> str:
    for i, block in enumerate(blocks):
        text = text.replace(f"@@LR{i}@@", block)
    return text


def _protect_brace_groups(text: str):
    """
    Replace simple {...} groups that should be left alone during Latin wrapping.
    This keeps us from wrapping words already inside LaTeX commands or macros.
    """
    brace_pattern = re.compile(r"\{[^{}]*\}")
    blocks: list[str] = []

    def _sub(match: re.Match[str]) -> str:
        blocks.append(match.group(0))
        return f"@@BR{len(blocks)-1}@@"

    protected = brace_pattern.sub(_sub, text)
    return protected, blocks


def _restore_brace_groups(text: str, blocks: list[str]) -> str:
    for i, block in enumerate(blocks):
        text = text.replace(f"@@BR{i}@@", block)
    return text


def apply_rules(text: str) -> str:
    text = _normalize_arabic_variants(text)
    (
        protected,
        fenced_blocks,
        inline_blocks,
        tag_blocks,
        url_blocks,
    ) = _protect_markdown(text)
    protected, lr_blocks = _protect_lr_blocks(protected)

    rules: list[Replacement] = [
        # Prefixes: می‌ + verb, نمی‌ + verb
        Replacement(
            re.compile(r"\bنمی\s+(?=[\u0600-\u06FF])"),
            f"نمی{ZWNJ}",
            "نمی‌ + فعل",
        ),
        Replacement(
            re.compile(r"\bمی\s+(?=[\u0600-\u06FF])"),
            f"می{ZWNJ}",
            "می‌ + فعل",
        ),
        # Common compounds (keep minimal and high-confidence)
        Replacement(
            re.compile(r"\bنرم افزار\b"),
            f"نرم{ZWNJ}افزار",
            "نرم‌افزار",
        ),
        Replacement(
            re.compile(r"\bپیش نویس\b"),
            f"پیش{ZWNJ}نویس",
            "پیش‌نویس",
        ),
        Replacement(
            re.compile(r"\bپیش زمینه\b"),
            f"پیش{ZWNJ}زمینه",
            "پیش‌زمینه",
        ),
        Replacement(
            re.compile(r"\bچندوظیفه ای\b"),
            f"چندوظیفه{ZWNJ}ای",
            "چندوظیفه‌ای",
        ),
        Replacement(
            re.compile(r"\bراه اندازی\b"),
            f"راه{ZWNJ}اندازی",
            "راه‌اندازی",
        ),
        Replacement(
            re.compile(r"\bپیاده سازی\b"),
            f"پیاده{ZWNJ}سازی",
            "پیاده‌سازی",
        ),
        Replacement(
            re.compile(r"\bهم زمان\b"),
            f"هم{ZWNJ}زمان",
            "هم‌زمان",
        ),
        Replacement(
            re.compile(r"\bهم راستا\b"),
            f"هم{ZWNJ}راستا",
            "هم‌راستا",
        ),
        Replacement(
            re.compile(r"\bهم خوان(?:ی)?\b"),
            lambda m: f"هم{ZWNJ}خوانی" if m.group(0).endswith("ی") else f"هم{ZWNJ}خوان",
            "هم‌خوان / هم‌خوانی",
        ),
        Replacement(
            re.compile(r"\bگفت و گو\b"),
            f"گفت{ZWNJ}و{ZWNJ}گو",
            "گفت‌وگو",
        ),
        Replacement(
            re.compile(r"\bگفت و گوی\b"),
            f"گفت{ZWNJ}و{ZWNJ}گوی",
            "گفت‌وگوی",
        ),
        Replacement(
            re.compile(r"\bتبیین پذیر\b"),
            f"تبیین{ZWNJ}پذیر",
            "تبیین‌پذیر",
        ),
        Replacement(
            re.compile(r"\bکنار گذاشت(?:ه|ن|ه ?می شوند|ه ?می شود)?\b"),
            lambda m: m.group(0).replace("کنار گذاشت", f"کنار{ZWNJ}گذاشت"),
            "کنار‌گذاشتن",
        ),
        Replacement(
            re.compile(r"\bنامطمئن\b"),
            f"نامطمئن",
            "نامطمئن",
        ),
        # Suffixes: ...‌ها / ...‌های
        Replacement(
            re.compile(r"(?<=[\u0600-\u06FF]) ها\b"),
            f"{ZWNJ}ها",
            "جمع: ـها",
        ),
        Replacement(
            re.compile(r"(?<=[\u0600-\u06FF]) های\b"),
            f"{ZWNJ}های",
            "جمع: ـهای",
        ),
        Replacement(
            re.compile(r"(?<=[\u0600-\u06FF]) هایی\b"),
            f"{ZWNJ}هایی",
            "جمع: ـهایی",
        ),
        # Suffixes: ...‌ای / ...‌تر / ...‌ترین
        Replacement(
            re.compile(r"(?<=[\u0600-\u06FF]) ای\b"),
            f"{ZWNJ}ای",
            "صفت/نسبت: ـای",
        ),
        Replacement(
            re.compile(r"(?<=[\u0600-\u06FF]) تر\b"),
            f"{ZWNJ}تر",
            "صفت تفضیلی: ـتر",
        ),
        Replacement(
            re.compile(r"(?<=[\u0600-\u06FF]) ترین\b"),
            f"{ZWNJ}ترین",
            "صفت عالی: ـترین",
        ),
        # Verb forms: کرده‌اند / شده‌اند / داده‌اند / ...
        Replacement(
            re.compile(r"ه اند\b"),
            f"ه{ZWNJ}اند",
            "فعل مرکب: ـه‌اند",
        ),
        Replacement(
            re.compile(rf"ه{HAMZA_ABOVE}"),
            f"ه{ZWNJ}ی",
            "هٔ -> ه‌ی",
        ),
        Replacement(
            re.compile(r"ه ی\b"),
            f"ه{ZWNJ}ی",
            "ه ی -> ه‌ی",
        ),
        # A couple of very common preposition compounds (optional but useful)
        Replacement(
            re.compile(r"\bبه صورت\b"),
            f"به{ZWNJ}صورت",
            "به‌صورت",
        ),
        Replacement(
            re.compile(r"\bبه عنوان\b"),
            f"به{ZWNJ}عنوان",
            "به‌عنوان",
        ),
        Replacement(
            re.compile(r"به تنهایی"),
            f"به{ZWNJ}تنهایی",
            "به‌تنهایی",
        ),
        Replacement(
            re.compile(r"صورت بندی"),
            f"صورت{ZWNJ}بندی",
            "صورت‌بندی",
        ),
        Replacement(
            re.compile(r"جهت یابی"),
            f"جهت{ZWNJ}یابی",
            "جهت‌یابی",
        ),
        Replacement(
            re.compile(r"\bاز آن جا\b"),
            f"از{ZWNJ}آن{ZWNJ}جا",
            "از‌آن‌جا",
        ),
        Replacement(
            re.compile(r"\bآن جا\b"),
            f"آن{ZWNJ}جا",
            "آن‌جا",
        ),
        Replacement(
            re.compile(r"\bصرفا\b"),
            "صرفا",
            "صرفا",
        ),
        Replacement(
            re.compile(r"\bپیشين\b"),
            "پیشین",
            "پیشین",
        ),
        Replacement(
            re.compile(r"\bسنجهٔ\b"),
            "سنجه‌ی",
            "سنجه‌ی",
        ),
    ]

    out = protected
    for rule in rules:
        out = rule.pattern.sub(rule.repl, out)

    out = _restore_lr_blocks(out, lr_blocks)
    out = _restore_markdown(
        out,
        fenced_blocks,
        inline_blocks,
        tag_blocks,
        url_blocks,
    )
    return out


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("paths", nargs="+", help="Input Markdown/MDX files")
    parser.add_argument(
        "--in-place",
        action="store_true",
        help="Modify files in place",
    )
    args = parser.parse_args()

    outputs: list[str] = []
    for p_str in args.paths:
        path = Path(p_str)
        text = path.read_text(encoding="utf-8")
        new = apply_rules(text)

        if args.in_place:
            path.write_text(new, encoding="utf-8")
        else:
            outputs.append(new)

    if not args.in_place:
        print("\n".join(outputs), end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
