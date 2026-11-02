import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL, locales, routeKeyFromPathname, routes } from './src/i18n/index.ts';

/** Legacy URLs kept as redirects (excluded from the sitemap). */
const redirects = {
  '/carnets-de-parcours/': '/',
  '/pour-les-golfs/': '/offre/',
  '/en/yardage-books/': '/en/',
  '/en/for-golf-clubs/': '/en/offer/',
};

const redirectSources = new Set(Object.keys(redirects));

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
    assets: 'assets',
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects,
  integrations: [
    sitemap({
      filter: (page) => !redirectSources.has(new URL(page).pathname),
      // Pair each page with its translation (slugs differ: /a-propos/ ↔ /en/about/).
      serialize(item) {
        const key = routeKeyFromPathname(new URL(item.url).pathname);
        if (key) {
          item.links = [
            ...locales.map((lang) => ({ lang, url: new URL(routes[key][lang], SITE_URL).href })),
            { lang: 'x-default', url: new URL(routes[key].fr, SITE_URL).href },
          ];
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
