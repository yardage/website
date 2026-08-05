# Yardage — B2B marketing website

Static site ([Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com)) presenting **Yardage** to golf clubs and professionals: method, offer, and contact.

**Live site:** [https://yardage.io](https://yardage.io)  
**Contact:** [contact@yardage.co](mailto:contact@yardage.co) · +33 5 37 07 97 18

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` |
| Language | TypeScript (`astro/tsconfigs/strict`) |
| Fonts | [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) (display) + [Manrope](https://fonts.google.com/specimen/Manrope) (UI) |
| Theme | Dark brand palette — green `#14382c` (`--color-brand` / `--color-paper` in `src/styles/global.css`) |
| Forms | [Formspree](https://formspree.io) (`PUBLIC_FORMSPREE_ENDPOINT`) |
| Hosting | GitHub Pages from the `dist` branch |

Config: [`astro.config.mjs`](astro.config.mjs) — `site: https://yardage.io`, `base: '/'`, built assets under `assets/`.

---

## Prerequisites

- **Node.js 22.12+** or **24 LTS** (Node 21 is not supported by Vite 8)
- npm 9+

CI builds with Node 22 (see [`.github/workflows/deploy-dist.yml`](.github/workflows/deploy-dist.yml)).

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |

---

## Environment (contact form)

1. Create a form on [formspree.io](https://formspree.io) that delivers to `contact@yardage.co`.
2. Copy `.env.example` → `.env`.
3. Set:

```bash
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Without a real endpoint (placeholder still contains `YOUR_FORM_ID`), the form shows a configuration message; email and phone remain available on the contact page.

**Production:** the deploy workflow injects `PUBLIC_FORMSPREE_ENDPOINT` at build time. Local `.env` is gitignored and is only needed for local form testing.

---

## Site map (FR / EN)

French is the default locale (root paths). English lives under `/en/`.

| Page | French | English |
|------|--------|---------|
| Home | `/` | `/en` |
| Method | `/methode` | `/en/method` |
| Offer | `/offre` | `/en/offer` |
| About | `/a-propos` | `/en/about` |
| Contact | `/contact` | `/en/contact` |
| Legal notice | `/mentions-legales` | `/en/legal` |
| Privacy | `/confidentialite` | `/en/privacy` |

Language switcher in the header and footer. `hreflang` + canonical URLs are emitted from [`BaseLayout.astro`](src/layouts/BaseLayout.astro).

Route helpers and shared UI strings: [`src/lib/i18n.ts`](src/lib/i18n.ts). Base-path prefixing: [`src/lib/paths.ts`](src/lib/paths.ts) (`withBase`).

---

## Architecture

```
src/
  components/     Header, Footer, Hero, Pillars, ProcessSteps,
                  ProductGallery, Pricing, ContactForm, SectionPhoto
  layouts/        BaseLayout — SEO, fonts, OG, hreflang, scroll reveal
  lib/            paths.ts, i18n.ts (locales, routes, UI copy)
  pages/          FR at root; EN under pages/en/
  styles/         global.css — CSS variables + Tailwind 4 + motion utilities
public/
  images/         Photos, logos, product samples (+ CREDITS.txt)
  docs/           Sample PDF (e.g. cover example)
  favicon.svg / favicon.png / apple-touch-icon.png
  CNAME           yardage.io
  .nojekyll       Required so GitHub Pages serves `_astro/` / `assets/`
```

### Layout behaviour (`BaseLayout`)

- Meta description, Open Graph, Twitter card, canonical URL
- Alternate `hreflang` links (`fr`, `en`, `x-default` → FR)
- Scroll progress bar, IntersectionObserver reveal (`.reveal`), smooth same-page hash scrolling with header offset
- Respects `prefers-reduced-motion`

### Content model

- **Shared chrome / CTAs / form / pricing labels:** `t(locale)` in `i18n.ts`
- **Page body copy:** mostly inline in each `.astro` page (FR and EN files are paired)

### Contact form

[`ContactForm.astro`](src/components/ContactForm.astro) posts to Formspree (AJAX + JSON `Accept` header).

- Fields: name, email, club, volume, message
- Honeypot: `_gotcha`
- Intent prefills via query or hash:
  - Quote: `?intent=devis` or `?intent=quote`
  - Sample: `?intent=exemplaire`, `sample`, or `exemple` (also `#exemplaire`)

Hero CTAs link to these intents.

---

## Assets

- **Images:** `public/images/` — Unsplash credits in [`public/images/CREDITS.txt`](public/images/CREDITS.txt)
- **Product samples:** hole maps, IRL book photo, optional cover assets under `images/` / `docs/`
- **Favicons:** SVG preferred, PNG + Apple touch icon as fallbacks
- **Hero:** background stills (e.g. `bg-aerial.jpg`); no video in the current hero

### Optional hero video (not required)

Large source files are not versioned. To prepare a compressed clip:

```bash
# from the parent Yardage folder, if you have YARDAGE.mp4
ffmpeg -i ../YARDAGE.mp4 -vcodec libx264 -crf 28 -an public/video/yardage.mp4
```

Wire it into the hero only if you intentionally reintroduce video.

---

## Deployment (GitHub Pages)

Workflow: [`.github/workflows/deploy-dist.yml`](.github/workflows/deploy-dist.yml)

1. Push to `main` (or run **workflow_dispatch**)
2. `npm ci` → `npm run build` (with Formspree env)
3. Ensure `dist/.nojekyll`
4. Deploy `dist/` → branch **`dist`** (single-commit, cleaned)

**GitHub → Settings → Pages**

- Source: **Deploy from a branch**
- Branch: **`dist`**, folder **`/`**

**Domain:** `yardage.io` (DNS A records to GitHub Pages + custom domain; `public/CNAME` is included in the build).

---

## Out of scope (phase 1)

- Online shop
- Client portal / account area
- Link to the cartography tooling product

---

## Project health (checkup)

Verified on implementation of this README:

- `npm run build` succeeds — **14 static pages** (7 FR + 7 EN)
- Route table matches `src/lib/i18n.ts` `routes`
- Deploy workflow on `main` → `dist` branch is configured
- Formspree endpoint is provided in CI; local setup uses `.env`
- `public/video/` is unused by the current hero (images only)
- No active `scripts/` tooling in this repo
