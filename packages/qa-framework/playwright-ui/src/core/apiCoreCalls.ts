import { playwrightApi } from '../utils/fixtureHooks';

/**
 * HeadersProps is an object with string keys and string values.
 * @property {string} [key: string] - string;
 */
export type HeadersProps = {
  [key: string]: string;
};

export abstract class APICoreCalls {
  /**
   * getRequest
   * * To get request using playwright request
   * @param url - Url endpoint to get request
   * @param options Options like headers
   * @returns APIResponse
   */
  public static getRequest = async (
    url: string,
    options?: { headers?: HeadersProps }
  ) => {
    const response = await playwrightApi.request.get(
      url,
      options && { headers: options.headers }
    );
    return response;
  };

  /**
   * postRequest
   * * To post request using playwright request
   * @param url - Url endpoint to post request
   * @param options Options like headers, data
   * @returns APIResponse
   */
  public static postRequest = async (
    url: string,
    options?: { headers?: HeadersProps; data?: unknown }
  ) => {
    const response = await playwrightApi.request.post(
      url,
      options && { data: options.data, headers: options.headers }
    );
    return response;
  };
}
