class ProductsPage {
    constructor(page) {
        this.page = page;
        this.title = '.title';
        this.addToCartBackpack = '#add-to-cart-sauce-labs-backpack';
        this.cartIcon = '.shopping_cart_link';
    }

    async getTitle() {
        return this.page.locator(this.title);
    }

    async addBackpackToCart() {
        await this.page.click(this.addToCartBackpack);
    }

    async goToCart() {
        await this.page.click(this.cartIcon);
    }
}

module.exports = { ProductsPage };