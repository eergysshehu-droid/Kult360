import {createClient, type SanityClient} from '@sanity/client';
import {siteConfig} from '../site-config';

let client: SanityClient | undefined;

export const getCmsClient = (): SanityClient => {
  if (!siteConfig.cms.projectId || !siteConfig.cms.dataset) {
    throw new Error('KULT360 Sanity configuration is unavailable.');
  }
  client ??= createClient({
    projectId: siteConfig.cms.projectId,
    dataset: siteConfig.cms.dataset,
    apiVersion: siteConfig.cms.apiVersion,
    useCdn: true,
    perspective: 'published'
  });
  return client;
};
