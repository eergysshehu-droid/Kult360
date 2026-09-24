import type {Language} from '../site-config';

export interface LocalizedValue<T> {en?: T; sq?: T}

export const localized = <T>(value: LocalizedValue<T> | null | undefined, language: Language): T | undefined =>
  value?.[language] ?? value?.en;

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const normalizeArray = <T>(value: unknown, guard: (item: unknown) => item is T): T[] =>
  Array.isArray(value) ? value.filter(guard) : [];
