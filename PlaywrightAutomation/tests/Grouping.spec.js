import {test, expect} from '@playwright/test'

/*
in order to group multiple tests in one groupe, 
you have to keep your tests in one describe block
as it's shown down below

To execute just specific groups, we use the key word: only
To skip specific groups, we use the key word: skip

*/

//Hooks concept
test.beforeAll(async()=>{
    console.log("This is beforeAll Hook.")
})

test.afterAll(async ()=>{
    console.log("This is afterAll Hook.")
})

test.beforeEach(async()=>{
    console.log("This is beforeEach Hook.")
})

test.afterEach(async()=>{
    console.log("This is afterEach Hook")
})


test.describe.only("Group 1", async()=>{

    test("Test 1", async ({page})=>{

    console.log("This is my test1...")
    })

    test("Test 2", async ({page})=>{

    console.log("This is my test2...")
    })
})

test.describe.skip("Group 2", async ()=>{

    test("Test 3", async ({page})=>{

    console.log("This is my test3...")
    })

    test("Test 4", async ({page})=>{

    console.log("This is my test4...")
    })
})