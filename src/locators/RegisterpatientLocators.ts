export const RegisterPatientLocators = {
  //input
  givenNameInput: "xpath=//input[@name='givenName']",
  middleNameInput: "xpath=//input[@name='middleName']",
  familyNameInput: "xpath=//input[@name='familyName']",
  birthDateDayInput: "#birthdateDay-field",
  birthDateMonthInput: "xpath=//select[@class='month date-component requiredTitle']",
  birthDateYearInput: "#birthdateYear-field",
  addressInput: "#address1",
  phoneInput: "xpath=//input[@name='phoneNumber']",
  relationshipTypeInput: ".relationship_type",
  relationshipNameInput: "#person-typeahead", 
  
  //btn
  registerPatientButton: "xpath=//input[@type=submit]",
  confirmButton: "#submit",
  nextButton: "#next-button",
  
  //txt
  patientSearchResults: ".patient-search-results",
};
  