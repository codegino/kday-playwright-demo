import { test, expect } from "@playwright/test";

test("get started link long version", async ({ page }) => {
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
