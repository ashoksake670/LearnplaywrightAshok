const {test, expect} =require('@playwright/test')

test ('practice ID locators', async ({page})=>{

    await page.goto ('https://demoqa.com/text-box')

    await page.locator ('#userName'). fill ('Ashok')
    await page.locator ('#userEmail'). fill ('ashok@test.com')
    await page.locator ('#currentAddress'). fill ('123 Main Street, City, State')
    await page.locator ('#permanentAddress'). fill ('456 Oak Avenue, Town, Country')

    await page.locator ('#submit'). click();

    await expect (page.locator('#output')). toBeVisible();


});


