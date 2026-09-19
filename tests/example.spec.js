import { test, expect } from '@playwright/test';

/* test('Google has title', async ({ page }) => {
  await page.goto('https://playwright.dev/', {
    waitUntil: 'domcontentloaded'
  });

  console.log('URL:', page.url());
  console.log('TITLE:', await page.title());

  await expect(page).toHaveTitle(/Playwright/, { timeout: 50000 });
}); */
  test('Example has title', async ({ page }) => {
  await page.goto('https://example.com', {
    waitUntil: 'domcontentloaded',
  });

  console.log('URL:', page.url());
  console.log('TITLE:', await page.title());

  await expect(page).toHaveTitle(/xampleeeee/, { timeout: 50000 });
});
  test('click test', async ({ page }) => {
  await page.goto('https://example.com');
 
  // Click a button or link
  await expect(page.getByRole('link', { name: 'Learn more' })).toBeVisible();
  await page.getByRole('link', { name: 'Learn more' }).click();

  // Verify the new page
  await expect(page).toHaveURL(/iana\.org/);
 

});
