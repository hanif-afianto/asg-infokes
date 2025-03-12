import { test, expect } from "../../pages/base/BaseTest";
import { RegisterPatientPage } from "../../pages/patient/RegisterPatientPage";
import { performLogin } from "../../utils/authUtils";
import { readCSV } from "../../utils/csvReader";

test.describe("Register Patient Tests", () => {
  test("User should be able to register a new patient", async ({ page }) => {
    const registerPatientPage = new RegisterPatientPage(page);
    await performLogin(page);

    await registerPatientPage.navigateToPatientRecord()

    await registerPatientPage.registerNameSection('hanif', 'asdasd')

    await registerPatientPage.registerGenderSection('Masculino')

    await registerPatientPage.registerBirthDateSection('20', '2', '2001')

    await registerPatientPage.registerAdreesSection('test')

    await registerPatientPage.registerPhoneSection('626262626262')

    await registerPatientPage.registerRelativeSection()
    
    await registerPatientPage.registerConfirmSection()
  });
});
