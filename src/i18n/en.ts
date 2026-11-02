import type { Messages } from './fr';

/** English UI copy. Typed against the French copy so no key can be missing. */
export const en: Messages = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  skip: 'Skip to content',
  defaultDescription:
    'Yardage — yardage books for golf clubs and pros. Golf tradition and cartographic precision.',
  nav: {
    faq: 'FAQ',
    method: 'Method',
    offer: 'Offer',
    about: 'About',
    contact: 'Contact',
    login: 'Log in',
  },
  theme: {
    toDark: 'Switch to dark theme',
    toLight: 'Switch to light theme',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist, or no longer does. Head back home to find our yardage books.',
    home: 'Back to home',
    other: 'Cette page n’existe pas.',
    otherHome: 'Retour à l’accueil en français',
  },
  footerBooks: 'Yardage books',
  footerCompany: 'Yardage',
  footerSocialAria: 'Yardage on social media',
  ctaQuote: 'Request a quote',
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
  pricingIntroAfter: '. Club rate on request. Volume discounts below.',
  pricingVolumes: [
    { qty: 'Per copy', price: 'On request', note: 'Club rate excl. tax' },
    { qty: '500 copies', price: '−10%', note: 'Volume discount' },
    { qty: '1,000 copies', price: '−20%', note: 'Volume discount' },
  ],
  pricingExtras: [
    'Logo and sponsor customisation',
    'Premium print on eco-friendly paper',
    'Delivery within 1 month after quote approval',
    'Minimum 150 copies per order',
    'Digital sample on request',
  ],
  pricingDetail: 'Offer details',
  form: {
    subject: 'Quote request — Yardage',
    subjectQuote: 'Quote request — Yardage',
    name: 'Name',
    email: 'Email',
    club: 'Club / organisation',
    volume: 'Estimated volume',
    message: 'Message',
    placeholder: 'Course, timeline, logo / sponsor customisation…',
    submit: 'Send request',
    optVolumePlaceholder: 'To be confirmed',
    opt150to499: '150 to 499',
    opt500: 'Around 500',
    opt1000: 'Around 1,000',
    optGt1000: 'More than 1,000',
    prefillQuote:
      'Hello,\n\nI would like a quote for Yardage yardage books.\n\nBest regards,',
    unconfigured:
      'Form not configured: add your Formspree endpoint (PUBLIC_FORMSPREE_ENDPOINT). Meanwhile, email us at contact@yardage.io.',
    success: 'Thank you — your request has been sent. We will get back to you shortly.',
    error:
      'Unable to send right now. Contact us at contact@yardage.io or +33 5 37 07 97 18.',
  },
  gallery: [
    {
      alt: 'Hole page from a Yardage golf yardage book: distances, hazards and lines of play',
    },
    {
      alt: 'Green and fairway detail from a Yardage yardage book, with useful distances',
    },
  ],
  lightboxLabel: 'Image viewer',
  lightboxClose: 'Close',
  lightboxPrev: 'Previous image',
  lightboxNext: 'Next image',
  lightboxEnlarge: 'Enlarge',
  home: {
    title: 'Yardage — Golf yardage books for clubs and pros',
    description:
      'Yardage designs and prints golf yardage books for clubs and pros: distances, hazards, lines of play and the green, in your club’s colours. Tailored quotes.',
    hero: {
      eyebrow: 'Golf yardage books',
      title: 'Golf tradition meets cartographic precision.',
      text: 'Yardage designs and prints your course’s yardage book: distances, hazards, lines of play and the green, in your club’s colours. No technical burden on your side.',
      secondary: 'See the books',
      facts: [
        'In your club’s colours',
        'Eco-friendly paper, premium finishes',
        'Delivered within 1 month after quote approval',
      ],
      spreadAlt: [
        'Hole page from a Yardage book: distances, hazards and lines of play from tee to green',
        'Green page from a Yardage book: green contours and approach distances',
      ],
    },
    problem: {
      eyebrow: 'The problem',
      title: 'A generic yardage book doesn’t know your course.',
      items: [
        {
          title: 'Imprecise',
          text: 'Approximate distances, misplaced hazards: the book doesn’t reflect the reality of the course.',
        },
        {
          title: 'Quickly outdated',
          text: 'A new bunker, a rebuilt green, and the book no longer matches the course.',
        },
        {
          title: 'Nothing to do with the club',
          text: 'No logo, no partners, no identity: nothing makes it your club’s official yardage book.',
        },
      ],
    },
    tour: {
      id: 'visite',
      eyebrow: 'Inside a hole',
      title: 'From the course to the page, then to the pro shop.',
      text: 'Every hole follows the same path: we survey it, read its green, lay it out, then print it.',
      items: [
        {
          title: 'Course survey',
          text: 'Reading the course from satellite data, with the club’s insight: the hazards, lines of play and distances that really matter.',
          alt: 'Aerial view of a golf course',
        },
        {
          title: 'Slopes and green',
          text: 'A green diagram to prepare the approach and the putt, readable at a glance on the course.',
          alt: 'Yardage book open on the green page, held up facing the green',
        },
        {
          title: 'Layout',
          text: 'Clear pages, consistent from hole to hole, with your club’s cover and visual identity.',
          alt: 'Cover of a Yardage book bearing the club’s name, held on the fairway',
        },
        {
          title: 'Print',
          text: 'Eco-friendly paper, premium finishes, delivery to your pro shop or club.',
          alt: 'Yardage books displayed in a pro shop stand',
        },
      ],
    },
    editions: {
      id: 'editions',
      eyebrow: 'The editions',
      title: 'Three editions, one standard of care.',
      text: 'Every book is produced for one specific course. Choose the edition that suits your players; we discuss it together when preparing the quote.',
      items: [
        {
          name: 'STANDARD',
          text: 'The reference book for the course.',
          points: [
            'Useful distances, hazards and lines of play',
            'Green diagram',
            'Club cover and identity',
          ],
        },
        {
          name: 'SLOPE',
          text: 'For players who want to read the slopes of the green.',
          points: [
            'Everything in the STANDARD edition',
            'Green slope reading',
            'To prepare the approach and the putt',
          ],
        },
        {
          name: 'TOUR',
          text: 'For competition and the most demanding players.',
          points: [
            'Designed for club competitions',
            'Content defined with you in the quote',
            'Club cover and identity',
          ],
        },
      ],
    },
    flow: {
      seeMore: 'See the method',
    },
    audience: {
      eyebrow: 'Who it’s for',
      title: 'A yardage book in your organisation’s name.',
      items: [
        {
          title: 'Clubs',
          text: 'The club’s official yardage book, offered in the pro shop, to your members and to visitors. Orders are placed on behalf of the club.',
        },
        {
          title: 'Pros',
          text: 'A reliable reference to build a game strategy — from club selection to line, from fairway to green — and share it with your players.',
        },
        {
          title: 'Competitions',
          text: 'A book handed to competitors. That is how the first Yardage book was born, at the 2022 Grand Prix of Golf d’Ableiges.',
        },
      ],
    },
    proof: {
      eyebrow: 'What makes the difference',
      title: 'Precise, up to date, and worthy of your pro shop.',
      items: [
        {
          title: 'Precision',
          text: 'Mapping from satellite data and a careful reading of the course: precision that helps the player, not decoration.',
        },
        {
          title: 'An updated book',
          text: 'Distances and landmarks live in an updatable base: a new bunker, a rebuilt green, a reshaped fairway, without starting over.',
        },
        {
          title: 'Finishes',
          text: 'Premium print on eco-friendly paper, with finishes designed for the bag as much as the pro shop display.',
        },
        {
          title: 'Ergonomics',
          text: 'A clear page, a readable hierarchy: distances, hazards and lines of play at a glance.',
        },
        {
          title: 'Consistency',
          text: 'The same landmarks and the same logic on every hole: a true standard, not a collection of isolated pages.',
        },
        {
          title: 'Born on the course',
          text: 'A first book presented at a competition in 2022, then four years of development for a proven method.',
        },
      ],
    },
    pricing: {
      included: 'Included in every order',
    },
    faq: {
      seeAll: 'All questions',
    },
    cta: {
      eyebrow: 'Quote',
      title: 'A yardage book worthy of your course.',
      text: 'Request a quote on behalf of your club. If you are a player, speak to your director or manager: they are the ones who can make the request.',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    homeItems: [2, 3, 5, 6, 7],
    items: [
      {
        q: 'What is the difference between a yardage book and a scorecard?',
        a: 'A yardage book maps each hole: distances, hazards, lines of play and the green. A scorecard is for recording strokes. Yardage designs the former, for clubs.',
      },
      {
        q: 'Does a yardage book replace a rangefinder?',
        a: 'No. A rangefinder gives a one-off distance. The book gives an overview of the hole so you can anticipate the next shots and build a strategy. The two complement each other.',
      },
      {
        q: 'What does a Yardage hole page contain?',
        a: 'Useful distances, hazards, lines of play and a green diagram. The page is designed to be read quickly on the tee and in the fairway.',
      },
      {
        q: 'Can the book be customised with the club logo and sponsors?',
        a: 'Yes. Cover, logo, sponsor page and partner mentions are part of the order. The book remains recognisable as the club’s official yardage book.',
      },
      {
        q: 'What paper are the books printed on?',
        a: 'Eco-friendly paper, with finishes suited to course use and to presentation in the pro shop.',
      },
      {
        q: 'What is the delivery time?',
        a: 'Books are delivered within one month after quote approval, to the club or the pro shop.',
      },
      {
        q: 'What is the minimum order?',
        a: '150 copies per order. Volume discounts at 500 and 1,000 copies. A digital sample can be prepared on request.',
      },
      {
        q: 'Can the book be updated if the course changes?',
        a: 'Yes. Distances and landmarks live in an updatable base — a new bunker, a rebuilt green, a reshaped fairway — without starting over.',
      },
      {
        q: 'I am a player: can I order a book for my club?',
        a: 'Orders are placed on behalf of the club. Speak to the director, manager or pro shop: they are the ones who request a quote.',
      },
      {
        q: 'How do I get a quote?',
        a: 'Write via the contact form, to contact@yardage.io or +33 5 37 07 97 18. Reply within 48 business hours. Include the club name, number of holes and, if possible, an estimated volume.',
      },
    ],
  },
};
