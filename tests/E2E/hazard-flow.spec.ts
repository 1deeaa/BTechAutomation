import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HazardPage } from '../pages/HazardPage';
import { FollowUpTaskPage } from '../pages/FollowUpTaskPage';

test.describe('Flow 2 - Safety Hazard Follow-up', () => {
  test('PIC can complete follow up task for a hazard', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const hazardPage = new HazardPage(page);
    const followUpTaskPage = new FollowUpTaskPage(page);

    // Step 1: Login as PIC
    await loginPage.goto();
    await loginPage.login('pic.user', 'password');

    // Step 2: Navigate to Hazard menu
    await hazardPage.goto();

    // Assertion: Hazard list is visible
    await expect(
      page.locator('[data-testid="hazard-list"]')
    ).toBeVisible();

    // Step 3: Open assigned follow-up task
    await hazardPage.openFollowUpTask();

    // Assertion: Follow-up task detail opened
    await expect(
      page.locator('[data-testid="followup-form"]')
    ).toBeVisible();

    // Step 4: Complete follow-up task
    await followUpTaskPage.completeFollowUp();

    // Step 5: Assert follow-up completion
    await followUpTaskPage.expectCompleted();
  });
});
