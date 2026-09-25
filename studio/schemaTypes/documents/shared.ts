import {defineField, defineType, type FieldDefinition} from 'sanity';

export const editorialFields: FieldDefinition[] = [
  defineField({name: 'title', title: 'Title', type: 'localizedString', validation: (rule) => rule.required()}),
  defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title.en'}, validation: (rule) => rule.required()}),
  defineField({name: 'summary', title: 'Summary', type: 'localizedText'}),
  defineField({name: 'body', title: 'Body', type: 'localizedPortableText'}),
  defineField({name: 'mainMedia', title: 'Main media', type: 'reference', to: [{type: 'mediaAsset'}]}),
  defineField({name: 'related', title: 'Related content', type: 'relatedContent'}),
  defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  defineField({name: 'provenance', title: 'Provenance', type: 'provenance'})
];

export const contentDocument = (name: string, title: string, fields: FieldDefinition[] = []) => defineType({
  name, title, type: 'document', fields: [...editorialFields, ...fields]
});
