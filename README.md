# Malverdi Blog

A personal Persian blog and portfolio site built with [Docusaurus](https://docusaurus.io/).

The site is the home of Mahdi Malverdi's writing, project notes, and personal pages. It is designed as a lightweight static website with a small set of permanent pages and a blog archive that grows over time.

## Stack

- Docusaurus 3
- React 19
- TypeScript
- PNPM
- Docker + Nginx for containerized deployment

## Features

- Persian, right-to-left interface
- Blog-first structure with archive, tags, authors, and feed support
- Static pages such as About, Now, and Contact
- Custom homepage and theme styling
- Container build workflow for deployment

## Requirements

- Node.js 20 or newer
- PNPM 9 or newer

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the local development server:

```bash
pnpm start
```

By default, Docusaurus serves the site locally with live reload while you edit pages, blog posts, and styles.

## Available Scripts

- `pnpm start`: run the local development server
- `pnpm build`: generate the production site into `build/`
- `pnpm serve`: serve the generated production build locally
- `pnpm typecheck`: run TypeScript type checking
- `pnpm clear`: clear Docusaurus cache
- `pnpm deploy`: run Docusaurus deployment flow
- `pnpm swizzle`: customize Docusaurus theme components

## Project Structure

```text
.
├── blog/                  # Blog posts, tags, and authors
├── src/
│   ├── css/               # Custom global styles
│   ├── pages/             # Static pages and homepage
│   ├── theme/             # Theme component overrides
│   └── utils/             # Shared utilities
├── static/                # Static assets such as images and fonts
├── scripts/               # Helper scripts for deployment workflows
├── docusaurus.config.ts   # Main site configuration
├── Dockerfile             # Production container image build
└── package.json           # Scripts and dependencies
```

## Content Workflow

### Add a blog post

Create a new Markdown file under `blog/` with front matter, for example:

```md
---
slug: my-post
title: My Post Title
authors: [default]
tags: [notes]
description: Short summary of the post
---
```

### Update static pages

Edit the files under `src/pages/`, such as:

- `src/pages/about.md`
- `src/pages/now.md`
- `src/pages/contact.md`

### Update site configuration

Core site settings such as title, navigation, footer links, locale, and blog behavior live in `docusaurus.config.ts`.

## Production Build

Generate the static site:

```bash
pnpm build
```

Preview the generated output locally:

```bash
pnpm serve
```

## Docker

The repository includes a multi-stage `Dockerfile` that:

1. Installs dependencies with PNPM
2. Builds the static Docusaurus site
3. Serves the generated files with Nginx

Build the image locally:

```bash
docker build -t malverdi-blog .
```

Run the container:

```bash
docker run --rm -p 8080:80 malverdi-blog
```

Then open `http://localhost:8080`.

## Registry Push Helper

The script `scripts/push-hamravesh.sh` builds and pushes the Docker image to a registry.

Default behavior:

- Uses the current Git commit hash as the image tag
- Uses `registry.hamdocker.ir/mahdimalverdi/<project-directory>` as the repository name

Example:

```bash
./scripts/push-hamravesh.sh
```

You can also override inputs with environment variables such as `IMAGE_REPOSITORY`, `TAG`, `DOCKERFILE_PATH`, and `BUILD_CONTEXT`.

## Notes

- The site is currently configured for the Persian (`fa`) locale and right-to-left layout.
- The production `url` in `docusaurus.config.ts` is still set to `https://example.com` and should be updated before a final public deployment.

## License

No license file is currently included in this repository. Add one if you want to define reuse terms explicitly.
