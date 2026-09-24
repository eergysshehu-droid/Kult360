import type {Language} from '../lib/site-config';

export interface BaseLayoutProps {
  title: string;
  description: string;
  language: Language;
  path: string;
  translations?: readonly Language[];
  noindex?: boolean;
  about?: boolean;
  schemas?: Array<Record<string, unknown>>;
}
