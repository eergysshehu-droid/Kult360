import {absoluteUrl, siteConfig, type Language} from './site-config';

type Schema = Record<string, unknown>;

const id = (fragment: string) => `${siteConfig.url}/#${fragment}`;

export const organizationSchema = (): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': id('organization'),
  name: siteConfig.organization.name,
  url: siteConfig.url,
  ...(siteConfig.organization.legalName ? {legalName: siteConfig.organization.legalName} : {}),
  ...(Object.values(siteConfig.social).some(Boolean)
    ? {sameAs: Object.values(siteConfig.social).filter(Boolean)}
    : {})
});

export const websiteSchema = (): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': id('website'),
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: {'@id': id('organization')}
});

export const webPageSchema = (input: {
  title: string;
  description: string;
  path: string;
  language: Language;
  about?: boolean;
}): Schema => ({
  '@context': 'https://schema.org',
  '@type': input.about ? 'AboutPage' : 'WebPage',
  '@id': `${absoluteUrl(input.path)}#webpage`,
  name: input.title,
  description: input.description,
  url: absoluteUrl(input.path),
  inLanguage: input.language,
  isPartOf: {'@id': id('website')},
  about: {'@id': id('organization')}
});

export const personSchema = (input: {name: string; url?: string; role?: string; image?: string}): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: input.name,
  ...(input.url ? {url: input.url} : {}),
  ...(input.role ? {jobTitle: input.role} : {}),
  ...(input.image ? {image: input.image} : {})
});

export const articleSchema = (input: {headline: string; url: string; published?: string; image?: string}): Schema => ({
  '@context': 'https://schema.org', '@type': 'Article', ...input
});

export const eventSchema = (input: {name: string; url: string; startDate?: string; endDate?: string}): Schema => ({
  '@context': 'https://schema.org', '@type': 'Event', ...input
});

export const imageObjectSchema = (input: {url: string; caption?: string; creditText?: string}): Schema => ({
  '@context': 'https://schema.org', '@type': 'ImageObject', contentUrl: input.url, ...input
});

export const breadcrumbSchema = (items: Array<{name: string; url: string}>): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({'@type': 'ListItem', position: index + 1, ...item}))
});

export const collectionPageSchema = (input: {name: string; url: string}): Schema => ({
  '@context': 'https://schema.org', '@type': 'CollectionPage', ...input
});

export const itemListSchema = (items: Array<{name: string; url: string}>): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: items.map((item, index) => ({'@type': 'ListItem', position: index + 1, ...item}))
});

export const serializeSchemas = (schemas: Schema[]): string =>
  JSON.stringify(schemas).replace(/</g, '\\u003c');
