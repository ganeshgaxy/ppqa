import { LocatorCoreCalls } from '../core/locatorCoreCalls';
import { PageCoreCalls } from '../core/pageCoreCalls';
import { appInfo, playwrightPage } from './fixtureHooks';

/* Defining the interface for the function waitForNetworkIdle. */
export interface WaitForNetworkIdleProps {
  timeout: number;
  maxInflightRequests: number;
}

/* Defining the interface for the function waitForNetworkIdle. */
export interface NetworkIdleProps {
  waitForNetworkIdle?: WaitForNetworkIdleProps;
}

/**
 * This class is used to wait for the network to be idle before continuing with the test.
 * This module cannot be used directly by a test code, but can be provided to be used by Proxy
 * Check createFragment and createFragmentActions for how it is being used
 * @example
 * //You can simple use this by create a function inside a class that extends WebFragment or WebFragmentActions
 * await this.actions.someFunctionThatLoadsPageOnClick(
 *     'prop1',
 *     'prop2',
 *     WaitLogic.WaitForNetworkIdle()
 *   );
 * ...
 * export class SearchComponentActions extends WebFragmentActions {
 *   someFunctionThatLoadsPageOnClick = async (
 *     prop1: string,
 *     prop2?: string,
 *     waitOptions?: NetworkIdleProps
 *   ) => {
 *     //code to be executed before wait logic kicks in
 *     ...
 */
export class WaitLogic {
  public static WaitForNetworkIdle = (
    timeout: number = 5000
  ): NetworkIdleProps => {
    return {
      waitForNetworkIdle: {
        timeout,
        maxInflightRequests: 0,
      },
    };
  };
}

/* This is an interface for the function waitForNetworkResponse. */
export interface NetworkResponseProps {
  urlPath: string;
  status?: number;
}

/**
 * If the WAIT_FOR_NETWORK_RESPONSE property is set, wait for a network response with the specified URL
 * and status.
 */
export async function waitForPageNetworkResponse() {
  if (PageCoreCalls.WAIT_FOR_NETWORK_RESPONSE) {
    let responseInfo = PageCoreCalls.WAIT_FOR_NETWORK_RESPONSE;
    await playwrightPage.page
      .waitForResponse(
        (response) =>
          response.url() === `${appInfo.baseURL}${responseInfo.urlPath}` &&
          response.status() === responseInfo.status
      )
      .catch(() => {
        throw (
          `Can't watch networkCall ${appInfo.baseURL}` +
          `${responseInfo.urlPath} with status ${responseInfo.status}`
        );
      });
    PageCoreCalls.WAIT_FOR_NETWORK_RESPONSE = undefined;
  }
}

/**
 * If the LocatorCoreCalls.WAIT_FOR_NETWORK_RESPONSE property is set, wait for a network response with
 * the specified URL and status.
 */
export async function waitForLocatorNetworkResponse() {
  if (LocatorCoreCalls.WAIT_FOR_NETWORK_RESPONSE) {
    let responseInfo = LocatorCoreCalls.WAIT_FOR_NETWORK_RESPONSE;
    await playwrightPage.page
      .waitForResponse(
        (response) =>
          response.url() === `${appInfo.baseURL}${responseInfo.urlPath}` &&
          response.status() === responseInfo.status
      )
      .catch(() => {
        throw (
          `Can't watch networkCall ${appInfo.baseURL}` +
          `${responseInfo.urlPath} with status ${responseInfo.status}`
        );
      });
    LocatorCoreCalls.WAIT_FOR_NETWORK_RESPONSE = undefined;
  }
}

/**
 * This function waits for the network to be idle for a certain amount of time before continuing.
 * @param {WaitForNetworkIdleProps} options - WaitForNetworkIdleProps = {
 * @returns A promise.
 */
export function waitForNetworkIdle(
  options: WaitForNetworkIdleProps = {
    timeout: 5000,
    maxInflightRequests: 0,
  }
) {
  playwrightPage.page.on('request', onRequestStarted);
  playwrightPage.page.on('requestfinished', onRequestFinished);
  playwrightPage.page.on('requestfailed', onRequestFinished);

  let inflight = 0;
  let fulfill: any;
  const promise = new Promise((x) => (fulfill = x));
  let timeoutId = setTimeout(onTimeoutDone, options.timeout);

  return promise;

  function onTimeoutDone() {
    playwrightPage.page.removeListener('request', onRequestStarted);
    playwrightPage.page.removeListener('requestfinished', onRequestFinished);
    playwrightPage.page.removeListener('requestfailed', onRequestFinished);
    fulfill();
  }

  function onRequestStarted() {
    ++inflight;

    if (inflight > options.maxInflightRequests) {
      clearTimeout(timeoutId);
    }
  }

  function onRequestFinished() {
    if (inflight === 0) {
      return;
    }

    --inflight;

    if (inflight === options.maxInflightRequests) {
      timeoutId = setTimeout(onTimeoutDone, options.timeout);
    }
  }
}
