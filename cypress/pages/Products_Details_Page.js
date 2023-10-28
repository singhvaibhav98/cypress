import '@cypress/xpath';
class Products_Details_Page {
    pageName = "Products Details Page"
    text_product_title() { return [cy.get('.product-information > h2'), "Product title", this.pageName] }
    text_product_category() { return [cy.get('.product-information > :nth-child(3)'), "Product Category", this.pageName] }
    text_product_price() { return [cy.get(':nth-child(5) > span'), "Product Price", this.pageName] }
    text_product_availability() { return [cy.get('.product-information > :nth-child(6)'), "Product Availability", this.pageName] }
    text_product_condition() { return [cy.get('.product-information > :nth-child(7)'), "Product Condition", this.pageName] }
    text_product_brand() { return [cy.get('.product-information > :nth-child(8)'), "Product Brand", this.pageName] }
    text_quantity() { return [cy.get('#quantity'), "Quantity field", this.pageName] }
    button_add_to_cart() { return [cy.get(':nth-child(5) > .btn'), "Add to cart button", this.pageName] }
}
export default Products_Details_Page