import {test, expect} from '@playwright/test'
import { afterEach, beforeEach } from 'node:test'

/*
NB: before executing your tests make sure to have this configuration
    because by default playright is in parallel mode

    go to playwright.config.js 
    make fullyParallel: false,
    make workers: process.env.CI ? 1 : undefined,
*/

let page

test.beforeAll(async ({browser})=>{

    page = await browser.newPage()

    await page.goto("https://demoblaze.com/")

     //Login
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()
})

test.afterAll(async ()=>{

    //Logout
    await page.locator("#logout2").click()

})

test("Home page test1", async ()=>{

    const products=await page.$$(".col-lg-4.col-md-6.mb-4")
    console.log("Number of products:", products.length)
    await expect(products).toHaveLength(9)
})

test("Add product to cart test2", async ()=>{
   
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[@class='btn btn-success btn-lg']").click()
    
    //alert dialog handler
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain("Product added.") 
        dialog.accept()
    })
})