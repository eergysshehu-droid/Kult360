import mediaMap from '../content/data/wix-media-map.json';

const localized = mediaMap as Record<string, string>;

export const wixMediaKey = (source: unknown): string | undefined => {
  if (!source) return undefined;
  const candidate = typeof source === 'string'
    ? source
    : typeof source === 'object'
      ? String((source as {id?: unknown; url?: unknown}).id || (source as {url?: unknown}).url || '')
      : '';
  const raw = candidate.trim();
  if (!raw) return undefined;
  if (localized[raw]) return raw;
  const match = raw.match(/(?:static\.wixstatic\.com\/media\/)?([^/?#]+\.(?:jpe?g|png|webp|avif|gif))(?:\/v1\/[^?#]*)?/i);
  return match?.[1];
};

export const localWixMedia = (source: unknown): string | undefined => {
  const key = wixMediaKey(source);
  return key ? localized[key] : undefined;
};
