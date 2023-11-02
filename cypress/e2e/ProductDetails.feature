Feature: Verify products listing and details page
Background:     
    Given User opens the website

  Scenario: Test Case 8: Verify All Products and product detail page
    When User clicks on Products cta
    Then Verify list of products are shown
    And User clicks on first product from the list
    Then Verify product details page
    

