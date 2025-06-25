const {test, expect} = require('@playwright/test');

test('Home Page', async({page})=>{

    await page.goto("https://demoblaze.com/");

    const title=await page.title();
    console.log('My Title is: ', title);

    await expect(page).toHaveTitle("STORE");

    const url=page.url();
    console.log('My Url is: ', url);

    await expect(page).toHaveURL("https://demoblaze.com/");

    await page.close();
}); 