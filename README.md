# Cypress Automation Excercise 
### https://automationexercise.com/test_cases

#### Test Cases Covered
- Test Case 1: Register User
- Test Case 2: Login User with correct email and password
- Test Case 8: Verify All Products and product detail page
- Test Case 9: Search Product
- Test Case 12: Add Products in Cart
- Test Case 13: Verify Product quantity in Cart

#### Folder Structure
![Alt text](image-2.png)

- components/Components.js
_This contains reusable flows of the application such as com_openurl, com_registraion, com_delete_account etc. These flows internally calls action methods from support/command.js and operate action of page elements from pages folder_

- e2e/demo.cy.js
_This contains all the test cases, the test cases are calling component flows_

- pages/**.js
_These js files contains page elements with other details such as an alias to identify the element in report and page name. We have option to use cy.get or cy.xpath as well to identify and allocate the elements_

- support/command.js
_This contains custom wrapper and utilities methods to take action and log in report as well_

#### Reporting
Using mochawesome report for reporting purpose. Use below command to run test case and generate report. Screenshots are being taken after each action
_npx cypress run --reporter mochawesome_

#### Sample Report
![Alt text](image-1.png)

#### Issues
Add to cart button not working even manually in browser window.