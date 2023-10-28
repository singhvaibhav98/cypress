import '@cypress/xpath';
class Products_Page {
    pageName = "Products Page"
    text_all_products() { return [cy.get('.title'), "All products title", this.pageName] }
    list_products() { return [cy.xpath('//div[@class="features_items"]//div[@class="product-image-wrapper"]/div[2]'), "Products list", this.pageName] }
    button_add_to_cart(num) { return [cy.xpath('(//div[@class="productinfo text-center"]//a[text()="Add to cart"])[' + num + ']'), "Add to cart " + num + " item", this.pageName] }
    list_products_title() { return [cy.xpath('//div[@class="features_items"]//div[@class="product-image-wrapper"]//p'), "Products list title", this.pageName] }
    text_products_title(num) { return [cy.get(':nth-child(' + (num + 2) + ') > .product-image-wrapper > .single-products > .productinfo'), "Product " + num, this.pageName] }
    text_searchbox() { return [cy.get('#search_product'), "Search box", this.pageName] }
    button_search() { return [cy.get('#submit_search'), "Search button", this.pageName] }
    button_viewcart() { return [cy.get('u'), "View cart button", this.pageName] }
    button_continue_shopping() { return [cy.get('.modal-footer > .btn'), "Continue shopping button", this.pageName] }
}
export default Products_Page