import { test, expect, devices } from "@playwright/test";

test.use({
  // colorScheme: "dark",
  // locale: "sv",
  // javaScriptEnabled: false,
});

test("mobile view", async ({ page }) => {
  await page.goto("https://codegino.com/nft");
});
