/**
 * External CMS access is intentionally disabled for the local-content/Vercel build.
 * This compatibility stub remains temporarily so legacy imports fail loudly if reintroduced.
 */
export const getCmsClient = (): never => {
  throw new Error('External CMS is disabled. KULT360 currently builds from versioned local content.');
};
