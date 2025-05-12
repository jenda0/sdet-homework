import {Locator} from "@playwright/test";

export default class MessengerPrompt {
    readonly rootElement: Locator;
    readonly close: Locator;

    constructor(rootElement: Locator) {
        this.rootElement = rootElement;
        this.close = this.rootElement.contentFrame().getByRole('button', { name: 'Close messenger prompt' });
    }
}
