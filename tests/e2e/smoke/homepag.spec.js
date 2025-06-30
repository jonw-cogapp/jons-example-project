import { test, expect } from "@playwright/test";

test(`Smoke test: Homepage`, async ({ page }) => {
    await page.goto("/");
    await expect(
        page.getByRole("heading", {
            level: 1,
            name: "Welcome to the Fine Arts Museums of San Francisco",
        })
    ).toBeVisible();
});
