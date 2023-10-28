/// <reference types="cypress" />
import Home_Page from '../pages/Home_Page';
import Login_Registration_Page from '../pages/Login_Registration_Page';
import Products_Details_Page from '../pages/Products_Details_Page';
import Products_Page from '../pages/Products_Page';
import Registration_Page from '../pages/Registration_Page';
class Components {
    com_openurl(appURL) {
        cy.logMessage("Visit Automation Excercise website")
        cy.visit(appURL)
        const home_page = new Home_Page();
        cy.verifyVisible(home_page.img_site_logo());
        return this;
    }
    com_registraion(registrationData) {
        const home_page = new Home_Page();
        cy.clickOnElement(home_page.button_login_register());

        const login_registration_page = new Login_Registration_Page();
        cy.typeText(login_registration_page.text_signup_name(), registrationData.name)
        cy.typeText(login_registration_page.text_signup_email(), registrationData.email)
        cy.clickOnElement(login_registration_page.button_signup());

        const registration_page = new Registration_Page();
        cy.clickOnElement(registration_page.radio_signup_gender());
        cy.verifyEqualValue(registration_page.text_signup_name(), registrationData.name);
        cy.verifyEqualValue(registration_page.text_signup_email(), registrationData.email);
        cy.typeText(registration_page.text_signup_password(), registrationData.password);
        cy.selectFromDropdown(registration_page.select_signup_dob_date(), registrationData.dob_date);
        cy.selectFromDropdown(registration_page.select_signup_dob_month(), registrationData.dob_month);
        cy.selectFromDropdown(registration_page.select_signup_dob_year(), registrationData.dob_year);
        cy.clickOnElement(registration_page.checkbox_signup_newsletter());
        cy.clickOnElement(registration_page.checkbox_signup_optin());
        cy.typeText(registration_page.text_signup_first_name(), registrationData.first_name)
        cy.typeText(registration_page.text_signup_last_name(), registrationData.last_name)
        cy.typeText(registration_page.text_signup_company(), registrationData.company)
        cy.typeText(registration_page.text_signup_address(), registrationData.address)
        cy.typeText(registration_page.text_signup_address2(), registrationData.address2)
        cy.selectFromDropdown(registration_page.select_signup_country(), registrationData.country);
        cy.typeText(registration_page.text_signup_state(), registrationData.state)
        cy.typeText(registration_page.text_signup_city(), registrationData.city)
        cy.typeText(registration_page.text_signup_zipcode(), registrationData.zipcode)
        cy.typeText(registration_page.text_signup_mobile_number(), registrationData.mobile_number)
        cy.clickOnElement(registration_page.button_signup_create_account());
        cy.verifyVisible(registration_page.text_registration_successful());
        cy.clickOnElement(registration_page.button_signup_continue());
        return this;
    }
    com_delete_account() {
        const home_page = new Home_Page();
        cy.clickOnElement(home_page.button_delete_account());
        cy.clickOnElement(home_page.button_continue());
        return this;
    }
    com_logout() {
        const home_page = new Home_Page();
        cy.clickOnElement(home_page.button_logout());
        return this;
    }
    com_login(registrationData) {
        const home_page = new Home_Page();
        cy.clickOnElement(home_page.button_login_register());
        const login_registration_page = new Login_Registration_Page();
        cy.typeText(login_registration_page.text_login_email(), registrationData.email)
        cy.typeText(login_registration_page.text_login_password(), registrationData.password)
        cy.clickOnElement(login_registration_page.button_login());
        return this;
    }

    com_verify_products_page() {
        const home_page = new Home_Page();
        cy.clickOnElement(home_page.button_products());

        const products_page = new Products_Page();
        cy.verifyListVisible(products_page.list_products());
        return this;
    }

    com_validate_first_item_product_detail_page() {
        const products_page = new Products_Page();
        cy.getFirstItem(products_page.list_products()).then(locator => {
            cy.clickOnElement(locator);
        })

        const products_details_page = new Products_Details_Page();
        cy.verifyVisible(products_details_page.text_product_title());
        cy.verifyVisible(products_details_page.text_product_category());
        cy.verifyVisible(products_details_page.text_product_price());
        cy.verifyVisible(products_details_page.text_product_availability());
        cy.verifyVisible(products_details_page.text_product_condition());
        cy.verifyVisible(products_details_page.text_product_brand());
        return this;
    }

    com_add_to_cart_product_detail_page() {
        const products_page = new Products_Page();
        cy.hover(products_page.text_products_title(1));
        cy.clickNoScroll(products_page.button_add_to_cart(1));
        cy.clickOnElement(products_page.button_continue_shopping())
        cy.hover(products_page.text_products_title(2));
        cy.clickNoScroll(products_page.button_add_to_cart(2));
        cy.clickOnElement(products_page.button_viewcart())
        return this;
    }

    com_searchAndVerifyProductList(searchItem) {
        const products_page = new Products_Page();
        cy.typeText(products_page.text_searchbox(), searchItem);
        cy.clickOnElement(products_page.button_search());
        cy.verifyContains(products_page.list_products_title(), searchItem);
    }

    com_add_product(quantity) {
        const products_details_page = new Products_Details_Page();
        cy.typeText(products_details_page.text_quantity(), quantity);
        cy.clickNoScroll(products_details_page.button_add_to_cart());
    }
}
export default Components