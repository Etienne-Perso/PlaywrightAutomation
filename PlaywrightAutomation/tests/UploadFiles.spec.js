import {test, expect} from '@playwright/test'

test("Upload single file", async ({page})=>{

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")


    //await page.locator("//input[@type='file']").setInputFiles("tests/uploadFiles/nature.jpg")
    await page.setInputFiles("//input[@type='file']", "tests/uploadFiles/nature.jpg")

    await page.waitForTimeout(3000)
})

test.only("Upload multiple files", async ({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    //Uploading the 2 files
    await page.locator("#filesToUpload").setInputFiles(["tests/uploadFiles/nature.jpg","tests/uploadFiles/nature1.jpg"])

    //check the field's file names
    await expect(await page.locator("div[class='main'] li:nth-child(1)")).toHaveText("nature.jpg") 
    await expect(await page.locator("div[class='main'] li:nth-child(2)")).toHaveText("nature1.jpg") 

    await page.waitForTimeout(3000)

    //Removing the files
    await page.setInputFiles("#filesToUpload",[])
    await expect(await page.locator("//li[normalize-space()='No Files Selected']")).toHaveText("No Files Selected")

    await page.waitForTimeout(3000)    
})