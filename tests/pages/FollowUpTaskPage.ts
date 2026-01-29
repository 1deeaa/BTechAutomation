import { Page, expect } from '@playwright/test';

export class FollowUpTaskPage {
  constructor(private page: Page) {}

  async completeFollowUp() {
    await this.page.setInputFiles(
      '[data-testid="evidence-picker"]',
      'tests/assets/fixed-image.jpg'
    );

    await this.page.fill(
      '[data-testid="resolution-date"]',
      '2026-01-28T10:00'
    );

    await this.page.click('[data-testid="submit-followup"]');
  }

  async expectCompleted() {
    await expect(
      this.page.locator('[data-testid="task-status"]')
    ).toHaveText('Completed');
  }
}
