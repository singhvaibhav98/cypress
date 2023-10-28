import '@cypress/xpath';
class Login_Registration_Page {
    pageName = "Login & Registration Page"
    text_signup_name() { return [cy.get('[data-qa="signup-name"]'), "Signup name text field", this.pageName] }
    text_signup_email() { return [cy.get('[data-qa="signup-email"]'), "Signup email text field", this.pageName] }
    text_login_email() { return [cy.get('[data-qa="login-email"]'), "Login email text field", this.pageName] }
    text_login_password() { return [cy.get('[data-qa="login-password"]'), "Login password text field", this.pageName] }
    button_signup() { return [cy.get('[data-qa="signup-button"]'), "Signup button", this.pageName] }
    button_login() { return [cy.get('[data-qa="login-button"]'), "Login button", this.pageName] }
}
export default Login_Registration_Page