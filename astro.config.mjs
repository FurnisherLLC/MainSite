import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://upholsteryguild.org',
  integrations: [sitemap()],
  output: 'static',
});
