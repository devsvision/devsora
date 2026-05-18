# DEVSORA Frontend Blueprint

DEVSORA adalah frontend statis untuk AI SaaS visual kreatif. Fokus produk saat ini adalah:

- Merge Photos
- Product Photoshoot
- AI Model Photo

Project ini sengaja dibuat ringan, tanpa React/Vue/build tools, agar mudah dipahami, cepat dimuat, dan mudah di-deploy ke VPS seperti Hostinger.

## Teknologi

- HTML5 static pages
- TailwindCSS Play CDN
- Alpine.js untuk state UI ringan
- Vanilla JavaScript ES6 Modules
- CSS custom properties dan reusable component classes
- Mobile-first responsive layout
- Apache `.htaccess` untuk cache, compression, security headers, dan 404

Tidak ada bundler, package manager, atau build step wajib.

## Struktur Folder

```text
devsora/
|-- index.html
|-- 404.html
|-- robots.txt
|-- sitemap.xml
|-- site.webmanifest
|-- .htaccess
|-- README.md
|-- assets/
|   |-- css/
|   |   |-- style.css
|   |   |-- design-system.css
|   |   |-- component.css
|   |   |-- dashboard.css
|   |   |-- generator.css
|   |   |-- merge-photos.css
|   |   |-- auth.css
|   |   |-- effects.css
|   |   `-- mobile.css
|   |-- js/
|   |   |-- app.js
|   |   |-- generator.js
|   |   |-- dashboard.js
|   |   |-- merge-photos.js
|   |   |-- auth.js
|   |   |-- effects.js
|   |   `-- mobile.js
|   |-- icons/
|   |   |-- favicon.png
|   |   |-- favicon-32.png
|   |   |-- favicon.svg
|   |   `-- apple-touch-icon.png
|   |-- images/
|   |   `-- brand/
|   |       |-- devsora-logo.png
|   |       `-- og-cover.svg
|   `-- uploads/
|       `-- .gitkeep
|-- auth/
|   |-- login.html
|   |-- register.html
|   `-- forgot-password.html
|-- dashboard/
|   |-- index.html
|   |-- generate-ai.html
|   |-- merge-photos.html
|   |-- billing/
|   |   `-- index.html
|   |-- projects/
|   |   |-- index.html
|   |   `-- new.html
|   `-- settings/
|       `-- index.html
|-- pages/
|   |-- features/
|   |   |-- gabung-foto.html
|   |   `-- foto-model.html
|   `-- legal/
|       |-- privacy.html
|       `-- terms.html
|-- components/
|   |-- base/
|   |-- dashboard/
|   |-- forms/
|   |-- layout/
|   |-- marketing/
|   `-- overlays/
|-- css/
|   `-- app.css
|-- js/
|   |-- main.js
|   |-- api/
|   |-- config/
|   |-- modules/
|   |-- stores/
|   `-- utils/
`-- docs/
    |-- ARCHITECTURE.md
    `-- PRODUCTION.md
```

## Fungsi Folder

- `index.html`: landing page utama, SEO-indexable, bilingual ID/EN.
- `assets/css/`: CSS utama untuk halaman produksi yang sudah lebih visual/premium.
- `assets/js/`: Alpine state dan behavior halaman utama seperti landing, dashboard, generator, auth, efek, dan mobile.
- `auth/`: halaman login, register, dan forgot password. Gunakan `noindex`.
- `dashboard/`: halaman aplikasi setelah login. Diblokir dari search engine melalui `robots.txt`.
- `pages/features/`: halaman publik SEO untuk fitur utama.
- `pages/legal/`: halaman legal publik.
- `components/`: partial HTML reusable untuk halaman modular yang memakai `data-include`.
- `css/app.css`: CSS ringan untuk halaman modular berbasis partial.
- `js/`: ES modules untuk include partial, store UI, route map, API wrapper, dan utilities.
- `docs/`: catatan arsitektur dan production readiness.

## Halaman Aktif

Public SEO pages:

- `/`
- `/pages/features/gabung-foto.html`
- `/pages/features/foto-model.html`
- `/pages/legal/privacy.html`
- `/pages/legal/terms.html`

Private/noindex app pages:

- `/auth/login.html`
- `/auth/register.html`
- `/auth/forgot-password.html`
- `/dashboard/index.html`
- `/dashboard/generate-ai.html`
- `/dashboard/merge-photos.html`
- `/dashboard/projects/index.html`
- `/dashboard/projects/new.html`
- `/dashboard/billing/index.html`
- `/dashboard/settings/index.html`

Fitur Template/Marketplace sudah dihapus. Jangan menambahkan kembali link `/pages/templates/` kecuali fiturnya memang dibuat ulang.

## SEO Blueprint

File SEO utama:

- `robots.txt`: mengizinkan halaman publik dan memblokir `/dashboard/` serta `/auth/`.
- `sitemap.xml`: hanya berisi halaman publik yang boleh diindex.
- `site.webmanifest`: metadata PWA ringan.
- `assets/images/brand/og-cover.svg`: Open Graph image.
- `404.html`: halaman error noindex.

Aturan SEO maintenance:

- Halaman publik harus punya `title`, `description`, canonical URL, Open Graph, Twitter card, dan `robots=index, follow`.
- Halaman auth/dashboard harus `robots=noindex, nofollow` atau diblokir dari `robots.txt`.
- Jangan masukkan URL dashboard/auth ke `sitemap.xml`.
- Setelah menghapus halaman, hapus juga linknya dari nav, sitemap, route map, docs, dan JS/CSS terkait.
- Gunakan bahasa yang konsisten. Landing sudah memiliki bilingual ID/EN melalui `assets/js/app.js`.

## Bilingual System

Landing page memakai sistem bilingual ringan di `assets/js/app.js`.

- Default language: Indonesian (`id`)
- Alternative language: English (`en`)
- Storage key: `devsora-language`
- UI selector: custom dropdown di header dan mobile menu
- Currency default: IDR

Untuk menambah teks baru di landing:

1. Tambahkan key di object `translations.en`.
2. Tambahkan padanan bahasa Indonesia di `translations.id`.
3. Bind di HTML memakai `x-text`, `:placeholder`, atau atribut Alpine lain.

## Design System

Style utama berada di:

- `assets/css/design-system.css`: token, typography, utility class.
- `assets/css/component.css`: button, card, input, navbar/sidebar reusable.
- `assets/css/style.css`: landing page.
- `assets/css/generator.css`: Generate AI page.
- `assets/css/dashboard.css`: dashboard layout.
- `assets/css/mobile.css`: mobile override global.
- `assets/css/effects.css`: scroll reveal, particles, reflection, skeleton.

Naming convention:

- File/folder: `kebab-case`
- JS function/store: `camelCase`
- CSS utility/component: `kebab-case`
- Alpine state function: `devsoraPageName`

## JavaScript Map

- `assets/js/app.js`: landing page state, bilingual dictionary, pricing, FAQ, gallery.
- `assets/js/generator.js`: Generate AI workflow for Merge Photos, Product Photoshoot, AI Model Photo.
- `assets/js/dashboard.js`: dashboard overview state.
- `assets/js/merge-photos.js`: standalone merge photos page.
- `assets/js/auth.js`: auth form state, validation, loading UI.
- `assets/js/effects.js`: visual effects and scroll reveal.
- `assets/js/mobile.js`: swipe and mobile interaction helpers.
- `js/main.js`: module entry for partial-based pages.
- `js/modules/include.js`: loads HTML partials via `data-include`.
- `js/api/*.api.js`: frontend API integration placeholders.

## API Integration Blueprint

API wrapper berada di `js/api/http.js`. Domain API dipisah per file:

- `auth.api.js`
- `generation.api.js`
- `projects.api.js`

Prinsip integrasi:

- Jangan simpan API key AI provider di frontend.
- Gunakan backend proxy untuk provider berbayar.
- Upload gambar gunakan `FormData`.
- Payload biasa gunakan JSON.
- Token user dibaca melalui helper storage dan dikirim sebagai Bearer token.

## Local Development

Jalankan static server dari root project:

```bash
python -m http.server 3000
```

Buka:

```text
http://localhost:3000
```

Static server dibutuhkan supaya partial HTML yang dimuat via `fetch` bekerja.

## Validation

Untuk cek syntax JS:

```bash
node --check assets/js/app.js
node --check assets/js/generator.js
node --check assets/js/dashboard.js
node --check assets/js/merge-photos.js
node --check assets/js/auth.js
node --check assets/js/effects.js
node --check assets/js/mobile.js
node --check js/main.js
```

Untuk cek link fitur yang sudah dihapus:

```bash
rg "pages/templates|marketplace|Template Marketplace"
```

## Deploy VPS Hostinger

1. Upload seluruh isi folder ke document root, misalnya `/var/www/devsora`.
2. Pastikan domain mengarah ke document root.
3. Aktifkan HTTPS.
4. Jika memakai Apache, pastikan `.htaccess` aktif.
5. Test halaman:
   - `/`
   - `/pages/features/gabung-foto.html`
   - `/pages/features/foto-model.html`
   - `/pages/legal/privacy.html`
   - `/pages/legal/terms.html`
   - `/sitemap.xml`
   - `/robots.txt`
   - `/404.html`

## Production Notes

- Tailwind Play CDN masih digunakan agar tanpa build tools. Untuk produksi skala besar, pertimbangkan compiled Tailwind CSS.
- `.htaccess` sudah menambahkan security headers, compression, cache, dan custom 404.
- Gambar brand ada di `assets/images/brand/`.
- Favicon ada di `assets/icons/`.
- Dashboard dan auth tidak dimasukkan sitemap.

## Maintenance Rules

- Jangan membuat halaman baru tanpa update `sitemap.xml` jika halaman itu publik.
- Jangan menaruh halaman private di sitemap.
- Jika menghapus fitur, hapus juga:
  - halaman HTML
  - link nav/footer/mobile
  - route map
  - API file terkait
  - CSS/JS khusus fitur
  - sitemap entry
  - dokumentasi
- Pertahankan struktur static-friendly dan tanpa build tools kecuali keputusan arsitektur berubah.


