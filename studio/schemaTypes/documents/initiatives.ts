import {defineField} from 'sanity';
import {contentDocument} from './shared';

const program = contentDocument('program', 'Program', [defineField({name: 'dates', title: 'Dates', type: 'dateRange'}), defineField({name: 'partners', title: 'Partners', type: 'array', of: [{type: 'reference', to: [{type: 'partner'}]}]})]);
const project = contentDocument('project', 'Project', [defineField({name: 'dates', title: 'Dates', type: 'dateRange'}), defineField({name: 'location', title: 'Location', type: 'location'}), defineField({name: 'credits', title: 'Credits', type: 'localizedText'}), defineField({name: 'partners', title: 'Partners', type: 'array', of: [{type: 'reference', to: [{type: 'partner'}]}]})]);
const event = contentDocument('event', 'Event', [defineField({name: 'dates', title: 'Dates', type: 'dateRange'}), defineField({name: 'location', title: 'Location', type: 'location'}), defineField({name: 'registration', title: 'Registration', type: 'callToAction'})]);
const opportunity = contentDocument('opportunity', 'Opportunity', [defineField({name: 'deadline', title: 'Deadline', type: 'datetime'}), defineField({name: 'application', title: 'Application', type: 'callToAction'})]);
const labInitiative = contentDocument('labInitiative', 'Lab initiative');
const impactRecord = contentDocument('impactRecord', 'Impact record', [defineField({name: 'value', title: 'Value', type: 'number'}), defineField({name: 'unit', title: 'Unit', type: 'localizedString'}), defineField({name: 'recordedAt', title: 'Recorded at', type: 'date'})]);
const testimonial = contentDocument('testimonial', 'Testimonial', [defineField({name: 'quote', title: 'Quote', type: 'localizedText', validation: (rule) => rule.required()}), defineField({name: 'attribution', title: 'Attribution', type: 'reference', to: [{type: 'person'}, {type: 'partner'}]})]);

export const initiativeDocuments = [program, project, event, opportunity, labInitiative, impactRecord, testimonial];
