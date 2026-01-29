import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Flow 0 - Authentication', () => {
  test('User can login and complete first-time master data sync', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Step 1: Go to login
    await loginPage.goto();

    // Step 2: Login
    await loginPage.login('test.user', 'password');

    // Step 3: Master data sync in progress
    const progressBar = page.locator('[data-testid="sync-progress"]');
    await expect(progressBar).toBeVisible();

    // Optional: wait until sync finishes
    await expect(progressBar).toHaveText('100%');

    // Step 4: Restart prompt appears
    await dashboardPage.expectRestartPrompt();

    // Step 5: Restart app
    await dashboardPage.restartApp();

    // Final assertion
    await expect(page).toHaveURL('/dashboard');
  });
});
