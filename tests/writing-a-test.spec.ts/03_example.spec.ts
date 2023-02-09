import { test, expect } from "@playwright/test";

test("get started link long version", async ({ page }) => {
  // Navigation
  await page.goto("https://playwright.dev/");

  // Locating an element + Interaction
  await page.getByText("Get started").click();

  // Assertion
  await expect(page).toHaveURL(/.*intro/);
});
