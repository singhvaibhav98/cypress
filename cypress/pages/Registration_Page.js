import '@cypress/xpath';
class Registration_Page {
    pageName = "Registration Page"
    radio_signup_gender() { return [cy.get('#id_gender1'), "Gender radio button", this.pageName] }
    text_signup_name() { return [cy.get('[data-qa="name"]'), "Name field", this.pageName] }
    text_signup_email() { return [cy.get('[data-qa="email"]'), "Email field", this.pageName] }
    text_signup_password() { return [cy.get('[data-qa="password"]'), "Password field", this.pageName] }
    select_signup_dob_date() { return [cy.get('[data-qa="days"]'), "Date of birth - date dropdown", this.pageName] }
    select_signup_dob_month() { return [cy.get('[data-qa="months"]'), "Date of birth - month dropdown", this.pageName] }
    select_signup_dob_year() { return [cy.get('[data-qa="years"]'), "Date of birth - year dropdown", this.pageName] }
    checkbox_signup_newsletter() { return [cy.get('#newsletter'), "Newsletter checkbox", this.pageName] }
    checkbox_signup_optin() { return [cy.get('#optin'), "Opt in checkbox", this.pageName] }
    text_signup_first_name() { return [cy.get('[data-qa="first_name"]'), "First name field", this.pageName] }
    text_signup_last_name() { return [cy.get('[data-qa="last_name"]'), "Last name field", this.pageName] }
    text_signup_company() { return [cy.get('[data-qa="company"]'), "Company field", this.pageName] }
    text_signup_address() { return [cy.get('[data-qa="address"]'), "Address field", this.pageName] }
    text_signup_address2() { return [cy.get('[data-qa="address2"]'), "Address 2 field", this.pageName] }
    select_signup_country() { return [cy.get('[data-qa="country"]'), "Country dropdown", this.pageName] }
    text_signup_state() { return [cy.get('[data-qa="state"]'), "State field", this.pageName] }
    text_signup_city() { return [cy.get('[data-qa="city"]'), "City field", this.pageName] }
    text_signup_zipcode() { return [cy.get('[data-qa="zipcode"]'), "Zipcode field", this.pageName] }
    text_signup_mobile_number() { return [cy.get('[data-qa="mobile_number"]'), "Mobile number field", this.pageName] }
    button_signup_create_account() { return [cy.get('[data-qa="create-account"]'), "Create account button", this.pageName] }
    text_registration_successful() { return [cy.get('b'), "Account Created message", this.pageName] }
    button_signup_continue() { return [cy.get('[data-qa="continue-button"]'), "Continue button", this.pageName] }
}
export default Registration_Page