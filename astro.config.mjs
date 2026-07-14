import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yardage.co',
  vite: {
    plugins: [tailwindcss()],
  },
});
