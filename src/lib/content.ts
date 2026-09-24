import projectsData from '../content/data/projects.json';
import programsData from '../content/data/programs.json';
import eventsData from '../content/data/events.json';
import {wixJournalRecords as journalData} from './wix-journal';
import peopleData from '../content/data/people.json';
import partnersData from '../content/data/partners.json';
import testimonialsData from '../content/data/testimonials.json';
import opportunitiesData from '../content/data/opportunities.json';

export interface DateRange {start?: string; end?: string}
export interface Project {
  id: string;
  title: string;
  kind: string;
  date?: string | null;
  date_range?: DateRange;
  source_url?: string | null;
  summary?: string | null;
  location?: string | null;
  people?: string[];
  partners_or_related?: string[];
  review_required?: boolean;
  review_note?: string;
}
export interface Program {id: string; title: string; kind: string; source_url?: string | null; summary?: string | null; status?: string}
export interface EventRecord {id: string; title: string; start?: string | null; end?: string | null; timezone?: string | null; location?: string | null; source_url?: string | null; related_project?: string | null}
export interface JournalRecord {
  id: string;
  wix_id?: string;
  title: string;
  slug?: string | null;
  excerpt?: string | null;
  source_url?: string | null;
  source_index?: string | null;
  published_date_text?: string | null;
  published_date?: string | null;
  first_published_date?: string | null;
  last_published_date?: string | null;
  category?: string | null;
  categories?: string[];
  category_ids?: string[];
  author?: string | null;
  member_id?: string | null;
  read_time?: string | null;
  minutes_to_read?: number | null;
  proposed_type?: string | null;
  content_status?: string | null;
  content_text?: string | null;
  rich_content?: {nodes?: unknown[]; documentStyle?: unknown} | null;
  hero_url?: string | null;
  hero_image?: unknown;
  media?: unknown;
  hashtags?: string[];
  tag_ids?: string[];
  language?: string | null;
  seo_data?: unknown;
  featured?: boolean;
  pinned?: boolean;
}
export interface Person {id: string; name: string; role: string; source_url?: string | null; legacy_path?: string | null; profile_status?: string; bio?: string | null; bio_status?: string; observed_profile_image_name?: string; related_public_content?: string[]}
export interface Partner {name: string; relationship?: string; source_url?: string | null; status?: string}
export interface Testimonial {id: string; name: string; role?: string; source_url?: string | null; context?: string; quote_excerpt?: string; migration_note?: string}
export interface Opportunity {id: string; title: string; kind: string; source_url?: string | null; status?: string; summary?: string | null}

export const projects = projectsData as Project[];
export const programs = programsData as Program[];
export const events = eventsData as EventRecord[];
export const journal = journalData as JournalRecord[];
export const people = peopleData as Person[];
export const partners = partnersData as Partner[];
export const testimonials = testimonialsData as Testimonial[];
export const opportunities = opportunitiesData as Opportunity[];

export const projectSlug = (project: Project): string =>
  project.id.replace(/^project-/, '').replace(/^recognition-/, 'recognition-');

export const journalSlug = (record: JournalRecord): string => {
  if (record.slug) return record.slug;
  if (record.source_url) {
    try {
      const pathname = new URL(record.source_url).pathname;
      const slug = pathname.split('/').filter(Boolean).at(-1);
      if (slug) return decodeURIComponent(slug);
    } catch {}
  }
  return record.id;
};

export const personSlug = (person: Person): string => person.id.replace(/^person-/, '');

export const projectImage = (project: Project): string | undefined => ({
  'recognition-herbie-hancock-unesco': '/media/projects/recognition-herbie.jpg',
  'project-qyteti-brenda-oborrit': '/media/projects/qyteti-brenda-oborrit.jpg',
  'project-terminal-europe-week-2026': '/media/projects/terminal.jpg',
  'project-luzatart-culture': '/media/projects/luzatart.jpg',
  'project-artist-hub-lab': '/media/projects/artist-hub.jpg',
  'project-literary-voices-heine-poradeci': '/media/projects/literary-voices.jpg',
  'project-open-spaces-lost-culture': '/media/projects/open-spaces.jpg',
  'project-save-blue-heart-europe': '/media/projects/blue-heart.jpg',
  'project-no-chemical-waste': '/media/projects/chemical-waste.jpg',
  'project-jazz-wine-2017': '/media/projects/jazz-wine-2017.jpg',
  'project-jazz-wine-2014': '/media/projects/jazz-wine-2014.jpg'
}[project.id] as string | undefined);

export const journalImage = (record: JournalRecord): string | undefined => {
  if (record.hero_url) return record.hero_url;
  return ({
    'journal-04': '/media/journal/kosovo.jpeg',
    'journal-05': '/media/journal/skanderbeg.webp',
    'journal-07': '/media/journal/robot.webp',
    'journal-12': '/media/journal/bossa.jpg'
  }[record.id] as string | undefined);
};

export const formatDate = (value?: string | null, language: 'en' | 'sq' = 'en'): string | undefined => {
  if (!value) return undefined;
  const date = new Date(value.length === 10 ? `${value}T12:00:00` : value);
  if (Number.isNaN(date.valueOf())) return value;
  return new Intl.DateTimeFormat(language === 'sq' ? 'sq-AL' : 'en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  }).format(date);
};

export const featuredProjects = projects.filter((item) =>
  [
    'project-terminal-europe-week-2026',
    'project-qyteti-brenda-oborrit',
    'project-luzatart-culture',
    'project-artist-hub-lab',
    'project-literary-voices-heine-poradeci',
    'project-open-spaces-lost-culture'
  ].includes(item.id)
);

export const strategicPillars = programs.filter((item) => item.kind === 'strategic_pillar');
export const initiatives = programs.filter((item) => item.kind === 'initiative');
export const featuredJournal = journal.filter((item) => journalImage(item)).slice(0, 4);
export const terminalGallery = [
  '/media/projects/terminal-gallery-01.jpg',
  '/media/projects/terminal-gallery-02.jpg',
  '/media/projects/terminal-gallery-03.jpg'
];


export const personImage = (person: Person): string | undefined => ({
  'person-eda-zari': '/media/team/eda-zari.jpg',
  'person-ergys-shehu': '/media/team/ergys-shehu.jpg',
  'person-eda-elbasani': '/media/team/eda-elbasani.jpg',
  'person-teufik-bashi': '/media/team/teufik-bashi.jpg'
}[person.id] as string | undefined);
