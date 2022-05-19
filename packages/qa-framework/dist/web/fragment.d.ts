export interface WebFragmentProps {
    open(url?: string): Promise<void>;
}
export interface LocatorFragmentProps {
    search(text: string): Promise<LocatorFragmentProps>;
    typeIn(text: string): Promise<LocatorFragmentProps>;
    pressKey(text: string): Promise<LocatorFragmentProps>;
}
export interface WebElementProps {
    search(): Promise<WebElement>;
    typeIn(): Promise<WebElement>;
    pressKey(text: string): Promise<WebElement>;
}
export declare class WebFragment implements WebFragmentProps {
    protected defaultURl: string | undefined;
    constructor(defaultUrl?: string);
    open(url?: string): Promise<void>;
    protected webElement(locator: string): LocatorFragmentProps;
}
export declare class LocatorFragment implements LocatorFragmentProps {
    search(text: string): Promise<LocatorFragmentProps>;
    typeIn(text: string): Promise<LocatorFragmentProps>;
    pressKey(text: string): Promise<LocatorFragmentProps>;
}
export interface TypeWebElementProps {
    locator: string;
    text?: string;
}
export declare type TypeWebElement = TypeWebElementProps;
export declare class WebElement implements WebElementProps {
    private webElementProps;
    constructor(webElementProps: TypeWebElement);
    search(): Promise<WebElement>;
    typeIn(): Promise<WebElement>;
    pressKey(text: string): Promise<WebElement>;
}
export declare const useWebElement: (webElementProps: TypeWebElement) => WebElementProps;
