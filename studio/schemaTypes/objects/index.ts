import {defineArrayMember, defineField, defineType} from 'sanity';

const atLeastOneLanguage = (value: {en?: unknown; sq?: unknown} | undefined) =>
  value?.en || value?.sq ? true : 'Provide English or Albanian content.';

const localizedString = defineType({
  name: 'localizedString', title: 'Localized string', type: 'object',
  fields: [
    defineField({name: 'en', title: 'English', type: 'string'}),
    defineField({name: 'sq', title: 'Albanian', type: 'string'})
  ], validation: (rule) => rule.custom(atLeastOneLanguage)
});

const localizedText = defineType({
  name: 'localizedText', title: 'Localized text', type: 'object',
  fields: [
    defineField({name: 'en', title: 'English', type: 'text', rows: 4}),
    defineField({name: 'sq', title: 'Albanian', type: 'text', rows: 4})
  ], validation: (rule) => rule.custom(atLeastOneLanguage)
});

const localizedPortableText = defineType({
  name: 'localizedPortableText', title: 'Localized rich text', type: 'object',
  fields: [
    defineField({name: 'en', title: 'English', type: 'array', of: [defineArrayMember({type: 'block'})]}),
    defineField({name: 'sq', title: 'Albanian', type: 'array', of: [defineArrayMember({type: 'block'})]})
  ], validation: (rule) => rule.custom(atLeastOneLanguage)
});

const seo = defineType({
  name: 'seo', title: 'SEO', type: 'object',
  fields: [
    defineField({name: 'title', title: 'SEO title', type: 'localizedString'}),
    defineField({name: 'description', title: 'SEO description', type: 'localizedText'}),
    defineField({name: 'image', title: 'Social image', type: 'reference', to: [{type: 'mediaAsset'}]}),
    defineField({name: 'noindex', title: 'Exclude from search and sitemap', type: 'boolean', initialValue: false})
  ]
});

const link = defineType({
  name: 'link', title: 'Link', type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'localizedString', validation: (rule) => rule.required()}),
    defineField({name: 'kind', title: 'Kind', type: 'string', options: {list: ['internal', 'external', 'download']}, validation: (rule) => rule.required()}),
    defineField({name: 'internalTarget', title: 'Internal target', type: 'reference', to: [{type: 'page'}, {type: 'program'}, {type: 'project'}, {type: 'event'}, {type: 'article'}, {type: 'opportunity'}, {type: 'resource'}, {type: 'legalPage'}]}),
    defineField({name: 'url', title: 'External URL', type: 'url'}),
    defineField({name: 'download', title: 'Download', type: 'reference', to: [{type: 'mediaAsset'}]}),
    defineField({name: 'newWindow', title: 'Open in new window', type: 'boolean', initialValue: false})
  ]
});

const callToAction = defineType({
  name: 'callToAction', title: 'Call to action', type: 'object',
  fields: [defineField({name: 'link', title: 'Link', type: 'link', validation: (rule) => rule.required()}), defineField({name: 'style', title: 'Style', type: 'string', options: {list: ['primary', 'secondary', 'text']}})]
});

const imageCredit = defineType({
  name: 'imageCredit', title: 'Image credit', type: 'object',
  fields: [
    defineField({name: 'creditText', title: 'Credit text', type: 'string'}),
    defineField({name: 'creator', title: 'Creator', type: 'reference', to: [{type: 'person'}, {type: 'partner'}]}),
    defineField({name: 'sourceUrl', title: 'Credit URL', type: 'url'})
  ]
});

const usageRights = defineType({
  name: 'usageRights', title: 'Usage rights', type: 'object',
  fields: [
    defineField({name: 'owner', title: 'Rights owner', type: 'string'}),
    defineField({name: 'license', title: 'License', type: 'string'}),
    defineField({name: 'restrictions', title: 'Restrictions', type: 'localizedText'}),
    defineField({name: 'verified', title: 'Rights verified', type: 'boolean', initialValue: false})
  ]
});

const provenance = defineType({
  name: 'provenance', title: 'Migration provenance', type: 'object',
  fields: [
    defineField({name: 'originalSourceUrl', title: 'Original source URL', type: 'url'}),
    defineField({name: 'sourcePageUrl', title: 'Source page URL', type: 'url'}),
    defineField({name: 'sourceSite', title: 'Source site', type: 'string'}),
    defineField({name: 'retrievedAt', title: 'Retrieved at', type: 'datetime'}),
    defineField({name: 'migrationStatus', title: 'Migration status', type: 'string', options: {list: ['pending', 'ready', 'migrated', 'flagged', 'excluded']}, initialValue: 'pending'}),
    defineField({name: 'migrationNotes', title: 'Migration notes', type: 'text', rows: 3})
  ]
});

const address = defineType({
  name: 'address', title: 'Address', type: 'object',
  fields: ['street', 'locality', 'region', 'postalCode', 'country'].map((name) => defineField({name, title: name, type: 'string'}))
});

const location = defineType({
  name: 'location', title: 'Location', type: 'object',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'localizedString'}),
    defineField({name: 'address', title: 'Address', type: 'address'}),
    defineField({name: 'coordinates', title: 'Coordinates', type: 'geopoint'})
  ]
});

const dateRange = defineType({
  name: 'dateRange', title: 'Date range', type: 'object',
  fields: [defineField({name: 'start', title: 'Start', type: 'datetime'}), defineField({name: 'end', title: 'End', type: 'datetime'})]
});

const relatedContent = defineType({
  name: 'relatedContent', title: 'Related content', type: 'object',
  fields: [defineField({name: 'items', title: 'Items', type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'page'}, {type: 'person'}, {type: 'program'}, {type: 'project'}, {type: 'event'}, {type: 'article'}, {type: 'opportunity'}, {type: 'labInitiative'}, {type: 'gallery'}, {type: 'resource'}]})]})]
});

const mediaImage = defineType({
  name: 'mediaImage', title: 'Image', type: 'object',
  fields: [
    defineField({name: 'asset', title: 'Media asset', type: 'reference', to: [{type: 'mediaAsset'}], validation: (rule) => rule.required()}),
    defineField({name: 'alt', title: 'Context-specific alt text', type: 'localizedString'}),
    defineField({name: 'caption', title: 'Context-specific caption', type: 'localizedText'})
  ]
});

export const objectSchemaTypes = [localizedString, localizedText, localizedPortableText, seo, link, callToAction, imageCredit, usageRights, provenance, address, location, dateRange, relatedContent, mediaImage];
