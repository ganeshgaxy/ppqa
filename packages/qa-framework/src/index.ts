import { playwrightPage, registerPlaywrightPage } from "./utils/fixtureHooks";
import { WebElement, useWebElement } from "./web/webElement";
import { WebFragment } from "./web/webFragment";
import { Actionable, createFragment } from './utils/uiActions';

export { playwrightPage, registerPlaywrightPage } from "./utils/fixtureHooks";
export { WebFragment } from './web/webFragment';
export { TypeWebElement, WebElement, useWebElement } from './web/webElement';
export { Actionable, LocatorOptions, createFragment } from './utils/uiActions';

export default abstract class QAFramework {
    static playwrightPage = playwrightPage;
    static registerPlaywrightPage = registerPlaywrightPage;
    static WebFragment = WebFragment;
    static WebElement = WebElement;
    static useWebElement = useWebElement;
    static Actionable = Actionable;
    static createFragment = createFragment;
}