import {Locator} from "@playwright/test";
import {BaseListOfLinks} from "./baseListOfLinks";
import {HEADER_SECTION_LINKS} from "../../../../constants";

export default class Community extends BaseListOfLinks {
    readonly rAndDForums: Locator;

    constructor(listTitle: string, rootElement: Locator) {
        super(listTitle, rootElement);
        this.rAndDForums = this.linkElement(HEADER_SECTION_LINKS.SUPPORT.COMMUNITY.R_AND_D_FORUMS);
    }
}
