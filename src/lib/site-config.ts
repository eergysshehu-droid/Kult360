export type Language = 'en' | 'sq';

const optional = (value: string | undefined): string | undefined => value?.trim() || undefined;

const configuredUrl = import.meta.env.SITE_URL?.trim();
const siteUrl = configuredUrl || (import.meta.env.PROD ? 'https://kult360.vercel.app' : 'http://localhost:4321');

export const siteConfig = Object.freeze({
  name: 'KULT360',
  defaultLanguage: 'en' as const,
  languages: ['en', 'sq'] as const,
  url: new URL(siteUrl).origin,
  organization: {
    name: 'KULT360',
    legalName: optional(import.meta.env.PUBLIC_ORGANIZATION_LEGAL_NAME),
    email: optional(import.meta.env.PUBLIC_CONTACT_EMAIL) || 'office@kult360.com',
    phone: optional(import.meta.env.PUBLIC_CONTACT_PHONE) || '+355 69 33 10 202',
    address: optional(import.meta.env.PUBLIC_CONTACT_ADDRESS) || 'Rr. Kavajes, Tirana, Albania'
  },
  social: {
    instagram: optional(import.meta.env.PUBLIC_SOCIAL_INSTAGRAM) || 'https://www.instagram.com/kult360/',
    facebook: optional(import.meta.env.PUBLIC_SOCIAL_FACEBOOK) || 'https://www.facebook.com/kult360',
    youtube: optional(import.meta.env.PUBLIC_SOCIAL_YOUTUBE) || 'https://www.youtube.com/@Kult360',
    linkedin: optional(import.meta.env.PUBLIC_SOCIAL_LINKEDIN)
  }
});

export const localizedPath = (path: string, language: Language): string => {
  const normalized = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return language === 'sq' ? (normalized === '/' ? '/sq/' : `/sq${normalized}`) : normalized;
};

export const absoluteUrl = (path: string): string => new URL(path, siteConfig.url).toString();
