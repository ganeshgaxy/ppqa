import { Locator } from '@playwright/test';
import {
  registerPlaywrightPageLocator,
  playwrightPageLocator,
  playwrightExpect,
} from '../utils/fixtureHooks';
import {
  FindOptions,
  PlaywrightPageLocator,
  LocatorOptions,
  Actionable,
} from '../utils/uiActions';
import {
  NetworkResponseProps,
  waitForPageNetworkResponse,
} from '../utils/waitActions';
import { checkLocatorActionable } from '../web/webFragment';

/* The above code is a class that has static methods that are used to perform actions on the web
elements with locators. */
export abstract class LocatorCoreCalls {
  public static negativeAssertion: boolean = false;
  public static WAIT_FOR_NETWORK_RESPONSE: NetworkResponseProps | undefined;

  /**
   * waitForNetworkResponseAfter
   * * This method will add a wait logic that will be executed after what follows
   * @param urlPath URL path as string
   * @param status Response status code to be expected
   */
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

  /**
   * find
   * * Creating a static method that is called to find the element.
   * @param selector The locator string for the element
   * @param locator Locator of the element to be found
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
  public static find = (
    selector: string,
    locator: Locator,
    options?: FindOptions
  ): PlaywrightPageLocator => {
    registerPlaywrightPageLocator(locator.locator(selector, options));
    return playwrightPageLocator;
  };

  /**
   * findFirst
   * * Creating a static method that is called to find the first element.
   * @param locator Locator of the element to be found
   * @returns PlaywrightPageLocator (this)
   */
  public static findFirst = (locator: Locator): PlaywrightPageLocator => {
    registerPlaywrightPageLocator(locator.first());
    return playwrightPageLocator;
  };

  /**
   * findFirst
   * * Creating a static method that is called to find the nth element.
   * @param nth Nth count of element to be found
   * @param locator Locator of the element to be found
   * @returns PlaywrightPageLocator (this)
   */
  public static findNth = (
    nth: number,
    locator: Locator
  ): PlaywrightPageLocator => {
    registerPlaywrightPageLocator(locator.nth(nth));
    return playwrightPageLocator;
  };

  /**
   * click
   * * A static method that is used to click on an element and/or wait for network response.
   * @param locator The locator as a locator
   * @param options Locator options Interface
   */
  public static click = async (
    locator: Locator,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      locator.click(options),
    ]);
  };

  /**
   * dispatchEvent
   * * A static method that is used to dispatchEvent on an element and/or wait for network response.
   * @param locator The locator as a locator
   * @param type The type of dispatch event
   * @param options Locator options Interface
   */
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

  /**
   * dblclick
   * * A static method that is used to double click on an element and/or wait for network response.
   * @param locator The locator as a locator
   * @param options Locator options Interface
   */
  public static dblclick = async (
    locator: Locator,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      locator.dblclick(options),
    ]);
  };

  /**
   * check
   * * A static method that is used to check on a checkbox element and/or wait for network response.
   * @param locator The locator as a locator
   * @param options Locator options Interface
   */
  public static check = async (
    locator: Locator,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      locator.check(options),
    ]);
  };

  /**
   * uncheck
   * * A static method that is used to uncheck on a checkbox element and/or wait for network response.
   * @param locator The locator as a locator
   * @param options Locator options Interface
   */
  public static uncheck = async (
    locator: Locator,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      locator.uncheck(options),
    ]);
  };

  /**
   * press
   * * A static method that is used to Press key on an element and/or wait for network response.
   * @param locator The locator as a locator
   * @param text The Key to be pressed
   * @param options Locator options Interface
   */
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

  /**
   * type
   * * A static method that is used to type text into an element and/or wait for network response.
   * @param locator The locator as a locator
   * @param text The text to be entered
   * @param options Locator options Interface
   */
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

  /**
   * verifyActionable
   * * To check few actionables on a web element
   * @param locator The locator for the element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  public static verifyActionable = async (
    locator: Locator,
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void> => {
    await checkLocatorActionable(locator, actionable, false, options);
  };

  /**
   * verifyNotActionable
   * * To check few actionables on a web element
   * @param locator The locator for the element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  public static verifyNotActionable = async (
    locator: Locator,
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void> => {
    await checkLocatorActionable(locator, actionable, true, options);
  };

  /* Assertions */

  /**
   * toBeEmpty
   * * To check if the Element is empty or has no text
   * @param locator The locator for the element
   * @param message The message to be shown on expect
   */
  public static toBeEmpty = async (
    locator: Locator,
    message?: string | undefined
  ): Promise<void> => {
    LocatorCoreCalls.negativeAssertion
      ? await playwrightExpect.expect(locator, message).not.toBeEmpty()
      : await playwrightExpect.expect(locator, message).toBeEmpty();
    LocatorCoreCalls.negativeAssertion = false;
  };

  /**
   * toHaveText
   * * To check if the Element is has the expected test
   * @param locator The locator for the element
   * @param expected The Expected Text in the element
   * @param message The message to be shown on expect
   */
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

  /**
   * toHaveValue
   * * To check if the Element is has the expected input value
   * @param locator The locator for the element
   * @param value The Expected value in the element
   * @param message The message to be shown on expect
   */
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

  /**
   * toHaveAttribute
   * * To check if the Element is has the expected attribute and value
   * @param locator The locator for the element
   * @param name The Expected name of attribute in the element
   * @param value The Expected value of attribute in the element
   * @param message The message to be shown on expect
   */
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

  /**
   * toHaveCSS
   * * To check if the Element is has the expected css attribute and value
   * @param locator The locator for the element
   * @param name The Expected name of  CSS attribute in the element
   * @param value The Expected value of CSS attribute in the element
   * @param message The message to be shown on expect
   */
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

  /**
   * toHaveClass
   * * To check if the Element is has the expected class
   * @param locator The locator for the element
   * @param expected The Expected class in the element
   * @param message The message to be shown on expect
   */
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

  /**
   * toHaveCount
   * * To check if the Locator resolves to expected number of elements
   * @param locator The locator for the element
   * @param count The count expected to be found - as DOM nodes
   * @param message The message to be shown on expect
   */
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

  /**
   * toContainText
   * * To check if the element contains expected text
   * @param locator The locator for the element
   * @param expected The expected part of text to be found
   * @param message The message to be shown on expect
   */
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

  /**
   * toHaveId
   * * To check if the element has expected ID
   * @param locator The locator for the element
   * @param id The expected ID in web Element
   * @param message The message to be shown on expect
   */
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
