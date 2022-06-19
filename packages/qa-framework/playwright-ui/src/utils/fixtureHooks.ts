import { APIRequestContext, Expect, Locator, Page } from '@playwright/test';
import { PlaywrightApi, usePlaywrightApi } from './apiActions';
import {
  LocatorOptions,
  PlaywrightPage,
  PlaywrightPageLocator,
  usePlaywrightPage,
  usePlaywrightPageLocator,
} from './uiActions';
import { PlaywrightExpect, usePlaywrightExpect } from './uiAssertions';

export let playwrightPage: PlaywrightPage;
export let playwrightExpect: PlaywrightExpect;
export let playwrightApi: PlaywrightApi;
export let playwrightPageLocator: PlaywrightPageLocator;
export let appInfo: AppInfo;

/**
 * The basic appinfo data might be needed for testing the app
 */
export interface AppInfo {
  baseURL: string;
  apiURL?: string;
  version?: string;
  extra?: unknown;
}

/**
 * registerAppUrl
 * * To register the base url for testing
 * @param url The base URL string
 */
export const registerAppUrl = (url: string) => {
  appInfo = { baseURL: url };
};

/**
 * It takes an object of type AppInfo and assigns it to the appInfo variable
 * @param {AppInfo} info - AppInfo
 */
export const registerAppInfo = (info: AppInfo) => {
  appInfo = info;
  appInfo.apiURL = info.apiURL ? info.apiURL : info.baseURL;
};

/**
 * registerPlaywrightPage
 * * To register the page to be used for testing
 * @param page Playwright tests page to be used
 */
export const registerPlaywrightPage = (page: Page) => {
  playwrightPage = usePlaywrightPage(page);
};

/**
 * registerPlaywrightExpect
 * * To register the expect object to be used for testing
 * @param expect Playwright tests expect to be used
 */
export const registerPlaywrightExpect = (expect: Expect) => {
  playwrightExpect = usePlaywrightExpect(expect);
};

/**
 * registerPlaywrightAPI
 * * To register the api object to be used for testing
 * @param request Playwright tests request to be used
 */
export const registerPlaywrightAPI = (request: APIRequestContext) => {
  playwrightApi = usePlaywrightApi(request);
};

/**
 * It registers all the Playwright functions that we'll be using in our tests
 * @param hooks - object that accepts url, page, expect, request module from Playwright
 */
export const registerAll = (hooks: {
  info: AppInfo;
  page: Page;
  expect: Expect;
  request: APIRequestContext;
}) => {
  registerAppInfo(hooks.info);
  playwrightPage = usePlaywrightPage(hooks.page);
  playwrightExpect = usePlaywrightExpect(hooks.expect);
  playwrightApi = usePlaywrightApi(hooks.request);
};

/**
 * registerPlaywrightPageLocator
 * * To register the locator to be used for testing
 * @param locator The locator to be used for testing
 * @param options
 */
export const registerPlaywrightPageLocator = (
  locator: Locator,
  options?: LocatorOptions
) => {
  playwrightPageLocator = usePlaywrightPageLocator(locator, options && options);
};
