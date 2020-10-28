
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { homePage, searchResultPage } from "../pageObjects/searchResultPage.js";


Then ("user lands on Search Result Page", ()=>{
    searchResultPage.verifyTitle()
})

And ("Add prodcuts to cart" ,()=>{
    searchResultPage.addProductsToCart()
}
)

And ("goto Checkout Page" ,()=>{
    searchResultPage.gotoCheckoutPage()
}
)