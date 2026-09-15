# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> has title
- Location: tests\login.spec.js:11:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /google/
Received string:  "Google"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    3 × locator resolved to <html itemscope="" lang="en-IN" itemtype="http://schema.org/WebPage">…</html>
      - unexpected value "Google"

```

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
  - link "Gmail":
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images":
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps"
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
- img "Google"
- search:
  - button "Add files and tools"
  - combobox "Search"
  - button "Search by voice"
  - button "Search by image"
  - link "AI Mode"
  - button "Google Search"
  - button "I'm Feeling Lucky"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_0i0dY810LdhiISmemJkItgG2uYI%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwj-8s2vv-iWAxWWjuEIHaeNK7MQ2ZgBCCg
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_0i0dY810LdhiISmemJkItgG2uYI%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwj-8s2vv-iWAxWWjuEIHaeNK7MQ2ZgBCCk
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_0i0dY810LdhiISmemJkItgG2uYI%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwj-8s2vv-iWAxWWjuEIHaeNK7MQ2ZgBCCo
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_0i0dY810LdhiISmemJkItgG2uYI%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwj-8s2vv-iWAxWWjuEIHaeNK7MQ2ZgBCCs
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_0i0dY810LdhiISmemJkItgG2uYI%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwj-8s2vv-iWAxWWjuEIHaeNK7MQ2ZgBCCw
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_0i0dY810LdhiISmemJkItgG2uYI%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwj-8s2vv-iWAxWWjuEIHaeNK7MQ2ZgBCC0
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_0i0dY810LdhiISmemJkItgG2uYI%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwj-8s2vv-iWAxWWjuEIHaeNK7MQ2ZgBCC4
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_0i0dY810LdhiISmemJkItgG2uYI%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwj-8s2vv-iWAxWWjuEIHaeNK7MQ2ZgBCC8
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_0i0dY810LdhiISmemJkItgG2uYI%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwj-8s2vv-iWAxWWjuEIHaeNK7MQ2ZgBCDA
- contentinfo:
  - text: India
  - link "Advertising":
    - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-IN&fg=1
  - button "Settings"
```

# Test source

```ts
  1  | //const {test,expect} = require('@playwright/test');
  2  | import { test, expect } from '@playwright/test';
  3  | test('login test',async ({page}) =>{
  4  | await 
  5  | page.goto('https://example.com');
  6  | await expect(page).toHaveTitle(/Example/);
  7  | });
  8  | // @ts-check
  9  | //import { test, expect } from '@playwright/test';
  10 | 
  11 | test('has title', async ({ page }) => {
  12 |   await page.goto('https://google.com',{ waitUntil: 'domcontentloaded' });
  13 | 
  14 |   // Expect a title "to contain" a substring.
> 15 |   await expect(page).toHaveTitle(/google/);
     |                      ^ Error: expect(page).toHaveTitle(expected) failed
  16 | });
  17 | 
  18 | test('get started link', async ({ page }) => {
  19 |   await page.goto('https://playwright.dev/',{ waitUntil: 'domcontentloaded' });
  20 | 
  21 |   // Click the get started link.
  22 |   await page.getByRole('link', { name: 'Get started' }).click();
  23 | 
  24 |   // Expects page to have a heading with the name of Installation.
  25 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  26 | });
  27 | 
```