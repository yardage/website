export const SITE_URL = 'https://yardage.io';

export type JsonLd = Record<string, unknown>;

export function organizationJsonLd(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Yardage',
    legalName: 'PLATEFORME IO',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    email: 'contact@yardage.io',
    telephone: '+33 5 37 07 97 18',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '128 rue La Boétie',
      addressLocality: 'Paris',
      postalCode: '75008',
      addressCountry: 'FR',
    },
    sameAs: [
      'https://www.instagram.com/yardage.io/',
      'https://www.facebook.com/yardage.io/',
      'https://www.linkedin.com/company/yardageio',
    ],
  };
}

export function faqPageJsonLd(items: { question: string; answer: string }[]): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function jsonLdGraph(nodes: JsonLd[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': nodes,
  });
}
