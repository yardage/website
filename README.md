# Yardage — B2B marketing website

Static site ([Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com)) presenting **Yardage** yardage books to golf clubs and professionals: method, offer, and quote requests.

**Live site:** [https://yardage.io](https://yardage.io)
**Contact:** [contact@yardage.io](mailto:contact@yardage.io) · +33 5 37 07 97 18

> Working on this repo (branches, review, visuals rule)? Read [`AGENTS.md`](AGENTS.md) first.
> **A push to `main` publishes to production.**

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 7 (static output, built-in i18n routing, `trailingSlash: 'always'`) |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite`, theme tokens in `src/styles/global.css` |
| Language | TypeScript (`astro/tsconfigs/strict`), checked with `astro check` |
| Fonts | Self-hosted with Fontsource: [Instrument Serif](https://fontsource.org/fonts/instrument-serif) (headings) + [Geist](https://fontsource.org/fonts/geist) (text). No Google Fonts call. |
| Icons | [`@lucide/astro`](https://lucide.dev); brand icons (social) in `src/lib/social.ts` |
| Themes | Light and dark, following the device setting, with a toggle (no flash on load) |
| Forms | [Formspree](https://formspree.io) (`PUBLIC_FORMSPREE_ENDPOINT`) |
| Hosting | GitHub Pages, from the `dist` branch |

---

## Prerequisites

- **Node.js 22.12+** or **24 LTS**
- npm 9+

CI builds with Node 22.

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). Every page URL ends with `/` (`/faq/`, `/en/offer/`).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local dev server |
| `npm run check` | Type check (`astro check`) — also guarantees every FR string exists in EN |
| `npm run build` | Production build → `dist/` |
| `npm run check:links` | After a build: no broken internal link, trailing slash on links, canonical, hreflang and sitemap |
| `npm run preview` | Serve the production build |

---

## Environment (contact form)

1. Copy `.env.example` → `.env`.
2. Set `PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx`.

Without a real endpoint the form shows a configuration message; email and phone remain available. In production, the deploy workflow injects the endpoint at build time. `.env` is gitignored.

---

## Site map (FR / EN)

French is the default locale (root paths); English lives under `/en/`. Routes are defined once in [`src/i18n/index.ts`](src/i18n/index.ts) (`routes`).

| Page | French | English |
|------|--------|---------|
| Home | `/` | `/en/` |
| Method | `/methode/` | `/en/method/` |
| Offer | `/offre/` | `/en/offer/` |
| FAQ | `/faq/` | `/en/faq/` |
| About | `/a-propos/` | `/en/about/` |
| Contact | `/contact/` | `/en/contact/` |
| Legal notice | `/mentions-legales/` | `/en/legal/` |
| Privacy | `/confidentialite/` | `/en/privacy/` |
| Not found | `/404.html` (bilingual) | |

Legacy URLs redirect (see `redirects` in [`astro.config.mjs`](astro.config.mjs)) and are excluded from the sitemap.

---

## Architecture

```
src/
  i18n/           index.ts (locales, routes, helpers, constants), fr.ts, en.ts (UI copy)
  layouts/        Base.astro — SEO, canonical, hreflang, OG, JSON-LD, theme script, skip link
  components/     Header, Footer, Brand, ThemeToggle, LangSwitch + page sections
  assets/carnets/ Book pages and photos, served through astro:assets as WebP (+ CREDITS.txt)
  lib/            schema.ts (JSON-LD), social.ts, bookSamples.ts (sample pages and captions)
  pages/          FR at root; EN under pages/en/; 404.astro
  styles/         global.css — theme tokens, @theme inline, utilities
scripts/
  check-links.mjs Link and trailing-slash checker for dist/
public/
  images/         Logos only
  og.png          Social sharing image (1200 × 630)
  favicon*.png    Favicons and apple-touch-icon
  docs/           Cover sample PDF
  CNAME           yardage.io
  .nojekyll       Required so GitHub Pages serves assets/
```

### Themes

Tokens (`--background`, `--foreground`, `--card`, `--muted`, `--muted-foreground`, `--primary`, `--accent`, `--border`, `--ring`) are defined for light (`:root`) and dark (`html.dark`, plus a `prefers-color-scheme` fallback without JavaScript), then exposed to Tailwind through `@theme inline` (`bg-background`, `text-muted-foreground`, `bg-primary`…).

- Light: sand cream background, near-black green text, primary = Yardage green `#14382c`, soft sage accent.
- Dark: `#0a100e` background, `#0f1714` cards, primary = sage `#9db8a8`.

An inline script in `<head>` applies the stored choice (`localStorage.theme`) or the device setting before first paint. All text and button pairs meet WCAG AA in both themes.

### Content model

- Shared chrome, CTAs, form and pricing labels: `t(locale)` from `src/i18n`. `en.ts` is typed against `fr.ts`, so `npm run check` fails if a key is missing in English.
- Page body copy: inline in each `.astro` page (FR and EN files are paired).
- The current locale comes from Astro i18n routing (`Astro.currentLocale`).

### Contact form

[`ContactForm.astro`](src/components/ContactForm.astro) posts to Formspree (AJAX + JSON `Accept` header). Honeypot `_gotcha`. Intent prefills: `?intent=devis` / `?intent=quote`, `?intent=exemplaire` / `sample`.

---

## CI and deployment

- **Pull requests** — [`.github/workflows/ci.yml`](.github/workflows/ci.yml): `npm ci`, `npm run check`, `npm run build`, `npm run check:links`. No deployment.
- **Production** — [`.github/workflows/deploy-dist.yml`](.github/workflows/deploy-dist.yml): on push to `main` (or manual run), build with the Formspree endpoint and publish `dist/` to the **`dist`** branch, served by GitHub Pages on `yardage.io` (`public/CNAME`).

GitHub Pages settings, DNS and Formspree are managed by the owner; do not change them from this repo.
