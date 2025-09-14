import {test, expect} from '@playwright/test';

test ('Verify login function', async ({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@placeholder='Username']").fill ('Admin')
await page.locator("//input[@placeholder='Password']").fill ('admin123')
await page.locator("//button[@type='submit']").click ()

await expect(page).toHaveURL ('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
// Dashbord to be visible
await expect (page.locator("//h6[text()='Dashboard']")).toBeVisible()

})

test ('Verify log with valid user name and invalid password', async ({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@placeholder='Username']").fill ('Admin')
await page.locator("//input[@type='password']").fill ('adhin')
await page.locator("//button[@type='submit']"). click ()

await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})


test ('Verify log with invalid user name and valid password', async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@placeholder='Username']").fill ('raju')
await page.locator("//input[@type='password']").fill ('admin123')
await page.locator("//button[@type='submit']").click ()
await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})

test ('Verify log with invalid user name and invalid password', async ({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@placeholder='Username']"). fill ('ashok')
await page.locator("//input[@placeholder='Password']"). fill ('Prem')
await page.locator("//button[@type='submit']"). click ()
await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible


})

test ('Verify add employee details', async ({page})=>{
    
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator('//input[@name="username"]').fill ('Admin')
await page.locator('//input[@type="password"]').fill ('admin123')
await page.locator('//button[@type="submit"]').click ()

await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule')

await page.locator("//a[text()='Add Employee']").click();
await page.locator('//input[@name="firstName"]').fill ('john')
await page.locator('//input[@name="middleName"]').fill ('max')
await page.locator('//input[@name="lastName"]').fill ('Lewis')
await page.locator("//button[@type='submit']").click ()

await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()

})