import { HeadersProps } from '../core/apiCoreCalls';
import { appInfo, playwrightApi } from '../utils/fixtureHooks';
import { URLBuilder } from '../web/webFragment';

/**
 * To Build API URLs
 */
export class ApiURLBuilder extends URLBuilder {
  constructor() {
    super(appInfo && appInfo.baseURL);
  }
}

export class ApiFragment {
  /**
   * updateHeaders
   * * This function updates the headers of the current page.
   * @param {HeadersProps} headers - HeadersProps
   * @returns The instance of the class.
   */
  public updateHeaders(headers: HeadersProps) {
    playwrightApi.updateHeaders(headers);
    return this;
  }

  /**
   * fromGetRequest
   * * This function takes a url as a parameter and calls the getRequest function from the playwrightApi
   * * class, then returns the current instance of the class.
   * @param {string} url - string - The url to make the request to
   * @returns The instance of the class.
   */
  public fromGetRequest(url: string) {
    playwrightApi.getRequest(url);
    return this;
  }

  /**
   * fromPostRequest
   * * This function takes a url and data as parameters, calls the postRequest function from the
   * * playwrightApi module, and returns the current instance of the class.
   * @param {string} url - string - The url to make the request to.
   * @param {unknown} [data] - The data to send with the request.
   * @returns The instance of the class.
   */
  public fromPostRequest(url: string, data?: unknown) {
    playwrightApi.postRequest(url, data);
    return this;
  }

  /**
   * getBody
   * * This function returns the body of the page.
   * @returns The body of the request.
   */
  public async getBody() {
    return await playwrightApi.getBody();
  }

  /**
   * getJson
   * * The function returns a promise that resolves to the result of the function getJson() in the
   * * playwrightApi.ts file
   * @returns The return value of the function is the return value of the function that is being
   * called.
   */
  public async getJson(options?: { keys?: string[] }) {
    return await playwrightApi.getJson(options);
  }

  /**
   * getJsonWithKeys
   * * This function returns a JSON object with the keys specified in the options object.
   * @param [options] - Splicing options like keys
   * @returns The return value is a promise that resolves to an object.
   */
  public async getJsonWithKeys(options?: { keys?: string[] }) {
    return await playwrightApi.getJsonWithKeys(options);
  }

  /**
   * dispose
   * * It closes the browser.
   * @returns The return value is a promise that resolves to the return value of the dispose method of
   * the playwrightApi object.
   */
  public async dispose() {
    return await playwrightApi.dispose();
  }

  /**
   * isResponseOK
   * * This function is used to check if the response is OK.
   * @returns The return value is the instance of the class.
   */
  public isResponseOK() {
    playwrightApi.isResponseOK();
    return this;
  }

  public utils() {
    return playwrightApi.genericActions;
  }
}
