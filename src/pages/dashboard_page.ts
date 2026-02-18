import { expect, Locator, Page } from "@playwright/test";


export class DashboardPage {
    readonly page: Page;
    readonly profileButton: Locator;
    readonly logoutButton: Locator;
    readonly alertIcon: Locator;

    constructor (page: Page) {
        this.page = page;
        this.profileButton = page.locator('#user_dropdown');
        this.logoutButton = page.locator("#logout");
        this.alertIcon = page.locator("#user_notifications_report");
    }

    async logout() {
        await expect(this.alertIcon).toBeVisible(); //počká an zobrazení informační alert ikony kvůli plnému načtení stránky
        await this.profileButton.click();
        await this.logoutButton.click();
    }


}