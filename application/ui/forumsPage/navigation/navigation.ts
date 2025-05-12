import {Locator} from "@playwright/test";

export default class Navigation {
    readonly rootElement: Locator;
    readonly registerButton: Locator;

    constructor(navigationRootElm: Locator) {
        this.rootElement = navigationRootElm;
        this.registerButton = this.rootElement.getByRole('menuitem', { name: 'Register' });
    }
}
