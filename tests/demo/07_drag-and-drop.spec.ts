import { test, expect, devices } from "@playwright/test";

test("drag and drop", async ({ page }) => {
  await page.goto(
    "https://react-dnd.github.io/react-dnd/examples/dustbin/multiple-targets"
  );

  await page
    .getByText("Bottle")
    .dragTo(page.getByText("This dustbin accepts: glass"));

  await expect(page.getByText("This dustbin accepts: glass")).toContainText(
    "Bottle"
  );

  await page
    .getByText("Banana")
    .dragTo(page.getByText("This dustbin accepts: food"));

  await expect(page.getByText("This dustbin accepts: food")).toContainText(
    "Banana"
  );

  await page
    .getByText("Magazine")
    .dragTo(page.getByText("This dustbin accepts: paper").first());

  await expect(
    page.getByText("This dustbin accepts: paper").first()
  ).toContainText("Magazine");
});
