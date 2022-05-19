import { playwrightPage, playwrightPageLocator } from "../utils/fixtureHooks";
import { Actionable, LocatorOptions } from "../utils/uiActions";
import { checkActionable } from "./webFragment";


export interface WebElementProps{
    webElementProps : TypeWebElement;
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

}

export const useWebElement = (webElementProps: TypeWebElement): WebElementProps => {
    const returnObject: WebElementProps = new WebElement(webElementProps);
    
    const handler = {}
    return new Proxy(returnObject, handler) as WebElementProps;
}