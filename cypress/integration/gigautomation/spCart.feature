@feature-ShoppingCart
Feature: Testing Shopping Cart tracks correctly on Automation Practice website

  User Shops Items
  @ShoppingCartWorkFlow
  Scenario: Add items to Shopping Cart and Checkout
    Given user visits the Home Page
    When user searches for products
    Then user lands on Search Result Page
    And Add prodcuts to cart
    And goto Checkout Page
    When user lands on Shopping Cart Page
    Then user changes the Product quantity
    And user removes Product one from cart
    And user validates the shopping cart items
    Then user click on Checkout
    Then user lands on SignIn Page


