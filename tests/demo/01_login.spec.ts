import { test, expect } from "@playwright/test";

// test.use({
//   launchOptions: {
//     slowMo: 1000,
//   },
// });

test("login successful v1", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill('[placeholder="Username"]', "standard_user");
  await page.fill('[placeholder="Password"]', "secret_sauce");

  await page.click("text=LOGIN");

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  await page.getByRole("button", { name: /open menu/i }).click();

  await page.click("text=LOGOUT");

  await expect(page).toHaveURL("https://www.saucedemo.com");
});

test("login successful v2", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.keyboard.type("secret");
  await page.keyboard.type("_sauce");
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/inventory.html/);

  await page.getByRole("button", { name: /open menu/i }).click();
  await page.getByRole("button", { name: /logout/i }).click();

  await expect(page).toHaveURL("https://www.saucedemo.com");
});

test("login fail", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill('[placeholder="Username"]', "standard_user");
  await page.fill('[placeholder="Password"]', "incorrect_password");

  await page.click("text=LOGIN");

  expect(
    await page.isVisible(
      "text=Username and password do not match any user in this service"
    )
  ).toBeTruthy();
});
