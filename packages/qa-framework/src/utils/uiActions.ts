import { Locator, Page } from "@playwright/test";
import { PageCoreCalls, LocatorCoreCalls } from "./coreCalls";

export interface PlaywrightPageProps{
    page: Page;
    goto(url: string): Promise<void>;
    click(selector: string): Promise<void>;
    type(selector: string, text: string): Promise<void>;
    find(locator: string): PlaywrightPageLocator;

    toHaveText(locator: string, expected: string|RegExp|Array<string|RegExp>): Promise<void>;
    toHaveValue(locator: string, value: string|RegExp): Promise<void>;
    toHaveAttribute(locator: string, name: string, value: string|RegExp): Promise<void>;
    toHaveCSS(locator: string, name: string, value: string|RegExp): Promise<void>;
    toHaveClass(locator: string, expected: string|RegExp|Array<string|RegExp>): Promise<void>;
    toHaveCount(locator: string, count: number): Promise<void>;
    toHaveId(locator: string, id: string|RegExp): Promise<void>;
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

    public async toHaveText(locator: string, expected: string | RegExp | (string | RegExp)[]): Promise<void> {
        await PageCoreCalls.toHaveText(locator, expected);
    }
    public async toHaveValue(locator: string, value: string | RegExp): Promise<void> {
        await PageCoreCalls.toHaveValue(locator, value);
    }
    public async toHaveAttribute(locator: string, name: string, value: string | RegExp): Promise<void> {
        await PageCoreCalls.toHaveAttribute(locator, name, value);
    }
    public async toHaveCSS(locator: string, name: string, value: string | RegExp): Promise<void> {
        await PageCoreCalls.toHaveCSS(locator, name, value);
    }
    public async toHaveClass(locator: string, expected: string | RegExp | (string | RegExp)[]): Promise<void> {
        await PageCoreCalls.toHaveClass(locator, expected);
    }
    public async toHaveCount(locator: string, count: number): Promise<void> {
        await PageCoreCalls.toHaveCount(locator, count);
    }
    public async toHaveId(locator: string, id: string | RegExp): Promise<void> {
        await PageCoreCalls.toHaveId(locator, id);
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

    toHaveText(expected: string|RegExp|Array<string|RegExp>): Promise<void>;
    toHaveValue(value: string|RegExp): Promise<void>;
    toHaveAttribute(name: string, value: string|RegExp): Promise<void>;
    toHaveCSS(name: string, value: string|RegExp): Promise<void>;
    toHaveClass(expected: string|RegExp|Array<string|RegExp>): Promise<void>;
    toHaveCount(count: number): Promise<void>;
    toHaveId(id: string|RegExp): Promise<void>;
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

    public async toHaveText(expected: string | RegExp | (string | RegExp)[]): Promise<void> {
        await LocatorCoreCalls.toHaveText(this.locator, expected);
    }
    public async toHaveValue(value: string | RegExp): Promise<void> {
        await LocatorCoreCalls.toHaveValue(this.locator, value);
    }
    public async toHaveAttribute(name: string, value: string | RegExp): Promise<void> {
        await LocatorCoreCalls.toHaveAttribute(this.locator, name, value);
    }
    public async toHaveCSS(name: string, value: string | RegExp): Promise<void> {
        await LocatorCoreCalls.toHaveCSS(this.locator, name, value);
    }
    public async toHaveClass(expected: string | RegExp | (string | RegExp)[]): Promise<void> {
        await LocatorCoreCalls.toHaveClass(this.locator, expected);
    }
    public async toHaveCount(count: number): Promise<void> {
        await LocatorCoreCalls.toHaveCount(this.locator, count);
    }
    public async toHaveId(id: string | RegExp): Promise<void> {
        await LocatorCoreCalls.toHaveId(this.locator, id);
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