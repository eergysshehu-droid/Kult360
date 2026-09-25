import {readFile} from 'node:fs/promises';

const slugs = ['', 'about', 'programs', 'projects', 'events', 'journal', 'media', 'people', 'opportunities', 'lab', 'resources', 'get-involved', 'support', 'contact'];
const routes = slugs.flatMap((slug) => [slug ? `/${slug}/` : '/', slug ? `/sq/${slug}/` : '/sq/']);
const fileFor = (route) => route === '/' ? 'dist/index.html' : `dist${route}index.html`;
const forbidden = [/46mghxoy/i, /data-home-stack/i, /home-stack/i, /\/portfolio\//i];

for (const route of routes) {
  const html = await readFile(fileFor(route), 'utf8');
  const expectedLanguage = route.startsWith('/sq/') ? 'sq' : 'en';
  const h1s = html.match(/<h1(?:\s|>)/g) || [];
  const assertions = [
    [html.includes(`<html lang="${expectedLanguage}"`), 'language'],
    [html.includes('<main id="main-content"'), 'main landmark'],
    [h1s.length === 1, 'exactly one h1'],
    [html.includes('rel="canonical"'), 'canonical'],
    [html.includes('hreflang="en"') && html.includes('hreflang="sq"'), 'language alternates'],
    [html.includes('"@type":"Organization"') && html.includes('"@type":"WebSite"'), 'global structured data'],
    [forbidden.every((pattern) => !pattern.test(html)), 'identity isolation']
  ];
  const failed = assertions.filter(([okay]) => !okay).map(([, label]) => label);
  if (failed.length) throw new Error(`${route} failed: ${failed.join(', ')}`);
  console.log(`✓ ${route}`);
}

const about = await readFile('dist/about/index.html', 'utf8');
if (!about.includes('"@type":"AboutPage"')) throw new Error('/about/ must emit AboutPage structured data.');
const sitemap = await readFile('dist/sitemap-0.xml', 'utf8');
if (sitemap.includes('/404')) throw new Error('Sitemap must exclude noindex 404 route.');
console.log('✓ Built-site content contract passed');
