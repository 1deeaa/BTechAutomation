import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { EquipmentInspectionPage } from '../pages/EquipmentInspectionPage';

test.describe('Flow 1 - Equipment Inspection', () => {
  test('User can submit equipment inspection form successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inspectionPage = new EquipmentInspectionPage(page);

    // Step 1: Go to login
    await loginPage.goto();

    // Step 2: Login
    await loginPage.login('test.user', 'password');

    // Step 3: Navigate to Equipment Inspection
    await inspectionPage.goto();

    // Step 4: Open new inspection form
    await inspectionPage.openNewInspection();

    // Assert dynamic form loaded
    await expect(page.locator('[data-testid="form-code"]')).toBeVisible();

    // Step 5: Fill inspection form
    await inspectionPage.fillForm();

    // Step 6: Submit inspection
    await inspectionPage.submit();

    // Assert success
    await inspectionPage.expectSubmissionSuccess();

    // Assert submission appears in list
    await expect(
      page.locator('[data-testid="inspection-list"]')
    ).toContainText('Inspection OK');
  });
});
