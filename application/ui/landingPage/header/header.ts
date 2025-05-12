import { Locator } from "@playwright/test";
import Support from "./sections/support";
import {HEADER_SECTION} from "../../constants";

export default class Header {
    readonly rootElement: Locator;

    constructor(headerRootElm: Locator) {
        this.rootElement = headerRootElm;
    }

    /**
     * Get the root element of the Header section by its name
     * @param SECTION_NAME
     * @private
     * @returns {Locator}
     */
    private _sectionRootElement(SECTION_NAME: string): Locator {
        return this.rootElement.locator(`.main-navigation__item:has(button.main-navigation__item-title:text("${SECTION_NAME}"))`);
    }

    /**
     * Get the Support header section
     * @returns {Support}
     */
    get support(): Support {
        return new Support(HEADER_SECTION.SUPPORT, this._sectionRootElement(HEADER_SECTION.SUPPORT));
    }
}
