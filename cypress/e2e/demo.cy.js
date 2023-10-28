/// <reference types="cypress" />
import Components from '../Components/Components'
import globalData from '../fixtures/global.json'
import testData from '../fixtures/test.json'

describe('Automation Practice Tests', () => {
  it('Test Case 1: Register User', () => {
    const cp = new Components()
    cp
      .com_openurl(globalData.url)
      .com_registraion(testData)
      .com_delete_account();
  })
  it('Test Case 2: Login User with correct email and password', () => {
    const cp = new Components()
    cp
      .com_openurl(globalData.url)
      .com_registraion(testData)
      .com_logout()
      .com_login(testData)
      .com_delete_account();
  })
  it('Test Case 8: Verify All Products and product detail page', () => {
    const cp = new Components()
    cp
      .com_openurl(globalData.url)
      .com_verify_products_page()
      .com_validate_first_item_product_detail_page()
  })
  it('Test Case 9: Search Product', () => {
    const cp = new Components()
    cp
      .com_openurl(globalData.url)
      .com_verify_products_page()
      .com_searchAndVerifyProductList(testData.searchItem)
  })
  it('Test Case 12: Add Products in Cart', () => {
    const cp = new Components()
    cp
      .com_openurl(globalData.url)
      .com_verify_products_page()
      .com_add_to_cart_product_detail_page()
  })
  it('Test Case 13: Verify Product quantity in Cart', () => {
    const cp = new Components()
    cp
      .com_openurl(globalData.url)
      .com_verify_products_page()
      .com_validate_first_item_product_detail_page()
      .com_add_product(testData.quantity)
  })
})
