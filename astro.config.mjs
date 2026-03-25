import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bradfordblockeddrains.co.uk',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
});
