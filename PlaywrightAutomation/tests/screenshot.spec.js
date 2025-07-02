import {test, expect} from '@playwright/test'

test("Home page screenshot", async ({page})=>{

    await page.goto("https://demoblaze.com/")

    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})

})

test("Full Home Page screenshot", async ({page})=>{

    await page.goto("https://demoblaze.com/")

    await page.waitForTimeout(2000)

    await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullHomePage.png', fullPage:true})

})

test.only("Element screenshot", async ({page})=>{

    await page.goto("https://demoblaze.com/")

    await page.waitForSelector("(//div[@class='card h-100'])[2]")

    await page.locator("(//div[@class='card h-100'])[2]").screenshot({path:'tests/screenshots/'+Date.now()+'Nokialumia.png'})
})