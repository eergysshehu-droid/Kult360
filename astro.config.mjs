import sitemap from '@astrojs/sitemap';
import {defineConfig} from 'astro/config';

const productionBuild = process.env.NODE_ENV === 'production';
const siteUrl = process.env.SITE_URL?.trim();

if (productionBuild && !siteUrl) {
  throw new Error('SITE_URL is required for production builds.');
}

export default defineConfig({
  output: 'static',
  site: siteUrl || 'http://localhost:4321',
  integrations: [sitemap({filter: (page) => !page.includes('/404')})],
  vite: {build: {cssCodeSplit: true}}
});
