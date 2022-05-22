import { Expect } from "@playwright/test";
import { LocatorExpectProps } from "../web/generic";
import { playwrightPageLocator } from "./fixtureHooks";

export interface PlaywrightExpectProps{
    expect: Expect;
}

export class PlaywrightExpect implements PlaywrightExpectProps{
    public expect: Expect;
    constructor(expect: Expect){
        this.expect=expect;
    }
}

export const usePlaywrightExpect = (expect: Expect) : PlaywrightExpectProps => {
    const returnObject : PlaywrightExpectProps = new PlaywrightExpect(expect);
    
    const handler = {}
    return new Proxy(returnObject, handler) as PlaywrightExpectProps;
}

export class PageLocatorExpect implements LocatorExpectProps<void>{
    public not(): PageLocatorExpect {
        playwrightPageLocator.not();
        return this;
    }
    public async toBeEmpty(): Promise<void> {
        await playwrightPageLocator.toBeEmpty();
    }
    public async toHaveText(expected: string | RegExp | (string | RegExp)[]): Promise<void> {
        await playwrightPageLocator.toHaveText(expected);
    }
    public async toHaveValue(value: string | RegExp): Promise<void> {
        await playwrightPageLocator.toHaveValue(value);
    }
    public async toHaveAttribute(name: string, value: string | RegExp): Promise<void> {
        await playwrightPageLocator.toHaveAttribute(name, value);
    }
    public async toHaveCSS(name: string, value: string | RegExp): Promise<void> {
        await playwrightPageLocator.toHaveCSS(name, value);
    }
    public async toHaveClass(expected: string | RegExp | (string | RegExp)[]): Promise<void> {
        await playwrightPageLocator.toHaveClass(expected);
    }
    public async toHaveCount(count: number): Promise<void> {
        await playwrightPageLocator.toHaveCount(count);
    }
    public async toContainText(expected: string | RegExp | (string | RegExp)[]): Promise<void> {
        await playwrightPageLocator.toContainText(expected);
    }
    public async toHaveId(id: string | RegExp): Promise<void> {
        await playwrightPageLocator.toHaveId(id);
    }
}