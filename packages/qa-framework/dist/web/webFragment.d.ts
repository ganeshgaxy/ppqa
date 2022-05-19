import { Actionable } from "../utils/uiActions";
import { LocatorFragmentProps } from "./locatorFragment";
export interface WebFragmentProps {
    open(url?: string): Promise<void>;
}
export declare class WebFragment implements WebFragmentProps {
    protected defaultURl: string | undefined;
    constructor(defaultUrl?: string);
    open(url?: string): Promise<void>;
    protected webElement(locator: string): LocatorFragmentProps;
    protected waitForWebElement(locator: string, actionable?: Actionable | Actionable[]): LocatorFragmentProps;
}
export declare const checkActionable: (locator: string, actionable: Actionable) => Promise<void>;
