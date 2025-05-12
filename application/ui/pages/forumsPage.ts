import {Locator, Page} from '@playwright/test';
import {R_AND_D_FORUMS_URL_REGEX} from "../constants";
import Navigation from "../forumsPage/navigation/navigation";
import Register from '../forumsPage/body/register';
import Agreement from "../forumsPage/body/agreement";

export class ForumsPage {
    readonly page: Page;
    readonly rootElement: Locator;
    private readonly navigationElement: Locator;
    private readonly agreementBodyElement: Locator;
    private readonly registerBodyElement: Locator;

    constructor(page: Page) {
        this.page = page;
        this.rootElement = this.page.locator('body#phpbb > #wrap');
        this.navigationElement = this.rootElement.getByRole('navigation');
        this.agreementBodyElement = this.rootElement.locator('#agreement');
        this.registerBodyElement = this.rootElement.locator('#register');
    }

    /**
     * Get the Navigation element
     * @returns {Navigation}
     */
    get navigation(): Navigation {
        return new Navigation(this.navigationElement);
    }

    /**
     * Get the Agreement body element
     * @returns {Agreement}
     */
    get agreement(): Agreement {
        return new Agreement(this.agreementBodyElement);
    }

    /**
     * Get the Register body element
     * @returns {Register}
     */
    get register(): Register {
        return new Register(this.registerBodyElement);
    }

    /**
     * Wait for the Main page
     * @returns {Promise<void>}
     */
    async waitForMainPageToLoad(): Promise<void> {
        await this.page.waitForURL(R_AND_D_FORUMS_URL_REGEX.MAIN);
    }

    /**
     * Wait for the Agreement page
     * @returns {Promise<void>}
     */
    async waitForAgreementPageToLoad(): Promise<void> {
        await this.page.waitForURL(R_AND_D_FORUMS_URL_REGEX.REGISTER_WITH_SID);
    }

    /**
     * Wait for the Register page
     * @returns {Promise<void>}
     */
    async waitForRegisterPageToLoad(): Promise<void> {
        await this.page.waitForURL(R_AND_D_FORUMS_URL_REGEX.REGISTER);
    }
}
