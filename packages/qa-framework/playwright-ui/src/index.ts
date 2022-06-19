import {
  playwrightPage,
  registerPlaywrightPage,
  registerPlaywrightExpect,
  registerAppUrl,
  registerAll,
  registerPlaywrightAPI,
} from './utils/fixtureHooks';
import { WebElement, useWebElement } from './web/webElement';
import { WebFragment, WebFragmentActions, URLBuilder } from './web/webFragment';
import {
  Actionable,
  createFragment,
  createFragmentActions,
} from './utils/uiActions';
import { WaitLogic } from './utils/waitActions';
import { createApiFragment } from './utils/apiActions';
import { ApiFragment, ApiURLBuilder } from './api/apiFragment';

export {
  playwrightPage,
  registerPlaywrightPage,
  registerPlaywrightExpect,
  registerAppInfo,
  registerAppUrl,
  registerAll,
  registerPlaywrightAPI,
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
export { createApiFragment } from './utils/apiActions';
export { ApiFragment, ApiURLBuilder } from './api/apiFragment';
export { AppInfo } from './utils/fixtureHooks';

export default abstract class QAFrameworkUI {
  static playwrightPage = playwrightPage;
  static registerAppUrl = registerAppUrl;
  static registerAll = registerAll;
  static registerPlaywrightAPI = registerPlaywrightAPI;
  static registerPlaywrightPage = registerPlaywrightPage;
  static registerPlaywrightExpect = registerPlaywrightExpect;
  static WebFragment = WebFragment;
  static WebFragmentActions = WebFragmentActions;
  static WebElement = WebElement;
  static useWebElement = useWebElement;
  static ApiFragment = ApiFragment;
  static Actionable = Actionable;
  static createFragment = createFragment;
  static createFragmentActions = createFragmentActions;
  static createApiFragment = createApiFragment;
  static URLBuilder = URLBuilder;
  static ApiURLBuilder = ApiURLBuilder;
  static WaitLogic = WaitLogic;
}
