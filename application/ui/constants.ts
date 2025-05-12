export const HEADER_SECTION = Object.freeze({
    SUPPORT: 'Support',
});

export const LIST_OF_LINKS_TITLE = Object.freeze({
    COMMUNITY: 'Community',
});

export const HEADER_SECTION_LINKS = Object.freeze({
    SUPPORT: Object.freeze({
        COMMUNITY: Object.freeze({
            R_AND_D_FORUMS: 'R&D Forums',
        }),
    }),
});

export const R_AND_D_FORUMS_URL_REGEX = Object.freeze({
    MAIN: /https:\/\/forums\.veeam\.com(\/\?ad=menu-support)?/,
    REGISTER_WITH_SID: /https:\/\/forums\.veeam\.com\/ucp\.php\?mode=register&sid=[^&]+/,
    REGISTER: /https:\/\/forums\.veeam\.com\/ucp\.php\?mode=register/,
});

export const TEST_USER = Object.freeze({
    USERNAME: 'InterviewUser',
    PASSWORD: 'InreviewUser',
    EMAIL: 'inreviewuser@gmail.com',
});
