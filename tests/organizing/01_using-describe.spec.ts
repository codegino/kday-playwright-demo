import { test, expect } from "@playwright/test";

test.describe("Authentication", () => {
  test("login successful v1", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await page.fill('[placeholder="Username"]', "standard_user");
    await page.fill('[placeholder="Password"]', "secret_sauce");

    await page.click("text=LOGIN");

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("login successful v2", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
    await page.getByText("LOGIN").click();

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
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
});
