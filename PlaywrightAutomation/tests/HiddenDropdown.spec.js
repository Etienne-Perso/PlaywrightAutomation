import {test, expec} from '@playwright/test'

test("Hidden dropdown", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //login to the application
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("(//button[normalize-space()='Login'])[1]").click()

    await page.locator(" //span[normalize-space()='PIM']").click()

    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click()

    await page.waitForTimeout(3000)

    const options = await page.$$("//div[@class='oxd-select-dropdown --positon-bottom']//div//span")

    for(let option of options){

        const jobTitle = await option.textContent()
        console.log(jobTitle)

        if(jobTitle.includes("QA Engineer")){

            await option.click()
            break
        }
    }
  
    await page.waitForTimeout(2000)
})