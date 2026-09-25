import sitemap from '@astrojs/sitemap';
import {defineConfig} from 'astro/config';

const siteUrl =
  process.env.SITE_URL?.trim() ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
  'https://kult360.vercel.app';

export default defineConfig({
  output: 'static',
  site: siteUrl,
  integrations: [sitemap({filter: (page) => !page.includes('/404')})],
  vite: {build: {cssCodeSplit: true}}
});
