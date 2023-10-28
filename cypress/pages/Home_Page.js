import '@cypress/xpath';
class Home_Page {
    pageName = "Home Page"
    img_site_logo() { return [cy.xpath('//div[@class="logo pull-left"]//img'), "Site logo", this.pageName] }
    button_login_register() { return [cy.xpath('//a[@href="/login"]'), "Register button", this.pageName] }
    button_logout() { return [cy.xpath('//a[@href="/logout"]'), "Register button", this.pageName] }
    button_products() { return [cy.xpath('//a[@href="/products"]'), "Products button", this.pageName] }
    button_delete_account() { return [cy.get('.shop-menu > .nav > :nth-child(5) > a'), "Delete Account button", this.pageName] }
    button_continue() { return [cy.get('[data-qa="continue-button"]'), "Continue button", this.pageName] }
}
export default Home_Page