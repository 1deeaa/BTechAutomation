import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  restartModal = this.page.locator('[data-testid="restart-modal"]');
  restartButton = this.page.locator('[data-testid="restart-button"]');

  async expectRestartPrompt() {
    await expect(this.restartModal).toBeVisible();
  }

  async restartApp() {
    await this.restartButton.click();
  }
}
