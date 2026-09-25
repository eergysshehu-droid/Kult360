import {expect, test} from '@playwright/test';

test('foundation visual reference', async ({page}, testInfo) => {
  test.skip(process.env.VISUAL_REGRESSION !== '1', 'Enable only when an approved Phase 1 reference is created.');
  test.skip(testInfo.project.name !== 'desktop-chromium');
  await page.goto('/');
  await expect(page).toHaveScreenshot('foundation-home.png', {fullPage: true});
});
