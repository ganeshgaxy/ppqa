import { APIRequestContext } from '@playwright/test';

export interface PlaywrightAPIProps {
  request: APIRequestContext;
}

export class PlaywrightAPI implements PlaywrightAPIProps {
  public request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }
}

export const usePlaywrightAPI = (request: APIRequestContext) => {
  const returnObject: PlaywrightAPIProps = new PlaywrightAPI(request);

  const handler = {};
  return new Proxy(returnObject, handler) as PlaywrightAPIProps;
};
