import {test, expect} from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'

import{ HomePage } from '../pages/HomePage'

import { CartPage } from '../pages/CartPage'


test('Test: login, select product and add it to cart', async ({page})=>{

    
    //Login:
        //creating LoginPage object to access this class attributes
        const login = new LoginPage(page)

        //access the app url
        await login.gotoUrl()

        //Providing username and password
        await login.login("pavanol", "test@123")

        await page.waitForTimeout(2000)
       

    //HomePage:
        //creating HomePage object to access this class attributes
        const home = new HomePage(page)
        
        //add the product Nexus to the cart
        await home.addProduct("Iphone 6 32gb")

        await page.waitForTimeout(3000)

        //go to the cart page
        await home.goToCart()


    //Cart
        //creating HomePage object to access this class attributes
        const cart = new CartPage(page)

        //Waiting for some time to load the page
        await page.waitForTimeout(2000)

        //checking the presence of the product in the cart
        const status = await cart.checkproductInCart("Iphone 6 32gb")
        expect(status).toBe(true)
})