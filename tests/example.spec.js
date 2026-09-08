import { test, expect } from '@playwright/test';

test('Google has title', async ({ page }) => {
  await page.goto('https://playwright.dev/', {
    waitUntil: 'domcontentloaded'
  });

  console.log('URL:', page.url());
  console.log('TITLE:', await page.title());

  await expect(page).toHaveTitle(/Playwright/, { timeout: 50000 });
  await page.pause();
  
});
