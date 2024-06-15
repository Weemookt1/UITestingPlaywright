// productsPage.ts 
import { expect } from '@playwright/test';
import { Page, Locator, } from 'playwright';
export class ProductsPage {
    private page: Page;
    private sortDropdown: string = 'select';
    private priceLowToHighOption: string = 'lohi';
    private addToCartButtons: string = 'button.btn_inventory';
    constructor(page: Page) { this.page = page; }

    async addFirstTwoProductsToCart() {
        await this.page.locator(this.addToCartButtons).nth(0).click();
        await this.page.locator(this.addToCartButtons).nth(1).click();
    }
    async filterProductsByPriceLowToHigh() {
        const dropDown = this.page.locator(this.sortDropdown);
        await dropDown.selectOption({ value: this.priceLowToHighOption })
        // assert its sorted low to high.
        await expect(dropDown).toHaveValue(this.priceLowToHighOption);



    }
}