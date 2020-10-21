@feature-Signin
Feature: Testing Sign in on Automation Practice website

  User Logs In
  @Sunnyday
  Scenario: Login with correct username and password
    Given user visits the Home Page
    When user click on Sign in
    Then user lands on Signin Page
    And user enters "valid" username 
    And user enters "valid" password 
    And user clicks the SignIn button
    Then user lands on Account Page
    And user clicks the Logout button

  @Rainyday
  Scenario: Login with correct username and invalid password
    Given user visits the Home Page
    When user click on Sign in
    Then user lands on Signin Page
    And user enters "valid" username 
    And user enters "invalid" password 
    And user clicks the SignIn button
    Then user encounters Authentiation error

  @Stromyday
  Scenario: Login with correct invalid username and invalid password
    Given user visits the Home Page
    When user click on Sign in
    Then user lands on Signin Page
    And user enters "invalid" username 
    And user enters "invalid" password 
    And user clicks the SignIn button
    Then user encounters Authentiation error