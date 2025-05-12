import {Locator} from '@playwright/test';
import {BaseHeaderSection} from "./baseHeaderSection";
import {LIST_OF_LINKS_TITLE} from "../../../constants";
import Community from "./listOfLinks/community";

export default class Support extends BaseHeaderSection {
    constructor(sectionName: string, sectionRootElement: Locator) {
        super(sectionName, sectionRootElement);
    }

    /**
     * Get the Community list of links element
     * @returns {Community}
     */
    get community(): Community {
        return new Community(LIST_OF_LINKS_TITLE.COMMUNITY, this.listOfLinksElement(LIST_OF_LINKS_TITLE.COMMUNITY));
    }
}
