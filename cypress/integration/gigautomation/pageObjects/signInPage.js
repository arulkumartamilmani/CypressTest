//Environment
const environ = 'prodconfig'

//Page Elements
const txtTitle ='Login - My Store'
const inputEmail = '#email'
const inputPassword = '#passwd'
const buttonSubmit = '#SubmitLogin'
const txtAuthError = 'Authentication failed.'
//const accountName = '//span[contains(@class,\'account\')]'

export const signInPage = {
// Actions
  enterEmail(email) {
    cy.get(inputEmail)
      .clear()
      .type(email)
  },
  
  enterPassword(password) {
    cy.get(inputPassword)
      .clear()
      .type(password)
  },
  
  clickSubmit() {
    cy.get(buttonSubmit)
      .first().click()
  },
  
  typeusername(args){
    var txtEmail=""; 
    switch(args){
      case "valid":
        cy.fixture('appdata').then((data)=>{
          this.enterEmail(data.email);});
      break;
      case "invalid":
        cy.fixture('appdata').then((data)=>{
          this.enterEmail(data.invalidEmail);})
      break;
    }
  },

  typepassword(args){
    var txtPassword="";
    switch(args){
      case "valid":
        cy.fixture('appdata').then((data)=>{
          this.enterPassword(data.password);});
      break;
      case "invalid":
        cy.fixture('appdata').then((data)=>{
          this.enterPassword(data.invalidPassword);});
      break;
    }
  },

  // Assertions
  verifyAccountNameDisplayed() {
    cy.fixture('testdata').then((data) => {
      cy.xpath(accountName)
        .invoke('text')
        .should('contain', data.username)
    })
  },

  verifyTitle() {
    cy.title().should("include", txtTitle);
  },

  verifyAuthError(){
    cy.contains(txtAuthError)
       .invoke('show').should('be.visible');
  }
 
}