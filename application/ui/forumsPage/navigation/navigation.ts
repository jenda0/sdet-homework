import {Locator} from "@playwright/test";

export default class Navigation {
    readonly rootElement: Locator;
    readonly registerButton: Locator;

    constructor(rootElement: Locator) {
        this.rootElement = rootElement;
        this.registerButton = this.rootElement.getByRole('menuitem', { name: 'Register' });
    }
}
