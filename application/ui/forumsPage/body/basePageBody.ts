import {Locator} from "@playwright/test";

export abstract class BasePageBody {
    readonly rootElement: Locator;

    protected constructor(rootElement: Locator) {
        this.rootElement = rootElement;
    }

    get errorMessage(): Locator {
        return this.rootElement.locator('dd.error');
    }
}
