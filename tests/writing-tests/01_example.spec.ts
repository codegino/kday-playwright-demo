import { test, expect, chromium } from "@playwright/test";

test("get started link long version", async () => {
  // Open a browser
  const browser = await chromium.launch();

  // Open a new page
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigation
  await page.goto("https://playwright.dev/");

  // Wait for an element to load
  await expect(page.getByText("Get started")).toBeVisible();

  // Locating an element
  const link = page.getByText("Get started");

  // Interaction
  await link.click();

  // Assertion
  await expect(page).toHaveURL(/.*intro/);
});
