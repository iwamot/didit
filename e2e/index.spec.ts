import { test, expect } from "@playwright/test";

test("should have a link to /iwamot", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const locator = page.locator("main a");
  await expect(locator).toHaveAttribute("href", "/iwamot");
  await expect(locator).toHaveClass("passed");
  await expect(locator).toContainText("iwamot");
});
