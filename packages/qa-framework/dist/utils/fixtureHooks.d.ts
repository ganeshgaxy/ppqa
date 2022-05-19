import { Expect, Locator, Page } from "@playwright/test";
import { LocatorOptions, PlaywrightPage, PlaywrightPageLocator } from "./uiActions";
import { PlaywrightExpect } from "./uiAssertions";
export declare let playwrightPage: PlaywrightPage;
export declare let playwrightExpect: PlaywrightExpect;
export declare let playwrightPageLocator: PlaywrightPageLocator;
export declare const registerPlaywrightPage: (page: Page) => void;
export declare const registerPlaywrightExpect: (expect: Expect) => void;
export declare const registerPlaywrightPageLocator: (locator: Locator, options?: LocatorOptions | undefined) => void;
