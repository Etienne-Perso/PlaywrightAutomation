/*
In order to have access of this class outside of this file, 
use this expression: exports.className= className
*/

exports.LoginPage=
class LoginPage{

    constructor(page){
        this.page = page
        this.loginButtonLink = "#login2"
        this.usernameInput = "#loginusername"
        this.passwordInput = "#loginpassword"
        this.loginButton = "//button[normalize-space()='Log in']"
    }

    async gotoUrl(){
        await this.page.goto("https://demoblaze.com/index.html")
    }

    async login(username, password){

        await this.page.locator(this.loginButtonLink).click()
        await this.page.locator(this.usernameInput).fill(username)
        await this.page.locator(this.passwordInput).fill(password)
        await this.page.locator(this.loginButton).click()
    }


}