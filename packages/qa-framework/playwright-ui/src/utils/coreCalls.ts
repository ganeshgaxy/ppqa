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

  /**
   * goto
   * * A method that is used to navigate to a URL.
   * @param urlProps URLProps interface
   */
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

  /**
   * waitForPageLoad
   * * Waiting for the page to load.
   * @param timeout timeout in milliseconds
   * @param state state to achieve upon load
   */
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

  /**
   * reload
   * * A static method that is being called on the playwrightPage object.
   * @param options PageOptions Interface
   */
  public static reload = async (options?: PageOptions): Promise<void> => {
    await playwrightPage.page.reload(options);
  };

  /**
   * goBack
   * * A method that is used to go back to the previous page.
   * @param options PageOptions Interface
   */
  public static goBack = async (options?: PageOptions): Promise<void> => {
    await playwrightPage.page.goBack(options);
  };

  /**
   * getTitle
   * * To get a title of a page as a promise
   * @returns Title of the page as a promise
   */
  public static getTitle = async (): Promise<string> => {
    return await playwrightPage.page.title();
  };

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
   * click
   * * A static method that is used to click on an element.
   * @param locator The locator as a string
   * @param options Locator options Interface
   */
  public static click = async (
    locator: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      playwrightPage.page.click(locator, options),
    ]);
  };

  /**
   * dispatchEvent
   * * A static method that is used to dispatch an event on a page.
   * @param locator The locator as a string
   * @param type Event type
   * @param options Locator options Interface
   */
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

  /**
   * dblclick
   * * A method that is used to double click on an element.
   * @param locator The locator as a string
   * @param options Locator options Interface
   */
  public static dblclick = async (
    locator: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      playwrightPage.page.dblclick(locator, options),
    ]);
  };

  /**
   * check
   * * A static method that is checking a checkbox.
   * @param locator The locator as a string
   * @param options Locator options Interface
   */
  public static check = async (
    locator: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      playwrightPage.page.check(locator, options),
    ]);
  };

  /**
   * uncheck
   * * A function that is unchecking the checkbox and/or then waiting for the network response
   * @param locator The locator as a string
   * @param options Locator options Interface
   */
  public static uncheck = async (
    locator: string,
    options?: LocatorOptions
  ): Promise<void> => {
    await Promise.all([
      this.WAIT_FOR_NETWORK_RESPONSE && waitForPageNetworkResponse(),
      playwrightPage.page.uncheck(locator, options),
    ]);
  };

  /**
   * type
   * * A function that is typing in the text and/or then waiting for the network response.
   * @param locator The locator as a string
   * @param text The text to be entered in the text box
   * @param options Locator options Interface
   */
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

  /**
   * press
   * * A function that is press a key on element and/or then waiting for the network response.
   * @param locator The locator as a string
   * @param text The Key to be pressed
   * @param options Locator options Interface
   */
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

  /**
   * find
   * * Creating a static method that is called to find the element.
   * @param selector The locator string for the element
   * @param baseLocator Base Locator of the element to be found - optional
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
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

  /**
   * findFirst
   * * Creating a static method that is called to find the first element.
   * @param selector The locator string for the element
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
  public static findFirst = (
    selector: string,
    options?: FindOptions
  ): PlaywrightPageLocator => {
    registerPlaywrightPageLocator(
      playwrightPage.page.locator(selector, options).first()
    );
    return playwrightPageLocator;
  };

  /**
   * findNth
   * * Creating a static method that is called to find the nth element.
   * @param selector The locator string for the element
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
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

  /**
   * verifyActionable
   * * To check few actionables on a web element
   * @param locator The locator string for the element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  public static verifyActionable = async (
    locator: string,
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void> => {
    await checkPageActionable(locator, actionable, false, options);
  };

  /**
   * verifyNotActionable
   * * To check few actionables on a web element
   * @param locator The locator string for the element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  public static verifyNotActionable = async (
    locator: string,
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void> => {
    await checkPageActionable(locator, actionable, true, options);
  };

  /* Assertions */

  /**
   * toBeEmpty
   * * To check if the Element is empty or has no text
   * @param locator The locator string for the element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
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

  /**
   * toHaveText
   * * To check if the Element is has the expected test
   * @param locator The locator string for the element
   * @param expected The Expected Text in the element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
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

  /**
   * toHaveValue
   * * To check if the Element is has the expected input value
   * @param locator The locator string for the element
   * @param value The Expected value in the element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
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

  /**
   * toHaveAttribute
   * * To check if the Element is has the expected attribute and value
   * @param locator The locator string for the element
   * @param name The Expected name of attribute in the element
   * @param value The Expected value of attribute in the element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
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

  /**
   * toHaveCSS
   * * To check if the Element is has the expected css attribute and value
   * @param locator The locator string for the element
   * @param name The Expected name of  CSS attribute in the element
   * @param value The Expected value of CSS attribute in the element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
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

  /**
   * toHaveClass
   * * To check if the Element is has the expected class
   * @param locator The locator string for the element
   * @param expected The Expected class in the element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
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

  /**
   * toHaveCount
   * * To check if the Locator resolves to expected number of elements
   * @param locator The locator string for the element
   * @param count The count expected to be found - as DOM nodes
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
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

  /**
   * toContainText
   * * To check if the element contains expected text
   * @param locator The locator string for the element
   * @param expected The expected part of text to be found
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
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

  /**
   * toHaveId
   * * To check if the element has expected ID
   * @param locator The locator string for the element
   * @param id The expected ID in web Element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
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

export abstract class ExpectGenericCoreCalls {
  public static negativeAssertion: boolean = false;

  /**
   * toHaveLength
   * * To check if the object/array to have expected length
   * @param object The Object/Array to checked for length
   * @param expected Expected Length of the Object/Array
   * @param message The Message to be used on expect
   */
  public static toHaveLength = (
    object: unknown,
    expected: number,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(object, message).not.toHaveLength(expected)
      : playwrightExpect.expect(object, message).toHaveLength(expected);
  };

  /**
   * toHaveProperty
   * * To check if the object/array to have expected property/key
   * @param object The Object/Array to checked for length
   * @param keyPath The property/key of an object
   * @param value The expected value of key/property
   * @param message The Message to be used on expect
   */
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

  /**
   * toBe
   * * To check if the actual is same as expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public static toBe = (
    actual: unknown,
    expected: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBe(expected)
      : playwrightExpect.expect(actual, message).toBe(expected);
  };

  /**
   * toEqual
   * * To check if the actual is same as expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public static toEqual = (
    actual: unknown,
    expected: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toEqual(expected)
      : playwrightExpect.expect(actual, message).toEqual(expected);
  };

  /**
   * toBeFalsy
   * * To check if the actual data is false
   * @param actual The actual data to be checked
   * @param message The Message to be used on expect
   */
  public static toBeFalsy = (
    actual: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeFalsy()
      : playwrightExpect.expect(actual, message).toBeFalsy();
  };

  /**
   * toBeTruthy
   * * To check if the actual data is true
   * @param actual The actual data to be checked
   * @param message The Message to be used on expect
   */
  public static toBeTruthy = (
    actual: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeTruthy()
      : playwrightExpect.expect(actual, message).toBeTruthy();
  };

  /**
   * toBeCloseTo
   * * To check if the actual data is as close to expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param numDigits The expected data to close to match
   * @param message The Message to be used on expect
   */
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

  /**
   * toBeGreaterThan
   * * To check if the actual data is greater than expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public static toBeGreaterThan = (
    actual: unknown,
    expected: number | bigint,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeGreaterThan(expected)
      : playwrightExpect.expect(actual, message).toBeGreaterThan(expected);
  };

  /**
   * toBeGreaterThanOrEqual
   * * To check if the actual data is greater than or equal to expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
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

  /**
   * toBeLessThan
   * * To check if the actual data is less than expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public static toBeLessThan = (
    actual: unknown,
    expected: number | bigint,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeLessThan(expected)
      : playwrightExpect.expect(actual, message).toBeLessThan(expected);
  };

  /**
   * toBeLessThanOrEqual
   * * To check if the actual data is less than or equal to expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
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

  /**
   * toBeUndefined
   * * To check if the actual data is undefined
   * @param actual The actual data to be checked
   * @param message The Message to be used on expect
   */
  public static toBeUndefined = (
    actual: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeUndefined()
      : playwrightExpect.expect(actual, message).toBeUndefined();
  };

  /**
   * toContain
   * * To check if the actual data to contain expected
   * @param actual The actual data to be checked
   * @param expected The actual data to be checked
   * @param message The Message to be used on expect
   */
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
