import { Page } from "@playwright/test";
import { LoginPage } from "../pages/auth/LoginPage";
import { BasePage } from "../pages/base/BasePage";

export async function performLogin(page: Page) {
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);
  
    await basePage.navigateToLogin();
  
    await loginPage.login("admin", "Admin123", "Registration Desk");

    // await loginPage.VerifyHomePage("Logged in");
}