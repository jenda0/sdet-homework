import {Locator} from "@playwright/test";
import {BasePageBody} from "./basePageBody";

export default class Register extends BasePageBody {
    readonly username: Locator;
    readonly newPassword: Locator;
    readonly confirmPassword: Locator;
    readonly email: Locator;
    readonly submit: Locator;

    constructor(rootElement: Locator) {
        super(rootElement);
        this.username = this.rootElement.locator('#username');
        this.newPassword = this.rootElement.locator('#new_password');
        this.confirmPassword = this.rootElement.locator('#password_confirm');
        this.email = this.rootElement.locator('#email');
        this.submit = this.rootElement.locator('#submit');
    }
}
