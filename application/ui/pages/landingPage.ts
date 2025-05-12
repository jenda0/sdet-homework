import { type Locator, type Page} from '@playwright/test';
import Header from "../landingPage/header/header";
import CookiesDialog from "../cookiesDialog/cookiesDialog";
import MessengerPrompt from "../messenger/messengerPrompt";

export class LandingPage {
    readonly page: Page;
    readonly rootElement: Locator;
    private readonly headerElement: Locator;
    private readonly cookiesDialogElement: Locator;
    private readonly messengerPromptElement: Locator;

    constructor(page: Page) {
        this.page = page;
        this.rootElement = this.page.locator('body:has(.base-page__wrapper)');
        this.headerElement = this.rootElement.locator('.header');
        this.cookiesDialogElement = this.rootElement.locator('#cookiescript_injected');
        this.messengerPromptElement = this.rootElement.locator('iframe[title="Qualified Messenger"]');
    }

    /**
     * Gets the Header element
     * @returns {Header}
     */
    get header(): Header {
        return new Header(this.headerElement);
    }

    /**
     * Gets the Cookies Dialog element
     * @returns {CookiesDialog}
     */
    get cookiesDialog(): CookiesDialog {
        return new CookiesDialog(this.cookiesDialogElement);
    }

    /**
     * Gets the Messenger Prompt element
     * @returns {MessengerPrompt}
     */
    get messengerPrompt(): MessengerPrompt {
        return new MessengerPrompt(this.messengerPromptElement);
    }

    /**
     * Navigates to the landing page
     * @returns {Promise<void>}
     */
    async goto(): Promise<void> {
        await this.page.goto('/');
    }
}
