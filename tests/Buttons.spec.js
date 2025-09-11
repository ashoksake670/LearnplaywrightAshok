const {test, expect} =require ('@playwright/test')
    // PAGE LOAD AND URL ASSERTIONS
    // ASSERTION 1: URL verification
test ('URL assertion example - PASS', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

    await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/')

    console.log('URL assertion passed');

})

// ASSERTION 2: Page title verification

test ('Page Title assertion example', async({page})=>{

await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

await expect(page).toHaveTitle (/LoginPage Practise/)

console.log ('Page Title assertion Passed');


});

//ASSERTION 3: Page content loaded

test ('Page content loaded', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

    await expect (page.locator('body')).toBeVisible();

    console.log('Page body visibility assertion passed');


});


//FORM ELEMENT VISIBILITY ASSERTIONS

test ('Form element visibility assertions', async({page})=>{
await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

//User name field should be visiable
await expect(page.locator('#username')).toBeVisible();
console.log('User name input is visible')

//Password field should be visible
await expect(page.locator('#password')).toBeVisible();
console.log('Password input is visible')

//Login button should be visible
await expect(page.locator('#signInBtn')).toBeVisible();
console.log('signInBt input is visible')


});