//Environment
const environ = 'prodconfig'

// Page Elements
const txtTitle = 'My Store'
const txtSignin = 'Sign in'
const inputSearch = '#search_query_top'
const searchButton = '.button-search'
const searchBox ='#searchbox'


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
  
  enterSearchTerm(search) {
    cy.get(inputSearch)
      .clear()
      .type(search)
  },

  clickSearch(){
    cy.get(searchButton)
        .first().click()
    cy.get(searchBox).submit()
  },
  
  searchProducts(){
    cy.fixture('appdata').then((data)=>{
        this.enterSearchTerm(data.searchTerm);});
    this.clickSearch();
    
  },

  // Assertions
  verifyTitle() {
    cy.title().should("include", txtTitle);
  }
   
}