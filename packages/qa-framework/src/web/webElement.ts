import { playwrightPage, playwrightPageLocator } from "../utils/fixtureHooks";
import { Actionable, LocatorOptions } from "../utils/uiActions";
import { checkActionable } from "./webFragment";


export interface WebElementProps{
    webElementProps : TypeWebElement;
    click(): Promise<WebElement>;
    search(): Promise<WebElement>;
    typeIn(): Promise<WebElement>;
    pressKey(text: string): Promise<WebElement>;

    toHaveText(expected: string|RegExp|Array<string|RegExp>): Promise<WebElement>;
    toHaveValue(value: string|RegExp): Promise<WebElement>;
    toHaveAttribute(name: string, value: string|RegExp): Promise<WebElement>;
    toHaveCSS(name: string, value: string|RegExp): Promise<WebElement>;
    toHaveClass(expected: string|RegExp|Array<string|RegExp>): Promise<WebElement>;
    toHaveCount(count: number): Promise<WebElement>;
    toHaveId(id: string|RegExp): Promise<WebElement>;
}

export interface TypeWebElementProps {
    locator: string;
    text?: string;
    actionable?: Actionable | Actionable[];
    options?: LocatorOptions;
}

export type TypeWebElement = TypeWebElementProps;

export class WebElement implements WebElementProps{

    public webElementProps : TypeWebElement;

    constructor(webElementProps: TypeWebElement){
        this.webElementProps = webElementProps;
        playwrightPage.find(this.webElementProps.locator);
        if(webElementProps.actionable && Array.isArray(webElementProps.actionable)){
            for(let actionableCheck of webElementProps.actionable){
                new Promise((resolve, _)=>{
                    resolve(checkActionable(webElementProps.locator, actionableCheck))
                });
            }
        }
        else if(webElementProps.actionable){
            let actionable = webElementProps.actionable;
            new Promise((resolve, _)=>{
                resolve(checkActionable(webElementProps.locator, actionable))
            });
        }
    }
    public async click(): Promise<WebElement> {
        await playwrightPageLocator.click();
        return this;
    }
    public async search(): Promise<WebElement> {
        if(this.webElementProps.text){
            await playwrightPageLocator.type(this.webElementProps.text);
        }
        return this;
    }
    public async typeIn(): Promise<WebElement> {
        if(this.webElementProps.text){
            await playwrightPageLocator.type(this.webElementProps.text);
        }
        return this;
    }
    public async pressKey(text: string): Promise<WebElement> {
        await playwrightPageLocator.press(text);
        return this;
    }
    
    public async toHaveText(expected: string | RegExp | (string | RegExp)[]): Promise<WebElement> {
        await playwrightPageLocator.toHaveText(expected);
        return this;
    }
    public async toHaveValue(value: string | RegExp): Promise<WebElement> {
        await playwrightPageLocator.toHaveValue(value);
        return this;
    }
    public async toHaveAttribute(name: string, value: string | RegExp): Promise<WebElement> {
        await playwrightPageLocator.toHaveAttribute(name, value);
        return this;
    }
    public async toHaveCSS(name: string, value: string | RegExp): Promise<WebElement> {
        await playwrightPageLocator.toHaveCSS(name, value);
        return this;
    }
    public async toHaveClass(expected: string | RegExp | (string | RegExp)[]): Promise<WebElement> {
        await playwrightPageLocator.toHaveClass(expected);
        return this;
    }
    public async toHaveCount(count: number): Promise<WebElement> {
        await playwrightPageLocator.toHaveCount(count);
        return this;
    }
    public async toHaveId(id: string | RegExp): Promise<WebElement> {
        await playwrightPageLocator.toHaveId(id);
        return this;
    }

}

export const useWebElement = (webElementProps: TypeWebElement): WebElementProps => {
    const returnObject: WebElementProps = new WebElement(webElementProps);
    
    const handler = {}
    return new Proxy(returnObject, handler) as WebElementProps;
}