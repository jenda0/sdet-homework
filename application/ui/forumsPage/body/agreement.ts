import {BasePageBody} from "./basePageBody";
import {Locator} from "@playwright/test";

export default class Agreement extends BasePageBody {
    readonly agree: Locator;

    constructor(rootElement: Locator) {
        super(rootElement);
        this.agree = this.rootElement.locator('#agreed.button1');
    }
}
