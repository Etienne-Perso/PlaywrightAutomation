import {test, expect} from '@playwright/test'

//Only
// test.only('Test1', async ({page})=>{
//     console.log("This is Test1...")
// })

//Skip
// test.skip('Test2', async ({page})=>{
//     console.log("This is Test2...")
// })

//Skip with conditions
// test('Test3', async ({page, browserName})=>{
//     if(browserName=="firefox"){
//         test.skip()
//     }
//     console.log("This is Test3...")
// })

//Fixme
// test('Test4', async ({page})=>{
    
//     test.fixme()
//     console.log("This is Test4...")
// })


//Fail
// test('Test5', async ({page})=>{
    
//     test.fail() //expected
//     console.log("This is Test5...")
//     expect(1).toBe(2) //actual . If both expected & actual results is failed then test pass
// })

//Fail with condition

// test('Test6', async ({page, browserName})=>{
//     // if(browserName=="firefox"){
//     //    test.fail() //expected 
//     // }

//     console.log("This is Test6...")
// })

//Slow
/*
NB: set configuration below

    go to playwright.config.js
    go to use{}
    under use{} add timeout:1000,
*/
test('Test7', async ({page, browserName})=>{
    //test.slow() //This will triple the timeout for the execution of the test
    //test.setTimeout(5000)
    await page.goto("https://demoblaze.com/index.html")
    console.log("This is Test7...")
})


