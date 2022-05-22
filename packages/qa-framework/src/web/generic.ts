import { playwrightPageLocator } from "../utils/fixtureHooks";
import { Actionable } from "../utils/uiActions";

export interface ElementOrFragmentProps<T>{
    click(): Promise<T>;
    dispatchEvent(type: string): Promise<T>;
    dblclick(): Promise<T>
    check(): Promise<T>;
    uncheck(): Promise<T>;
    pressKey(text: string): Promise<T>;
    verifyActionable(actionable: Actionable): Promise<T>;
    verifyNotActionable(actionable: Actionable): Promise<T>;
}

export interface LocatorExpectProps<T>{
    toBeEmpty(): Promise<T>;
    toHaveText(expected: string|RegExp|Array<string|RegExp>): Promise<T>;
    toHaveValue(value: string|RegExp): Promise<T>;
    toHaveAttribute(name: string, value: string|RegExp): Promise<T>;
    toHaveCSS(name: string, value: string|RegExp): Promise<T>;
    toHaveClass(expected: string|RegExp|Array<string|RegExp>): Promise<T>;
    toHaveCount(count: number): Promise<T>;
    toContainText(expected: string | RegExp | (string | RegExp)[]): Promise<T>;
    toHaveId(id: string|RegExp): Promise<T>;
}

export interface PageExpectProps<T>{
    toBeEmpty(locator: string): Promise<T>;
    toHaveText(locator: string, expected: string|RegExp|Array<string|RegExp>): Promise<T>;
    toHaveValue(locator: string, value: string|RegExp): Promise<T>;
    toHaveAttribute(locator: string, name: string, value: string|RegExp): Promise<T>;
    toHaveCSS(locator: string, name: string, value: string|RegExp): Promise<T>;
    toHaveClass(locator: string, expected: string|RegExp|Array<string|RegExp>): Promise<T>;
    toHaveCount(locator: string, count: number): Promise<T>;
    toContainText(locator: string, expected: string | RegExp | (string | RegExp)[]): Promise<T>;
    toHaveId(locator: string, id: string|RegExp): Promise<T>;
}