import test, { expect } from "@playwright/test";

test.use({
  viewport: { width: 1280, height: 720 },
});

test("Visual comparison", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await expect(page).toHaveScreenshot();

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByText("LOGIN").click();

  await expect(page).toHaveScreenshot();

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

  await expect(page).toHaveScreenshot();

  await page.locator(".shopping_cart_link").click();

  await expect(page).toHaveScreenshot();

  await page.getByText("CHECKOUT").click();

  await page.getByPlaceholder("First Name").fill("John");
  await page.getByPlaceholder("Last Name").fill("Doe");
  await page.getByPlaceholder("Zip/Postal Code").fill("12345");

  await expect(page).toHaveScreenshot();

  await page.getByText("CONTINUE").click();

  await expect(page).toHaveScreenshot();

  await page.getByText("FINISH").click();

  await expect(page).toHaveScreenshot();
});
