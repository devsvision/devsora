# DEVSORA Frontend Architecture

This document is a short architecture reference. The full maintenance blueprint lives in `README.md`.

## Current Product Scope

- Merge Photos
- Product Photoshoot
- AI Model Photo

The old Template/Marketplace feature has been removed from pages, routes, sitemap, CSS, and JS.

## Architecture Principles

- Static-first frontend.
- No React, Vue, package install, or mandatory build step.
- TailwindCSS Play CDN for utility classes.
- Alpine.js for page-level state.
- Vanilla ES Modules for partial loading, stores, API wrappers, and utilities.
- Public SEO pages are separated from private dashboard/auth pages.
- Private pages must not be listed in `sitemap.xml`.

## Folder Groups

```text
assets/      Production CSS, page JS, icons, brand images, upload placeholder.
auth/        Login, register, and forgot password pages.
components/  Reusable HTML partials for modular pages.
css/         Lightweight CSS for partial-based pages.
dashboard/   Private app pages and generation tools.
docs/        Architecture and production notes.
js/          ES module utilities, API wrappers, route config, and partial loader.
pages/       Public feature and legal pages.
```

## Public Pages

- `/`
- `/pages/features/gabung-foto.html`
- `/pages/features/foto-model.html`
- `/pages/legal/privacy.html`
- `/pages/legal/terms.html`

## Private Pages

- `/auth/*`
- `/dashboard/*`

Private pages are blocked in `robots.txt` and should not be added to `sitemap.xml`.

## Key Files

- `index.html`: main bilingual landing page.
- `assets/js/app.js`: landing state, translation dictionary, pricing, FAQ, gallery.
- `dashboard/generate-ai.html`: main app generator page.
- `assets/js/generator.js`: Merge Photos, Product Photoshoot, AI Model Photo logic.
- `assets/css/design-system.css`: shared design tokens.
- `assets/css/component.css`: reusable UI classes.
- `assets/css/style.css`: landing page styling.
- `assets/css/generator.css`: generator styling.
- `sitemap.xml`: public crawlable URLs only.
- `robots.txt`: public/private crawl rules.
- `.htaccess`: Apache cache, compression, security headers, and 404.

## API Layer

API wrappers live in `js/api/`:

- `auth.api.js`
- `generation.api.js`
- `projects.api.js`
- `http.js`

Do not store provider keys or secrets in frontend files. Paid AI provider calls should go through a backend proxy.

## Maintenance Checklist

- If a public page is added, update `sitemap.xml`.
- If a private page is added, keep it out of `sitemap.xml`.
- If a feature is removed, delete related HTML, CSS, JS, route entries, sitemap entries, docs references, and nav links.
- Keep all file and folder names in `kebab-case`.
- Keep page-specific behavior in `assets/js/{page}.js`.
- Keep reusable modular behavior in `js/modules/` or `js/stores/`.

