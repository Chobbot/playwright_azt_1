import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_page";

test('Tag test', { tag: "@mujTag"}, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    
})

test('Without Tag', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
})

test.describe('Tagged Test Suit', { tag: "@mujTag"}, () => {
    test('Tagged Describe Test 1', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
})

    test('Tagged Describe Test 2', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
})

    test('Untagged Describe Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
})
})

