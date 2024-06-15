// loginPage.ts 
import { Page, Locator } from 'playwright';
export class LoginPage {
    private page: Page;
    private readonly usernameInput: string = 'input[id="user-name"]';
    private readonly passwordInput: string = 'input[id="password"]';
    private readonly loginButton: string = 'input[id="login-button"]';
    constructor(page: Page) { this.page = page; }
    async login(username: string, password: string) {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}
