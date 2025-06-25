import {test, expect} from '@playwright/test'

test('Assertions', async ({page})=>{

    //Open app url
    await page.goto("https://demo.nopcommerce.com/register")

    //1) expect(page).toHaveURL() -->Page has a URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

    //2) expect(page).toHaveTitle() -->Page has a title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3) expect(locator).toBeVisible()	-->Element is visible
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //4) expect(locator).toBeEnabled() -->Element is enabled
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()

    //5) await expect(locator).toBeChecked() -->radio button/Checkbox is checked
    
    //radio button
    const radioButton = await page.locator('#gender-male')
    await radioButton.click()  //select radio button
    await expect(radioButton).toBeChecked()

    //checkbox
    const newsletter = await page.locator('#Newsletter')
    await expect(newsletter).toBeChecked()

    //6) expect(locator).toHaveAttribute() -->Element has a DOM attribute
    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type','submit')

    //7) expect(locator).toHaveText() -->Element matches text
    await expect(await page.locator('.page-title')).toHaveText('Register') // full text value

    //8) expect(locator).toContainText() -->Element contains text
    await expect(await page.locator('.page-title')).toContainText('Regi') // partial text value

    //9) expect(locator).toHaveValue()	-->Input has a value
    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@gmail.com')
    await expect(emailInput).toHaveValue('test@gmail.com')

    //10) expect(locator).toHaveCount()	-->List has exact number of children
    const computersMenuList= await page.locator("//ul[@class='top-menu notmobile']//li[1]//ul[1]//li")
    await expect(computersMenuList).toHaveCount(3)
    await expect(computersMenuList).not.toHaveCount(6) //negative assertion
})