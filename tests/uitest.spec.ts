// testScript.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { ProductsPage } from '../pages/product';
import { CartPage } from '../pages/cart';
import { CheckoutPage } from '../pages/checkout';
import { userName, password } from '../data/user.json'

test('E-commerce Test Suite', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.login(userName, password);

  // Assertion for successful login 
  const productsTitle = await page.textContent('.title');
  expect(productsTitle).toContain('Products');

  await productsPage.filterProductsByPriceLowToHigh();
  await productsPage.addFirstTwoProductsToCart();
  // Assertion for products added to cart 
  const cartBadgeText = await page.textContent('.shopping_cart_badge');
  expect(cartBadgeText).toBe('2');

  // Proceed to checkout await 
  await cartPage.proceedToCheckout();

  // Enter shipping details and complete purchase 
  await checkoutPage.enterShippingDetails('John', 'Doe', '12345');
  await checkoutPage.completePurchase();
  
  // Assertion for successful purchase completion 
  const orderConfirmationText = await page.textContent('.complete-header'); 
  expect(orderConfirmationText).toBe('Thank you for your order!'); 
});
