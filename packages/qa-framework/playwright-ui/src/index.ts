import {
  playwrightPage,
  registerPlaywrightPage,
  registerPlaywrightExpect,
  registerAppUrl,
} from './utils/fixtureHooks';
import { WebElement, useWebElement } from './web/webElement';
import { WebFragment, WebFragmentActions, URLBuilder } from './web/webFragment';
import {
  Actionable,
  createFragment,
  createFragmentActions,
} from './utils/uiActions';
import { WaitLogic } from './utils/waitActions';

export {
  playwrightPage,
  registerPlaywrightPage,
  registerPlaywrightExpect,
  registerAppUrl,
} from './utils/fixtureHooks';
export {
  WebFragment,
  WebFragmentActions,
  URLBuilder,
  URLProps,
} from './web/webFragment';
export { TypeWebElement, WebElement, useWebElement } from './web/webElement';
export {
  Actionable,
  LocatorOptions,
  createFragment,
  createFragmentActions,
} from './utils/uiActions';
export {
  WaitLogic,
  NetworkIdleProps,
  WaitForNetworkIdleProps,
} from './utils/waitActions';

export default abstract class QAFramework {
  static playwrightPage = playwrightPage;
  static registerAppUrl = registerAppUrl;
  static registerPlaywrightPage = registerPlaywrightPage;
  static registerPlaywrightExpect = registerPlaywrightExpect;
  static WebFragment = WebFragment;
  static WebFragmentActions = WebFragmentActions;
  static WebElement = WebElement;
  static useWebElement = useWebElement;
  static Actionable = Actionable;
  static createFragment = createFragment;
  static createFragmentActions = createFragmentActions;
  static URLBuilder = URLBuilder;
  static WaitLogic = WaitLogic;
}
