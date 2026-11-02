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
  processEyebrow: 'Method',
  processTitle: 'From the course to the book, in four steps.',
  processIntro:
    'A controlled process to deliver precise books, consistent from hole to hole, and tailored to your club’s identity — without technical burden on your side.',
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
  pricingTitle: 'A tailored quote for your course.',
  pricingRate: 'Price on request',
  pricingIntro:
    'Every book is produced for one specific course, so pricing is set by quote, based on your course and your order.',
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
        a: '150 copies per order. A digital sample can be prepared on request.',
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
        a: 'Write via the contact form, to contact@yardage.io or +33 5 37 07 97 18. Reply within 48 business hours. Include the club name, number of holes and, if possible, an estimated volume.',
      },
    ],
  },
  breadcrumbHome: 'Home',
  coverPdf: 'See a sample cover (PDF, 1 page)',
  offer: {
    title: 'Offer — Yardage',
    description:
      'Yardage offer: price on request, customised in your club’s colours, minimum 150 copies, delivery within 1 month after quote approval.',
    eyebrow: 'Offer',
    text: 'Customisation, eco-friendly paper, delivery within 1 month after quote approval — from 150 copies.',
    includedTitle: 'What is included',
    includedText:
      'The club rate covers the full journey, from design to delivery. You do not need to assemble vendors: Yardage handles the product end to end.',
    included: [
      'Course analysis, data base and layout of every hole',
      'Customisation: club logo, sponsor page, partner mentions',
      'Premium print on eco-friendly paper',
      'Delivery to your club or pro shop, within 1 month after quote approval',
      'Minimum 150 copies per order',
      'Digital sample on request',
    ],
    custom: {
      eyebrow: 'Customisation',
      title: 'Your club’s official yardage book.',
      paragraphs: [
        'Club logo, sponsor page, partner mentions — the book carries your organisation’s identity while remaining a playing tool.',
        'We adapt the cover and brand elements to your guidelines without compromising the readability of hole pages. The result should be immediately recognisable as your club’s official yardage book.',
      ],
      coverAlt: 'Sample cover of a Yardage book: Ableiges, Le Vexin, 2022 edition',
    },
    process: {
      eyebrow: 'How it works',
      title: 'A simple path, from request to delivery.',
      text: 'You keep control of approval; we handle production.',
      steps: [
        {
          title: 'Contact',
          text: 'The club writes to us with the club name, number of holes and, if possible, an estimated volume — from 150 copies.',
        },
        {
          title: 'Quote',
          text: 'We review your course and send a clear proposal: pricing, customisation options and delivery terms.',
        },
        {
          title: 'Approval',
          text: 'Once the quote is approved, production starts. You validate identity elements (logo, sponsors) so the book matches your image.',
        },
        {
          title: 'Delivery',
          text: 'Books are delivered within 1 month after quote approval — ready for the pro shop, members and competitions.',
        },
      ],
    },
    faqItems: [6, 5, 3, 4, 9],
    cta: {
      eyebrow: 'Quote',
      title: 'Let’s talk about your course.',
      text: 'Tell us the club name, the number of holes and, if possible, an estimated volume. Reply within 48 business hours.',
    },
  },
  method: {
    title: 'Method — Yardage',
    description:
      'Analysis, data, production and print: the Yardage method for precise, consistent yardage books that reflect your club.',
    eyebrow: 'Method',
    text: 'Four steps to turn the course into a reference book — precise, readable, and true to your club.',
    leadAlt: 'Hole page from a Yardage book: distances, hazards and lines of play from tee to green',
    steps: [
      {
        id: 'analyse',
        title: 'Understand the course before drawing it',
        paragraphs: [
          'Every book starts with a careful reading of the land. We look at hole layouts, hazards, natural lines of play and the distances that actually matter to the player.',
          'The goal is not to pile up measurements for their own sake, but to identify what helps build a strategy: where to play, where to avoid, where to aim. This step lays the foundation for a book that is useful on the course — not just aesthetic.',
          'We also talk with the club. You know your course better than anyone — sensitive bunkers, risk areas, demanding greens. Your feedback sharpens our reading and ensures the book matches the reality of the land.',
        ],
        alt: 'Aerial view of a golf course',
      },
      {
        id: 'data',
        title: 'A reliable base, ready to evolve',
        paragraphs: [
          'Once the course is analysed, we structure the information into a clear, consistent base. Distances, playing elements, cartographic landmarks: everything is organised to support book production.',
          'This organisation has a concrete benefit for the club. When the course evolves — a new bunker, a renovated green, a redrawn fairway — the base can be updated without starting over. The book remains a living tool, not a frozen document.',
          'For the player, that means reliable, consistent information from hole to hole. The same logic, the same landmarks, the same standard of care across the entire course.',
        ],
        alt: 'Green page from a Yardage book, with its reference grid and approach distances',
      },
      {
        id: 'production',
        title: 'Drawn to be read at a glance',
        paragraphs: [
          'Production turns data into clear, hierarchical hole pages. Every element has its place: distances, hazards, lines of play, green. The player must be able to read the page quickly — on the tee or in the middle of the fairway.',
          'We maintain strong consistency from hole to hole. A player discovering your course should find the same landmarks and the same logic of use across all eighteen holes. That is what makes a book a true standard — not a collection of isolated pages.',
          'This shared structure still leaves room for the club’s identity. Cover, logo, partner mentions: the book remains yours, while being immediately recognisable as a Yardage book.',
        ],
        alt: 'Yardage book open on a green page, held up facing the green',
      },
      {
        id: 'impression',
        title: 'An object worthy of your pro shop',
        paragraphs: [
          'The book is printed on eco-friendly paper, with finishes designed for course use and for presentation in the shop. It should feel good in the hand, hold up in the bag, and match the image you want to convey.',
          'We handle printing and delivery to your club or pro shop. You do not need to coordinate a printer, formats or timelines: production is part of the method.',
          'Result: a premium product, ready to offer to your members, visitors and competitors — with no technical burden on your side.',
        ],
        alt: 'Yardage books displayed in a pro shop stand',
      },
    ],
    page: {
      title: 'What a hole page contains',
      text: 'A Yardage page is built for decisions. It gathers the essential information without overwhelming the reader:',
      points: [
        'useful distances to shape the shot;',
        'hazards and areas to anticipate;',
        'lines of play and course landmarks;',
        'green representation to prepare the approach and putting.',
      ],
      note: 'Each hole is produced from course data for immediate reading on the ground. And because the base can be updated, the book can evolve with your club.',
    },
    standard: {
      title: 'A shared standard, an identity unique to each club',
      paragraphs: [
        'Our method aims for a simple balance: a shared professional structure, and respect for the singularity of each course.',
        'A player moving from one Yardage club to another should find the same landmarks and the same reading logic. That familiarity speeds up uptake and builds confidence during the round.',
        'At the same time, each club keeps its history, architecture and image. The book is recognisable as a Yardage product — and as the official book of your club.',
      ],
    },
    faqItems: [2, 7, 0, 1],
    cta: {
      eyebrow: 'Ready to equip your course?',
      title: 'From the course to the book, we handle it all.',
      text: 'From course analysis to book delivery, Yardage handles the full process. You keep control of the club’s identity; we ensure precision, consistency and product quality.',
      secondary: 'View the offer',
    },
  },
  pages: {
    faq: {
      title: 'FAQ — Yardage',
      description:
        'Answers about Yardage golf yardage books: hole-page content, quotes, lead time, customisation, rangefinders and club orders.',
      eyebrow: 'FAQ',
      heading: 'Frequently asked questions',
      lead: 'Common questions about Yardage golf yardage books — for clubs and players.',
    },
    about: {
      title: 'About — Yardage',
      description: 'Yardage makes the yardage book accessible to clubs and players of every level.',
      eyebrow: 'About',
      heading: 'Every course deserves a book equal to its identity.',
      lead: 'Our ambition is to make the yardage book accessible to clubs and players of every level.',
    },
    contact: {
      title: 'Contact — Yardage',
      description: 'Request a quote for your golf club. Yardage: contact@yardage.io — +33 5 37 07 97 18.',
      eyebrow: 'Contact',
      heading: 'Let’s talk about your course.',
      lead: 'Quotes and digital samples on request — write to us. Reply within 48 business hours.',
      details: 'Contact details',
      email: 'Email',
      phone: 'Phone',
      social: 'Social',
      formTitle: 'Request a quote',
      formText: 'Club, estimated volume and message — we will come back to you with a proposal.',
    },
    legal: {
      title: 'Legal notice — Yardage',
      description: 'Legal notice for Yardage and yardage.io website.',
      eyebrow: 'Legal information',
      heading: 'Legal notice',
      lead: 'Legal information relating to Yardage and yardage.io website.',
    },
    privacy: {
      title: 'Privacy — Yardage',
      description: 'Privacy policy for the Yardage website.',
      eyebrow: 'Personal data',
      heading: 'Privacy',
      lead: 'How we handle data collected through the website.',
    },
  },
};
