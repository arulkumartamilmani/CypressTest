
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from "../pageObjects/signInPage";


Then("user lands on Signin Page",() => {
  signInPage.verifyTitle();
})

And("user enters {string} username", (string) => {
  signInPage.typeusername(string);
})

And("user enters {string} password", (string) => {
  signInPage.typepassword(string);
})

And("user clicks the SignIn button", () => {
  signInPage.clickSubmit();
})

Then("user encounters Authentiation error",()=>{
  signInPage.verifyAuthError();
})