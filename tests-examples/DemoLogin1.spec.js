import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://portal-test.goya.com/oms2/#/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('013507');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('Pwd@013506');
  await page.getByRole('button', { name: 'submit' }).click();
  await page.getByRole('button', { name: '013506-CARLOS MORATO' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});