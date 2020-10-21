//Environment
const environ = 'prodconfig'

// Page Elements
const txtTitle = 'My Store'
const txtSignin = 'Sign in'


export const homePage = {  
  
  // Actions
  visithomePage(){
    // loading prod config
    cy.fixture(environ).then((data)=>{
      cy.visit(data.homePageurl);})
  },

  clickSignIn() {
    cy.xpath("//*[contains(text(),'" + txtSignin + "')]")
        .first().click()
  },

  // Assertions
  verifyTitle() {
    cy.title().should("include", txtTitle);
  }
   
}