import { LocatorCoreCalls, PageCoreCalls } from './coreCalls';
import { appInfo, playwrightPage } from './fixtureHooks';

export interface NetworkIdleProps {
  waitForNetworkIdle?: boolean;
}

export class WaitLogic {
  public static WaitForNetworkIdle: NetworkIdleProps = {
    waitForNetworkIdle: true,
  };
}

export interface NetworkResponseProps {
  urlPath: string;
  status?: number;
}

export interface WaitForNetworkIdleProps {
  timeout: number;
  maxInflightRequests?: number;
}

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

export function waitForNetworkIdle(
  timeout: number = 5000,
  maxInflightRequests = 0
) {
  playwrightPage.page.on('request', onRequestStarted);
  playwrightPage.page.on('requestfinished', onRequestFinished);
  playwrightPage.page.on('requestfailed', onRequestFinished);

  let inflight = 0;
  let fulfill: any;
  const promise = new Promise((x) => (fulfill = x));
  let timeoutId = setTimeout(onTimeoutDone, timeout);

  return promise;

  function onTimeoutDone() {
    playwrightPage.page.removeListener('request', onRequestStarted);
    playwrightPage.page.removeListener('requestfinished', onRequestFinished);
    playwrightPage.page.removeListener('requestfailed', onRequestFinished);
    fulfill();
  }

  function onRequestStarted() {
    ++inflight;

    if (inflight > maxInflightRequests) {
      clearTimeout(timeoutId);
    }
  }

  function onRequestFinished() {
    if (inflight === 0) {
      return;
    }

    --inflight;

    if (inflight === maxInflightRequests) {
      timeoutId = setTimeout(onTimeoutDone, timeout);
    }
  }
}
