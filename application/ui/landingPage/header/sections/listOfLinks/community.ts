import {Locator} from "@playwright/test";
import {BaseListOfLinks} from "./baseListOfLinks";
import {HEADER_SECTION_LINKS} from "../../../../constants";

export default class Community extends BaseListOfLinks {
    constructor(listTitle: string, rootElement: Locator) {
        super(listTitle, rootElement);
    }

    get rAndDForums(): Locator {
        return this.linkElement(HEADER_SECTION_LINKS.SUPPORT.COMMUNITY.R_AND_D_FORUMS);
    }
}
