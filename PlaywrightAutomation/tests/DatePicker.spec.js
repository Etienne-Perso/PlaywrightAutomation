import{test, expect} from '@playwright/test'

test("Date Picker", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //1) Fill directly the input with appropriate date format
    //await page.locator("#datepicker").fill("06/20/2025")

    //2) With variables
    const year="2026"
    const month="April"
    const date="15"

    //clicking on the input
    await page.click("#datepicker")

    //Selecting month & year
    while(true){

        const act_mont=await page.locator(".ui-datepicker-month").textContent()
        const act_year=await page.locator(".ui-datepicker-year").textContent()
        
        if(act_mont==month && act_year==year){

            break
        }
        await page.click("//span[@class='ui-icon ui-icon-circle-triangle-e']")//Next button
        // await page.click("//span[@class='ui-icon ui-icon-circle-triangle-w']") //Previous button
    }

    //Selecting the date
    //1) Using array concept
/*    const  dates=await page.$$("//a[@class='ui-state-default']")
    for(let dt of dates){
        if (await dt.textContent() == date){
            await dt.click()
            break
        }
    }
*/
    //2) Using commun locator
    await page.click(`//a[@class="ui-state-default"][text()='${date}']`)
    
    await page.waitForTimeout(3000)
})