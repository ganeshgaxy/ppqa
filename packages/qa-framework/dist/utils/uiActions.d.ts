import { Locator, Page } from "@playwright/test";
export interface PlaywrightPageProps {
    page: Page;
    goto(url: string): Promise<void>;
    click(selector: string): Promise<void>;
    type(selector: string, text: string): Promise<void>;
    find(locator: string): PlaywrightPageLocator;
}
export declare enum Actionable {
    ToBeChecked = 0,
    ToBeDisabled = 1,
    ToBeEditable = 2,
    ToBeEnabled = 3,
    ToBeHidden = 4,
    ToBeVisible = 5
}
export interface LocatorOptions {
    button?: "left" | "right" | "middle";
    clickCount?: number;
    delay?: number;
    force?: boolean;
    modifiers?: Array<"Alt" | "Control" | "Meta" | "Shift">;
    noWaitAfter?: boolean;
    position?: {
        x: number;
        y: number;
    };
    strict?: boolean;
    timeout?: number;
    trial?: boolean;
}
export declare class PlaywrightPage implements PlaywrightPageProps {
    page: Page;
    constructor(page: Page);
    goto(url: string): Promise<void>;
    click(selector: string, options?: LocatorOptions): Promise<void>;
    type(selector: string, text: string, options?: LocatorOptions): Promise<void>;
    find(locator: string): PlaywrightPageLocator;
}
export declare const usePlaywrightPage: (page: Page) => PlaywrightPageProps;
export interface PlaywrightPageLocatorProps {
    locator: Locator;
    options: LocatorOptions | undefined;
    click(): Promise<void>;
    type(text: string): Promise<void>;
    press(text: string): Promise<void>;
}
export declare class PlaywrightPageLocator implements PlaywrightPageLocatorProps {
    locator: Locator;
    options: LocatorOptions | undefined;
    constructor(locator: Locator, options?: LocatorOptions);
    click(): Promise<void>;
    press(text: string): Promise<void>;
    type(text: string): Promise<void>;
}
export declare const usePlaywrightPageLocator: (locator: Locator, options?: LocatorOptions | undefined) => PlaywrightPageLocatorProps;
export declare const createFragment: <T extends object>(ClassObject: new (url?: string | undefined) => T, url?: string | undefined) => T;
