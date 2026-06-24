import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jankuchnia.github.io/motobajer-v2',
  base: '/motobajer-v2',
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: true,
});
