import {Locator} from "@playwright/test";

export default class CookiesDialog {
    readonly rootElement: Locator;
    readonly close: Locator;

    constructor(rootElement: Locator) {
        this.rootElement = rootElement;
        this.close = this.rootElement.getByRole('button', { name: 'Close' });
    }
}
