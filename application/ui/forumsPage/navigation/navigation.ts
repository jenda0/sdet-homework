import {Locator} from "@playwright/test";

export default class Navigation {
    readonly rootElement: Locator;

    constructor(navigationRootElm: Locator) {
        this.rootElement = navigationRootElm;
    }

    get registerButton() {
        return this.rootElement.getByRole('menuitem', { name: 'Register' });
    }
}
