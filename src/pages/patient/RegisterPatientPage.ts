import { BasePage } from "../base/BasePage";
import { RegisterPatientLocators } from "../../locators/RegisterpatientLocators";

export class RegisterPatientPage extends BasePage {
    async navigateToPatientRecord() {
        await this.click(RegisterPatientLocators.registerPatientButton)
    }

    async registerNameSection(firstName: string, lastName: string) {
        await this.enterText(RegisterPatientLocators.givenNameInput, firstName);
        await this.enterText(RegisterPatientLocators.familyNameInput, lastName);
        await this.click(RegisterPatientLocators.nextButton)
    }

    async registerGenderSection(gender: string) {
        await this.dblclick(`text=${gender}`);
        await this.click(RegisterPatientLocators.nextButton);
    }

    async registerBirthDateSection(day: string, month: string, year: string) {
        await this.enterText(RegisterPatientLocators.birthDateDayInput, day);
        await this.selectOption(RegisterPatientLocators.birthDateMonthInput, month);
        await this.enterText(RegisterPatientLocators.birthDateYearInput, year);
        await this.click(RegisterPatientLocators.nextButton);
    }
        
    async registerAdreesSection(addreess: string) {
        await this.enterText(RegisterPatientLocators.addressInput, addreess);
        await this.click(RegisterPatientLocators.nextButton);
    }

    async registerPhoneSection(phone: string) {
        await this.enterText(RegisterPatientLocators.phoneInput, phone);
        await this.click(RegisterPatientLocators.nextButton);
    }

    async registerRelativeSection() {
        await this.click(RegisterPatientLocators.nextButton);
    }

    async registerConfirmSection() {
        await this.click(RegisterPatientLocators.registerPatientButton);
    }
}
