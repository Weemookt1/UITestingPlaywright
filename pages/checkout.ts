import { Page, Locator } from 'playwright';
export class CheckoutPage {
    private readonly page: Page;
    private readonly firstNameInput: string = '#first-name';
    private readonly lastNameInput: string = '#last-name';
    private readonly zipCodeInput: string = '#postal-code';
    private readonly continueButton: string = '#continue';
    private readonly finishButton: string = '#finish';
    constructor(page: Page) { this.page = page; }
    async enterShippingDetails(firstName: string, lastName: string, zipCode: string) {
        await this.page.locator(this.firstNameInput).fill(firstName);
        await this.page.locator(this.lastNameInput).fill(lastName);
        await this.page.locator(this.zipCodeInput).fill(zipCode);
        await this.page.locator(this.continueButton).click();
    }
    async completePurchase() {
        await this.page.locator(this.finishButton).click();
    }
}