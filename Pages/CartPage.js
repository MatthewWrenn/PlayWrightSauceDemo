class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItemName = '.inventory_item_name';
    }

    async getCartItemName() {
        return this.page.locator(this.cartItemName);
    }
}

module.exports = { CartPage };