import { Actionable, LocatorOptions } from "../utils/uiActions";
export interface WebElementProps {
    webElementProps: TypeWebElement;
    search(): Promise<WebElement>;
    typeIn(): Promise<WebElement>;
    pressKey(text: string): Promise<WebElement>;
}
export interface TypeWebElementProps {
    locator: string;
    text?: string;
    actionable?: Actionable | Actionable[];
    options?: LocatorOptions;
}
export declare type TypeWebElement = TypeWebElementProps;
export declare class WebElement implements WebElementProps {
    webElementProps: TypeWebElement;
    constructor(webElementProps: TypeWebElement);
    search(): Promise<WebElement>;
    typeIn(): Promise<WebElement>;
    pressKey(text: string): Promise<WebElement>;
}
export declare const useWebElement: (webElementProps: TypeWebElement) => WebElementProps;
