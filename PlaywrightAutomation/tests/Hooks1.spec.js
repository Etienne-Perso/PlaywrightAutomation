import {test, expect} from '@playwright/test'

/*
NB: the problem here is the duplication of the code

to overcome this. Refers to Hooks2.spec.js

*/

test("Home page test", async ({page})=>{

    await page.goto("https://demoblaze.com/")

    //Login
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()  

    //Home page
    const products=await page.$$(".col-lg-4.col-md-6.mb-4")
    console.log("Number of products:", products.length)
    await expect(products).toHaveLength(9)

    //Logout
    await page.locator("#logout2").click()
})

test("Add product to cart test", async ({page})=>{
    await page.goto("https://demoblaze.com/")

    //Login
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()  

    //Add product to the cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[@class='btn btn-success btn-lg']").click()
    
    //alert dialog handler
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain("Product added.") 
        dialog.accept()
    })

     //Logout
    await page.locator("#logout2").click()
})