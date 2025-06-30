import{test, expect} from '@playwright/test'

test('Table', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //1) Total number of columns and rows
    const table=await page.locator("#productTable")

    const columns=await table.locator("thead tr th")
    console.log("Number of columns:", await columns.count()) //4
    await expect(await columns.count()).toBe(4)

    const rows=await table.locator("tbody tr")
    console.log("Number of rows:", await rows.count()) //5
    await expect(await rows.count()).toBe(5)

    //2) Select the product 4 "Smartwatch" amoung the list using filter() function
/*    const matchedRow=rows.filter({
        has: page.locator('td'),
        hasText:'Smartwatch'
    })
    await matchedRow.locator("input").check()
*/
    //3) Select multiple product using re-usable function 
    //await selecMultipleProducts(rows, page, 'Smartphone')
    //await selecMultipleProducts(rows, page, 'Tablet')
    //await selecMultipleProducts(rows, page, 'Wireless Earbuds')

    //4) Print all the product from the table using for loop
/*    for(let i=0; i<await rows.count(); i++){

        //Reading a row by using nth() function
        const row=rows.nth(i)

        //Reading each data from each row 
        const tds=row.locator('td')

        for(let j=0; j<await tds.count()-1; j++){

            //Reading each row with all it's data and print it 
            console.log(await tds.nth(j).textContent())

        }
    }
*/

    //5) Print all the product from the table from all the pages 
    const pages = await page.locator(".pagination li a")
    console.log("Total number of pages:", await pages.count())
    
    for(let p=0; p<await pages.count(); p++){

        //Start clicking on the page number 2 
        //Index 0 is the page number 1
        if(p>0){

            //Reading the pages one by one and click on the page staring from the page N°:2
            await pages.nth(p).click()
        }

        //Reading the data of the table for each page
        for(let i=0; i<await rows.count(); i++){

            //Reading a row by using nth() function
            const row=rows.nth(i)

            //Reading each data from each row 
            const tds=row.locator('td')

            for(let j=0; j<await tds.count()-1; j++){

            //Reading each row with all it's data and print it 
            console.log(await tds.nth(j).textContent())

            }
        }
        await page.waitForTimeout(3000)

    }

    await page.waitForTimeout(3000)
})

//Re-usable function:
async function selecMultipleProducts(rows, page, name){

      const matchedRow=rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator("input").check()

}