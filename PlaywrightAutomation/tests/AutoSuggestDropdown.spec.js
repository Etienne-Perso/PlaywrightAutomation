import {test, expect} from '@playwright/test'

test('Auto suggest dropdonw', async ({page})=>{

    await page.goto("https://www.redbus.in/")
    

    await page.locator("//div[contains(text(),'From')]").click()

    await page.locator("//div[@class='inputWrapper___29d2ca']").type("Delhi")

    await page.waitForSelector("//div[@class='searchCategory___993266']/div/div/div/div")

    const options = await page.$$("//div[@class='searchCategory___993266']/div/div/div/div")

    for(let option of options){

        const value = await option.textContent()
        console.log(value)

        
        if(value.includes("Visakhapatnam")){
            await option.click()
            break
        }
            
    }

    await page.waitForTimeout(5000)
})