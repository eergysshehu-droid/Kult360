import {expect, test} from '@playwright/test';

test('homepage experience uses the final 360 dial and useful programme copy', async ({page}, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium');
  await page.goto('/');

  await expect(page.locator('.pcf-hero__dial-stage')).toBeVisible();
  await expect(page.locator('.pcf-hero__dial-item')).toHaveCount(9);
  await expect(page.locator('[data-dial-live]')).not.toBeEmpty();
  await expect(page.locator('.partner-marquee img[src="/media/partners/collage.jpg"]').first()).toBeVisible();
  await expect(page.locator('.partner-marquee img[src="/media/partners/european-union-horizontal.jpg"]').first()).toBeVisible();
  await expect(page.locator('.pcf-programme-card__body p')).toHaveCount(4);
  await expect(page.locator('.pcf-programme-card__body p').first()).not.toBeEmpty();
});

test('story rail exposes button state, progress and keyboard navigation', async ({page}, testInfo) => {
  test.skip(!testInfo.project.name.startsWith('mobile-'));
  await page.goto('/');

  const rail = page.locator('[data-story-rail]');
  const previous = page.locator('[data-story-prev]');
  const next = page.locator('[data-story-next]');
  await rail.scrollIntoViewIfNeeded();
  await expect.poll(() => rail.evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
  await expect(previous).toBeDisabled();
  await expect(next).toBeEnabled();

  await rail.focus();
  await page.keyboard.press('ArrowRight');
  await expect.poll(() => rail.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
  await expect(previous).toBeEnabled();
});

test('homepage header becomes solid after scrolling', async ({page}, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium');
  await page.goto('/');

  const header = page.locator('.site-header');
  await expect(header).not.toHaveClass(/is-scrolled/);
  await page.evaluate(() => window.scrollTo(0, 500));
  await expect(header).toHaveClass(/is-scrolled/);
});

test('reduced motion keeps revealed content visible and the hero dial static', async ({page}, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium');
  await page.emulateMedia({reducedMotion: 'reduce'});
  await page.goto('/');

  const card = page.locator('.pcf-programme-card').first();
  const liveWord = page.locator('[data-dial-live]');
  const initialWord = await liveWord.textContent();

  await expect(card).toHaveCSS('opacity', '1');
  await expect(card).toHaveCSS('transform', 'none');
  await expect(page.locator('.pcf-hero__dial-stage')).toBeVisible();
  await page.waitForTimeout(4300);
  await expect(liveWord).toHaveText(initialWord || '');
});
