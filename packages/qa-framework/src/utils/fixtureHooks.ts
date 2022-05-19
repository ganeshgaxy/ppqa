import { Locator, Page } from "@playwright/test";
import { LocatorOptions, PlaywrightPage, PlaywrightPageLocator, usePlaywrightPage, usePlaywrightPageLocator } from "./uiActions";

export let playwrightPage: PlaywrightPage;
export let playwrightPageLocator: PlaywrightPageLocator;

export const registerPlaywrightPage = (page: Page) => {
    playwrightPage = usePlaywrightPage(page);
}

export const registerPlaywrightPageLocator = (locator: Locator, options?: LocatorOptions) => {
    playwrightPageLocator = usePlaywrightPageLocator(locator, options && options);
}

