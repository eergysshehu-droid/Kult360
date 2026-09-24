import {expect, test} from '@playwright/test';

const slugs = ['', 'about', 'programs', 'projects', 'events', 'journal', 'media', 'people', 'opportunities', 'lab', 'resources', 'get-involved', 'support', 'contact'];
const routes = slugs.flatMap((slug) => [slug ? `/${slug}/` : '/', slug ? `/sq/${slug}/` : '/sq/']);

for (const route of routes) {
  test(`${route} renders the Phase 1 shell`, async ({page}, testInfo) => {
    test.skip(testInfo.project.name !== 'desktop-chromium');
    const errors = [];
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    const response = await page.goto(route, {waitUntil: 'networkidle'});
    expect(response?.status()).toBeLessThan(400);
    await expect(page.locator('html')).toHaveAttribute('lang', route.startsWith('/sq/') ? 'sq' : 'en');
    await expect(page.locator('main')).toHaveCount(1);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.getByText('KULT360', {exact: true}).first()).toBeVisible();
    expect(errors).toEqual([]);
  });
}
