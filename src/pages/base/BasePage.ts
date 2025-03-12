import { Page, expect } from "@playwright/test";

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(path: string) {
    await this.page.goto(path);
  }

  async navigateToLogin() {
    await this.navigateTo("/login.htm");
  }

  async click(selector: string) {
    await this.page.click(selector);
  }

  async dblclick(selector: string) {
    await this.page.dblclick(selector);
  }

  async enterText(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  async selectOption(selector: string, text: string) {
    await this.page.selectOption(selector, { value: text})
  }

  async verifyText(selector: string, expectedText: string) {
    await expect(this.page.locator(selector)).toContainText(expectedText);
  }

  async verifyTextInCell(expectedText: string) {
    await expect(this.page.getByRole('cell', { name: expectedText })).toContainText(expectedText);
  }
}