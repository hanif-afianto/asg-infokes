import { test } from "../../pages/base/BaseTest";
import { LoginPage } from "../../pages/auth/LoginPage";
import { performLogin } from "../../utils/authUtils";
import { BasePage } from "../../pages/base/BasePage";

test.describe("Login Test Cases", () => {
  test("User should be able to login", async ({ page }) => {
    await performLogin(page);
  });

  test("User should be able to see error message when input invalid credentials", async ({ page }) => {
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);

    await basePage.navigateToLogin();
    
    await loginPage.login("Admin123", "admin", "Registration Desk");

    await loginPage.VerifyErrorCredentialsMessage("Invalid username/password.");
  });

  test("User should be able to see error message when no select Location", async ({ page }) => {
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);

    await basePage.navigateToLogin();
    
    await loginPage.loginWithoutLocation("admin12231", "Admin123");

    await loginPage.VerifyErrorLocationMessage("You must choose a location!");
  });
});

