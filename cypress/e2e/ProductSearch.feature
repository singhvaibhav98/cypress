Feature: Search for product
  Background:
    Given User opens the website

  Scenario: Test Case 9: Search Product
    When User clicks on Products cta
    Then Verify list of products are shown
    And User searches for the product
    Then Verify all products are related to search criteria