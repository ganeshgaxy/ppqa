import { Locator } from '@playwright/test';
import {
  checkLocatorActionable,
  checkPageActionable,
  URLProps,
} from '../web/webFragment';
import {
  playwrightExpect,
  playwrightPage,
  playwrightPageLocator,
  registerPlaywrightPageLocator,
} from './fixtureHooks';
import {
  Actionable,
  FindOptions,
  LocatorOptions,
  PageOptions,
  PlaywrightPageLocator,
} from './uiActions';
import {
  NetworkResponseProps,
  waitForPageNetworkResponse,
} from './waitActions';

export abstract class PageCoreCalls {
  public static negativeAssertion: boolean = false;
  public static WAIT_FOR_NETWORK_RESPONSE: NetworkResponseProps | undefined;
  public static goto = async (urlProps: URLProps): Promise<void> => {
    await playwrightPage.page.goto(
      urlProps.url,
      urlProps.options && urlProps.options
    );
    if (urlProps.expectedTitle)
      ExpectGenericCoreCalls.toEqual(
        await playwrightPage.page.title(),
        urlProps.expectedTitle
      );
  };
  public static waitForPageLoad = async (
    timeout = 60000,
    state:
      | 'networkidle'
      | 'load'
      | 'domcontentloaded'
      | undefined = 'networkidle'
  ) => {
    await playwrightPage.page.waitForLoadState(state, {
      timeout: timeout,
    });
  };
  public static reload = async (options?: PageOptions): Promise<void> => {
    await playwrightPage.page.reload(options);
  };
  public static goBack = async (options?: PageOptions): Promise<void> => {
    await playwrightPage.page.goBack(options);
  };
  public static getTitle = async (): Promise<string> => {
    return await playwrightPage.page.title();
  };
  public static waitForNetworkResponseAfter = (
    urlPath: string,
    status: number = 200
  ) => {
    let networkResponse: NetworkResponseProps = {
      urlPath,
      status,
    };
    this.WAIT_FOR_NETWORK_RESPONSE = networkResponse;
  };
  public static click = async (
    locator: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      playwrightPage.page.click(locator, options),
    ]);
  };
  public static dispatchEvent = async (
    locator: string,
    type: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      playwrightPage.page.dispatchEvent(locator, type, options),
    ]);
  };
  public static dblclick = async (
    locator: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      playwrightPage.page.dblclick(locator, options),
    ]);
  };
  public static check = async (
    locator: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      playwrightPage.page.check(locator, options),
    ]);
  };
  public static uncheck = async (
    locator: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      playwrightPage.page.uncheck(locator, options),
    ]);
  };
  public static type = async (
    locator: string,
    text: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      playwrightPage.page.fill(locator, text, options),
    ]);
  };
  public static press = async (
    locator: string,
    text: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      playwrightPage.page.press(locator, text, options),
    ]);
  };
  public static find = (
    selector: string,
    baseLocator?: Locator,
    options?: FindOptions
  ): PlaywrightPageLocator => {
    let locator = baseLocator
      ? baseLocator.locator(selector, options)
      : playwrightPage.page.locator(selector, options);
    registerPlaywrightPageLocator(locator);
    return playwrightPageLocator;
  };
  public static findFirst = (
    selector: string,
    options?: FindOptions
  ): PlaywrightPageLocator => {
    registerPlaywrightPageLocator(
      playwrightPage.page.locator(selector, options).first()
    );
    return playwrightPageLocator;
  };
  public static findNth = (
    nth: number,
    selector: string,
    options?: FindOptions
  ): PlaywrightPageLocator => {
    registerPlaywrightPageLocator(
      playwrightPage.page.locator(selector, options).nth(nth)
    );
    return playwrightPageLocator;
  };
  public static verifyActionable = async (
    locator: string,
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void> => {
    await checkPageActionable(locator, actionable, false, options);
  };
  public static verifyNotActionable = async (
    locator: string,
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void> => {
    await checkPageActionable(locator, actionable, true, options);
  };

  public static toBeEmpty = async (
    locator: string,
    message?: string | undefined,
    options?: FindOptions
  ): Promise<void> => {
    PageCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .not.toBeEmpty()
      : await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .toBeEmpty();
    PageCoreCalls.negativeAssertion = false;
  };
  public static toHaveText = async (
    locator: string,
    expected: string | RegExp | Array<string | RegExp>,
    message?: string | undefined,
    options?: FindOptions
  ): Promise<void> => {
    PageCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .not.toHaveText(expected)
      : await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .toHaveText(expected);
    PageCoreCalls.negativeAssertion = false;
  };
  public static toHaveValue = async (
    locator: string,
    value: string | RegExp,
    message?: string | undefined,
    options?: FindOptions
  ): Promise<void> => {
    PageCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .not.toHaveValue(value)
      : await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .toHaveValue(value);
    PageCoreCalls.negativeAssertion = false;
  };
  public static toHaveAttribute = async (
    locator: string,
    name: string,
    value: string | RegExp,
    message?: string | undefined,
    options?: FindOptions
  ): Promise<void> => {
    PageCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .not.toHaveAttribute(name, value)
      : await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .toHaveAttribute(name, value);
    PageCoreCalls.negativeAssertion = false;
  };
  public static toHaveCSS = async (
    locator: string,
    name: string,
    value: string | RegExp,
    message?: string | undefined,
    options?: FindOptions
  ): Promise<void> => {
    PageCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .not.toHaveCSS(name, value)
      : await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .toHaveCSS(name, value);
    PageCoreCalls.negativeAssertion = false;
  };
  public static toHaveClass = async (
    locator: string,
    expected: string | RegExp | Array<string | RegExp>,
    message?: string | undefined,
    options?: FindOptions
  ): Promise<void> => {
    PageCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .not.toHaveClass(expected)
      : await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .toHaveClass(expected);
    PageCoreCalls.negativeAssertion = false;
  };
  public static toHaveCount = async (
    locator: string,
    count: number,
    message?: string | undefined,
    options?: FindOptions
  ): Promise<void> => {
    PageCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .not.toHaveCount(count)
      : await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .toHaveCount(count);
    PageCoreCalls.negativeAssertion = false;
  };
  public static toContainText = async (
    locator: string,
    expected: string | RegExp | (string | RegExp)[],
    message?: string | undefined,
    options?: FindOptions
  ): Promise<void> => {
    PageCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .not.toContainText(expected)
      : await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .toContainText(expected);
    PageCoreCalls.negativeAssertion = false;
  };
  public static toHaveId = async (
    locator: string,
    id: string | RegExp,
    message?: string | undefined,
    options?: FindOptions
  ): Promise<void> => {
    PageCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .not.toHaveId(id)
      : await playwrightExpect
          .expect(playwrightPage.page.locator(locator, options))
          .toHaveId(id);
    PageCoreCalls.negativeAssertion = false;
  };
}

export abstract class LocatorCoreCalls {
  public static negativeAssertion: boolean = false;
  public static WAIT_FOR_NETWORK_RESPONSE: NetworkResponseProps | undefined;
  public static waitForNetworkResponseAfter = (
    urlPath: string,
    status: number = 200
  ) => {
    let networkResponse: NetworkResponseProps = {
      urlPath,
      status,
    };
    this.WAIT_FOR_NETWORK_RESPONSE = networkResponse;
  };
  public static find = (
    selector: string,
    locator: Locator,
    options?: FindOptions
  ): PlaywrightPageLocator => {
    registerPlaywrightPageLocator(locator.locator(selector, options));
    return playwrightPageLocator;
  };
  public static findFirst = (locator: Locator): PlaywrightPageLocator => {
    registerPlaywrightPageLocator(locator.first());
    return playwrightPageLocator;
  };
  public static findNth = (
    nth: number,
    locator: Locator
  ): PlaywrightPageLocator => {
    registerPlaywrightPageLocator(locator.nth(nth));
    return playwrightPageLocator;
  };
  public static click = async (
    locator: Locator,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      locator.click(options),
    ]);
  };
  public static dispatchEvent = async (
    locator: Locator,
    type: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      locator.dispatchEvent(type, options),
    ]);
  };
  public static dblclick = async (
    locator: Locator,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      locator.dblclick(options),
    ]);
  };
  public static check = async (
    locator: Locator,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      locator.check(options),
    ]);
  };
  public static uncheck = async (
    locator: Locator,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      locator.uncheck(options),
    ]);
  };
  public static press = async (
    locator: Locator,
    text: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      locator.press(text, options),
    ]);
  };
  public static type = async (
    locator: Locator,
    text: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      locator.fill(text, options),
    ]);
  };
  public static verifyActionable = async (
    locator: Locator,
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void> => {
    await checkLocatorActionable(locator, actionable, false, options);
  };
  public static verifyNotActionable = async (
    locator: Locator,
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void> => {
    await checkLocatorActionable(locator, actionable, true, options);
  };

  public static toBeEmpty = async (
    locator: Locator,
    message?: string | undefined
  ): Promise<void> => {
    LocatorCoreCalls.negativeAssertion
      ? await playwrightExpect.expect(locator, message).not.toBeEmpty()
      : await playwrightExpect.expect(locator, message).toBeEmpty();
    LocatorCoreCalls.negativeAssertion = false;
  };
  public static toHaveText = async (
    locator: Locator,
    expected: string | RegExp | Array<string | RegExp>,
    message?: string | undefined
  ): Promise<void> => {
    LocatorCoreCalls.negativeAssertion
      ? await playwrightExpect.expect(locator, message).not.toHaveText(expected)
      : await playwrightExpect.expect(locator, message).toHaveText(expected);
    LocatorCoreCalls.negativeAssertion = false;
  };
  public static toHaveValue = async (
    locator: Locator,
    value: string | RegExp,
    message?: string | undefined
  ): Promise<void> => {
    LocatorCoreCalls.negativeAssertion
      ? await playwrightExpect.expect(locator, message).not.toHaveValue(value)
      : await playwrightExpect.expect(locator, message).toHaveValue(value);
    LocatorCoreCalls.negativeAssertion = false;
  };
  public static toHaveAttribute = async (
    locator: Locator,
    name: string,
    value: string | RegExp,
    message?: string | undefined
  ): Promise<void> => {
    LocatorCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(locator, message)
          .not.toHaveAttribute(name, value)
      : await playwrightExpect
          .expect(locator, message)
          .toHaveAttribute(name, value);
    LocatorCoreCalls.negativeAssertion = false;
  };
  public static toHaveCSS = async (
    locator: Locator,
    name: string,
    value: string | RegExp,
    message?: string | undefined
  ): Promise<void> => {
    LocatorCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(locator, message)
          .not.toHaveCSS(name, value)
      : await playwrightExpect.expect(locator, message).toHaveCSS(name, value);
    LocatorCoreCalls.negativeAssertion = false;
  };
  public static toHaveClass = async (
    locator: Locator,
    expected: string | RegExp | Array<string | RegExp>,
    message?: string | undefined
  ): Promise<void> => {
    LocatorCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(locator, message)
          .not.toHaveClass(expected)
      : await playwrightExpect.expect(locator, message).toHaveClass(expected);
    LocatorCoreCalls.negativeAssertion = false;
  };
  public static toHaveCount = async (
    locator: Locator,
    count: number,
    message?: string | undefined
  ): Promise<void> => {
    LocatorCoreCalls.negativeAssertion
      ? await playwrightExpect.expect(locator, message).not.toHaveCount(count)
      : await playwrightExpect.expect(locator, message).toHaveCount(count);
    LocatorCoreCalls.negativeAssertion = false;
  };
  public static toContainText = async (
    locator: Locator,
    expected: string | RegExp | (string | RegExp)[],
    message?: string | undefined
  ): Promise<void> => {
    LocatorCoreCalls.negativeAssertion
      ? await playwrightExpect
          .expect(locator, message)
          .not.toContainText(expected)
      : await playwrightExpect.expect(locator, message).toContainText(expected);
    LocatorCoreCalls.negativeAssertion = false;
  };
  public static toHaveId = async (
    locator: Locator,
    id: string | RegExp,
    message?: string | undefined
  ): Promise<void> => {
    LocatorCoreCalls.negativeAssertion
      ? await playwrightExpect.expect(locator, message).not.toHaveId(id)
      : await playwrightExpect.expect(locator, message).toHaveId(id);
    LocatorCoreCalls.negativeAssertion = false;
  };
}

export abstract class ExpectGenericCoreCalls {
  public static negativeAssertion: boolean = false;
  public static toHaveLength = (
    object: unknown,
    expected: number,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(object, message).not.toHaveLength(expected)
      : playwrightExpect.expect(object, message).toHaveLength(expected);
  };
  public static toHaveProperty = (
    object: unknown,
    keyPath: string | Array<string>,
    value?: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect
          .expect(object, message)
          .not.toHaveProperty(keyPath, value)
      : playwrightExpect.expect(object, message).toHaveProperty(keyPath, value);
  };
  public static toBe = (
    actual: unknown,
    expected: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBe(expected)
      : playwrightExpect.expect(actual, message).toBe(expected);
  };
  public static toEqual = (
    actual: unknown,
    expected: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toEqual(expected)
      : playwrightExpect.expect(actual, message).toEqual(expected);
  };
  public static toBeFalsy = (
    actual: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeFalsy()
      : playwrightExpect.expect(actual, message).toBeFalsy();
  };
  public static toBeTruthy = (
    actual: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeTruthy()
      : playwrightExpect.expect(actual, message).toBeTruthy();
  };
  public static toBeCloseTo = (
    actual: unknown,
    expected: number,
    numDigits?: number,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect
          .expect(actual, message)
          .not.toBeCloseTo(expected, numDigits)
      : playwrightExpect
          .expect(actual, message)
          .toBeCloseTo(expected, numDigits);
  };
  public static toBeGreaterThan = (
    actual: unknown,
    expected: number | bigint,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeGreaterThan(expected)
      : playwrightExpect.expect(actual, message).toBeGreaterThan(expected);
  };
  public static toBeGreaterThanOrEqual = (
    actual: unknown,
    expected: number | bigint,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect
          .expect(actual, message)
          .not.toBeGreaterThanOrEqual(expected)
      : playwrightExpect
          .expect(actual, message)
          .toBeGreaterThanOrEqual(expected);
  };
  public static toBeLessThan = (
    actual: unknown,
    expected: number | bigint,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeLessThan(expected)
      : playwrightExpect.expect(actual, message).toBeLessThan(expected);
  };
  public static toBeLessThanOrEqual = (
    actual: unknown,
    expected: number | bigint,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect
          .expect(actual, message)
          .not.toBeLessThanOrEqual(expected)
      : playwrightExpect.expect(actual, message).toBeLessThanOrEqual(expected);
  };
  public static toBeUndefined = (
    actual: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeUndefined()
      : playwrightExpect.expect(actual, message).toBeUndefined();
  };
  public static toContain = (
    actual: unknown,
    expected: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toContain(expected)
      : playwrightExpect.expect(actual, message).toContain(expected);
  };
}
