import { expect } from "@playwright/test";
import { playwrightPage } from "../utils/fixtureHooks";
import { Actionable } from "../utils/uiActions";
import { LocatorFragmentProps, LocatorFragment } from "./locatorFragment";

export interface WebFragmentProps{
    open(url?: string): Promise<void>;
}

export class WebFragment implements WebFragmentProps{
    protected defaultURl: string | undefined;
    constructor(defaultUrl?: string) {
        this.defaultURl = defaultUrl && defaultUrl
    }
    public async open(url?: string): Promise<void> {
        await playwrightPage.goto(url? url : this.defaultURl? this.defaultURl : 'ha ha ha');
    }
    protected webElement(locator: string): LocatorFragmentProps {
        playwrightPage.find(locator);
        return new LocatorFragment();
    }
    protected waitForWebElement(locator: string, actionable?: Actionable | Actionable[]): LocatorFragmentProps {
        playwrightPage.find(locator);
        if(actionable && Array.isArray(actionable)){
            for(let actionableCheck of actionable){
                new Promise((resolve, _)=>{
                    resolve(checkActionable(locator, actionableCheck))
                });
            }
        }
        else if(actionable){
            new Promise((resolve, _)=>{
                resolve(checkActionable(locator, actionable))
            });
        }
        return new LocatorFragment();
    }
}

export const checkActionable = async(locator: string, actionable: Actionable) => {
    switch(actionable){
        case Actionable.ToBeChecked:
            expect(await playwrightPage.page.isChecked(locator)).toBeTruthy();
            break;
        case Actionable.ToBeDisabled:
            expect(await playwrightPage.page.isDisabled(locator)).toBeTruthy();
            break;
        case Actionable.ToBeEditable:
            expect(await playwrightPage.page.isEditable(locator)).toBeTruthy();
            break;
        case Actionable.ToBeEnabled:
            expect(await playwrightPage.page.isEnabled(locator)).toBeTruthy();
            break;
        case Actionable.ToBeHidden:
            expect(await playwrightPage.page.isHidden(locator)).toBeTruthy();
            break;
        case Actionable.ToBeVisible:
            expect(await playwrightPage.page.isVisible(locator)).toBeTruthy();
            break;
        default:
            console.log('HardPass')
    }
}