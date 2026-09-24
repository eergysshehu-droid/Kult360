import {documentSchemaTypes} from './documents';
import {objectSchemaTypes} from './objects';
import {singletonSchemaTypes} from './singletons';

export const schemaTypes = [...objectSchemaTypes, ...singletonSchemaTypes, ...documentSchemaTypes];
