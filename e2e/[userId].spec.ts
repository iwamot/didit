import { expect, test } from "@playwright/test";

test("should show that @iwamot passed ST exam", async ({ page }) => {
  await page.goto("http://localhost:3000/iwamot");
  const locator = page.locator('"ST"');
  await expect(locator).toHaveAttribute(
    "href",
    "https://www.ipa.go.jp/shiken/kubun/st.html",
  );
  await expect(locator).toHaveAttribute(
    "title",
    "Information Technology Strategist Examination (passed)",
  );
  await expect(locator).toHaveClass("passed");
});
