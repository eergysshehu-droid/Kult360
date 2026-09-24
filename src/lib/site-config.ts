export type Language = 'en' | 'sq';

const requiredInProduction = (name: string, value: string | undefined): string => {
  const normalized = value?.trim();
  if (import.meta.env.PROD && !normalized) {
    throw new Error(`${name} is required for a production build.`);
  }
  return normalized || '';
};

const optional = (value: string | undefined): string | undefined => value?.trim() || undefined;

const siteUrl = requiredInProduction('SITE_URL', import.meta.env.SITE_URL) || 'http://localhost:4321';
const sanityProjectId = requiredInProduction('PUBLIC_SANITY_PROJECT_ID', import.meta.env.PUBLIC_SANITY_PROJECT_ID);
const sanityDataset = requiredInProduction('PUBLIC_SANITY_DATASET', import.meta.env.PUBLIC_SANITY_DATASET);

export const siteConfig = Object.freeze({
  name: 'KULT360',
  defaultLanguage: 'en' as const,
  languages: ['en', 'sq'] as const,
  url: new URL(siteUrl).origin,
  organization: {
    name: 'KULT360',
    legalName: optional(import.meta.env.PUBLIC_ORGANIZATION_LEGAL_NAME),
    email: optional(import.meta.env.PUBLIC_CONTACT_EMAIL),
    phone: optional(import.meta.env.PUBLIC_CONTACT_PHONE),
    address: optional(import.meta.env.PUBLIC_CONTACT_ADDRESS)
  },
  social: {
    instagram: optional(import.meta.env.PUBLIC_SOCIAL_INSTAGRAM),
    facebook: optional(import.meta.env.PUBLIC_SOCIAL_FACEBOOK),
    youtube: optional(import.meta.env.PUBLIC_SOCIAL_YOUTUBE),
    linkedin: optional(import.meta.env.PUBLIC_SOCIAL_LINKEDIN)
  },
  cms: {projectId: sanityProjectId, dataset: sanityDataset, apiVersion: '2026-09-24'}
});

export const localizedPath = (path: string, language: Language): string => {
  const normalized = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return language === 'sq' ? (normalized === '/' ? '/sq/' : `/sq${normalized}`) : normalized;
};

export const absoluteUrl = (path: string): string => new URL(path, siteConfig.url).toString();
