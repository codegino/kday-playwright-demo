import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("Accessibility testing", async ({ page }) => {
  await page.goto("https://www.accessibilitychecker.org");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  accessibilityScanResults.violations.forEach((violation) => {
    console.log(violation.description);
  });

  expect(accessibilityScanResults.violations).toHaveLength(0);
});
