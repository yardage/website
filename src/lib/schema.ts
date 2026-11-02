import { SITE_URL, absoluteUrl, type Locale } from '../i18n';

export { SITE_URL };

export type JsonLd = Record<string, unknown>;

export function organizationJsonLd(): JsonLd {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Yardage',
    legalName: 'PLATEFORME IO',
    url: `${SITE_URL}/`,
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

export function websiteJsonLd(locale: Locale): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Yardage',
    url: absoluteUrl(locale, 'home'),
    inLanguage: locale,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

/** The yardage book service (design + print), described without prices: quotes are tailored. */
export function serviceJsonLd(locale: Locale, name: string, description: string): JsonLd {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(locale, 'home')}#service`,
    name,
    description,
    serviceType: 'Golf yardage book design and printing',
    provider: { '@id': `${SITE_URL}/#organization` },
    url: absoluteUrl(locale, 'home'),
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
