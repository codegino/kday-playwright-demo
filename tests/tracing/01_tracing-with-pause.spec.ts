import test from "@playwright/test";

test("Tracing with pause", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.pause();

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
});
