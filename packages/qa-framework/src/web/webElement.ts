import { playwrightPage, playwrightPageLocator } from "../utils/fixtureHooks";
import { Actionable, LocatorOptions } from "../utils/uiActions";
import { PageLocatorExpect } from "../utils/uiAssertions";
import { ElementOrFragmentProps } from "./generic";
import { checkPageActionable } from "./webFragment";


export interface WebElementProps extends ElementOrFragmentProps<WebElement>{
    webElementProps : TypeWebElement;
    pageLocatorExpect: PageLocatorExpect;
    search(): Promise<WebElement>;
    typeIn(): Promise<WebElement>;
    findInLocator(locator: string): WebElement;
    findNth(nth: number): WebElement;
    findFirst(): WebElement;
    assert(): PageLocatorExpect;
}

export interface TypeWebElementProps {
    locator: string;
    text?: string;
    nth?: number;
    actionable?: Actionable | Actionable[];
    options?: LocatorOptions;
}

export type TypeWebElement = TypeWebElementProps;

export class WebElement implements WebElementProps{
    public webElementProps : TypeWebElement;
    public pageLocatorExpect: PageLocatorExpect;
    constructor(webElementProps: TypeWebElement){
        this.webElementProps = webElementProps;
        this.pageLocatorExpect = new PageLocatorExpect()
        webElementProps.nth !== undefined ? playwrightPage.findNth(webElementProps.nth, this.webElementProps.locator) : playwrightPage.find(this.webElementProps.locator);
        if(webElementProps.actionable && Array.isArray(webElementProps.actionable)){
            for(let actionableCheck of webElementProps.actionable){
                new Promise((resolve, _)=>{
                    resolve(checkPageActionable(webElementProps.locator, actionableCheck))
                });
            }
        }
        else if(webElementProps.actionable){
            let actionable = webElementProps.actionable;
            new Promise((resolve, _)=>{
                resolve(checkPageActionable(webElementProps.locator, actionable))
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
    public findInLocator(locator: string): WebElement {
        playwrightPageLocator.find(locator);
        return this;
    }
    public findNth(nth: number): WebElement {
        playwrightPageLocator.findNth(nth);
        return this;
    }
    public findFirst(): WebElement {
        playwrightPageLocator.findFirst();
        return this;
    }
    public async click(): Promise<WebElement> {
        await playwrightPageLocator.click();
        return this;
    }
    public async dispatchEvent(type: string): Promise<WebElement> {
        await playwrightPageLocator.dispatchEvent(type);
        return this;
    }
    public async dblclick(): Promise<WebElement> {
        await playwrightPageLocator.dblclick();
        return this;
    }
    public async check(): Promise<WebElement> {
        await playwrightPageLocator.check();
        return this;
    }
    public async uncheck(): Promise<WebElement> {
        await playwrightPageLocator.uncheck();
        return this;
    }
    public async pressKey(text: string): Promise<WebElement> {
        await playwrightPageLocator.press(text);
        return this;
    }
    public async verifyActionable(actionable: Actionable): Promise<WebElement> {
        await playwrightPageLocator.verifyActionable(actionable);
        return this;
    }
    public async verifyNotActionable(actionable: Actionable): Promise<WebElement> {
        await playwrightPageLocator.verifyNotActionable(actionable);
        return this;
    }
    public assert(): PageLocatorExpect {
        return this.pageLocatorExpect;
    }
}

export const useWebElement = (webElementProps: TypeWebElement): WebElementProps => {
    const returnObject: WebElementProps = new WebElement(webElementProps);
    
    const handler = {}
    return new Proxy(returnObject, handler) as WebElementProps;
}