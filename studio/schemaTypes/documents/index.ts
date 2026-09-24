import {editorialDocuments} from './editorial';
import {initiativeDocuments} from './initiatives';
import {mediaDocuments} from './media';
import {peopleDocuments} from './people';
import {redirect} from './redirect';

export const documentSchemaTypes = [...editorialDocuments, ...peopleDocuments, ...initiativeDocuments, ...mediaDocuments, redirect];
