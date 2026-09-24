export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;
export const navigationQuery = `*[_type == "navigation" && language == $language][0]`;
