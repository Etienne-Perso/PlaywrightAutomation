import {test, expect} from '@playwright/test'

test('Soft Assertions', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html')

    //Hard assertions  --> if one of the assertion fails that will terminate immidiately the execution of the code
    /*await expect(page).toHaveTitle('STORE123')
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
    await expect(await page.locator('#nava')).toBeVisible()
    */
   
    //Soft assertions  --> even one of the soft assertion fails this will not terminate the code
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
    await expect.soft(await page.locator('#nava')).toBeVisible()




})