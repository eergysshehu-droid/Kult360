import {createImageUrlBuilder, type SanityImageSource} from '@sanity/image-url';
import {getCmsClient} from './client';

export const imageUrl = (source: SanityImageSource) => createImageUrlBuilder(getCmsClient()).image(source);
