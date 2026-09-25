import {expect, test} from '@playwright/test';

const fixedRoutes = [
  '/programs/advancing-equity-rights/',
  '/themes/artists-practice/',
  '/programs/heritage-sustainability/listen-to-place/',
  '/people/ergys-shehu/',
  '/projects/terminal-europe-week-2026/',
  '/privacy/',
  '/terms/',
  '/sq/themes/artists-practice/',
  '/sq/people/ergys-shehu/',
  '/sq/privacy/',
  '/sq/terms/'
];

const viewports = [
  {width: 390, height: 844},
  {width: 430, height: 900},
  {width: 768, height: 900},
  {width: 1024, height: 900},
  {width: 1440, height: 1000},
  {width: 1920, height: 1080}
];

for (const viewport of viewports) {
  test(`detail system fits ${viewport.width}px cleanly`, async ({page}, testInfo) => {
    test.skip(testInfo.project.name !== 'desktop-chromium');
    await page.setViewportSize(viewport);

    for (const route of fixedRoutes) {
      const response = await page.goto(route);
      expect(response?.ok(), `${route} should load`).toBeTruthy();

      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth - document.documentElement.clientWidth
      );
      expect(overflow, `${route} horizontal overflow at ${viewport.width}px`).toBeLessThanOrEqual(1);

      const h1 = page.locator('h1').first();
      await expect(h1, `${route} should expose a primary heading`).toBeVisible();
      const box = await h1.boundingBox();
      expect(box, `${route} heading box`).not.toBeNull();
      expect(box.x, `${route} heading should not clip left`).toBeGreaterThanOrEqual(-1);
      expect(box.x + box.width, `${route} heading should not clip right`).toBeLessThanOrEqual(viewport.width + 1);

      const fontSize = await h1.evaluate((node) => Number.parseFloat(getComputedStyle(node).fontSize));
      const maxHeading = viewport.width <= 430 ? 66 : 104;
      expect(fontSize, `${route} heading scale at ${viewport.width}px`).toBeLessThanOrEqual(maxHeading);
    }

    await page.goto('/journal/');
    const journalHref = await page.locator('.journal-card__link').first().getAttribute('href');
    expect(journalHref).toBeTruthy();
    const journalResponse = await page.goto(journalHref);
    expect(journalResponse?.ok(), 'journal detail should load').toBeTruthy();
    const journalOverflow = await page.evaluate(() =>
      document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    expect(journalOverflow, `journal overflow at ${viewport.width}px`).toBeLessThanOrEqual(1);
    await expect(page.locator('.journal-detail-v2__header h1')).toBeVisible();
  });
}

test('dark detail heroes keep readable title contrast and controlled height', async ({page}, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium');
  await page.setViewportSize({width: 1440, height: 1000});

  for (const route of [
    '/programs/advancing-equity-rights/',
    '/themes/artists-practice/',
    '/programs/heritage-sustainability/listen-to-place/'
  ]) {
    await page.goto(route);
    const hero = page.locator('.program-detail__hero, .theme-detail__hero, .place-essay__hero').first();
    const title = hero.locator('h1');
    await expect(title).toBeVisible();

    const titleColor = await title.evaluate((node) => getComputedStyle(node).color);
    expect(titleColor).not.toBe('rgb(9, 9, 8)');
    expect(titleColor).not.toBe('rgb(22, 22, 22)');

    const heroBox = await hero.boundingBox();
    expect(heroBox).not.toBeNull();
    expect(heroBox.height).toBeLessThanOrEqual(820);
  }
});
