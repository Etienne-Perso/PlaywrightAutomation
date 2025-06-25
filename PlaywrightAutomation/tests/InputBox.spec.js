import {test, expect} from '@playwright/test'

test('Handle inputBox', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Input box name
    await expect(await page.locator("//input[@placeholder='Enter Name']")).toBeVisible()
    await expect(await page.locator("//input[@placeholder='Enter Name']")).toBeEmpty()
    await expect(await page.locator("//input[@placeholder='Enter Name']")).toBeEditable()
    await expect(await page.locator("//input[@placeholder='Enter Name']")).toBeEnabled()
    
    await page.locator("//input[@placeholder='Enter Name']").fill('John')
    //await page.fill("//input[@placeholder='Enter Name']", 'John'))

    await page.waitForTimeout(5000) //pausing code
})