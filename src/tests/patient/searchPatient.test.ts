import { test } from "@playwright/test";
import { SearchPatientPage } from "../../pages/patient/SearchPatientPage";
import { performLogin } from "../../utils/authUtils";
import { readCSV } from "../../utils/csvReader";

interface PatientSearchData {
  patientSearchType: string;
  patientNameOrId: string;
  expectedNameOrId: string;
}

test.describe("Search Patient Tests", () => {
  let patientSearchData: PatientSearchData[] = [];

  test.beforeAll(async () => {
    patientSearchData = await readCSV<PatientSearchData>("src/data/patientSearchData.csv");
  });

  test("User should be able to search for multiple patients", async ({ browser }) => {

    for (const { patientSearchType, patientNameOrId, expectedNameOrId } of patientSearchData) {
      console.log(`Searching for patient: ${patientNameOrId}`);

      const page = await browser.newPage();
      const searchPatientPage = new SearchPatientPage(page);

      await performLogin(page);
      
      await searchPatientPage.navigateToPatientRecord();

      await searchPatientPage.searchPatient(patientNameOrId);
      
      if (patientSearchType == 'name') {
        await searchPatientPage.verifyPatientFoundByName(expectedNameOrId);
      }

      if (patientSearchType == 'id') {
        await searchPatientPage.verifyPatientFoundByName(expectedNameOrId);
      }

      await page.close();
    }
  });
});
