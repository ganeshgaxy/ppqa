import { playwrightPageLocator } from "../utils/fixtureHooks";


export interface LocatorFragmentProps{
    search(text: string): Promise<LocatorFragmentProps>;
    typeIn(text: string): Promise<LocatorFragmentProps>;
    click(): Promise<LocatorFragmentProps>;
    pressKey(text: string): Promise<LocatorFragmentProps>;

    toHaveText(expected: string|RegExp|Array<string|RegExp>): Promise<LocatorFragmentProps>;
    toHaveValue(value: string|RegExp): Promise<LocatorFragmentProps>;
    toHaveAttribute(name: string, value: string|RegExp): Promise<LocatorFragmentProps>;
    toHaveCSS(name: string, value: string|RegExp): Promise<LocatorFragmentProps>;
    toHaveClass(expected: string|RegExp|Array<string|RegExp>): Promise<LocatorFragmentProps>;
    toHaveCount(count: number): Promise<LocatorFragmentProps>;
    toHaveId(id: string|RegExp): Promise<LocatorFragmentProps>;
}

export class LocatorFragment implements LocatorFragmentProps{
    public async click(): Promise<LocatorFragmentProps> {
        await playwrightPageLocator.click();
        return this;
    }
    public async search(text: string): Promise<LocatorFragmentProps> {
        await playwrightPageLocator.type(text);
        return this;
    }
    public async typeIn(text: string): Promise<LocatorFragmentProps> {
        await playwrightPageLocator.type(text);
        return this;
    }
    public async pressKey(text: string): Promise<LocatorFragmentProps> {
        await playwrightPageLocator.press(text);
        return this;
    }
    
    public async toHaveText(expected: string | RegExp | (string | RegExp)[]): Promise<LocatorFragmentProps> {
        await playwrightPageLocator.toHaveText(expected);
        return this;
    }
    public async toHaveValue(value: string | RegExp): Promise<LocatorFragmentProps> {
        await playwrightPageLocator.toHaveValue(value);
        return this;
    }
    public async toHaveAttribute(name: string, value: string | RegExp): Promise<LocatorFragmentProps> {
        await playwrightPageLocator.toHaveAttribute(name, value);
        return this;
    }
    public async toHaveCSS(name: string, value: string | RegExp): Promise<LocatorFragmentProps> {
        await playwrightPageLocator.toHaveCSS(name, value);
        return this;
    }
    public async toHaveClass(expected: string | RegExp | (string | RegExp)[]): Promise<LocatorFragmentProps> {
        await playwrightPageLocator.toHaveClass(expected);
        return this;
    }
    public async toHaveCount(count: number): Promise<LocatorFragmentProps> {
        await playwrightPageLocator.toHaveCount(count);
        return this;
    }
    public async toHaveId(id: string | RegExp): Promise<LocatorFragmentProps> {
        await playwrightPageLocator.toHaveId(id);
        return this;
    }
}