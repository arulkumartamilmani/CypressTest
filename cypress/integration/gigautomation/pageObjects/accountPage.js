//Environment
const environ = 'prodconfig'

// Page Elements
const txtTitle = 'My account - My Store'
const txtSignOut = 'Sign out'


export const accountPage = {  
  
  // Actions
  visithomePage(){
    // loading prod config
    cy.fixture(environ).then((data)=>{
      cy.visit(data.homePageurl);})
  },

  clickSignOut() {
    cy.xpath("//*[contains(text(),'" + txtSignOut + "')]")
        .first().click()
  },

  // Assertions
  verifyTitle() {
    cy.title().should("include", txtTitle);
  },

  verifyUsername() {
    cy.fixture('appdata').then((usr_data)=>{
        cy.contains(usr_data.username)
            .invoke('show').should('be.visible');})
  }
   
}