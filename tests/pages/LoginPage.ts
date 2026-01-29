import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  usernameInput = this.page.locator('[data-testid="username-input"]');
  continueButton = this.page.locator('[data-testid="continue-button"]');
  msPasswordInput = this.page.locator('[data-testid="ms-password"]');
  msSubmitButton = this.page.locator('[data-testid="ms-login-submit"]');

  async goto() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.continueButton.click();

    // Microsoft login (mocked/bypassed in real env)
    await this.msPasswordInput.fill(password);
    await this.msSubmitButton.click();
  }
}
