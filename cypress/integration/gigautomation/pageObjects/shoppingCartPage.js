//Environment
const environ = 'prodconfig'

// Page Elements
const txtTitle = 'Order - My Store'
const incrementQtyProduct2 = '#cart_quantity_up_4_16_0_0 .icon-plus'
const removeProdcut1 = '#\\35_19_0_0 > .icon-trash'
const btn_standardcheckout = '.standard-checkout > span'

export const shoppingCartPage = {  
  
  // Actions
  visitsearchResultPage(){
    // loading prod config
    cy.fixture(environ).then((data)=>{
      cy.visit(data.searchResultPageurl);})
  },

  clicktoIcerementqtyproduct2(){
    cy.get(incrementQtyProduct2).click()
  },

  clicktoRemoveproduct1(){
    cy.get(removeProdcut1).click()
  },

  clickcheckout(){
    cy.get(btn_standardcheckout).click()
  },

  addProductsToCart(){
      cy.get(product1).click()
      this.clickcontinueShopping()
      cy.get(product2).click() 
  },

  gotoCheckoutPage(){
    this.clickproceedtocheckout()
  },


  // Assertions
  verifyTitle() {
    cy.title().should("include", txtTitle);
  },

  validatecartitems(){
    cy.get('.cart_quantity_input')
        .should('have.value','2')
  }
   

}