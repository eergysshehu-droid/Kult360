import {defineField, defineType} from 'sanity';

const siteSettings = defineType({
  name: 'siteSettings', title: 'Site settings', type: 'document', fields: [
    defineField({name: 'siteTitle', title: 'Site title', type: 'localizedString'}),
    defineField({name: 'defaultSeo', title: 'Default SEO', type: 'seo'}),
    defineField({name: 'contactEmail', title: 'Contact email', type: 'email'}),
    defineField({name: 'contactPhone', title: 'Contact phone', type: 'string'}),
    defineField({name: 'contactAddress', title: 'Contact address', type: 'address'}),
    defineField({name: 'socialLinks', title: 'Social links', type: 'array', of: [{type: 'link'}]})
  ]
});

const navigation = defineType({
  name: 'navigation', title: 'Navigation', type: 'document', fields: [
    defineField({name: 'language', title: 'Language', type: 'string', options: {list: [{title: 'English', value: 'en'}, {title: 'Albanian', value: 'sq'}]}, validation: (rule) => rule.required()}),
    defineField({name: 'items', title: 'Items', type: 'array', of: [{type: 'link'}]})
  ]
});

const organization = defineType({
  name: 'organization', title: 'Organization', type: 'document', fields: [
    defineField({name: 'name', title: 'Public name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'legalName', title: 'Legal name', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'localizedPortableText'}),
    defineField({name: 'logo', title: 'Logo', type: 'reference', to: [{type: 'mediaAsset'}]}),
    defineField({name: 'address', title: 'Address', type: 'address'}),
    defineField({name: 'provenance', title: 'Provenance', type: 'provenance'})
  ]
});

export const singletonSchemaTypes = [siteSettings, navigation, organization];
