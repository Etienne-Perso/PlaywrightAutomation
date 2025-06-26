import {test, expect} from '@playwright/test'

test('Handling bootstrapDropdown', async ({page})=>{

    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2")

    await page.locator(".multiselect").click() // clicking on dropdown

    //1) check number of options in dropdown
    //const options=await page.locator('ul>li label input')
    //await expect(options).toHaveCount(11)

    //2 
    //const options=await page.$$('ul>li label input')
    //await expect(options.length).toBe(11)

    //3) select options in dropdown
/*    const options=await page.$$('ul>li label')
    for(let option of options){

        const value = option.textContent()
        //console.log("Value is: ", value)

        if (value.includes('Angular') || value.includes('Java')){

            await option.click()

        }
    }
*/

    //4/ unselect options in dropdown
    const options=await page.$$('ul>li label')
    for(let option of options){

        const value = option.textContent()
        //console.log("Value is: ", value)

        if (value.includes('HTML') || value.includes("CSS")){

            await option.click()

        }
    }
})