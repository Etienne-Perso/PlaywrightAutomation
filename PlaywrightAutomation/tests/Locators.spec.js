//const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

    page.goto("https://demoblaze.com/index.html")

    // Click on login button -property/attribute
    //await page.locator('id=login2').click()
    page.waitForSelector('id=login2') //waiting for the selector
    await page.click('id=login2')

    //Provide username -CSS
    //await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginusername', 'pavanol')
    //await page.type('#loginusername', 'pavanol')

    //Provide password -CSS
    await page.fill("input[id='loginpassword']", 'test@123')

    //Click on login button -XPath
    await page.click("//button[normalize-space()='Log in']")

    //Verify logout presence -XPath
    const logout = await page.locator("//a[@id='logout2']")
    await expect(logout).toBeVisible()
    //await expect(await page.locator("//a[@id='logout2']")).toBeVisible()

    await page.close();
})