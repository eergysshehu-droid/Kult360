import {expect, test} from '@playwright/test';

test('mobile menu opens, closes with Escape, and restores focus', async ({page}, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-chromium');
  await page.goto('/');
  const trigger = page.getByRole('button', {name: 'Menu', exact: true});
  await trigger.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test('language switcher links to the equivalent route', async ({page}, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium');
  await page.goto('/projects/');
  const albanian = page.locator('.desktop-language a[hreflang="sq"]');
  await expect(albanian).toHaveAttribute('href', '/sq/projects/');
  await albanian.click();
  await expect(page).toHaveURL(/\/sq\/projects\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'sq');
});
