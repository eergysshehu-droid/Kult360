import {expect, test} from '@playwright/test';

for (const route of ['/', '/projects/', '/sq/journal/']) {
  test(`${route} has no document-level mobile overflow`, async ({page}, testInfo) => {
    test.skip(!testInfo.project.name.startsWith('mobile-'));
    await page.goto(route);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
}

for (const viewport of [
  {width: 320, height: 700},
  {width: 390, height: 844},
  {width: 768, height: 900}
]) {
  test(`homepage fits ${viewport.width}px without horizontal overflow`, async ({page}, testInfo) => {
    test.skip(testInfo.project.name !== 'desktop-chromium');
    await page.setViewportSize(viewport);
    await page.goto('/');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
}
