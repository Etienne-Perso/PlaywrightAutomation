import {test, expect} from '@playwright/test'

test("Handling frames", async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    //total number of frames
    const allframes = await page.frames()
    console.log("Number of frames: ", allframes.length)

    //Approch 1: using frame's name attribute or frame's URL
    //const frame1=await page.frame('name') // if name is present
    //const frame1=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    //await frame1.fill("//input[@name='mytext1']", "Hello")

    //Approach 2: using frame locator
    await page.frameLocator("[src='frame_1.html']").locator("//input[@name='mytext1']").fill("Hello")

    await page.waitForTimeout(5000)
})