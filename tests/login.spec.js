//const {test,expect} = require('@playwright/test');
import { test, expect } from '@playwright/test';
test('login test',async ({page}) =>{
await 
page.goto('https://example.com');
await expect(page).toHaveTitle(/Example/);
});
// @ts-check
//import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://google.com',{ waitUntil: 'domcontentloaded' });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/',{ waitUntil: 'domcontentloaded' });

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
