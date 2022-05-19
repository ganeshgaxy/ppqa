import { Locator } from "@playwright/test";
import { LocatorOptions, PlaywrightPageLocator } from "./uiActions";
export declare abstract class PageCoreCalls {
    static goto: (url: string) => Promise<void>;
    static click: (selector: string, options?: LocatorOptions | undefined) => Promise<void>;
    static type: (selector: string, text: string, options?: LocatorOptions | undefined) => Promise<void>;
    static press: (selector: string, text: string, options?: LocatorOptions | undefined) => Promise<void>;
    static find: (selector: string) => PlaywrightPageLocator;
}
export declare abstract class LocatorCoreCalls {
    static click: (locator: Locator, options?: LocatorOptions | undefined) => Promise<void>;
    static press: (locator: Locator, text: string, options?: LocatorOptions | undefined) => Promise<void>;
    static type: (locator: Locator, text: string, options?: LocatorOptions | undefined) => Promise<void>;
}
