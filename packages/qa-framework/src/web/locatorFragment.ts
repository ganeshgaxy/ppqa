import { playwrightPageLocator } from "../utils/fixtureHooks";


export interface LocatorFragmentProps{
    search(text: string): Promise<LocatorFragmentProps>;
    typeIn(text: string): Promise<LocatorFragmentProps>;
    pressKey(text: string): Promise<LocatorFragmentProps>;
}

export class LocatorFragment implements LocatorFragmentProps{
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
}