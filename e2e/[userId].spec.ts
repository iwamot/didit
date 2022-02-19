import { test, expect } from "@playwright/test";

test("should show that @iwamot passed ST exam", async ({ page }) => {
  await page.goto("http://localhost:3000/iwamot");
  const locator = page.locator('"ST"');
  await expect(locator).toHaveAttribute(
    "href",
    "https://www.jitec.ipa.go.jp/1_11seido/st.html"
  );
  await expect(locator).toHaveAttribute(
    "title",
    "Information Technology Strategist Examination (passed)"
  );
  await expect(locator).toHaveClass("passed");
});
