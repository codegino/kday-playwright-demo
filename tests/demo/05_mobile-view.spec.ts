import { test, expect, devices } from "@playwright/test";

test.use({
  ...devices["iPhone 12"],
});

test("mobile view", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");

  await page.fill('[placeholder="Username"]', "Admin");
  await page.fill('[placeholder="Password"]', "admin123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );

  await page.locator(".oxd-topbar-header-hamburger").click();

  await page.getByRole("link", { name: "Admin" }).click();

  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
  );
});
