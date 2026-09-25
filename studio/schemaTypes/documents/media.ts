import {defineField, defineType} from 'sanity';
import {contentDocument} from './shared';

const gallery = contentDocument('gallery', 'Gallery', [
  defineField({name: 'items', title: 'Media', type: 'array', of: [{type: 'reference', to: [{type: 'mediaAsset'}]}]})
]);

const mediaAsset = defineType({
  name: 'mediaAsset', title: 'Media asset', type: 'document', fields: [
    defineField({name: 'title', title: 'Title', type: 'localizedString'}),
    defineField({name: 'mediaType', title: 'Media type', type: 'string', options: {list: ['image', 'document', 'video', 'audio', 'embed']}, validation: (rule) => rule.required()}),
    defineField({name: 'image', title: 'Image file', type: 'image', options: {hotspot: true}}),
    defineField({name: 'file', title: 'Document or media file', type: 'file'}),
    defineField({name: 'externalMediaUrl', title: 'External media URL', type: 'url'}),
    defineField({name: 'originalSourceUrl', title: 'Original asset URL', type: 'url'}),
    defineField({name: 'sourcePageUrl', title: 'Source page URL', type: 'url'}),
    defineField({name: 'originalFilename', title: 'Original filename', type: 'string'}),
    defineField({name: 'localFilename', title: 'Production filename', type: 'string'}),
    defineField({name: 'width', title: 'Width', type: 'number'}),
    defineField({name: 'height', title: 'Height', type: 'number'}),
    defineField({name: 'mimeType', title: 'MIME type', type: 'string'}),
    defineField({name: 'alt', title: 'Alt text', type: 'localizedString'}),
    defineField({name: 'caption', title: 'Caption', type: 'localizedText'}),
    defineField({name: 'credit', title: 'Credit', type: 'imageCredit'}),
    defineField({name: 'rights', title: 'Usage rights', type: 'usageRights'}),
    defineField({name: 'assetRole', title: 'Asset role', type: 'string', options: {list: ['owned-photography', 'project-photography', 'partner-logo', 'institutional-logo', 'brand-graphic', 'portrait', 'editorial-cover', 'document', 'external-media', 'other']}}),
    defineField({name: 'associatedContent', title: 'Associated content', type: 'array', of: [{type: 'reference', to: [{type: 'page'}, {type: 'person'}, {type: 'program'}, {type: 'project'}, {type: 'event'}, {type: 'article'}, {type: 'gallery'}, {type: 'partner'}, {type: 'resource'}]}]}),
    defineField({name: 'migrationStatus', title: 'Migration status', type: 'string', options: {list: ['pending', 'ready', 'migrated', 'flagged', 'excluded']}, initialValue: 'pending'}),
    defineField({name: 'migrationNotes', title: 'Migration notes', type: 'text', rows: 4})
  ]
});

const partner = defineType({
  name: 'partner', title: 'Partner', type: 'document', fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'logo', title: 'Logo', type: 'reference', to: [{type: 'mediaAsset'}]}),
    defineField({name: 'website', title: 'Website', type: 'url'}),
    defineField({name: 'provenance', title: 'Provenance', type: 'provenance'})
  ]
});

export const mediaDocuments = [gallery, mediaAsset, partner];
