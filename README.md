# Yardage — site vitrine B2B

Site statique (Astro + Tailwind) pour présenter Yardage aux **golfs et professionnels** : méthode, offre, prise de contact.

## Prérequis

- Node.js **22.12+** ou **24 LTS** (Node 21 non supporté par Vite 8)
- npm 9+

## Démarrage

```bash
npm install
npm run dev
```

Ouvre [http://localhost:4321](http://localhost:4321).

```bash
npm run build    # sortie dans dist/
npm run preview  # prévisualiser le build
```

## Formulaire de contact (Formspree)

1. Créez un formulaire sur [formspree.io](https://formspree.io) pointant vers `contact@yardage.co`
2. Copiez `.env.example` → `.env`
3. Renseignez `PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx`

Sans cette variable, le formulaire affiche un message demandant la configuration (l’email et le téléphone restent disponibles).

## Assets

- Assets : `public/images/` (crédits Unsplash dans `public/images/CREDITS.txt`)
- Favicon : `public/favicon.png`
- Vidéo source `YARDAGE.mp4` (~187 Mo) : non versionnée. Pour l’ajouter :

```bash
# depuis le dossier Yardage parent, compresser puis copier
ffmpeg -i ../YARDAGE.mp4 -vcodec libx264 -crf 28 -an public/video/yardage.mp4
```

Puis branchez la vidéo en fond de hero si souhaité.

## Déploiement (Vercel / Netlify)

- Framework preset : **Astro**
- Build : `npm run build`
- Publish : `dist`
- Variable d’env : `PUBLIC_FORMSPREE_ENDPOINT`
- Domaine : brancher `yardage.co` (DNS plus tard)

## Structure

```
src/
  components/   Header, Footer, Hero, Pillars, ProcessSteps, Pricing, ContactForm
  layouts/      BaseLayout (SEO, fonts, reveal)
  pages/        /, /methode, /offre, /contact, légales
  styles/       variables CSS + Tailwind 4
public/         logos, photos, favicon
```

## Hors scope (phase 1)

Boutique, espace client, lien vers l’outil carto, version EN.
