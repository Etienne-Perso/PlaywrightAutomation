exports.HomePage=
class HomePage {


    constructor(page){
        this.page = page
        this.productNamesLocator="//*[@id='tbodyid']/div/div/div/h4/a"
        this.addToCartButton="//a[@class='btn btn-success btn-lg']"
        this.cartLink="//a[@id='cartur']"
    }

    async addProduct(productName){
        const productList = await this.page.$$(this.productNamesLocator)
        for(const product of productList){

            if(productName === await product.textContent()){
                await product.click()
                console.log(productName)
                break
            }
        }
        await this.page.locator(this.addToCartButton).click()
        await this.page.on('dialog', async dialog =>{
            if(dialog.message().includes("added")){
                await dialog.accept()
            }
        })     
    }

    async goToCart(){
        await this.page.locator(this.cartLink).click()   
    }

}