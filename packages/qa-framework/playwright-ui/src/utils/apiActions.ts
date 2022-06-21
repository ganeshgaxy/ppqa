import { APIRequestContext, APIResponse } from '@playwright/test';
import { APICoreCalls, HeadersProps } from '../core/apiCoreCalls';
import { GenericActions } from './genericActions';
import { GenericExpect } from './uiAssertions';

export type Serializable = any;

export interface PlaywrightApiProps {
  /* A property that is used to store the generic actions. */
  genericActions: GenericActions;
  /* A property that is used to assert the response. */
  genericExpect: GenericExpect;
  /* A property that is used to issue request. */
  request: APIRequestContext;
  /* Headers for the API request */
  headers: HeadersProps | undefined;
  /* A property that is used to store response. */
  response: Promise<APIResponse> | undefined;
  /* A property that is used to store the response configuration. */
  responseConfig: ApiResponseConfig;
  updateHeaders(headers: HeadersProps): void;
  getRequest(url: string): PlaywrightApiProps;
  postRequest(url: string, data?: unknown): PlaywrightApiProps;
  getBody(): Promise<Buffer>;
  getJson(options?: { keys?: string[] }): Promise<Serializable>;
  getJsonWithKeys(options?: {
    keys?: string[];
  }): Promise<{ json: Serializable; keys: string[] }>;
  dispose(): Promise<void>;
  isResponseOK(): PlaywrightApiProps;
  returnResponse(): Promise<unknown>;
  resetResponseConfig(): void;
}

export interface ApiResponseConfig {
  responseBody: boolean;
  responseDispose: boolean;
  responseHeaders: boolean;
  responseHeadersArray: boolean;
  responseJson: boolean;
  responseOk: boolean;
  responseStatus: boolean;
  responseStatusText: boolean;
  responseText: boolean;
  responseURL: boolean;
}

export class PlaywrightApi implements PlaywrightApiProps {
  public genericActions: GenericActions;
  public genericExpect: GenericExpect;
  public request: APIRequestContext;
  public headers: HeadersProps | undefined;
  public response: Promise<APIResponse> | undefined;
  public responseConfig: ApiResponseConfig = {
    responseBody: false,
    responseDispose: false,
    responseHeaders: false,
    responseHeadersArray: false,
    responseJson: false,
    responseOk: false,
    responseStatus: false,
    responseStatusText: false,
    responseText: false,
    responseURL: false,
  };

  constructor(request: APIRequestContext, headers?: HeadersProps) {
    this.request = request;
    this.headers = headers;
    this.genericExpect = new GenericExpect();
    this.genericActions = new GenericActions();
  }

  /**
   * updateHeaders
   * * This function updates the headers of the table
   * @param {HeadersProps} headers - HeadersProps
   */
  public updateHeaders(headers: HeadersProps) {
    this.headers = headers;
  }

  /**
   * getRequest
   * * This function makes a get request to the url provided and returns the response.
   * @param {string} url - string - The url to make the request to
   * @returns The response from the API call.
   */
  public getRequest(url: string): PlaywrightApi {
    this.response = APICoreCalls.getRequest(url, {
      headers: this.headers,
    });
    return this;
  }

  /**
   * postRequest
   * * This function makes a post request to the url provided and returns the response.
   * @param {string} url - string - The url to send the request to
   * @param {unknown} [data] - The data to be sent to the server.
   * @returns The response object.
   */
  public postRequest(url: string, data?: unknown): PlaywrightApi {
    this.response = APICoreCalls.postRequest(url, {
      headers: this.headers,
      data,
    });
    return this;
  }

  /**
   * getBody
   * * If the response body is requested, then return the response body.
   * @returns The response body.
   */
  public async getBody(): Promise<Buffer> {
    this.responseConfig.responseBody = true;
    return this.returnResponse();
  }

  /**
   * getJson
   * * If the response is JSON, return the response as JSON.
   * @returns The returnResponse() method is being called and the response is being returned.
   */
  public async getJson(options?: { keys?: string[] }): Promise<Serializable> {
    this.responseConfig.responseJson = true;
    let responseJson = await this.returnResponse();
    if (options && options.keys) {
      let outputJson: Serializable = {};
      for (let key of options.keys) {
        outputJson[key] = responseJson[key];
      }
      return outputJson;
    }
    return !options && responseJson;
  }

  /**
   * getJsonWithKeys
   * * This function returns a promise that resolves to an object with two properties: json and keys. The
   * * json property is a Serializable object, and the keys property is an array of strings.
   * @param [options] - splicing options like keys
   * @returns An object with two properties: json and keys.
   */
  public async getJsonWithKeys(options?: {
    keys?: string[];
  }): Promise<{ json: Serializable; keys: string[] }> {
    this.responseConfig.responseJson = true;
    let responseJson = await this.returnResponse();
    let allKeys = Object.keys(responseJson);
    if (options && options.keys) {
      let outputJson: Serializable = {};
      for (let key of options.keys) {
        outputJson[key] = responseJson[key];
      }
      return { json: outputJson, keys: allKeys };
    }
    return { json: responseJson, keys: allKeys };
  }

  /**
   * dispose
   * * The function returns a promise that resolves to a void
   * @returns The response object.
   */
  public async dispose(): Promise<void> {
    this.responseConfig.responseDispose = true;
    return this.returnResponse();
  }

  /**
   * isResponseOK
   * * This function sets the responseOk property of the responseConfig object to true and returns the
   * * responseConfig object.
   * @returns The responseConfig object.
   */
  public isResponseOK() {
    this.responseConfig.responseOk = true;
    return this;
  }

  /**
   * returnResponse
   * * If the response is truthy, then return the response body, otherwise return the response.
   * @returns The response object.
   */
  public async returnResponse(): Promise<
    Serializable | Buffer | void | APIResponse
  > {
    const response = await this.response;
    const responseConfig = this.responseConfig;
    this.resetResponseConfig();
    if (response) {
      responseConfig.responseBody &&
        this.genericExpect.toBeTruthy(response.ok());
      if (responseConfig.responseBody) return await response.body();
      if (responseConfig.responseJson) return await response.json();
      if (responseConfig.responseDispose) return await response.dispose();
      return this.response;
    }
  }

  /**
   * resetResponseConfig
   * * This function resets the responseConfig object to its default values.
   */
  public resetResponseConfig() {
    this.responseConfig = {
      responseBody: false,
      responseDispose: false,
      responseHeaders: false,
      responseHeadersArray: false,
      responseJson: false,
      responseOk: false,
      responseStatus: false,
      responseStatusText: false,
      responseText: false,
      responseURL: false,
    };
  }
}

/**
 * usePlaywrightApi
 * * It returns a proxy object that wraps the PlaywrightApi class
 * @param {APIRequestContext} request - APIRequestContext - This is the request object that is passed
 * to the API function.
 * @returns A Proxy object that is a PlaywrightApiProps.
 */
export const usePlaywrightApi = (request: APIRequestContext) => {
  const returnObject: PlaywrightApiProps = new PlaywrightApi(request);

  const handler = {};
  return new Proxy(returnObject, handler) as PlaywrightApiProps;
};

/**
 * createApiFragment
 * * To create a api fragment actions object with proxy traps
 * @param ClassObject The ClassObject that will use ApiFragment actions
 * @returns The ApiFragment actions with Proxy traps
 */
export const createApiFragment = <T extends object>(ClassObject: {
  new (): T;
}) => {
  const handler = {
    construct(target: any, args: any) {
      return new Proxy(new target(...args), {
        get: (target: any, prop: any) => {
          const origMethod = target[prop];
          return origMethod;
        },
      });
    },
  };
  const Fragment = new Proxy(ClassObject, handler);
  return new Fragment() as T;
};
