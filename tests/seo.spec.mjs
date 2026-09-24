import {expect, test} from '@playwright/test';

test('about page has centralized metadata and accurate structured data', async ({page}, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium');
  await page.goto('/about/');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/about\/$/);
  await expect(page.locator('link[hreflang="en"]')).toHaveCount(1);
  await expect(page.locator('link[hreflang="sq"]')).toHaveCount(1);
  const json = await page.locator('script[type="application/ld+json"]').textContent();
  const schemas = JSON.parse(json);
  expect(schemas.map((item) => item['@type'])).toEqual(['Organization', 'WebSite', 'AboutPage']);
  expect(json).not.toContain('email');
  expect(json).not.toContain('telephone');
});

test('404 is noindex', async ({page}, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium');
  await page.goto('/404.html');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
});
