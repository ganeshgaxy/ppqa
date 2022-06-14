import { Expect, Locator, Page } from '@playwright/test';
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
export let playwrightPageLocator: PlaywrightPageLocator;
export let appInfo: AppInfo;

/**
 * The basic appinfo data might be needed for testing the app
 */
export interface AppInfo {
  baseURL: string;
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
