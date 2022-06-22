import { Locator } from 'playwright';
import {
  playwrightPage,
  registerPlaywrightPageLocator,
  playwrightPageLocator,
  playwrightExpect,
} from '../utils/fixtureHooks';
import {
  PageOptions,
  LocatorOptions,
  FindOptions,
  PlaywrightPageLocator,
  Actionable,
} from '../utils/uiActions';
import {
  NetworkResponseProps,
  waitForPageNetworkResponse,
} from '../utils/waitActions';
import { URLProps, checkPageActionable } from '../web/webFragment';
import { ExpectGenericCoreCalls } from './expectGenericCoreCalls';

/* The below code is a class that is being used to create a page object model on core ui calls for a page. */
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
