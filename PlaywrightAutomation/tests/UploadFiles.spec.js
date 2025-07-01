import {test, expect} from '@playwright/test'

test("Upload single file", async ({page})=>{

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")

    await page.locator("//input[@type='file']").click()

    await page.locator("//input[@type='file']").setInputFiles("tests/uploadFiles/nature.jpg")

    await page.waitForTimeout(9000)



})