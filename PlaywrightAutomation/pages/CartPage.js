exports.CartPage=
class CartPage{

    constructor(page){
        this.page=page
        this.producNamesLocator="//tbody/tr/td[2]"
    }


    async checkproductInCart(productName){

        const productList=await this.page.$$(this.producNamesLocator)
        
        for(const product of productList){
            if(productName===await product.textContent()){

                return true
                break
            }
        }

    }

}