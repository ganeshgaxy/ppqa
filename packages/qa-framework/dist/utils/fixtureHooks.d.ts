import { Locator, Page } from "@playwright/test";
import { LocatorOptions, PlaywrightPage, PlaywrightPageLocator } from "./uiActions";
export declare let playwrightPage: PlaywrightPage;
export declare let playwrightPageLocator: PlaywrightPageLocator;
export declare const registerPlaywrightPage: (page: Page) => void;
export declare const registerPlaywrightPageLocator: (locator: Locator, options?: LocatorOptions | undefined) => void;
