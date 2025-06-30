import{test, expect} from '@playwright/test'

test("Mouse Hover", async ({page})=>{

    await page.goto("https://www.flixbus.fr/")

    const Desktops = await page.locator("//span[@class='flix-header-nav__text'][normalize-space()='Organisez votre voyage']")
    const Découvrir = await page.locator("//span[@class='flix-header-nav-subnav__text'][normalize-space()='Découvrir']")

    //Mouse hover
    await Desktops.hover()
    await Découvrir.hover()

    await page.waitForTimeout(3000)




})