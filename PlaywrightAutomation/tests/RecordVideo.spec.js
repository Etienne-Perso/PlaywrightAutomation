import {test, expect} from '@playwright/test'

/*

NB: to capture automatically videos, make sure to set up the following config.
    go to playright.config.js
    go to use and under trace: 'on-first-retry', 
    add this: video: 'on'

The videos will be captured automatically in the html report and saved under test-results folder
*/

test("Login test", async ({page})=>{

    await page.goto("https://demoblaze.com/")

    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("button[onclick='logIn()']").click()
    await expect(await page.locator("//a[@id='logout2']")).toBeVisible()
})