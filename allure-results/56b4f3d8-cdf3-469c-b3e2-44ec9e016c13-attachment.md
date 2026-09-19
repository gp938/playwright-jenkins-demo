# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> Google has title
- Location: tests\example.spec.js:13:7

# Error details

```
Error: Playwright Test did not expect test() to be called here.
Most common reasons include:
- You are calling test() in a configuration file.
- You are calling test() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
- You are calling test() from an async test.describe() block. Only sync ones are supported.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Example Domain" [level=1] [ref=e3]
  - paragraph [ref=e4]: This domain is for use in documentation examples without needing permission. Avoid use in operations.
  - paragraph [ref=e5]:
    - link "Learn more" [ref=e6] [cursor=pointer]:
      - /url: https://iana.org/domains/example
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | /* test('Google has title', async ({ page }) => {
  4  |   await page.goto('https://playwright.dev/', {
  5  |     waitUntil: 'domcontentloaded'
  6  |   });
  7  | 
  8  |   console.log('URL:', page.url());
  9  |   console.log('TITLE:', await page.title());
  10 | 
  11 |   await expect(page).toHaveTitle(/Playwright/, { timeout: 50000 });
  12 | }); */
  13 |   test('Google has title', async ({ page }) => {
  14 |   await page.goto('https://example.com', {
  15 |     waitUntil: 'domcontentloaded'
  16 |   });
  17 | 
  18 |   console.log('URL:', page.url());
  19 |   console.log('TITLE:', await page.title());
  20 | 
  21 |   await expect(page).toHaveTitle(/Example/, { timeout: 50000 });
> 22 |   test('click test', async ({ page }) => {
     |       ^ Error: Playwright Test did not expect test() to be called here.
  23 |   await page.goto('https://example.com');
  24 |   });
  25 |   // Click a button or link
  26 |   await page.getByRole('link', { name: 'Learn more' }).click();
  27 | 
  28 |   // Verify the new page
  29 |   await expect(page).toHaveURL(/iana\.org/);
  30 |  
  31 | 
  32 | });
  33 | 
```