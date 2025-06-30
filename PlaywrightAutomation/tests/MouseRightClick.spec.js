import{test, expect} from '@playwright/test'

test('Right click', async ({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    const button=await page.locator("//span[@class='context-menu-one btn btn-neutral']")

    //Right click
    await button.click({button:'right'})

    await page.waitForTimeout(3000)
})