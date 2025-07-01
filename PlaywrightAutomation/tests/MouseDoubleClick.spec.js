import {test, expect} from '@playwright/test'

test("Double click", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const button =  await page.locator("//button[normalize-space()='Copy Text']")

    //Double click
    await button.dblclick()

    const f2 =  await page.locator("//input[@id='field2']")
    await expect(f2).toHaveValue("Hello World!")


    await page.waitForTimeout(3000)
})