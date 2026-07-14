import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Project Pages: https://yardage.github.io/website/
  // When switching to a custom domain at the root (yardage.co), set site to that
  // domain and remove `base` (or set base: '/').
  site: 'https://yardage.github.io',
  base: '/website/',
  vite: {
    plugins: [tailwindcss()],
  },
});
