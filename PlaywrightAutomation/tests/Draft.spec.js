import{test, expect} from '@playwright/test'


test("test", async ({page})=>{


await page.goto("https://demoblaze.com/index.html")

//login
await page.locator("#login2").click()
await page.locator("#loginusername").fill("pavanol")
await page.locator("#loginpassword").fill("test@123")
await page.locator("//button[normalize-space()='Log in']").click()

await page.waitForSelector("//*[@id='tbodyid']/div/div/div/h4/a")

//home page
const productList=await page.$$("//*[@id='tbodyid']/div/div/div/h4/a")
for(const product of productList){
    console.log(await product.textContent())
}

})