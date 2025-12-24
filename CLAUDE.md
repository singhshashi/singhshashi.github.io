# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website/blog built with Hugo static site generator, using the "mini" theme with custom Tailwind CSS styling. Deployed to GitHub Pages via GitHub Actions.

## Common Commands

```bash
# Local development server
hugo server

# Build site for production
HUGO_ENV=production hugo --minify

# Build Tailwind CSS (run when changing CSS)
npm run build:css

# Watch Tailwind CSS changes during development
npm run watch:css
```

## Architecture

- **Hugo** (v0.139.0): Static site generator with TOML config (`hugo.toml`)
- **Tailwind CSS v4**: Styling system with source in `assets/css/main.css`, output to `static/css/style.css`
- **Theme**: `themes/mini` (git submodule) - minimalist Hugo theme

### Content Structure

- `content/posts/` - Blog posts (permalink: `/blog/:slug/`)
- `content/projects/` - Project pages (permalink: `/projects/:slug/`)
- `content/about.md`, `content/contact.md` - Static pages

### Layout Overrides

Custom layouts in `layouts/` override the mini theme:
- `layouts/_default/` - Base templates
- `layouts/partials/` - Reusable components
- `layouts/posts/`, `layouts/projects/` - Section-specific templates

## Deployment

Push to `master` triggers GitHub Actions workflow (`.github/workflows/hugo.yml`) which builds and deploys to GitHub Pages.
