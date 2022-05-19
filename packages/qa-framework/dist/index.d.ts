import { WebElement } from "./web/webElement";
import { WebFragment } from "./web/webFragment";
import { Actionable } from './utils/uiActions';
export { playwrightPage, registerPlaywrightPage } from "./utils/fixtureHooks";
export { WebFragment } from './web/webFragment';
export { TypeWebElement, WebElement, useWebElement } from './web/webElement';
export { Actionable, LocatorOptions, createFragment } from './utils/uiActions';
export default abstract class QAFramework {
    static playwrightPage: import("./utils/uiActions").PlaywrightPage;
    static registerPlaywrightPage: (page: import("playwright-core").Page) => void;
    static WebFragment: typeof WebFragment;
    static WebElement: typeof WebElement;
    static useWebElement: (webElementProps: import("./web/webElement").TypeWebElementProps) => import("./web/webElement").WebElementProps;
    static Actionable: typeof Actionable;
    static createFragment: <T extends object>(ClassObject: new (url?: string | undefined) => T, url?: string | undefined) => T;
}
