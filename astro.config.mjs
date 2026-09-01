import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yardage.io',
  base: '/',
  compressHTML: true,
  build: {
    assets: 'assets',
  },
  redirects: {
    '/carnets-de-parcours': '/',
    '/pour-les-golfs': '/offre',
    '/en/yardage-books': '/en',
    '/en/for-golf-clubs': '/en/offer',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-FR',
          en: 'en-US',
        },
      },
      serialize(item) {
        const strip = (url) =>
          url === 'https://yardage.io/' ? url : url.replace(/\/$/, '');
        item.url = strip(item.url);
        if (item.links) {
          item.links = item.links.map((link) => ({ ...link, url: strip(link.url) }));
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
