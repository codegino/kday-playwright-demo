import test from "@playwright/test";

test("Fill a form", async ({ page }) => {
  await page.goto("https://open.spotify.com/");

  await page.click("text=ACCEPT COOKIES");

  await page.click("text=Sign up");

  await page.getByLabel("What's your email").fill("test@test.com");
  await page.getByLabel("Confirm your email").fill("test@test.com");
  await page.getByLabel("Create a password").fill("SafePassword123!@#$");
  await page.getByLabel("What should we call you?").fill("Don't call me");

  await page.getByPlaceholder("DD").fill("1");
  await page.getByRole("combobox", { name: "Month" }).selectOption("12");
  await page.getByPlaceholder("YYYY").fill("1990");

  await page.check('text="Male"');

  await page.check('text="Please send me news and offers from Spotify"');

  await page
    .locator("label")
    .filter({ hasText: "Share my registration data with Spotify" })
    .locator("span")
    .first()
    .click();
});
