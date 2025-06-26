import {test, expect} from '@playwright/test'

test('Handling dropDowns', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
/*
    //Multiple ways to select options from dropdown

    //Label/ visible text/ value/ index:
    //await page.locator("#country").selectOption({label:'France'}) //using Label
    await page.locator("#country").selectOption('France') //using visible text
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({value:'uk'}) //using value
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({index:1}) //using index
    await page.waitForTimeout(2000)
    await page.selectOption("#country", 'France') //using text 
*/
    //Assertions:

    //A)check number of options in dropdown:

    //A1) Approch 1: check number of options in dropdown with toHaveCount()
    //const options = await page.locator("#country option")
    //await expect(options).toHaveCount(10)

    //A2) Approch 2: check number of options in dropdown -array length
    //const options = await page.$$("#country option")
    //console.log("Number of options: ", options.length)
    //await expect(options.length).toBe(10)


    //B) check presence of a value in dropdown:

    //B1) Approch 1: check presence of a value in dropdown using includes()
    //const optionsTextContent= await page.locator("#country").textContent()
    //await expect(optionsTextContent.includes('France')).toBeTruthy()

    //B2) Approch 2: check presence of a value in dropdown using looping 
/*    const options = await page.$$("#country option")
    let status=false
    for(const option of options){
        const value=await option.textContent()
        //console.log(value)
        if (value.includes('France')){
            status=true
            break
        }
    }
    expect(status).toBeTruthy()
*/
    //C) select option in dropdown by using for loop
    const options = await page.$$("#country option")

    for(const option of options){
       let value = await option.getAttribute('value') //france
       let upValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(); //France

        if (upValue.includes('France')){  
            
            //console.log(upValue)
            await page.locator("#country").selectOption(upValue)
            //await page.selectOption("country", value)

            break
        }
    }
    await page.waitForTimeout(3000) 
})