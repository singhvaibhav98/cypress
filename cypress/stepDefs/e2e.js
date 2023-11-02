/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import globalData from '../fixtures/global.json'
import testData from '../fixtures/test.json'
import Home_Page from '../pages/Home_Page';
import Login_Registration_Page from '../pages/Login_Registration_Page';
import Products_Details_Page from '../pages/Products_Details_Page';
import Products_Page from '../pages/Products_Page';
import Registration_Page from '../pages/Registration_Page';

Given('User opens the website', () => {
    cy.logMessage("Visit Automation Excercise website")
    cy.visit(globalData.url)
    const home_page = new Home_Page();
    cy.verifyVisible(home_page.img_site_logo());
});

When('User clicks on signup or login cta', () => {
    const home_page = new Home_Page();
    cy.clickOnElement(home_page.button_login_register());
});

And('User enters name and email address to register', () => {
    const login_registration_page = new Login_Registration_Page();
    cy.typeText(login_registration_page.text_signup_name(), testData.name)
    cy.typeText(login_registration_page.text_signup_email(), testData.email)
});

And('User clicks on Signup button', () => {
    const login_registration_page = new Login_Registration_Page();
    cy.clickOnElement(login_registration_page.button_signup());
});

Then('User enters other details in more information page', () => {
    const registration_page = new Registration_Page();
    cy.clickOnElement(registration_page.radio_signup_gender());
    cy.verifyEqualValue(registration_page.text_signup_name(), testData.name);
    cy.verifyEqualValue(registration_page.text_signup_email(), testData.email);
    cy.typeText(registration_page.text_signup_password(), testData.password);
    cy.selectFromDropdown(registration_page.select_signup_dob_date(), testData.dob_date);
    cy.selectFromDropdown(registration_page.select_signup_dob_month(), testData.dob_month);
    cy.selectFromDropdown(registration_page.select_signup_dob_year(), testData.dob_year);
    cy.clickOnElement(registration_page.checkbox_signup_newsletter());
    cy.clickOnElement(registration_page.checkbox_signup_optin());
    cy.typeText(registration_page.text_signup_first_name(), testData.first_name)
    cy.typeText(registration_page.text_signup_last_name(), testData.last_name)
    cy.typeText(registration_page.text_signup_company(), testData.company)
    cy.typeText(registration_page.text_signup_address(), testData.address)
    cy.typeText(registration_page.text_signup_address2(), testData.address2)
    cy.selectFromDropdown(registration_page.select_signup_country(), testData.country);
    cy.typeText(registration_page.text_signup_state(), testData.state)
    cy.typeText(registration_page.text_signup_city(), testData.city)
    cy.typeText(registration_page.text_signup_zipcode(), testData.zipcode)
    cy.typeText(registration_page.text_signup_mobile_number(), testData.mobile_number)
});

And('User clicks on create account button', () => {
    const registration_page = new Registration_Page();
    cy.clickOnElement(registration_page.button_signup_create_account());
});

And('User account should get created', () => {
    const registration_page = new Registration_Page();
    cy.verifyVisible(registration_page.text_registration_successful());
    cy.clickOnElement(registration_page.button_signup_continue());
});

Then('User deletes the account', () => {
    const home_page = new Home_Page();
    cy.clickOnElement(home_page.button_delete_account());
    cy.clickOnElement(home_page.button_continue());
});

Then('User logs out', () => {
    const home_page = new Home_Page();
    cy.clickOnElement(home_page.button_logout());
});

And('User enters email address and password to login', () => {
    const home_page = new Home_Page();
    cy.clickOnElement(home_page.button_login_register());
    const login_registration_page = new Login_Registration_Page();
    cy.typeText(login_registration_page.text_login_email(), testData.email)
    cy.typeText(login_registration_page.text_login_password(), testData.password)
});

And('User clicks on login button', () => {
    const login_registration_page = new Login_Registration_Page();
    cy.clickOnElement(login_registration_page.button_login());
});

When(`User clicks on Products cta`, () => {
    const home_page = new Home_Page();
    cy.clickOnElement(home_page.button_products());
});

Then(`Verify list of products are shown`, () => {
    const products_page = new Products_Page();
    cy.verifyListVisible(products_page.list_products());
});

Then(`User clicks on first product from the list`, () => {
    const products_page = new Products_Page();
    cy.getFirstItem(products_page.list_products()).then(locator => {
        cy.clickOnElement(locator);
    })
});

Then(`Verify product details page`, () => {
    const products_details_page = new Products_Details_Page();
    cy.verifyVisible(products_details_page.text_product_title());
    cy.verifyVisible(products_details_page.text_product_category());
    cy.verifyVisible(products_details_page.text_product_price());
    cy.verifyVisible(products_details_page.text_product_availability());
    cy.verifyVisible(products_details_page.text_product_condition());
    cy.verifyVisible(products_details_page.text_product_brand());
});

Then(`User searches for the product`, () => {
    const products_page = new Products_Page();
    cy.typeText(products_page.text_searchbox(), testData.searchItem);
    cy.clickOnElement(products_page.button_search());
});

Then(`Verify all products are related to search criteria`, () => {
    const products_page = new Products_Page();
    cy.verifyContains(products_page.list_products_title(), testData.searchItem);
});