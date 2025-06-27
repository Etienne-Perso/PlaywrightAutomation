import {test, expect} from '@playwright/test'

test('Handling alert with ok', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //1) Simple alert:
    
    //Enabling dialog window handler   --> By default, dialogs are auto-dismissed by Playwright,
                                        // so you don't have to handle them. 
                                        // However, you can register a dialog handler before 
                                        // the action that triggers the dialog to either dialog.
                                        // accept() or dialog.dismiss() it.
    page.on("dialog", async dialog=>{

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })
    
    await page.click("//button[@id='alertBtn']")

    await page.waitForTimeout(3000)
})


test('Handling confirmation alert with ok & cancel button', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //2) Confirmation alert:
    
    //Enabling dialog window handler 
    page.on("dialog", async dialog=>{
        
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept() // by using ok button
        //await dialog.dismiss() //by using cancel button
    })
    
    await page.click("//button[@id='confirmBtn']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')

    await page.waitForTimeout(3000)
})

test('Handling prompt alert with input textBox', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //3) Prompt alert:
    
    //Enabling dialog window handler 
    page.on("dialog", async dialog=>{
        
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain("Harry Potter") //checking the default value 
        await dialog.accept("John") //closing the alert with Jhon as new value
    })
    
    await page.click("//button[@id='promptBtn']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?')

    await page.waitForTimeout(3000)
})