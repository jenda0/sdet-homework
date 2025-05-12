import {expect, test} from '../application/ui/pageObjects';
import {TEST_USER} from "../application/ui/constants";

const ERROR_MESSAGE_REGEX = /Public email are not allowed\. Please, be aware that your domain or email address was banned\. To find out the reason please contact support by filling the form\./;

test('VEE-T1 - Forum registration with public domain email', async ({landingPage, forumsPage}) => {
    await test.step(`Open Landing page`, async () => {
        await landingPage.goto();
    });

    await test.step('Close cookies dialog and messenger prompt', async () => {
        if(await landingPage.cookiesDialog.rootElement.isVisible()) {
            await landingPage.cookiesDialog.close.click();
            await expect(landingPage.cookiesDialog.rootElement, 'Cookies dialog should be closed').toBeHidden();
        }
        if (await landingPage.messengerPrompt.rootElement.isVisible()) {
            await landingPage.messengerPrompt.close.click();
            await expect(landingPage.messengerPrompt.rootElement, 'Messenger prompt should be closed').toBeHidden();
        }
    });

    await test.step('Open Support', async () => {
        await landingPage.header.support.mainButton.click();
        await expect(landingPage.header.support.subMenu, 'Header submenu should be opened').toBeVisible();
    });

    await test.step('Click R&D Forums', async () => {
        await expect(landingPage.header.support.community.rAndDForums, 'R&D Forums link should be visible').toBeVisible();
        await landingPage.header.support.community.rAndDForums.click();
        await forumsPage.waitForMainPageToLoad();
    });

    await test.step('Click on Register Button', async () => {
        await expect(forumsPage.navigation.registerButton, 'Register button should be visible').toBeVisible();
        await forumsPage.navigation.registerButton.click();
        await forumsPage.waitForAgreementPageToLoad();
    });

    await test.step('Click on Agree Button', async () => {
        await expect(async () => {
            await forumsPage.agreement.agree.click();
            await expect(forumsPage.register.rootElement, 'Register Form page should be visible').toBeVisible({timeout: 200});
        }).toPass();
        await forumsPage.waitForRegisterPageToLoad();
    });

    await test.step('Fill in Registration Form', async () => {
        await forumsPage.register.username.fill(TEST_USER.USERNAME);
        await forumsPage.register.newPassword.fill(TEST_USER.PASSWORD);
        await forumsPage.register.confirmPassword.fill(TEST_USER.PASSWORD);
        await forumsPage.register.email.fill(TEST_USER.EMAIL);
        await expect(forumsPage.register.submit, 'Submit button should be visible').toBeVisible();
    });

    await test.step('Submit Registration Form', async () => {
        await forumsPage.register.submit.click();
        await expect(forumsPage.register.errorMessage, 'Error message should be visible').toBeVisible();
        await expect(forumsPage.register.errorMessage, 'Error message should have expected text').toHaveText(ERROR_MESSAGE_REGEX);
    });
});
