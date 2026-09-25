import {defineField, defineType} from 'sanity';

const person = defineType({
  name: 'person', title: 'Person', type: 'document', fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name'}, validation: (rule) => rule.required()}),
    defineField({name: 'officialRole', title: 'Official role', type: 'localizedString'}),
    defineField({name: 'biography', title: 'Biography', type: 'localizedPortableText'}),
    defineField({name: 'portrait', title: 'Portrait', type: 'reference', to: [{type: 'mediaAsset'}]}),
    defineField({name: 'provenance', title: 'Provenance', type: 'provenance'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'})
  ]
});

const governanceGroup = defineType({
  name: 'governanceGroup', title: 'Governance group', type: 'document', fields: [
    defineField({name: 'name', title: 'Name', type: 'localizedString', validation: (rule) => rule.required()}),
    defineField({name: 'members', title: 'Members', type: 'array', of: [{type: 'reference', to: [{type: 'person'}]}]}),
    defineField({name: 'provenance', title: 'Provenance', type: 'provenance'})
  ]
});

export const peopleDocuments = [person, governanceGroup];
