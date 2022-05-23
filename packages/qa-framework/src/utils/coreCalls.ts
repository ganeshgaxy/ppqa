import { Locator } from "@playwright/test";
import { checkLocatorActionable, checkPageActionable, URLProps } from "../web/webFragment";
import { playwrightExpect, playwrightPage, playwrightPageLocator, registerPlaywrightPageLocator } from "./fixtureHooks";
import { Actionable, LocatorOptions, PlaywrightPageLocator } from "./uiActions";

export abstract class PageCoreCalls{
    public static negativeAssertion: boolean = false;
    public static goto = async (urlProps: URLProps): Promise<void> => {
        await playwrightPage.page.goto(urlProps.url);
        if(urlProps.expectedTitle) ExpectGenericCoreCalls.toEqual(await playwrightPage.page.title(), urlProps.expectedTitle);
    }
    public static reload = async (): Promise<void> => {
        await playwrightPage.page.reload();
    }
    public static goBack = async (): Promise<void> => {
        await playwrightPage.page.goBack();
    }
    public static click = async (locator: string, options?: LocatorOptions): Promise<void> => {
        await playwrightPage.page.click(locator);
    }
    public static dispatchEvent = async (locator: string, type: string, options?: LocatorOptions): Promise<void> => {
        await playwrightPage.page.dispatchEvent(locator, type);
    }
    public static dblclick = async (locator: string, options?: LocatorOptions): Promise<void> => {
        await playwrightPage.page.dblclick(locator);
    }
    public static check = async (locator: string, options?: LocatorOptions): Promise<void> => {
        await playwrightPage.page.check(locator);
    }
    public static uncheck = async (locator: string, options?: LocatorOptions): Promise<void> => {
        await playwrightPage.page.uncheck(locator);
    }
    public static type = async (locator: string, text: string, options?: LocatorOptions): Promise<void> => {
        await playwrightPage.page.fill(locator, text);
    }
    public static press = async (locator: string, text: string, options?: LocatorOptions): Promise<void> => {
        await playwrightPage.page.press(locator, text);
    }
    public static find = (selector: string, baseLocator?: Locator): PlaywrightPageLocator => {
        let locator = baseLocator ? baseLocator.locator(selector) : playwrightPage.page.locator(selector);
        registerPlaywrightPageLocator(locator);
        return playwrightPageLocator;
    }
    public static findFirst = (selector: string): PlaywrightPageLocator => {
        registerPlaywrightPageLocator(playwrightPage.page.locator(selector).first());
        return playwrightPageLocator;
    }
    public static findNth = (nth: number, selector: string): PlaywrightPageLocator => {
        registerPlaywrightPageLocator(playwrightPage.page.locator(selector).nth(nth));
        return playwrightPageLocator;
    }
    public static verifyActionable = async (locator: string, actionable: Actionable): Promise<void> => {
        await checkPageActionable(locator, actionable);
    }
    public static verifyNotActionable = async (locator: string, actionable: Actionable): Promise<void> => {
        await checkPageActionable(locator, actionable, true);
    }

    public static toBeEmpty = async(locator: string): Promise<void> =>{
        PageCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).not.toBeEmpty():
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toBeEmpty();
        PageCoreCalls.negativeAssertion=false;
    }
    public static toHaveText = async(locator: string, expected: string|RegExp|Array<string|RegExp>): Promise<void> =>{
        PageCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).not.toHaveText(expected):
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveText(expected);
        PageCoreCalls.negativeAssertion=false;
    }
    public static toHaveValue = async(locator: string, value: string|RegExp): Promise<void> =>{
        PageCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).not.toHaveValue(value):
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveValue(value);
        PageCoreCalls.negativeAssertion=false;
    }
    public static toHaveAttribute = async(locator: string, name: string, value: string|RegExp): Promise<void> =>{
        PageCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).not.toHaveAttribute(name, value):
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveAttribute(name, value);
        PageCoreCalls.negativeAssertion=false;
    }
    public static toHaveCSS = async(locator: string, name: string, value: string|RegExp): Promise<void> =>{
        PageCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).not.toHaveCSS(name, value):
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveCSS(name, value);
        PageCoreCalls.negativeAssertion=false;
    }
    public static toHaveClass = async(locator: string, expected: string|RegExp|Array<string|RegExp>): Promise<void> =>{
        PageCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).not.toHaveClass(expected):
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveClass(expected);
        PageCoreCalls.negativeAssertion=false;
    }
    public static toHaveCount = async(locator: string, count: number): Promise<void> =>{
        PageCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).not.toHaveCount(count):
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveCount(count);
        PageCoreCalls.negativeAssertion=false;
    }
    public static toContainText = async(locator: string, expected: string | RegExp | (string | RegExp)[]): Promise<void> =>{
        PageCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).not.toContainText(expected):
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toContainText(expected);
        PageCoreCalls.negativeAssertion=false;
    }
    public static toHaveId = async(locator: string, id: string|RegExp): Promise<void> =>{
        PageCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).not.toHaveId(id):
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveId(id);
        PageCoreCalls.negativeAssertion=false;
    }
}

export abstract class LocatorCoreCalls{
    public static negativeAssertion: boolean = false;
    public static find = (selector: string, locator: Locator): PlaywrightPageLocator => {
        registerPlaywrightPageLocator(locator.locator(selector));
        return playwrightPageLocator;
    }
    public static findFirst = (locator: Locator): PlaywrightPageLocator => {
        registerPlaywrightPageLocator(locator.first());
        return playwrightPageLocator;
    }
    public static findNth = (nth: number, locator: Locator): PlaywrightPageLocator => {
        registerPlaywrightPageLocator(locator.nth(nth));
        return playwrightPageLocator;
    }
    public static click = async (locator: Locator, options?: LocatorOptions): Promise<void> => {
        await locator.click();
    }
    public static dispatchEvent = async (locator: Locator, type: string, options?: LocatorOptions): Promise<void> => {
        await locator.dispatchEvent(type);
    }
    public static dblclick = async (locator: Locator, options?: LocatorOptions): Promise<void> => {
        await locator.dblclick();
    }
    public static check = async (locator: Locator, options?: LocatorOptions): Promise<void> => {
        await locator.check();
    }
    public static uncheck = async (locator: Locator, options?: LocatorOptions): Promise<void> => {
        await locator.uncheck();
    }
    public static press = async (locator: Locator, text: string, options?: LocatorOptions): Promise<void> => {
        await locator.press(text);
    }
    public static type = async (locator: Locator, text: string, options?: LocatorOptions): Promise<void> => {
        await locator.fill(text);
    }
    public static verifyActionable = async (locator: Locator, actionable: Actionable): Promise<void> => {
        await checkLocatorActionable(locator, actionable);
    }
    public static verifyNotActionable = async (locator: Locator, actionable: Actionable): Promise<void> => {
        await checkLocatorActionable(locator, actionable, true);
    }
    
    public static toBeEmpty = async(locator: Locator): Promise<void> =>{
        LocatorCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(locator).not.toBeEmpty():
        await playwrightExpect.expect(locator).toBeEmpty();
        LocatorCoreCalls.negativeAssertion=false;
    }
    public static toHaveText = async(locator: Locator, expected: string|RegExp|Array<string|RegExp>): Promise<void> =>{
        LocatorCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(locator).not.toHaveText(expected):
        await playwrightExpect.expect(locator).toHaveText(expected);
        LocatorCoreCalls.negativeAssertion=false;
    }
    public static toHaveValue = async(locator: Locator, value: string|RegExp): Promise<void> =>{
        LocatorCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(locator).not.toHaveValue(value):
        await playwrightExpect.expect(locator).toHaveValue(value);
        LocatorCoreCalls.negativeAssertion=false;
    }
    public static toHaveAttribute = async(locator: Locator, name: string, value: string|RegExp): Promise<void> =>{
        LocatorCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(locator).not.toHaveAttribute(name, value):
        await playwrightExpect.expect(locator).toHaveAttribute(name, value);
        LocatorCoreCalls.negativeAssertion=false;
    }
    public static toHaveCSS = async(locator: Locator, name: string, value: string|RegExp): Promise<void> =>{
        LocatorCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(locator).not.toHaveCSS(name, value):
        await playwrightExpect.expect(locator).toHaveCSS(name, value);
        LocatorCoreCalls.negativeAssertion=false;
    }
    public static toHaveClass = async(locator: Locator, expected: string|RegExp|Array<string|RegExp>): Promise<void> =>{
        LocatorCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(locator).not.toHaveClass(expected):
        await playwrightExpect.expect(locator).toHaveClass(expected);
        LocatorCoreCalls.negativeAssertion=false;
    }
    public static toHaveCount = async(locator: Locator, count: number): Promise<void> =>{
        LocatorCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(locator).not.toHaveCount(count):
        await playwrightExpect.expect(locator).toHaveCount(count);
        LocatorCoreCalls.negativeAssertion=false;
    }
    public static toContainText = async(locator: Locator, expected: string | RegExp | (string | RegExp)[]): Promise<void> =>{
        LocatorCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(locator).not.toContainText(expected):
        await playwrightExpect.expect(locator).toContainText(expected);
        LocatorCoreCalls.negativeAssertion=false;
    }
    public static toHaveId = async(locator: Locator, id: string|RegExp): Promise<void> =>{
        LocatorCoreCalls.negativeAssertion ?
        await playwrightExpect.expect(locator).not.toHaveId(id):
        await playwrightExpect.expect(locator).toHaveId(id);
        LocatorCoreCalls.negativeAssertion=false;
    }
}

export abstract class ExpectGenericCoreCalls{
    public static toHaveLength = (object: unknown, expected: number): void =>{
        playwrightExpect.expect(object).toHaveLength(expected);
    }
    public static toHaveProperty = (object: unknown, keyPath: string | Array<string>, value?: unknown): void =>{
        playwrightExpect.expect(object).toHaveProperty(keyPath, value);
    }
    public static toBe = (actual: unknown, expected: unknown): void =>{
        playwrightExpect.expect(actual).toBe(expected);
    }
    public static toEqual = (actual: unknown, expected: unknown): void =>{
        playwrightExpect.expect(actual).toEqual(expected);
    }
    public static toBeFalsy = (actual: unknown): void =>{
        playwrightExpect.expect(actual).toBeFalsy();
    }
    public static toBeTruthy = (actual: unknown): void =>{
        playwrightExpect.expect(actual).toBeTruthy();
    }
    public static toBeCloseTo = (actual: unknown, expected: number, numDigits?: number): void =>{
        playwrightExpect.expect(actual).toBeCloseTo(expected, numDigits);
    }
    public static toBeGreaterThan = (actual: unknown, expected: number | bigint): void =>{
        playwrightExpect.expect(actual).toBeGreaterThan(expected);
    }
    public static toBeGreaterThanOrEqual = (actual: unknown, expected: number | bigint): void =>{
        playwrightExpect.expect(actual).toBeGreaterThanOrEqual(expected);
    }
    public static toBeLessThan = (actual: unknown, expected: number | bigint): void =>{
        playwrightExpect.expect(actual).toBeLessThan(expected);
    }
    public static toBeLessThanOrEqual = (actual: unknown, expected: number | bigint): void =>{
        playwrightExpect.expect(actual).toBeLessThanOrEqual(expected);
    }
    public static toBeUndefined = (actual: unknown): void =>{
        playwrightExpect.expect(actual).toBeUndefined();
    }
    public static toContain = (actual: unknown, expected: unknown): void =>{
        playwrightExpect.expect(actual).toContain(expected);
    }
}