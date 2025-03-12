import { test as baseTest, expect } from "@playwright/test";

export const test = baseTest.extend({
    page: async ({ page }, use) => {
        try {
            await use(page);
        } catch (error) {
        console.error(`Test failed: ${error}`);
        await page.screenshot({ path: `reports/error-${Date.now()}.png` });
        throw error;
        }
    },
});

export { expect };
