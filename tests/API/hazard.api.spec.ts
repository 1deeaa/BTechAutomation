import { test, expect } from '@playwright/test';

test.describe('API - Hazard Workflow', () => {
  test('Hazard creation generates follow-up task and notifications', async ({ request }) => {
    const hazardResponse = await request.post('/api/hazards', {
      data: {
        locationId: 'LOC-01',
        sublocationId: 'SUB-01',
        areaId: 'AREA-01',
        evidenceImageId: 'img-123',
        picId: 'user-pic'
      }
    });

    expect(hazardResponse.status()).toBe(201);
    const hazard = await hazardResponse.json();

    // Verify follow-up task
    const taskResponse = await request.get(`/api/tasks?hazardId=${hazard.id}`);
    const tasks = await taskResponse.json();
    expect(tasks.length).toBe(1);

    // Verify notification
    const notifResponse = await request.get(`/api/notifications?userId=user-pic`);
    const notifications = await notifResponse.json();
    expect(notifications.some(n => n.type === 'FOLLOW_UP_TASK')).toBe(true);
  });
});
