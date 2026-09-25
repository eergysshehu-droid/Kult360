import {expect, test} from '@playwright/test';

test('shell exposes keyboard landmarks and named controls', async ({page}, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium');
  await page.goto('/');
  const skipLink = page.getByRole('link', {name: 'Skip to content'});
  await page.keyboard.press('Tab');
  await expect(skipLink).toBeFocused();
  await skipLink.press('Enter');
  await expect(page.locator('#main-content')).toBeFocused();
  expect(await page.locator('img:not([alt])').count()).toBe(0);
  const unnamed = await page.locator('a,button').evaluateAll((items) => items.filter((item) => {
    const name = item.getAttribute('aria-label') || item.textContent?.trim();
    return !name;
  }).length);
  expect(unnamed).toBe(0);
});
