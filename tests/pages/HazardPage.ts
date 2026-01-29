import { Page } from '@playwright/test';

export class HazardPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/hazard');
  }

  async openFollowUpTask() {
    await this.page.click('[data-testid="followup-task-item"]');
  }
}
