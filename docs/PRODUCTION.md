# DEVSORA Production Readiness

## Final Static Structure

- `index.html`: public landing page.
- `pages/`: SEO-indexable public feature and legal pages.
- `auth/`: noindex authentication screens.
- `dashboard/`: noindex app screens.
- `assets/css/`: layered CSS: design system, components, page CSS, effects, mobile overrides.
- `assets/js/`: page-specific Alpine state and lightweight shared effects/mobile scripts.
- `.htaccess`: Apache/Hostinger cache, compression, and security headers.
- `sitemap.xml`, `robots.txt`, `site.webmanifest`, `404.html`: production support files.

## Asset Optimization

- Keep images in `assets/images/{brand,marketing,products}`.
- Prefer `webp` or `avif` for raster assets.
- Use SVG only for icons/logos.
- Add `loading="lazy"` and `decoding="async"` to non-hero images.
- Keep hero/above-the-fold visual CSS-based or preloaded if using a real image.

## SEO Basic

- Public pages should have unique `title`, `description`, canonical, Open Graph, and Twitter tags.
- Private pages should use `noindex, nofollow`.
- Update `sitemap.xml` whenever a new public page is added.
- Keep `robots.txt` blocking `/dashboard/` and `/auth/`.

## Performance Strategy

- Scripts are deferred.
- Shared visual effects use `IntersectionObserver`, CSS transforms, and reduced particle count on mobile.
- `.htaccess` enables Brotli/Deflate when the server module is available.
- Static assets are cached for one year.
- HTML is cached briefly and revalidated.

## Minify Strategy

Current project is no-build and VPS-friendly. For final production, minify as a release step:

```bash
npx lightningcss-cli assets/css/*.css --minify --bundle --output-file assets/dist/app.min.css
npx terser assets/js/*.js --compress --mangle --output assets/dist/app.min.js
```

Then replace multiple CSS/JS includes per page with the minified bundles. If you must keep zero build tools, enable Cloudflare/Hostinger compression and keep files as-is for maintainability.

## Frontend Security

- Do not store API secrets in frontend files.
- Use backend proxy endpoints for paid AI provider keys.
- Keep auth tokens short-lived and store refresh tokens server-side where possible.
- `.htaccess` sets `nosniff`, `SAMEORIGIN`, `Referrer-Policy`, `Permissions-Policy`, and HSTS on HTTPS.
- A strict CSP is recommended after replacing Tailwind Play CDN with compiled CSS, because Tailwind Play CDN requires runtime script behavior that conflicts with a strict production CSP.

## Hostinger VPS Deploy

1. Upload project contents to `/var/www/devsora` or the configured document root.
2. Point the domain to the VPS.
3. Enable HTTPS.
4. Ensure Apache allows `.htaccess` overrides, or port these rules to Nginx.
5. Test:
   - `/`
   - `/sitemap.xml`
   - `/robots.txt`
   - `/404.html`
