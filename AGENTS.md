# AGENTS.md — site marketing Yardage

Règles pour tout agent (ou humain) qui travaille sur ce dépôt. Voir le [README](README.md) pour la stack et les commandes.

## Pilotage

- Ce dépôt est piloté par le fil **MANAGER « Manager Dev — Yardage »**. Les consignes viennent de MANAGER ; les rapports et les questions lui sont adressés (il les relaie au propriétaire).
- Le feu vert pour merger vient de MANAGER. **Un agent ne merge jamais lui-même** : il prépare la PR, puis l'annonce dans son rapport (numéro, ce qui change, vérifications faites, chemins des captures).
- Le dépôt `yardage/app` (portail, Socials, Master) appartient à d'autres fils : ne pas y toucher. L'application est sur `https://app.yardage.io` (connexion sur `/login/`).

## `main` publie en production

- Un push sur `main` déclenche `.github/workflows/deploy-dist.yml`, qui publie sur https://yardage.io. **Ne jamais pousser sur `main`.**
- Toute modification passe par une branche `site/<sujet>` créée depuis un `origin/main` à jour, puis une PR.
- Refonte en cours : branche d'intégration `site/refonte`. Chaque étape part d'une branche `site/refonte-<etape>` créée depuis `site/refonte`, avec une PR **vers `site/refonte`**. La PR finale `site/refonte` → `main` ne part qu'après l'accord du propriétaire, transmis par MANAGER.
- Ne pas modifier les réglages GitHub Pages, le DNS (GoDaddy) ni Formspree sans accord transmis par MANAGER. Ne commiter aucun secret.
- Commits en Conventional Commits, en anglais, à l'impératif, en minuscules : `feat(site): …`, `fix(site): …`.

## Avant d'ouvrir une PR

1. `npm run check`, `npm run build` puis `npm run check:links` passent (la CI les relance sur chaque PR).
2. Le rendu est vérifié en FR **et** en EN, en thème clair **et** sombre, sur ordinateur (1440 px) et sur mobile (390 px).
3. Les captures (accueil et pages touchées) sont faites avec Playwright via `npx`, sans l'ajouter aux dépendances, et rangées **hors du dépôt**, dans `C:\Users\victo\AppData\Local\Temp\yardage-site-captures\etape-<n>\`.

## FR et EN

- Chaque texte existe dans les deux langues. Les textes communs vont dans `src/i18n/fr.ts` et `src/i18n/en.ts` (`en.ts` est typé sur `fr.ts` : `npm run check` échoue s'il manque une clé).
- Chaque page FR a sa page EN, déclarée dans `routes` (`src/i18n/index.ts`). Toutes les adresses se terminent par `/`.
- Ne rien inventer de chiffré (prix, précision, délais) qui ne figure pas déjà sur le site.

## Règle des visuels (carnets)

Le site vend les carnets (service et impression). Un club ne doit jamais pouvoir imprimer ses carnets à partir du site :

- **jamais le contenu complet d'un golf** : 2 à 3 trous par golf au plus ;
- résolution web uniquement : **1600 px de large au plus, en WebP** (via `astro:assets`) ;
- ne jamais lire une propriété d’une image importée (`image.width`, `image.src`…) dans un composant : Astro publierait alors l’original dans `dist/`. Les pages d’exemple et leurs légendes sont dans `src/lib/bookSamples.ts` ;
- **aucun PDF ni téléchargement de pages de trous**. Seul le PDF d'exemple de couverture existant (`public/docs/exemple-couverture.pdf`) reste.

## Style

- Tokens CSS (`--background`, `--foreground`, `--primary`, `--accent`, `--muted`, `--border`…) dans `src/styles/global.css`, exposés via `@theme inline`. Pas de couleurs en dur dans les pages, sauf les surfaces photo qui restent sombres dans les deux thèmes.
- Contraste AA obligatoire dans les deux thèmes. Polices installées sur le site (Instrument Serif pour les titres, Geist pour le texte), aucun appel à Google Fonts. Icônes `@lucide/astro`.
- Les textes restent visibles sans JavaScript ; les animations respectent `prefers-reduced-motion`.
