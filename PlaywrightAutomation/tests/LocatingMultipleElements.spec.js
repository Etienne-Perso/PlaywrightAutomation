import {test, expect} from '@playwright/test'

test('LocatingMultipleElements', async ({page})=>{
    
    await page.goto("https://demoblaze.com/index.html")

    /*
    const links=await page.$$('//a')
    for (const link of links){
        const linktext = await link.textContent()
        console.log(linktext)
    }
    */

    //Locating all products displayed in home page
   //page.waitForSelector("//div[@class='card h-100']//div//h4//a")

   const productNames = await page.$$("//div[@class='card h-100']//div//h4//a")
   for(const productName of productNames){
        const productTextName = await productName.textContent()
        console.log(productTextName)
   }
})