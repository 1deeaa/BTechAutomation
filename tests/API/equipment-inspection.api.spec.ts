import { test, expect } from '@playwright/test';

test.describe('API - Equipment Inspection Submission', () => {
  test('Submit dynamic inspection form successfully', async ({ request }) => {
    const response = await request.post('/api/inspection', {
      data: {
        formCode: 'EQ-INSP-001',
        fields: {
          condition: 'OK',
          remarks: 'All good'
        },
        images: ['image-id-123']
      }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.inspectionId).toBeDefined();
    expect(body.status).toBe('SUBMITTED');
  });
});
