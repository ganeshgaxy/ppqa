
import { playwrightExpect, playwrightPage } from "../utils/fixtureHooks";
import { Actionable } from "../utils/uiActions";
import { LocatorFragmentProps, LocatorFragment } from "./locatorFragment";

export interface WebFragmentProps{
    open(url?: string): Promise<WebFragmentProps>;
}

export class WebFragment implements WebFragmentProps{
    protected defaultURl: string | undefined;
    constructor(defaultUrl?: string) {
        this.defaultURl = defaultUrl && defaultUrl
    }
    public async open(url?: string): Promise<WebFragmentProps> {
        await playwrightPage.goto(url? url : this.defaultURl? this.defaultURl : 'ha ha ha');
        return this;
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
            playwrightExpect.expect(await playwrightPage.page.isChecked(locator)).toBeTruthy();
            break;
        case Actionable.ToBeDisabled:
            playwrightExpect.expect(await playwrightPage.page.isDisabled(locator)).toBeTruthy();
            break;
        case Actionable.ToBeEditable:
            playwrightExpect.expect(await playwrightPage.page.isEditable(locator)).toBeTruthy();
            break;
        case Actionable.ToBeEnabled:
            playwrightExpect.expect(await playwrightPage.page.isEnabled(locator)).toBeTruthy();
            break;
        case Actionable.ToBeHidden:
            playwrightExpect.expect(await playwrightPage.page.isHidden(locator)).toBeTruthy();
            break;
        case Actionable.ToBeVisible:
            playwrightExpect.expect(await playwrightPage.page.isVisible(locator)).toBeTruthy();
            break;
        default:
            console.log('HardPass')
    }
}