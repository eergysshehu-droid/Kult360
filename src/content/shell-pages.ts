import type {Language} from '../lib/site-config';

export type LocalizedText = Record<Language, string>;

export interface ShellPageDefinition {
  slug: string;
  label: LocalizedText;
  heading: LocalizedText;
  description: LocalizedText;
}

const page = (
  slug: string,
  en: string,
  sq: string,
  descriptionEn: string,
  descriptionSq: string
): ShellPageDefinition => ({
  slug,
  label: {en, sq},
  heading: {en, sq},
  description: {en: descriptionEn, sq: descriptionSq}
});

export const shellPages = [
  page('about', 'About', 'Rreth nesh', 'KULT360 Foundation, its public team and institutional direction.', 'Fondacioni KULT360, ekipi publik dhe drejtimi institucional.'),
  page('programs', 'Programs', 'Programet', 'Four public focus areas and current cultural initiatives.', 'Katër fusha publike fokusi dhe nismat aktuale kulturore.'),
  page('projects', 'Projects', 'Projektet', 'A working archive of KULT360 projects, performances, residencies and cultural initiatives.', 'Arkiv pune i projekteve, performancave, rezidencave dhe nismave kulturore të KULT360.'),
  page('events', 'Events', 'Ngjarjet', 'Public events represented in the migration archive.', 'Ngjarje publike të përfaqësuara në arkivin e migrimit.'),
  page('journal', 'Journal', 'Ditari', 'Essays, interviews, music and cultural commentary from the public KULT360 archive.', 'Ese, intervista, muzikë dhe komente kulturore nga arkivi publik i KULT360.'),
  page('media', 'Media', 'Media', 'Selected public visual material preserved during migration.', 'Materiale vizuale publike të përzgjedhura dhe ruajtura gjatë migrimit.'),
  page('people', 'People', 'Ekipi', 'Publicly listed KULT360 team members.', 'Anëtarët e ekipit KULT360 të listuar publikisht.'),
  page('opportunities', 'Opportunities', 'Mundësi', 'Ways to support, partner and collaborate with KULT360.', 'Mënyra për të mbështetur, partnerizuar dhe bashkëpunuar me KULT360.'),
  page('lab', 'KULT360 Lab', 'KULT360 Lab', 'The public archive identifies KULT360 Lab; detailed body content remains under editorial review.', 'Arkivi publik identifikon KULT360 Lab; përmbajtja e detajuar mbetet në rishikim editorial.'),
  page('resources', 'Resources', 'Burime', 'Resources and archive material will be published from reviewed local records.', 'Burimet dhe materialet e arkivit do të publikohen nga regjistrat lokalë të rishikuar.'),
  page('get-involved', 'Get involved', 'Përfshihu', 'Support KULT360 as an individual, corporation, foundation or institutional partner.', 'Mbështet KULT360 si individ, kompani, fondacion ose partner institucional.'),
  page('support', 'Support', 'Mbështet', 'Support pathways preserved from the public KULT360 site.', 'Mënyrat e mbështetjes të ruajtura nga faqja publike KULT360.'),
  page('contact', 'Contact', 'Kontakt', 'Public contact details for KULT360 Foundation.', 'Të dhënat publike të kontaktit për Fondacionin KULT360.')
] as const satisfies readonly ShellPageDefinition[];

export const homePage = {
  label: {en: 'Home', sq: 'Kreu'},
  heading: {en: 'KULT360', sq: 'KULT360'},
  description: {
    en: 'KULT360 Foundation — empowering Albanian artists and culture.',
    sq: 'Fondacioni KULT360 — në mbështetje të artistëve dhe kulturës shqiptare.'
  }
} as const;

export const findShellPage = (slug: string): ShellPageDefinition | undefined =>
  shellPages.find((item) => item.slug === slug);
