# Automation Testing for OpenMRS

## Project Overview
This project contains automation test scripts for OpenMRS using the Playwright framework. The test scripts are designed to execute the predefined test cases efficiently.

## Instructions
1. **Record Date & Time**  
   Ensure to write the date and time of execution on the provided answer sheet.

2. **No External References Allowed**  
   During the test, avoid cheating, browsing, or referring to books or other materials.

3. **Automation Test Implementation**  
   Develop automation tests using the Playwright framework following the given test cases.

4. **Source Code Submission**  
   - Upload the automation test source code to a private GitHub repository named `Automation-openRMS`.
   - Invite the following email to the repository: `rizkia.miftah@infokes.co.id`.

## Technology Stack
- **Playwright**: For web automation
- **JavaScript/TypeScript**: Programming language
- **papaparse**: library for parse csv data


## Project Structure
```
Automation-openRMS/
│── src/
│   │── data/
│   │   ├── patientSearchData.csv
│   │── pages/
│   │   ├── auth/
│   │   │   ├── LoginPage.ts
│   │   ├── base/
│   │   │   ├── BasePage.ts
│   │   │   ├── BaseTest.ts
│   │   ├── patient/
│   │   │   ├── RegisterPatientPage.ts
│   │   │   ├── SearchPatientPage.ts
│   │── locators/                        # New folder for locators
│   │   ├── authLocators.ts
│   │   ├── patientLocators.ts
│   │── tests/
│   │   ├── auth/
│   │   │   ├── login.test.ts
│   │   ├── patient/
│   │   │   ├── registerPatient.test.ts
│   │   │   ├── searchPatient.test.ts
│   │── utils/
│   │   ├── authUtils.ts
│   │   ├── csvReader.ts
│── configs/
│── reports/
│── package.json
│── tsconfig.json
│── README.md

```

## Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/hanif-afianto/Automation-openRMS.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Automation-openRMS
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run tests:
   ```sh
   npx playwright test
   ```
5. Generate test reports:
   ```sh
   npx playwright show-report
   ```

## Reporting & Error Handling
- **Test reports** are generated using Playwright HTML or Allure.
- **Error handling** is implemented for failed test cases to ensure debugging and issue tracking.
