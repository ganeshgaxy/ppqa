import { Locator, Page } from "@playwright/test";
import { PageCoreCalls, LocatorCoreCalls } from "./coreCalls";

export interface PlaywrightPageProps{
    page: Page;
    goto(url: string): Promise<void>;
    click(selector: string): Promise<void>;
    type(selector: string, text: string): Promise<void>;
    find(locator: string): PlaywrightPageLocator;
}

export enum Actionable {
    ToBeChecked,
    ToBeDisabled,
    ToBeEditable,
    ToBeEnabled,
    ToBeHidden,
    ToBeVisible
}

export interface LocatorOptions{
    button?: "left"|"right"|"middle";
    clickCount?: number;
    delay?: number;
    force?: boolean;
    modifiers?: Array<"Alt"|"Control"|"Meta"|"Shift">;
    noWaitAfter?: boolean;
    position?: {
      x: number;
      y: number;
    };
    strict?: boolean;
    timeout?: number;
    trial?: boolean;
}

export class PlaywrightPage implements PlaywrightPageProps{
    public page: Page;
    constructor(page: Page){
        this.page=page;
    }
    public async goto(url: string): Promise<void> {
        await PageCoreCalls.goto(url)
    }
    public async click(selector: string, options?: LocatorOptions): Promise<void> {
        await PageCoreCalls.click(selector, options && options);
    }
    public async type(selector: string, text: string, options?: LocatorOptions): Promise<void> {
        await PageCoreCalls.type(selector, text, options && options);
    }
    public find(locator: string): PlaywrightPageLocator {
        return PageCoreCalls.find(locator)
    }
}

export const usePlaywrightPage = (page: Page) : PlaywrightPageProps => {
    const returnObject : PlaywrightPageProps = new PlaywrightPage(page);
    
    const handler = {}
    return new Proxy(returnObject, handler) as PlaywrightPageProps;
}

export interface PlaywrightPageLocatorProps{
    locator: Locator;
    options: LocatorOptions | undefined;
    click(): Promise<void>;
    type(text: string): Promise<void>;
    press(text: string): Promise<void>;
}

export class PlaywrightPageLocator implements PlaywrightPageLocatorProps{
    public locator: Locator;
    public options: LocatorOptions | undefined;
    constructor(locator: Locator, options?: LocatorOptions){
        this.locator=locator;
        this.options=options && options;
    }
    public async click(): Promise<void> {
        await LocatorCoreCalls.click(this.locator, this.options && this.options);
    }
    public async press(text: string): Promise<void> {
        await LocatorCoreCalls.press(this.locator, text, this.options && this.options);
    }
    public async type(text: string): Promise<void> {
        await LocatorCoreCalls.type(this.locator, text, this.options && this.options);
    }
}

export const usePlaywrightPageLocator = (locator: Locator, options?: LocatorOptions) : PlaywrightPageLocatorProps => {
    const returnObject : PlaywrightPageLocatorProps = new PlaywrightPageLocator(locator, options);
    
    const handler = {}
    return new Proxy(returnObject, handler) as PlaywrightPageLocatorProps;
}

export const createFragment = <T extends object>(ClassObject: {new (url?: string): T}, url?: string) => {
    const returnObject : T = new ClassObject(url && url);

    const handler = {}
    return new Proxy(returnObject, handler) as T;
}