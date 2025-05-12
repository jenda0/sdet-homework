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

    get header(): Header {
        return new Header(this.headerElement);
    }

    get cookiesDialog(): CookiesDialog {
        return new CookiesDialog(this.cookiesDialogElement);
    }

    get messengerPrompt(): MessengerPrompt {
        return new MessengerPrompt(this.messengerPromptElement);
    }

    async goto(): Promise<void> {
        await this.page.goto('/');
    }
}
