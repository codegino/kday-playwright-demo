import { test, expect, Page, Browser } from "@playwright/test";

let browser: Browser;
let page: Page;

test.use({
  launchOptions: {
    headless: false,
    slowMo: 500,
  },
});

test.beforeAll(async ({ browser }) => {
  console.log("Will run once before all test context");
  page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");

  await page.fill('[placeholder="Username"]', "standard_user");
  await page.fill('[placeholder="Password"]', "secret_sauce");

  await page.click("text=LOGIN");
});

test.beforeEach(async () => {
  console.log("Will run before each test");
});

test("login successful v1", async () => {
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  // Some other test steps
});

test("login successful v2", async () => {
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  // Some other test steps
});

test.afterEach(async () => {
  console.log("Will run after each test");
});

test.afterAll(async () => {
  console.log("Will run once after all test context");
  await page.close();
});
