import {defineField, defineType} from 'sanity';
import {contentDocument, editorialFields} from './shared';

const page = contentDocument('page', 'Page');
const article = contentDocument('article', 'Article', [
  defineField({name: 'publishedAt', title: 'Published at', type: 'datetime'}),
  defineField({name: 'authors', title: 'Authors', type: 'array', of: [{type: 'reference', to: [{type: 'person'}]}]}),
  defineField({name: 'categories', title: 'Categories', type: 'array', of: [{type: 'string'}]})
]);
const resource = contentDocument('resource', 'Resource', [
  defineField({name: 'resourceType', title: 'Resource type', type: 'string'}),
  defineField({name: 'download', title: 'Download', type: 'reference', to: [{type: 'mediaAsset'}]})
]);
const legalPage = defineType({name: 'legalPage', title: 'Legal page', type: 'document', fields: editorialFields});

export const editorialDocuments = [page, article, resource, legalPage];
