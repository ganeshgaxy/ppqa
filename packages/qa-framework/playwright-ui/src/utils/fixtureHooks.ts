import { Expect, Locator, Page } from "@playwright/test";
import { LocatorOptions, PlaywrightPage, PlaywrightPageLocator, usePlaywrightPage, usePlaywrightPageLocator } from "./uiActions";
import { PlaywrightExpect, usePlaywrightExpect } from "./uiAssertions";

export let playwrightPage: PlaywrightPage;
export let playwrightExpect: PlaywrightExpect;
export let playwrightPageLocator: PlaywrightPageLocator;
export let appInfo: AppInfo;

export interface AppInfo {
    baseURL: string,
    version?: string,
    extra?: unknown,
}

export const registerAppUrl = (url: string) => {
    appInfo = {baseURL: url};
}

export const registerPlaywrightPage = (page: Page) => {
    playwrightPage = usePlaywrightPage(page);
}

export const registerPlaywrightExpect = (expect: Expect) => {
    playwrightExpect = usePlaywrightExpect(expect);
}

export const registerPlaywrightPageLocator = (locator: Locator, options?: LocatorOptions) => {
    playwrightPageLocator = usePlaywrightPageLocator(locator, options && options);
}
