
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { accountPage, signInPage } from "../pageObjects/accountPage";


Then("user lands on Account Page",() => {
  accountPage.verifyTitle();
  accountPage.verifyUsername();
})


And("user clicks the Logout button", () => {
  accountPage.clickSignOut();
})

