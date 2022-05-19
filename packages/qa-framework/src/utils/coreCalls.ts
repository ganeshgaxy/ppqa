import { Locator } from "@playwright/test";
import { playwrightPage, playwrightPageLocator, registerPlaywrightPageLocator } from "./fixtureHooks";
import { LocatorOptions, PlaywrightPageLocator } from "./uiActions";

export abstract class PageCoreCalls{
    public static goto = async (url: string): Promise<void> => {
        await playwrightPage.page.goto(url);
    }
    public static click = async (selector: string, options?: LocatorOptions): Promise<void> => {
        await playwrightPage.page.click(selector);
    }
    public static type = async (selector: string, text: string, options?: LocatorOptions): Promise<void> => {
        await playwrightPage.page.fill(selector, text);
    }
    public static press = async (selector: string, text: string, options?: LocatorOptions): Promise<void> => {
        await playwrightPage.page.press(selector, text);
    }
    public static find = (selector: string): PlaywrightPageLocator => {
        let locator = playwrightPage.page.locator(selector);
        registerPlaywrightPageLocator(locator);
        return playwrightPageLocator;
    }
}

export abstract class LocatorCoreCalls{
    public static click = async (locator: Locator, options?: LocatorOptions): Promise<void> => {
        await locator.click();
    }
    public static press = async (locator: Locator, text: string, options?: LocatorOptions): Promise<void> => {
        await locator.press(text);
    }
    public static type = async (locator: Locator, text: string, options?: LocatorOptions): Promise<void> => {
        await locator.fill(text);
    }
}
