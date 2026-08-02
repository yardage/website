import { withBase } from './paths';

export type Locale = 'fr' | 'en';

export type RouteKey =
  | 'home'
  | 'method'
  | 'offer'
  | 'about'
  | 'contact'
  | 'legal'
  | 'privacy';

export const locales: Locale[] = ['fr', 'en'];

/** Canonical path per locale (no trailing slash except home). */
export const routes: Record<RouteKey, Record<Locale, string>> = {
  home: { fr: '/', en: '/en' },
  method: { fr: '/methode', en: '/en/method' },
  offer: { fr: '/offre', en: '/en/offer' },
  about: { fr: '/a-propos', en: '/en/about' },
  contact: { fr: '/contact', en: '/en/contact' },
  legal: { fr: '/mentions-legales', en: '/en/legal' },
  privacy: { fr: '/confidentialite', en: '/en/privacy' },
};

export function localePath(locale: Locale, key: RouteKey, hash = ''): string {
  return withBase(`${routes[key][locale]}${hash}`);
}

/** Strip Astro base prefix and trailing slash for matching. */
export function normalizePathname(pathname: string): string {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
  let path = pathname;
  if (base && base !== '/' && path.startsWith(base)) {
    path = path.slice(base.length) || '/';
  }
  path = path.replace(/\/$/, '') || '/';
  return path;
}

export function detectLocale(pathname: string): Locale {
  const path = normalizePathname(pathname);
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'fr';
}

export function routeKeyFromPathname(pathname: string): RouteKey | null {
  const path = normalizePathname(pathname);
  for (const [key, map] of Object.entries(routes) as [RouteKey, Record<Locale, string>][]) {
    const fr = map.fr.replace(/\/$/, '') || '/';
    const en = map.en.replace(/\/$/, '') || '/';
    if (path === fr || path === en) return key;
  }
  return null;
}

/** Path to the same page in the other language (with base). */
export function alternatePath(pathname: string): string {
  const locale = detectLocale(pathname);
  const other: Locale = locale === 'fr' ? 'en' : 'fr';
  const key = routeKeyFromPathname(pathname) ?? 'home';
  return localePath(other, key);
}

export function alternateLocale(pathname: string): Locale {
  return detectLocale(pathname) === 'fr' ? 'en' : 'fr';
}

export function ogLocale(locale: Locale): string {
  return locale === 'en' ? 'en_US' : 'fr_FR';
}

export function hreflangLinks(pathname: string): { hreflang: string; href: string }[] {
  const key = routeKeyFromPathname(pathname) ?? 'home';
  return [
    { hreflang: 'fr', href: localePath('fr', key) },
    { hreflang: 'en', href: localePath('en', key) },
    { hreflang: 'x-default', href: localePath('fr', key) },
  ];
}

const ui = {
  fr: {
    nav: {
      method: 'Méthode',
      offer: 'Offre',
      about: 'À propos',
      contact: 'Contact',
    },
    ctaQuote: 'Demander un devis',
    ctaSample: 'Exemplaire numérique gratuit',
    ctaLearnMore: 'En savoir plus',
    ctaTalk: 'Parler de votre parcours',
    ctaOffer: 'Voir l’offre',
    homeAria: 'Yardage — Accueil',
    navAria: 'Navigation principale',
    navMobileAria: 'Navigation mobile',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    langSwitchAria: 'Choisir la langue',
    footerBlurb:
      'Carnets de parcours pour golfs et professionnels. Une lecture claire du terrain, du tee au green.',
    footerNav: 'Navigation',
    footerContact: 'Contact',
    footerRights: 'Tous droits réservés.',
    footerLegal: 'Mentions légales',
    footerPrivacy: 'Confidentialité',
    heroSubtitle: 'La tradition golfique rencontre la précision cartographique.',
    pillarsEyebrow: 'Ce qui nous guide',
    pillarsTitle: 'Cinq piliers, une exigence.',
    pillarsIntro:
      'Yardage conçoit des carnets de parcours pour les golfs et les pros qui veulent offrir à leurs joueurs une référence fiable, élégante et durable.',
    pillars: [
      {
        name: 'Passion',
        text: 'Chaque carnet naît d’une lecture attentive du parcours — le terrain d’abord, le graphisme ensuite.',
      },
      {
        name: 'Innovation',
        text: 'Cartographie vectorielle et données terrain pour une précision utile au joueur, pas décorative.',
      },
      {
        name: 'Ergonomie',
        text: 'Une page claire, une hiérarchie lisible : distances, obstacles et lignes de jeu en un coup d’œil.',
      },
      {
        name: 'Stratégie',
        text: 'Un outil de décision pour le golfeur — du club à la ligne, du fairway au green.',
      },
      {
        name: 'Élégance',
        text: 'Impression premium, papier choisi, finitions dignes d’un club qui soigne son image.',
      },
    ],
    processEyebrow: 'Méthode',
    processTitle: 'Du terrain au carnet, en quatre étapes.',
    processIntro:
      'Un processus maîtrisé pour livrer des carnets précis, cohérents d’un trou à l’autre, et adaptés à l’identité de votre golf — sans charge technique de votre côté.',
    processSeeMore: 'Voir la méthode →',
    processSteps: [
      {
        title: 'Analyse',
        text: 'Lecture du parcours, des obstacles et des lignes de jeu — avec l’éclairage du club pour coller au terrain.',
      },
      {
        title: 'Data',
        text: 'Organisation des distances et repères dans une base fiable, prête à être mise à jour si le parcours évolue.',
      },
      {
        title: 'Production',
        text: 'Mise en page claire et cohérente d’un trou à l’autre, avec l’identité visuelle de votre club.',
      },
      {
        title: 'Impression',
        text: 'Tirage sur papier écologique, finitions premium, livraison jusqu’à votre pro shop ou votre club.',
      },
    ],
    pricingEyebrow: 'Offre',
    pricingTitle: 'Une grille claire pour les golfs et les pros.',
    pricingIntroBefore: 'Prix public conseillé\u00a0:',
    pricingIntroPrice: '16–19 € TTC',
    pricingIntroAfter: '. Tarifs club ci-dessous, hors taxes.',
    pricingVolumes: [
      { qty: 'À l’unité', price: '11,90 €', note: 'HT / exemplaire' },
      { qty: '500 ex.', price: '−5 %', note: 'Remise volume' },
      { qty: '1 000 ex.', price: '−10 %', note: 'Remise volume' },
    ],
    pricingExtras: [
      'Personnalisation logo et sponsors',
      'Impression premium sur papier écologique',
      'Livraison sous 2 semaines après validation du devis',
      'Exemplaire numérique gratuit sur demande',
    ],
    pricingDetail: 'Détail de l’offre',
    pricingSampleCta: 'Demander un exemplaire numérique gratuit',
    form: {
      subject: 'Demande de devis — Yardage',
      subjectQuote: 'Demande de devis — Yardage',
      subjectSample: 'Demande d’exemplaire numérique gratuit — Yardage',
      name: 'Nom',
      email: 'Email',
      club: 'Club / structure',
      volume: 'Volume estimé',
      message: 'Message',
      placeholder: 'Parcours, délais, personnalisation logo / sponsors…',
      submit: 'Envoyer la demande',
      optVolumePlaceholder: 'À préciser',
      optLt500: 'Moins de 500',
      opt500: 'Environ 500',
      opt1000: 'Environ 1 000',
      optGt1000: 'Plus de 1 000',
      prefillQuote:
        'Bonjour,\n\nJe souhaite obtenir un devis pour des carnets de parcours Yardage.\n\nCordialement,',
      prefillSample:
        'Bonjour,\n\nJe souhaite recevoir un exemplaire numérique gratuit pour découvrir le rendu Yardage sur mon parcours.\n\nCordialement,',
      unconfigured:
        'Formulaire non configuré : ajoutez votre endpoint Formspree (PUBLIC_FORMSPREE_ENDPOINT). En attendant, écrivez-nous à contact@yardage.co.',
      success: 'Merci — votre demande a bien été envoyée. Nous vous recontactons rapidement.',
      error:
        'Envoi impossible pour le moment. Contactez-nous à contact@yardage.co ou au +33 5 37 07 97 18.',
    },
    gallery: [
      { alt: 'Exemple — page 1,vue d’ensemble' },
      { alt: 'Exemple — page 2, green et fairway' },
    ],
    lightboxLabel: 'Visionneuse d’image',
    lightboxClose: 'Fermer',
    lightboxPrev: 'Image précédente',
    lightboxNext: 'Image suivante',
    lightboxEnlarge: 'Agrandir',
  },
  en: {
    nav: {
      method: 'Method',
      offer: 'Offer',
      about: 'About',
      contact: 'Contact',
    },
    ctaQuote: 'Request a quote',
    ctaSample: 'Free digital sample',
    ctaLearnMore: 'Learn more',
    ctaTalk: 'Talk about your course',
    ctaOffer: 'View the offer',
    homeAria: 'Yardage — Home',
    navAria: 'Main navigation',
    navMobileAria: 'Mobile navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langSwitchAria: 'Choose language',
    footerBlurb:
      'Yardage books for golf clubs and professionals. A clear reading of the course, from tee to green.',
    footerNav: 'Navigation',
    footerContact: 'Contact',
    footerRights: 'All rights reserved.',
    footerLegal: 'Legal notice',
    footerPrivacy: 'Privacy',
    heroSubtitle: 'Golf tradition meets cartographic precision.',
    pillarsEyebrow: 'What guides us',
    pillarsTitle: 'Five pillars, one standard.',
    pillarsIntro:
      'Yardage designs yardage books for clubs and pros who want to give their players a reliable, elegant, lasting reference.',
    pillars: [
      {
        name: 'Passion',
        text: 'Every book starts with a careful reading of the course — the land first, the design second.',
      },
      {
        name: 'Innovation',
        text: 'Vector mapping and course data for precision that helps the player — not decoration.',
      },
      {
        name: 'Ergonomics',
        text: 'A clear page, a readable hierarchy: distances, hazards and lines of play at a glance.',
      },
      {
        name: 'Strategy',
        text: 'A decision tool for the golfer — from club selection to line, from fairway to green.',
      },
      {
        name: 'Elegance',
        text: 'Premium print, chosen paper, finishes worthy of a club that cares about its image.',
      },
    ],
    processEyebrow: 'Method',
    processTitle: 'From the course to the book, in four steps.',
    processIntro:
      'A controlled process to deliver precise books, consistent from hole to hole, and tailored to your club’s identity — without technical burden on your side.',
    processSeeMore: 'See the method →',
    processSteps: [
      {
        title: 'Analysis',
        text: 'Reading the course, hazards and lines of play — with the club’s insight to match the land.',
      },
      {
        title: 'Data',
        text: 'Organising distances and landmarks into a reliable base, ready to update when the course evolves.',
      },
      {
        title: 'Production',
        text: 'Clear, consistent layouts from hole to hole, with your club’s visual identity.',
      },
      {
        title: 'Print',
        text: 'Eco-friendly paper, premium finishes, delivery to your pro shop or club.',
      },
    ],
    pricingEyebrow: 'Offer',
    pricingTitle: 'A clear price grid for clubs and pros.',
    pricingIntroBefore: 'Suggested retail price\u00a0:',
    pricingIntroPrice: '€16–19 incl. tax',
    pricingIntroAfter: '. Club rates below, excluding tax.',
    pricingVolumes: [
      { qty: 'Per copy', price: '€11.90', note: 'excl. tax / copy' },
      { qty: '500 copies', price: '−5%', note: 'Volume discount' },
      { qty: '1,000 copies', price: '−10%', note: 'Volume discount' },
    ],
    pricingExtras: [
      'Logo and sponsor customisation',
      'Premium print on eco-friendly paper',
      'Delivery within 2 weeks after quote approval',
      'Free digital sample on request',
    ],
    pricingDetail: 'Offer details',
    pricingSampleCta: 'Request a free digital sample',
    form: {
      subject: 'Quote request — Yardage',
      subjectQuote: 'Quote request — Yardage',
      subjectSample: 'Free digital sample request — Yardage',
      name: 'Name',
      email: 'Email',
      club: 'Club / organisation',
      volume: 'Estimated volume',
      message: 'Message',
      placeholder: 'Course, timeline, logo / sponsor customisation…',
      submit: 'Send request',
      optVolumePlaceholder: 'To be confirmed',
      optLt500: 'Fewer than 500',
      opt500: 'Around 500',
      opt1000: 'Around 1,000',
      optGt1000: 'More than 1,000',
      prefillQuote:
        'Hello,\n\nI would like a quote for Yardage yardage books.\n\nBest regards,',
      prefillSample:
        'Hello,\n\nI would like to receive a free digital sample to see the Yardage look for my course.\n\nBest regards,',
      unconfigured:
        'Form not configured: add your Formspree endpoint (PUBLIC_FORMSPREE_ENDPOINT). Meanwhile, email us at contact@yardage.co.',
      success: 'Thank you — your request has been sent. We will get back to you shortly.',
      error:
        'Unable to send right now. Contact us at contact@yardage.co or +33 5 37 07 97 18.',
    },
    gallery: [
      { alt: 'Example — overview, hole 7' },
      { alt: 'Example — green and fairway detail, hole 7' },
    ],
    lightboxLabel: 'Image viewer',
    lightboxClose: 'Close',
    lightboxPrev: 'Previous image',
    lightboxNext: 'Next image',
    lightboxEnlarge: 'Enlarge',
  },
} as const;

export type UiCopy = (typeof ui)['fr'];

export function t(locale: Locale): UiCopy {
  return ui[locale] as UiCopy;
}
