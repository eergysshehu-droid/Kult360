import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {schemaTypes} from './studio/schemaTypes';
import {structure} from './studio/structure';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID?.trim();
const dataset = process.env.SANITY_STUDIO_DATASET?.trim();

if (!projectId || !dataset) {
  throw new Error('SANITY_STUDIO_PROJECT_ID and SANITY_STUDIO_DATASET are required.');
}

export default defineConfig({
  name: 'kult360',
  title: 'KULT360 Content Studio',
  projectId,
  dataset,
  plugins: [structureTool({structure})],
  schema: {types: schemaTypes}
});
