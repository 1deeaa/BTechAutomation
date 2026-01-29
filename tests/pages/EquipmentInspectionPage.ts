import { Page, expect } from '@playwright/test';

export class EquipmentInspectionPage {
  constructor(private page: Page) {}

  createButton = this.page.locator('[data-testid="create-inspection"]');
  submitButton = this.page.locator('[data-testid="submit-form"]');

  async goto() {
    await this.page.goto('/equipment-inspection');
  }

  async openNewInspection() {
    await this.createButton.click();
  }

  async fillForm() {
    await this.page.fill('[data-testid="input-text-field"]', 'Inspection OK');
    await this.page.selectOption('[data-testid="select-field"]', 'OK');
    await this.page.setInputFiles(
      '[data-testid="image-picker"]',
      'tests/assets/sample-image.jpg'
    );
  }

  async submit() {
    await this.submitButton.click();
  }

  async expectSubmissionSuccess() {
    await expect(this.page.locator('[data-testid="toast-success"]')).toBeVisible();
  }
}
