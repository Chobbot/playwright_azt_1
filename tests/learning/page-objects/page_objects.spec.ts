import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_page";

const login:string = "pw_academy"
const password:string = "Playwright321!"


test('Page Objects Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.fillUsername(login);
    await loginPage.fillPassword(password);
    await loginPage.clickLogin();
})

test('Page Objects Grouped Method', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(login, password);
    
})



