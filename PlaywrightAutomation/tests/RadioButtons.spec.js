import {test, expect} from '@playwright/test'

test('Handle radio botton', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Radio button
    await page.locator("//input[@value='male']").check() //selecting male radio button
    //await page.check("//input[@value='male']")

    await expect(await page.locator("//input[@value='male']")).toBeChecked() //Is selected or not?
    await expect(await page.locator("//input[@value='male']").isChecked()).toBeTruthy() 

    await expect(await page.locator("//input[@value='female']").isChecked()).toBeFalsy() //checking the female radio button is not selected




    await page.waitForTimeout(5000) //pausing code
})