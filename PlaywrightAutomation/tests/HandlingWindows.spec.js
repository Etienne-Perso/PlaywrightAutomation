import{test, expect, chromium} from '@playwright/test'

test("Handling pages/windows", async()=>{

    const browser = await chromium.launch() //creating chromium browser instance
    const context = await browser.newContext() //creating a browser context
    
    const page1 = await context.newPage() //Creating a new page1
    const page2 = await context.newPage() //Creating a new page2

    // Get pages of a browser context
    const allPages = context.pages();
    console.log("Number of pages created:", allPages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://www.orangehrm.com/")
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")

    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)

    await browser.close()
})


test.only("Handling multiple pages/windows", async()=>{

    const browser = await chromium.launch() //creating chromium browser instance
    const context = await browser.newContext() //creating a browser context
    
    const page1 = await context.newPage() //Creating a new page1
   

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    const pagePromise = context.waitForEvent('page') //creating a new empty tab/window  nb: don't put await before context.waitForEvent('page'), this will fail the test. Source: https://playwright.dev/docs/pages
    
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click() //clicking on the link

    const newPage = await pagePromise  //receiving the new opening link in the newPage 

    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")

    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)

    await browser.close()
})