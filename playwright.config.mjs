import {defineConfig, devices} from '@playwright/test';

const previewCommand = 'npm run preview -- --host 127.0.0.1 --port 4321';
const command = process.env.PLAYWRIGHT_USE_EXISTING_BUILD === '1'
  ? previewCommand
  : `npm run build && ${previewCommand}`;

export default defineConfig({
  testDir: './tests',
  snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}-{projectName}{ext}',
  timeout: 45_000,
  expect: {timeout: 7_000},
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [['line'], ['html', {outputFolder: 'playwright-report', open: 'never'}]] : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4321',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  webServer: {
    command,
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  },
  projects: [
    {name: 'desktop-chromium', use: {...devices['Desktop Chrome']}},
    {name: 'mobile-chromium', use: {...devices['Pixel 7']}},
    {name: 'mobile-webkit', use: {...devices['iPhone 12 Pro Max']}}
  ]
});
