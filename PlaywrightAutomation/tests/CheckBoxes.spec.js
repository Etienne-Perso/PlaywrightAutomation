import {test, expect} from '@playwright/test'

test('Handle check box', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Single check box:

    //selecting the check box 
    await page.locator("//input[@value='sunday']").check()
    //await page.check("//input[@value='sunday']") 

    //validating the chech box 
    await expect(await page.locator("//input[@value='sunday']")).toBeChecked()
    await expect(page.locator("//input[@value='sunday']").isChecked()).toBeTruthy()


    //Multiple check boxes:

    const checkBoxLocators = [
        "//input[@value='sunday' and @type='checkbox']",
        "//input[@value='monday' and @type='checkbox']",
        "//input[@value='saturday' and @type='checkbox']"
    ];

    //selecting the check boxes
    for(const checkBoxLocator of checkBoxLocators){

        await page.locator(checkBoxLocator).check()
    }

    //Putting 5 seconds before closing the browser
    await page.waitForTimeout(5000)

    //selecting the check boxes already selected
    for(const checkBoxLocator of checkBoxLocators){

        if(await page.locator(checkBoxLocator).isChecked()){

            await page.locator(checkBoxLocator).uncheck()
        }

    }

    //Putting 5 seconds before closing the browser
    await page.waitForTimeout(5000)

})