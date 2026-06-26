const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { ProductsPage } = require('./pages/ProductsPage');
const { CartPage } = require('./pages/CartPage');

test.describe('Sauce Demo Tests - Page Object Model', () => {

    test('User can login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        const productsPage = new ProductsPage(page);
        await expect(await productsPage.getTitle()).toHaveText('Products');
    });

    test('User can add item to cart and verify', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        const productsPage = new ProductsPage(page);
        await productsPage.addBackpackToCart();
        await productsPage.goToCart();

        const cartPage = new CartPage(page);
        await expect(await cartPage.getCartItemName()).toHaveText('Sauce Labs Backpack');
    });

});