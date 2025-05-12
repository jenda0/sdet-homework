import { test as base} from '@playwright/test';
import { LandingPage} from "./pages/landingPage";
import { ForumsPage } from "./pages/forumsPage";

type PageObjects = {
    readonly landingPage: LandingPage;
    readonly forumsPage: ForumsPage;
};

export const test = base.extend<PageObjects>({
    landingPage: async ({ page }, use) => {
        const landingPage = new LandingPage(page);
        await use(landingPage);
    },
    forumsPage: async ({ page }, use) => {
        const forumsPage = new ForumsPage(page);
        await use(forumsPage);
    },
});

export const expect = test.expect;
