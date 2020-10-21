
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../pageObjects/homePage.js";


Given("user visits the Home Page", () => {
  homePage.visithomePage();
  homePage.verifyTitle();
})

When("user click on Sign in", () => {
    homePage.clickSignIn();
})
