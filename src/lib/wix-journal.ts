import chunk00 from '../content/wix-blog/chunk-00.b64?raw';
import chunk01 from '../content/wix-blog/chunk-01.b64?raw';
import chunk02 from '../content/wix-blog/chunk-02.b64?raw';
import chunk03 from '../content/wix-blog/chunk-03.b64?raw';
import chunk04 from '../content/wix-blog/chunk-04.b64?raw';
import chunk05 from '../content/wix-blog/chunk-05.b64?raw';
import chunk06 from '../content/wix-blog/chunk-06.b64?raw';
import chunk07 from '../content/wix-blog/chunk-07.b64?raw';
import chunk08 from '../content/wix-blog/chunk-08.b64?raw';
import chunk09 from '../content/wix-blog/chunk-09.b64?raw';
import chunk10 from '../content/wix-blog/chunk-10.b64?raw';
import chunk11 from '../content/wix-blog/chunk-11.b64?raw';
import chunk12 from '../content/wix-blog/chunk-12.b64?raw';
import chunk13 from '../content/wix-blog/chunk-13.b64?raw';
import chunk14 from '../content/wix-blog/chunk-14.b64?raw';
import chunk15 from '../content/wix-blog/chunk-15.b64?raw';
import chunk16 from '../content/wix-blog/chunk-16.b64?raw';
import chunk17 from '../content/wix-blog/chunk-17.b64?raw';
import chunk18 from '../content/wix-blog/chunk-18.b64?raw';
import chunk19 from '../content/wix-blog/chunk-19.b64?raw';
import chunk20 from '../content/wix-blog/chunk-20.b64?raw';
import chunk21 from '../content/wix-blog/chunk-21.b64?raw';
import chunk22 from '../content/wix-blog/chunk-22.b64?raw';
import chunk23 from '../content/wix-blog/chunk-23.b64?raw';
import {gunzipSync} from 'node:zlib';
import {Buffer} from 'node:buffer';
import metadata from '../content/data/wix-blog-meta.json';

const encoded = [chunk00, chunk01, chunk02, chunk03, chunk04, chunk05, chunk06, chunk07, chunk08, chunk09, chunk10, chunk11, chunk12, chunk13, chunk14, chunk15, chunk16, chunk17, chunk18, chunk19, chunk20, chunk21, chunk22, chunk23].join('');
const sourcePosts = JSON.parse(
  gunzipSync(Buffer.from(encoded, 'base64')).toString('utf8')
) as any[];

const meta = metadata as {
  authors: Record<string, string | null>;
  categories: Record<string, string | null>;
};

export const wixJournalRecords = sourcePosts.map((post: any) => {
  const categories = (post.categoryIds || [])
    .map((id: string) => meta.categories[id])
    .filter(Boolean) as string[];
  const sourceUrl = post.url?.base && post.url?.path ? post.url.base + post.url.path : null;
  const heroUrl = post.heroImage?.url || post.media?.wixMedia?.image?.url || null;

  return {
    id: 'wix-' + post.id,
    wix_id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || null,
    source_url: sourceUrl,
    published_date: post.firstPublishedDate ? post.firstPublishedDate.slice(0, 10) : null,
    first_published_date: post.firstPublishedDate || null,
    last_published_date: post.lastPublishedDate || null,
    category: categories.length ? categories.join(' · ') : null,
    categories,
    category_ids: post.categoryIds || [],
    author: meta.authors[post.memberId] || null,
    member_id: post.memberId || null,
    read_time: Number.isFinite(post.minutesToRead) ? post.minutesToRead + ' min' : null,
    minutes_to_read: post.minutesToRead ?? null,
    proposed_type: 'Article',
    content_status: 'full_original_wix',
    content_text: post.contentText || '',
    rich_content: post.richContent || {nodes: []},
    hero_url: heroUrl,
    hero_image: post.heroImage || null,
    media: post.media || null,
    hashtags: post.hashtags || [],
    tag_ids: post.tagIds || [],
    language: post.language || null,
    seo_data: post.seoData || null,
    featured: !!post.featured,
    pinned: !!post.pinned
  };
});
