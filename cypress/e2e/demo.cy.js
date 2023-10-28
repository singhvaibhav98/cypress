/// <reference types="cypress" />
import Components from '../components/Components'
import globalData from '../fixtures/global.json'
import testData from '../fixtures/test.json'

//Test cases
describe('Automation Practice Tests', () => {
  const cp = new Components()
  it('Test Case 1: Register User', () => {
    cp
      .com_openurl(globalData.url)
      .com_registraion(testData)
      .com_delete_account();
  })
  it('Test Case 2: Login User with correct email and password', () => {
    cp
      .com_openurl(globalData.url)
      .com_registraion(testData)
      .com_logout()
      .com_login(testData)
      .com_delete_account();
  })
  it('Test Case 8: Verify All Products and product detail page', () => {
    cp
      .com_openurl(globalData.url)
      .com_verify_products_page()
      .com_validate_first_item_product_detail_page()
  })
  it('Test Case 9: Search Product', () => {
    cp
      .com_openurl(globalData.url)
      .com_verify_products_page()
      .com_searchAndVerifyProductList(testData.searchItem)
  })
  it('Test Case 12: Add Products in Cart', () => {
    cp
      .com_openurl(globalData.url)
      .com_verify_products_page()
      .com_add_to_cart_product_page()
  })
  it('Test Case 13: Verify Product quantity in Cart', () => {
    cp
      .com_openurl(globalData.url)
      .com_verify_products_page()
      .com_validate_first_item_product_detail_page()
      .com_add_product(testData.quantity)
  })
})
