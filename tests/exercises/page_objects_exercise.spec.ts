/*

Cvičení - Vytvořte nový test a PageObject ⌛15:00
Vytvořte složku: tests/exercises a v ní: page_objects_exercise.spec.ts vytvořte nový test: PageObjects Exercise - Login and Logout
Ve složce src/pages/pmtool Vytvořte nový Page Object pro domovskou stránku (dashboard_page.ts).
Page Object bude obsahovat:
Klik na profilovou sekci (clickProfile), lokátor: #user_dropdown
Klik na odhlášení (clickLogout), lokátor: #logout
Do testu vložte otevření PMTool, přihlášení a následně odhlášení.

* Pokud se vám test neodhlásí, tak to vyřešíme po cvičení.
*/

import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/login_page.ts";
import { DashboardPage } from "../../src/pages/dashboard_page.ts";

test("PageObjects Exercise - Login and Logout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.open();
  await loginPage.login("pw_academy", "Playwright321!");
  await dashboardPage.logout();
});


