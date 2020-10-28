
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { shoppingCartPage } from "../pageObjects/shoppingCartPage.js";
import { signInPage } from "../pageObjects/signInPage.js";


Then ("user lands on Shopping Cart Page", ()=>{
    shoppingCartPage.verifyTitle()
})

Then ("user changes the Product quantity" ,()=>{
    shoppingCartPage.clicktoIcerementqtyproduct2()
    
}
)

And ("user removes Product one from cart" ,()=>{
    shoppingCartPage.clicktoRemoveproduct1()
}
)

And ("user validates the shopping cart items",()=>{
    shoppingCartPage.validatecartitems()

}
)

Then ("user click on Checkout",()=>{
   shoppingCartPage.clickcheckout() 
}

)

Then ("user lands on SignIn Page",()=>{
    signInPage.verifyTitle()
}

)