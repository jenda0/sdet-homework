import {Locator} from "@playwright/test";

export abstract class BaseListOfLinks {
    protected readonly listTitle: string;
    readonly rootElement: Locator;

    protected constructor(listTitle: string, rootElement: Locator) {
        this.listTitle = listTitle;
        this.rootElement = rootElement;
    }

    /**
     * Get the link element by its title
     * @protected
     * @param {string} linkText
     * @returns {Locator}
     */
    linkElement(linkText: string): Locator {
        return this.rootElement.locator('.list-of-links__link', { hasText: linkText });
    }
}
