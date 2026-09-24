import type {Language} from '../lib/site-config';

export type LocalizedText = Record<Language, string>;

export interface ShellPageDefinition {
  slug: string;
  label: LocalizedText;
  heading: LocalizedText;
  description: LocalizedText;
}

const placeholder: LocalizedText = {
  en: 'KULT360 content will be migrated in Phase 2.',
  sq: 'Përmbajtja e KULT360 do të migrohet në Fazën 2.'
};

const page = (slug: string, en: string, sq: string): ShellPageDefinition => ({
  slug,
  label: {en, sq},
  heading: {en, sq},
  description: placeholder
});

export const shellPages = [
  page('about', 'About', 'Rreth nesh'),
  page('programs', 'Programs', 'Programet'),
  page('projects', 'Projects', 'Projektet'),
  page('events', 'Events', 'Ngjarjet'),
  page('journal', 'Journal', 'Ditari'),
  page('media', 'Media', 'Media'),
  page('people', 'People', 'Njerëzit'),
  page('opportunities', 'Opportunities', 'Mundësi'),
  page('lab', 'Lab', 'Laboratori'),
  page('resources', 'Resources', 'Burime'),
  page('get-involved', 'Get involved', 'Përfshihu'),
  page('support', 'Support', 'Mbështet'),
  page('contact', 'Contact', 'Kontakt')
] as const satisfies readonly ShellPageDefinition[];

export const homePage = {
  label: {en: 'Home', sq: 'Kreu'},
  heading: {en: 'KULT360', sq: 'KULT360'},
  description: placeholder
} as const;

export const findShellPage = (slug: string): ShellPageDefinition | undefined =>
  shellPages.find((item) => item.slug === slug);
