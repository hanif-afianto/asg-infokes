import { BasePage } from "../base/BasePage";
import { PatientSearchLocators } from "../../locators/patientSearchLocators";

export class SearchPatientPage extends BasePage {
    async navigateToPatientRecord() {
        await this.click(PatientSearchLocators.patientRecordButton)
    }
    
    async searchPatient(nameOrId: string) {
        await this.enterText(PatientSearchLocators.searchPatientInput, nameOrId);
        await this.page.keyboard.press("Enter");
    }
    
    async verifyPatientFoundByName(name: string) {
        await this.verifyTextInCell(name)
    }

    async verifyPatientFoundById(name: string) {
        await this.verifyText('td', name);
    }
}
