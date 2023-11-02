Feature: Login to a website
Background:     
    Given User opens the website
    When User clicks on signup or login cta
    And User enters name and email address to register
    And User clicks on Signup button
    Then User enters other details in more information page
    And User clicks on create account button
    And User account should get created
    Then User logs out

  Scenario: Test Case 2: Login User with correct email and password
    When User clicks on signup or login cta
    And User enters email address and password to login
    And User clicks on login button
    Then User deletes the account

