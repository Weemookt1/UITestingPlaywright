import { Page } from 'playwright';
export class CartPage {
    private readonly page: Page;
    private readonly cartButton: string = '#shopping_cart_container';
    private readonly checkoutButton: string = '#checkout'
    constructor(page: Page) { this.page = page; }
    async proceedToCheckout() {
        await this.page.locator(this.cartButton).click();
        await this.page.locator(this.checkoutButton).click();
    }
}