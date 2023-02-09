import test, { Page, expect } from "@playwright/test";

test("Tracing Example", async ({ context }) => {
  await context.tracing.start({
    snapshots: true,
    name: "End to end Tracing example",
  });
  const page = await context.newPage();

  await context.tracing.startChunk();
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByText("LOGIN").click();

  await page
    .locator(".inventory_item")
    .filter({ has: page.getByText("Sauce Labs Backpack") })
    .getByText("ADD TO CART")
    .click();

  await page
    .locator(".inventory_item")
    .filter({ has: page.getByText("Sauce Labs Fleece Jacket") })
    .getByText("ADD TO CART")
    .click();

  await page
    .locator(".inventory_item")
    .filter({ has: page.getByText("Sauce Labs Fleece Jacket") })
    .getByText("REMOVE")
    .click();

  await page.locator(".shopping_cart_link").click();

  await context.tracing.stopChunk({ path: "end-to-end_trace.zip" });
});
