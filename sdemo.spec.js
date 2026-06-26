const { test, expect } = require('@playwright/test');

test.describe('Sauce Demo Tests', () => {

    test('Login with valid credentials', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('Add item to cart and verify', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        await page.click('#add-to-cart-sauce-labs-backpack');
        await page.click('.shopping_cart_link');

        await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    });

    test('Logout works', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        await page.click('#react-burger-menu-btn');
        await page.click('#logout_sidebar_link');

        await expect(page.locator('#login-button')).toBeVisible();
    });

});