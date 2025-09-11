import {test, expect} from '@playwright/test';

test ('Verify Demoqa text box', async({page}) => {

await page.goto('https://demoqa.com/') 
await page.locator("(//div[contains(@class,'avatar mx-auto')])[1]"). click()
await page.locator("//li[contains(.,'Text Box')]"). click()

await expect(page).toHaveURL ('https://demoqa.com/text-box')

await page.locator("#userName").fill ("Ashok S")
await page.locator("#userEmail").fill ("sakeashok670@gmail.com")
await page.locator("#currentAddress").fill ("123 Main Street, City, State")
await page.locator("#permanentAddress").filSl ("456 Oak Avenue, Town, Country")
await page.locator("#submit"). click()


})