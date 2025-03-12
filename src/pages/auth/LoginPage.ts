import { BasePage } from "../base/BasePage";
import { AuthLocators } from "../../locators/authLocators";

export class LoginPage extends BasePage {
    async login(username: string, password: string, location: string) {
        await this.enterText(AuthLocators.usernameInput, username);
        await this.enterText(AuthLocators.passwordInput, password);
        await this.page.click(`text=${location}`);
        await this.click(AuthLocators.loginButton);
    }

    async loginWithoutLocation(username: string, password: string) {
        await this.enterText(AuthLocators.usernameInput, username);
        await this.enterText(AuthLocators.passwordInput, password);
        await this.click(AuthLocators.loginButton);
    }

    async VerifyHomePage(name: string) {
        await this.verifyText(AuthLocators.LoginMessage, name);
    }

    async VerifyErrorCredentialsMessage(name: string) {
        await this.verifyText(AuthLocators.InvalidCredentialsErrorMessege, name);
    }

    async VerifyErrorLocationMessage(name: string) {
        await this.verifyText(AuthLocators.InvalidLocationErrorMessage, name);
    }
}
