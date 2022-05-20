import { Locator } from "@playwright/test";
import { playwrightExpect, playwrightPage, playwrightPageLocator, registerPlaywrightPageLocator } from "./fixtureHooks";
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

    public static toHaveText = async(locator: string, expected: string|RegExp|Array<string|RegExp>): Promise<void> =>{
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveText(expected);
    }
    public static toHaveValue = async(locator: string, value: string|RegExp): Promise<void> =>{
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveValue(value);
    }
    public static toHaveAttribute = async(locator: string, name: string, value: string|RegExp): Promise<void> =>{
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveAttribute(name, value);
    }
    public static toHaveCSS = async(locator: string, name: string, value: string|RegExp): Promise<void> =>{
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveCSS(name, value);
    }
    public static toHaveClass = async(locator: string, expected: string|RegExp|Array<string|RegExp>): Promise<void> =>{
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveClass(expected);
    }
    public static toHaveCount = async(locator: string, count: number): Promise<void> =>{
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveCount(count);
    }
    public static toHaveId = async(locator: string, id: string|RegExp): Promise<void> =>{
        await playwrightExpect.expect(playwrightPage.page.locator(locator)).toHaveId(id);
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
    
    public static toHaveText = async(locator: Locator, expected: string|RegExp|Array<string|RegExp>): Promise<void> =>{
        await playwrightExpect.expect(locator).toHaveText(expected);
    }
    public static toHaveValue = async(locator: Locator, value: string|RegExp): Promise<void> =>{
        await playwrightExpect.expect(locator).toHaveValue(value);
    }
    public static toHaveAttribute = async(locator: Locator, name: string, value: string|RegExp): Promise<void> =>{
        await playwrightExpect.expect(locator).toHaveAttribute(name, value);
    }
    public static toHaveCSS = async(locator: Locator, name: string, value: string|RegExp): Promise<void> =>{
        await playwrightExpect.expect(locator).toHaveCSS(name, value);
    }
    public static toHaveClass = async(locator: Locator, expected: string|RegExp|Array<string|RegExp>): Promise<void> =>{
        await playwrightExpect.expect(locator).toHaveClass(expected);
    }
    public static toHaveCount = async(locator: Locator, count: number): Promise<void> =>{
        await playwrightExpect.expect(locator).toHaveCount(count);
    }
    public static toHaveId = async(locator: Locator, id: string|RegExp): Promise<void> =>{
        await playwrightExpect.expect(locator).toHaveId(id);
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