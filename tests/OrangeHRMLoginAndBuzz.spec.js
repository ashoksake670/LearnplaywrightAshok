const { test, expect } = require('@playwright/test');

test('Login and post in Buzz on OrangeHRM', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Enter username and password
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');

  // Click login button
  await page.click('button[type="submit"]');

  // Wait for dashboard to load and click Buzz menu
  await page.click('a[href="/web/index.php/buzz/viewBuzz"]');

  // Enter text in "What's on your mind"
  const postText = 'Hello from Playwright!';
  await page.fill('textarea[placeholder="What\'s on your mind?"]', postText);

  // Click post button
  await page.click('button:has-text("Post")');

  // Verify the post appears
  await expect(page.locator('.oxd-buzz-post .oxd-buzz-post-body')).toContainText(postText);
});
