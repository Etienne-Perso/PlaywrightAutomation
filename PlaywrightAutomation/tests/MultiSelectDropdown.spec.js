import {test, expect} from '@playwright/test'

test('Handling MultiSelect dropdown', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Select multiple options in dropdown
    //await page.selectOption("#colors", ['Red', 'Blue', 'Yellow'])

    //Assertions
    //1) check the number of options in dropdown
    //const options = await page.locator("#colors option")
    //await expect(options).toHaveCount(7)

    //2) check the number of options in dropdown using JS array concept
    //const options = await page.$$("#colors option")
    //await expect(options.length).toBe(7)

    //3) check the presence of option in the dropdown
    const content = await page.locator("#colors").textContent()
    await expect(content.includes("Blue")).toBeTruthy()
    await expect(content.includes("Black")).toBeFalsy()
    await page.waitForTimeout(3000)
})