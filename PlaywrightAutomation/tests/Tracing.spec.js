import {test, expect} from '@playwright/test'

/*
NB: Playwright Trace Viewer is a GUI tool that lets you explore recorded Playwright traces of your tests
meaning you can go back and forward through each action of your test and visually see what was 
happening during each action.

configuration:
    go to playright.config.js
    go to use and under trace: 'on-first-retry', 
    make it trace: 'on',

To see the trace: npx playwright show-trace tracepath
or in the html report, we can see it and analyse with the tests 
*/

test("Login test", async ({page})=>{

    await page.goto("https://demoblaze.com/")

    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("button[onclick='logIn()']").click()
    await expect(await page.locator("//a[@id='logout2']")).toBeVisible()
})