type RichNode = {
  type?: string;
  nodes?: RichNode[];
  textData?: {text?: string; decorations?: Array<Record<string, any>>};
  paragraphData?: Record<string, any>;
  headingData?: Record<string, any>;
  imageData?: Record<string, any>;
  videoData?: Record<string, any>;
  galleryData?: Record<string, any>;
};

const escapeHtml = (value: unknown): string =>
  String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const safeHref = (value: unknown): string | undefined => {
  const href = String(value ?? '').trim();
  if (!href) return undefined;
  if (/^(https?:|mailto:|tel:)/i.test(href)) return href;
  if (href.startsWith('/')) return href;
  return undefined;
};

const safeColor = (value: unknown): string | undefined => {
  const color = String(value ?? '').trim();
  return /^(#[0-9a-f]{3,8}|rgb(a)?\([0-9.,%\s]+\)|hsl(a)?\([0-9.,%\s]+\))$/i.test(color) ? color : undefined;
};

const wixMediaUrl = (src: any): string | undefined => {
  if (!src) return undefined;
  const raw = String(src.url || src.id || '').trim();
  if (!raw) return undefined;
  if (/^https?:\/\//i.test(raw)) return raw;
  if (raw.startsWith('video/')) return 'https://video.wixstatic.com/' + raw;
  if (raw.startsWith('media/')) return 'https://static.wixstatic.com/' + raw;
  return 'https://static.wixstatic.com/media/' + raw.replace(/^\/+/, '');
};

const wrapText = (text: string, decorations: Array<Record<string, any>> = []): string => {
  let html = escapeHtml(text).replaceAll('\n', '<br>');
  for (const decoration of decorations) {
    switch (decoration?.type) {
      case 'BOLD': html = '<strong>' + html + '</strong>'; break;
      case 'ITALIC': html = '<em>' + html + '</em>'; break;
      case 'UNDERLINE': html = '<u>' + html + '</u>'; break;
      case 'COLOR': {
        const color = safeColor(decoration?.colorData?.foreground);
        if (color) html = '<span style="color:' + color + '">' + html + '</span>';
        break;
      }
      case 'FONT_SIZE': {
        const value = Number(decoration?.fontSizeData?.value);
        const unit = decoration?.fontSizeData?.unit === 'EM' ? 'em' : decoration?.fontSizeData?.unit === 'REM' ? 'rem' : 'px';
        if (Number.isFinite(value) && value > 0 && value <= 120) html = '<span style="font-size:' + value + unit + '">' + html + '</span>';
        break;
      }
      case 'LINK': {
        const href = safeHref(decoration?.linkData?.link?.url);
        if (href) {
          const target = decoration?.linkData?.link?.target === 'BLANK' ? ' target="_blank"' : '';
          const rel = target ? ' rel="noopener noreferrer"' : '';
          html = '<a href="' + escapeHtml(href) + '"' + target + rel + '>' + html + '</a>';
        }
        break;
      }
    }
  }
  return html;
};

const renderChildren = (nodes: RichNode[] | undefined): string => (nodes || []).map(renderNode).join('');

const renderImage = (node: RichNode): string => {
  const data = node.imageData || {};
  const image = data.image || {};
  const src = wixMediaUrl(image.src);
  if (!src) return '';
  const alt = escapeHtml(data.altText || '');
  const width = Number(image.width) || undefined;
  const height = Number(image.height) || undefined;
  const img = '<img src="' + escapeHtml(src) + '" alt="' + alt + '"' +
    (width ? ' width="' + width + '"' : '') +
    (height ? ' height="' + height + '"' : '') +
    ' loading="lazy" decoding="async">';
  const href = safeHref(data.link?.url);
  return '<figure class="rich-media">' +
    (href ? '<a href="' + escapeHtml(href) + '" target="_blank" rel="noopener noreferrer">' + img + '</a>' : img) +
    '</figure>';
};

const youtubeEmbed = (url: string): string | undefined => {
  try {
    const parsed = new URL(url);
    let id = '';
    if (parsed.hostname.includes('youtu.be')) id = parsed.pathname.replace(/^\/+/, '');
    else if (parsed.hostname.includes('youtube.com')) id = parsed.searchParams.get('v') || parsed.pathname.split('/').filter(Boolean).at(-1) || '';
    if (!/^[A-Za-z0-9_-]{6,20}$/.test(id)) return undefined;
    return 'https://www.youtube-nocookie.com/embed/' + id;
  } catch { return undefined; }
};

const renderVideo = (node: RichNode): string => {
  const data = node.videoData || {};
  const source = data.video?.src || {};
  const rawUrl = String(source.url || '').trim();
  const embed = rawUrl ? youtubeEmbed(rawUrl) : undefined;
  if (embed) {
    return '<figure class="rich-video"><iframe src="' + escapeHtml(embed) + '" title="' +
      escapeHtml(data.title || 'Video') +
      '" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></figure>';
  }
  const src = wixMediaUrl(source);
  const poster = wixMediaUrl(data.thumbnail?.src);
  if (!src) return '';
  return '<figure class="rich-video"><video controls preload="metadata"' +
    (poster ? ' poster="' + escapeHtml(poster) + '"' : '') +
    '><source src="' + escapeHtml(src) + '"></video></figure>';
};

const renderGallery = (node: RichNode): string => {
  const items = node.galleryData?.items || [];
  const images = items.map((item: any) => {
    const media = item?.image?.media;
    const src = wixMediaUrl(media?.src);
    if (!src) return '';
    return '<img src="' + escapeHtml(src) + '" alt=""' +
      (media?.width ? ' width="' + Number(media.width) + '"' : '') +
      (media?.height ? ' height="' + Number(media.height) + '"' : '') +
      ' loading="lazy" decoding="async">';
  }).filter(Boolean).join('');
  return images ? '<figure class="rich-gallery">' + images + '</figure>' : '';
};

function renderNode(node: RichNode): string {
  switch (node.type) {
    case 'TEXT': return wrapText(node.textData?.text || '', node.textData?.decorations || []);
    case 'PARAGRAPH': {
      const alignment = String(node.paragraphData?.textStyle?.textAlignment || '').toLowerCase();
      const style = ['left','right','center','justify'].includes(alignment) ? ' style="text-align:' + alignment + '"' : '';
      return '<p' + style + '>' + renderChildren(node.nodes) + '</p>';
    }
    case 'HEADING': {
      const level = Math.min(6, Math.max(2, Number(node.headingData?.level) || 2));
      return '<h' + level + '>' + renderChildren(node.nodes) + '</h' + level + '>';
    }
    case 'BLOCKQUOTE': return '<blockquote>' + renderChildren(node.nodes) + '</blockquote>';
    case 'ORDERED_LIST': return '<ol>' + renderChildren(node.nodes) + '</ol>';
    case 'UNORDERED_LIST': return '<ul>' + renderChildren(node.nodes) + '</ul>';
    case 'LIST_ITEM': return '<li>' + renderChildren(node.nodes) + '</li>';
    case 'IMAGE': return renderImage(node);
    case 'VIDEO': return renderVideo(node);
    case 'GALLERY': return renderGallery(node);
    case 'HTML': return '';
    default: return renderChildren(node.nodes);
  }
}

export const renderRichContent = (document: any): string => renderChildren(document?.nodes || []);
