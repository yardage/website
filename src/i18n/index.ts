import { en } from './en';
import { fr, type Messages } from './fr';

export type { Messages };

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const SITE_URL = 'https://yardage.io';
export const APP_LOGIN_URL = 'https://app.yardage.io/login/';
export const CONTACT_EMAIL = 'contact@yardage.io';
export const CONTACT_PHONE = '+33 5 37 07 97 18';
export const CONTACT_PHONE_HREF = 'tel:+33537079718';

/** Normalise `Astro.currentLocale` (or any string) to a supported locale. */
export function getLocale(locale: string | undefined): Locale {
  return locale === 'en' ? 'en' : 'fr';
}

export type RouteKey =
  | 'home'
  | 'faq'
  | 'method'
  | 'offer'
  | 'about'
  | 'contact'
  | 'legal'
  | 'privacy';

/** Canonical path per locale. Every path ends with `/` (see `trailingSlash: 'always'`). */
export const routes: Record<RouteKey, Record<Locale, string>> = {
  home: { fr: '/', en: '/en/' },
  faq: { fr: '/faq/', en: '/en/faq/' },
  method: { fr: '/methode/', en: '/en/method/' },
  offer: { fr: '/offre/', en: '/en/offer/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal/' },
  privacy: { fr: '/confidentialite/', en: '/en/privacy/' },
};

/** Internal link to a route, with an optional `?query` and/or `#hash` suffix. */
export function localePath(locale: Locale, key: RouteKey, suffix = ''): string {
  return `${routes[key][locale]}${suffix}`;
}

/** Absolute URL of a route, for canonical, hreflang and JSON-LD. */
export function absoluteUrl(locale: Locale, key: RouteKey): string {
  return new URL(routes[key][locale], SITE_URL).href;
}

/** Ensure a pathname ends with a single `/`. */
export function withTrailingSlash(pathname: string): string {
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function detectLocale(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';
}

export function routeKeyFromPathname(pathname: string): RouteKey | null {
  const path = withTrailingSlash(pathname);
  for (const [key, map] of Object.entries(routes) as [RouteKey, Record<Locale, string>][]) {
    if (path === map.fr || path === map.en) return key;
  }
  return null;
}

export const ui: Record<Locale, Messages> = { fr, en };

export function t(locale: string | undefined): Messages {
  return ui[getLocale(locale)];
}
