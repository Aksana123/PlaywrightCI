import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.google.com/');
});

test('get started udmy', async ({ page }) => {
  await page.goto('https://www.udemy.com/');
});

test('get Youtube', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
});

