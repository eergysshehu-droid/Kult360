import {defineField, defineType} from 'sanity';

export const redirect = defineType({
  name: 'redirect', title: 'Redirect', type: 'document', fields: [
    defineField({name: 'sourcePath', title: 'Old path', type: 'string', validation: (rule) => rule.required().regex(/^\//)}),
    defineField({name: 'destinationPath', title: 'Destination path', type: 'string', validation: (rule) => rule.required().regex(/^\//)}),
    defineField({name: 'permanent', title: 'Permanent (301)', type: 'boolean', initialValue: true}),
    defineField({name: 'notes', title: 'Notes', type: 'text'})
  ]
});
