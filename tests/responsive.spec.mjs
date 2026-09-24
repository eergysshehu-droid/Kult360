import {expect, test} from '@playwright/test';

for (const route of ['/', '/projects/', '/sq/journal/']) {
  test(`${route} has no document-level mobile overflow`, async ({page}, testInfo) => {
    test.skip(!testInfo.project.name.startsWith('mobile-'));
    await page.goto(route);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
}
