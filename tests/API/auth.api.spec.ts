import { test, expect } from '@playwright/test';

test.describe('API - Tenant Resolution', () => {
  test('Valid user returns correct tenant', async ({ request }) => {
    const response = await request.post('/api/user/who', {
      data: {
        username: 'test.user'
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.tenant).toBeDefined();
    expect(body.tenant.status).toBe('ACTIVE');
  });
});
