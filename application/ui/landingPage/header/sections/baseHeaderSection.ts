import {Locator} from "@playwright/test";

export abstract class BaseHeaderSection {
    protected readonly sectionName: string;
    readonly rootElement: Locator;
    readonly subMenu: Locator;
    readonly mainButton: Locator;

    protected constructor(sectionName: string, rootElement: Locator) {
        this.sectionName = sectionName;
        this.rootElement = rootElement;
        this.subMenu = this.rootElement.locator('> .main-navigation__submenu');
        this.mainButton = this.rootElement.getByRole('button', { name: this.sectionName });
    }

    /**
     * Get the list of links element by its title
     * @private
     * @param {string} LIST_TITLE
     * @returns {Locator}
     */
    protected listOfLinksElement(LIST_TITLE: string): Locator {
        return this.rootElement.locator('.list-of-links').filter({ hasText: LIST_TITLE });
    }
}
