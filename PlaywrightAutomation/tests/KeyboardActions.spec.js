import {test, expect} from '@playwright/test'

test("Keyboard actions", async ({page})=>{

    await page.goto("https://gotranscript.com/text-compare")

    //await page.locator("textarea[name='text1']").fill("Welcome to playwright automation...")
    await page.type("textarea[name='text1']", "Welcome to playwright automation...")

    //Copy text from inputbox1 to inputbox2:

    //Select the whole text: Ctrl+A
    await page.keyboard.press('Control+A')

    //Copy the text: Ctrl+C
    await page.keyboard.press('Control+C')

    //Shift to inputbox2: Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Paste the text in the inputbox2: Ctrl+V
    await page.keyboard.press('Control+V')


    await page.waitForTimeout(3000)
})