Feature: Registration to the website
Background:     
    Given User opens the website
    
  Scenario: Test Case 1: Register User
    Given User clicks on signup or login cta
    And User enters name and email address to register
    And User clicks on Signup button
    Then User enters other details in more information page
    And User clicks on create account button
    And User account should get created
    Then User deletes the account