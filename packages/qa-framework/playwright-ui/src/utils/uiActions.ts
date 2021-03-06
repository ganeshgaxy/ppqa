import { Locator, Page } from '@playwright/test';
import { LocatorCoreCalls } from '../core/locatorCoreCalls';
import { PageCoreCalls } from '../core/pageCoreCalls';
import { LocatorExpectProps, PageExpectProps } from '../web/generic';
import { URLProps } from '../web/webFragment';
import { waitForNetworkIdle, WaitForNetworkIdleProps } from './waitActions';

/* A TypeScript interface that is used to define the properties and methods of the PlaywrightPage
class. */
export interface PlaywrightPageProps extends PageExpectProps<void> {
  page: Page;

  /**
   * goto
   * * A method that is used to navigate to a URL.
   * @param urlProps URLProps interface
   */
  goto(urlProps: URLProps): Promise<void>;

  /**
   * getTitle
   * * To get a title of a page as a promise
   * @returns Title of the page as a promise
   */
  getTitle(): Promise<string>;

  /**
   * reload
   * * A method that is being called on the playwrightPage object.
   * @param options PageOptions Interface
   */
  reload(options?: PageOptions): Promise<void>;

  /**
   * goBack
   * * A method that is used to go back to the previous page.
   * @param options PageOptions Interface
   */
  goBack(options?: PageOptions): Promise<void>;

  /**
   * waitForPageLoad
   * * Waiting for the page to load.
   * @param timeout timeout in milliseconds
   * @param state state to achieve upon load
   */
  waitForPageLoad(
    timeout?: number,
    state?: 'networkidle' | 'load' | 'domcontentloaded' | 'commit'
  ): Promise<void>;

  /**
   * waitForNetworkResponseAfter
   * * This method will add a wait logic that will be executed after what follows
   * @param urlPath URL path as string
   * @param status Response status code to be expected
   */
  waitForNetworkResponseAfter(urlPath: string, status?: number): void;

  /**
   * click
   * * A method that is used to click on an element.
   * @param locator The locator as a string
   * @param options Locator options Interface
   */
  click(selector: string, options?: LocatorOptions): Promise<void>;

  /**
   * dispatchEvent
   * * A method that is used to dispatch an event on a page.
   * @param locator The locator as a string
   * @param type Event type
   * @param options Locator options Interface
   */
  dispatchEvent(
    selector: string,
    type: string,
    options?: PageOptions
  ): Promise<void>;

  /**
   * dblclick
   * * A method that is used to double click on an element.
   * @param locator The locator as a string
   * @param options Locator options Interface
   */
  dblclick(selector: string, options?: LocatorOptions): Promise<void>;

  /**
   * check
   * * A method that is checking a checkbox.
   * @param selector The locator as a string
   * @param options Locator options Interface
   */
  check(selector: string, options?: LocatorOptions): Promise<void>;

  /**
   * uncheck
   * * A function that is unchecking the checkbox and/or then waiting for the network response
   * @param selector The locator as a string
   * @param options Locator options Interface
   */
  uncheck(selector: string, options?: LocatorOptions): Promise<void>;

  /**
   * type
   * * A function that is typing in the text and/or then waiting for the network response.
   * @param selector The locator as a string
   * @param text The text to be entered in the text box
   * @param options Locator options Interface
   */
  type(selector: string, text: string, options?: LocatorOptions): Promise<void>;

  /**
   * press
   * * A function that is press a key on element and/or then waiting for the network response.
   * @param selector The locator as a string
   * @param text The Key to be pressed
   * @param options Locator options Interface
   */
  press(
    selector: string,
    text: string,
    options?: LocatorOptions
  ): Promise<void>;

  /**
   * find
   * * Creating a static method that is called to find the element.
   * @param locator The locator string for the element
   * @param baseLocator Base Locator of the element to be found - optional
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
  find(
    locator: string,
    baseLocator?: Locator,
    options?: FindOptions
  ): PlaywrightPageLocator;

  /**
   * findFirst
   * * Creating a static method that is called to find the first element.
   * @param locator The locator string for the element
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
  findFirst(locator: string, options?: FindOptions): PlaywrightPageLocator;

  /**
   * findNth
   * * Creating a static method that is called to find the nth element.
   * @param locator The locator string for the element
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
  findNth(
    nth: number,
    locator: string,
    options?: FindOptions
  ): PlaywrightPageLocator;

  /**
   * verifyActionable
   * * To check few actionables on a web element
   * @param locator The locator string for the element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  verifyActionable(
    locator: string,
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void>;

  /**
   * verifyNotActionable
   * * To check few actionables on a web element
   * @param locator The locator string for the element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  verifyNotActionable(
    locator: string,
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void>;
  assert(): PlaywrightPageProps;
  not(): PlaywrightPageProps;
}

/* Defining an enum. */
export enum Actionable {
  ToBeChecked,
  ToBeDisabled,
  ToBeEditable,
  ToBeEnabled,
  ToBeHidden,
  ToBeVisible,
}

/* Defining an interface for a function called PageOptions. */
export interface PageOptions {
  timeout?: number;
  state?: 'networkidle' | 'load' | 'domcontentloaded' | 'commit';
}

/* Defining an interface called FindOptions. */
export interface FindOptions {
  has?: Locator;
  hasText?: string | RegExp;
}

/* Defining an interface for LocatorOptions. */
export interface LocatorOptions {
  button?: 'left' | 'right' | 'middle';
  clickCount?: number;
  delay?: number;
  force?: boolean;
  modifiers?: Array<'Alt' | 'Control' | 'Meta' | 'Shift'>;
  noWaitAfter?: boolean;
  position?: {
    x: number;
    y: number;
  };
  strict?: boolean;
  timeout?: number;
  trial?: boolean;
}

/* It's a wrapper around the Playwright Page object, with some additional methods that make it easier
to write tests */
export class PlaywrightPage implements PlaywrightPageProps {
  public page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * goto
   * * A method that is used to navigate to a URL.
   * @param urlProps URLProps interface
   */
  public async goto(urlProps: URLProps): Promise<void> {
    await PageCoreCalls.goto(urlProps);
  }

  /**
   * getTitle
   * * To get a title of a page as a promise
   * @returns Title of the page as a promise
   */
  public async getTitle(): Promise<string> {
    return await PageCoreCalls.getTitle();
  }

  /**
   * reload
   * * A method that is being called on the playwrightPage object.
   * @param options PageOptions Interface
   */
  public async reload(options?: PageOptions): Promise<void> {
    await PageCoreCalls.reload(options);
  }

  /**
   * goBack
   * * A method that is used to go back to the previous page.
   * @param options PageOptions Interface
   */
  public async goBack(options?: PageOptions): Promise<void> {
    await PageCoreCalls.goBack(options);
  }

  /**
   * waitForPageLoad
   * * Waiting for the page to load.
   * @param timeout timeout in milliseconds
   * @param state state to achieve upon load
   */
  public async waitForPageLoad(
    timeout?: number,
    state?: 'networkidle' | 'load' | 'domcontentloaded' | undefined
  ): Promise<void> {
    await PageCoreCalls.waitForPageLoad(timeout, state);
  }

  /**
   * waitForNetworkResponseAfter
   * * This method will add a wait logic that will be executed after what follows
   * @param urlPath URL path as string
   * @param status Response status code to be expected
   */
  public waitForNetworkResponseAfter(urlPath: string, status?: number): void {
    LocatorCoreCalls.waitForNetworkResponseAfter(urlPath, status && status);
  }

  /**
   * click
   * * A method that is used to click on an element.
   * @param locator The locator as a string
   * @param options Locator options Interface
   */
  public async click(locator: string, options?: LocatorOptions): Promise<void> {
    await PageCoreCalls.click(locator, options && options);
  }

  /**
   * dispatchEvent
   * * A method that is used to dispatch an event on a page.
   * @param locator The locator as a string
   * @param type Event type
   * @param options Locator options Interface
   */
  public async dispatchEvent(
    locator: string,
    type: string,
    options?: LocatorOptions
  ): Promise<void> {
    await PageCoreCalls.dispatchEvent(locator, type, options && options);
  }

  /**
   * dblclick
   * * A method that is used to double click on an element.
   * @param locator The locator as a string
   * @param options Locator options Interface
   */
  public async dblclick(
    locator: string,
    options?: LocatorOptions
  ): Promise<void> {
    await PageCoreCalls.dblclick(locator, options && options);
  }

  /**
   * check
   * * A method that is checking a checkbox.
   * @param locator The locator as a string
   * @param options Locator options Interface
   */
  public async check(locator: string, options?: LocatorOptions): Promise<void> {
    await PageCoreCalls.check(locator, options && options);
  }

  /**
   * uncheck
   * * A function that is unchecking the checkbox and/or then waiting for the network response
   * @param locator The locator as a string
   * @param options Locator options Interface
   */
  public async uncheck(
    locator: string,
    options?: LocatorOptions
  ): Promise<void> {
    await PageCoreCalls.uncheck(locator, options && options);
  }

  /**
   * type
   * * A function that is typing in the text and/or then waiting for the network response.
   * @param locator The locator as a string
   * @param text The text to be entered in the text box
   * @param options Locator options Interface
   */
  public async type(
    locator: string,
    text: string,
    options?: LocatorOptions
  ): Promise<void> {
    await PageCoreCalls.type(locator, text, options && options);
  }

  /**
   * press
   * * A function that is press a key on element and/or then waiting for the network response.
   * @param locator The locator as a string
   * @param text The Key to be pressed
   * @param options Locator options Interface
   */
  public async press(
    locator: string,
    text: string,
    options?: LocatorOptions
  ): Promise<void> {
    await PageCoreCalls.press(locator, text, options && options);
  }

  /**
   * find
   * * Creating a static method that is called to find the element.
   * @param locator The locator string for the element
   * @param baseLocator Base Locator of the element to be found - optional
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
  public find(
    locator: string,
    baseLocator?: Locator,
    options?: FindOptions
  ): PlaywrightPageLocator {
    return PageCoreCalls.find(locator, baseLocator && baseLocator, options);
  }

  /**
   * findFirst
   * * Creating a static method that is called to find the first element.
   * @param selector The locator string for the element
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
  public findFirst(
    locator: string,
    options?: FindOptions
  ): PlaywrightPageLocator {
    return PageCoreCalls.findFirst(locator, options);
  }

  /**
   * findNth
   * * Creating a static method that is called to find the nth element.
   * @param selector The locator string for the element
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
  public findNth(
    nth: number,
    locator: string,
    options?: FindOptions
  ): PlaywrightPageLocator {
    return PageCoreCalls.findNth(nth, locator, options);
  }

  /**
   * verifyActionable
   * * To check few actionables on a web element
   * @param locator The locator string for the element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  public async verifyActionable(
    locator: string,
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void> {
    await PageCoreCalls.verifyActionable(locator, actionable, options);
  }

  /**
   * verifyNotActionable
   * * To check few actionables on a web element
   * @param locator The locator string for the element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  public async verifyNotActionable(
    locator: string,
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void> {
    await PageCoreCalls.verifyNotActionable(locator, actionable, options);
  }

  /* Assertions */

  /**
   * not
   * * Negated Assertions
   */
  public assert(): PlaywrightPageProps {
    return this;
  }

  /**
   * not
   * * Negated Assertions
   */
  public not(): PlaywrightPageProps {
    PageCoreCalls.negativeAssertion = true;
    return this;
  }

  /**
   * toBeEmpty
   * * To check if the Element is empty or has no text
   * @param locator The locator string for the element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
  public async toBeEmpty(
    locator: string,
    message?: string,
    options?: FindOptions
  ): Promise<void> {
    await PageCoreCalls.toBeEmpty(locator, message, options);
  }

  /**
   * toHaveText
   * * To check if the Element is has the expected test
   * @param locator The locator string for the element
   * @param expected The Expected Text in the element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
  public async toHaveText(
    locator: string,
    expected: string | RegExp | (string | RegExp)[],
    message?: string,
    options?: FindOptions
  ): Promise<void> {
    await PageCoreCalls.toHaveText(locator, expected, message, options);
  }

  /**
   * toHaveValue
   * * To check if the Element is has the expected input value
   * @param locator The locator string for the element
   * @param value The Expected value in the element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
  public async toHaveValue(
    locator: string,
    value: string | RegExp,
    message?: string,
    options?: FindOptions
  ): Promise<void> {
    await PageCoreCalls.toHaveValue(locator, value, message, options);
  }

  /**
   * toHaveAttribute
   * * To check if the Element is has the expected attribute and value
   * @param locator The locator string for the element
   * @param name The Expected name of attribute in the element
   * @param value The Expected value of attribute in the element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
  public async toHaveAttribute(
    locator: string,
    name: string,
    value: string | RegExp,
    message?: string,
    options?: FindOptions
  ): Promise<void> {
    await PageCoreCalls.toHaveAttribute(locator, name, value, message, options);
  }

  /**
   * toHaveCSS
   * * To check if the Element is has the expected css attribute and value
   * @param locator The locator string for the element
   * @param name The Expected name of  CSS attribute in the element
   * @param value The Expected value of CSS attribute in the element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
  public async toHaveCSS(
    locator: string,
    name: string,
    value: string | RegExp,
    message?: string,
    options?: FindOptions
  ): Promise<void> {
    await PageCoreCalls.toHaveCSS(locator, name, value), message, options;
  }

  /**
   * toHaveClass
   * * To check if the Element is has the expected class
   * @param locator The locator string for the element
   * @param expected The Expected class in the element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
  public async toHaveClass(
    locator: string,
    expected: string | RegExp | (string | RegExp)[],
    message?: string,
    options?: FindOptions
  ): Promise<void> {
    await PageCoreCalls.toHaveClass(locator, expected, message, options);
  }

  /**
   * toHaveCount
   * * To check if the Locator resolves to expected number of elements
   * @param locator The locator string for the element
   * @param count The count expected to be found - as DOM nodes
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
  public async toHaveCount(
    locator: string,
    count: number,
    message?: string,
    options?: FindOptions
  ): Promise<void> {
    await PageCoreCalls.toHaveCount(locator, count, message, options);
  }

  /**
   * toContainText
   * * To check if the element contains expected text
   * @param locator The locator string for the element
   * @param expected The expected part of text to be found
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
  public async toContainText(
    locator: string,
    expected: string | RegExp | (string | RegExp)[],
    message?: string,
    options?: FindOptions
  ): Promise<void> {
    await PageCoreCalls.toContainText(locator, expected, message, options);
  }

  /**
   * toHaveId
   * * To check if the element has expected ID
   * @param locator The locator string for the element
   * @param id The expected ID in web Element
   * @param message The message to be shown on expect
   * @param options FindOptions - Interface
   */
  public async toHaveId(
    locator: string,
    id: string | RegExp,
    message?: string,
    options?: FindOptions
  ): Promise<void> {
    await PageCoreCalls.toHaveId(locator, id, message, options);
  }
}

/**
 * usePlaywrightPage
 * A method called to initialize the PlaywrightPage with given page
 * @param page Playwright page to be used
 * @returns The Playwright page object's proxy
 */
export const usePlaywrightPage = (page: Page): PlaywrightPageProps => {
  const returnObject: PlaywrightPageProps = new PlaywrightPage(page);

  const handler = {};
  return new Proxy(returnObject, handler) as PlaywrightPageProps;
};

/* A TypeScript interface that is used to define the properties and methods of a class. */
export interface PlaywrightPageLocatorProps extends LocatorExpectProps<void> {
  locator: Locator;
  options: LocatorOptions | undefined;

  /**
   * waitForNetworkResponseAfter
   * * This method will add a wait logic that will be executed after what follows
   * @param urlPath URL path as string
   * @param status Response status code to be expected
   */
  waitForNetworkResponseAfter(urlPath: string, status?: number): void;

  /**
   * click
   * * A static method that is used to click on an element and/or wait for network response.
   * @param options Locator options Interface
   */
  click(options?: LocatorOptions): Promise<void>;

  /**
   * dispatchEvent
   * * A static method that is used to dispatchEvent on an element and/or wait for network response.
   * @param type The type of dispatch event
   * @param options Locator options Interface
   */
  dispatchEvent(type: string, options?: LocatorOptions): Promise<void>;

  /**
   * dblclick
   * * A static method that is used to double click on an element and/or wait for network response.
   * @param options Locator options Interface
   */
  dblclick(options?: LocatorOptions): Promise<void>;

  /**
   * check
   * * A static method that is used to check on a checkbox element and/or wait for network response.
   * @param options Locator options Interface
   */
  check(options?: LocatorOptions): Promise<void>;

  /**
   * uncheck
   * * A static method that is used to uncheck on a checkbox element and/or wait for network response.
   * @param options Locator options Interface
   */
  uncheck(options?: LocatorOptions): Promise<void>;

  /**
   * type
   * * A static method that is used to type text into an element and/or wait for network response.
   * @param text The text to be entered
   * @param options Locator options Interface
   */
  type(text: string, options?: LocatorOptions): Promise<void>;

  /**
   * press
   * * A static method that is used to Press key on an element and/or wait for network response.
   * @param text The Key to be pressed
   * @param options Locator options Interface
   */
  press(text: string, options?: LocatorOptions): Promise<void>;

  /**
   * find
   * * Creating a static method that is called to find the element.
   * @param locator The locator string for the element
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
  find(locator: string, options?: FindOptions): PlaywrightPageLocator;

  /**
   * findFirst
   * * Creating a static method that is called to find the first element.
   * @returns PlaywrightPageLocator (this)
   */
  findFirst(): PlaywrightPageLocator;

  /**
   * findNth
   * * Creating a static method that is called to find the nth element.
   * @param nth Nth count of element to be found
   * @returns PlaywrightPageLocator (this)
   */
  findNth(nth: number): PlaywrightPageLocator;

  /**
   * verifyActionable
   * * To check few actionables on a web element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  verifyActionable(
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void>;

  /**
   * verifyNotActionable
   * * To check few actionables on a web element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  verifyNotActionable(
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void>;
  not(): void;
}

/* This class is used to create a locator object that can be used to perform actions on the web element
and also to perform assertions on the web element */
export class PlaywrightPageLocator implements PlaywrightPageLocatorProps {
  public locator: Locator;
  public options: LocatorOptions | undefined;
  constructor(locator: Locator, options?: LocatorOptions) {
    this.locator = locator;
    this.options = options && options;
  }

  /**
   * waitForNetworkResponseAfter
   * * This method will add a wait logic that will be executed after what follows
   * @param urlPath URL path as string
   * @param status Response status code to be expected
   */
  public waitForNetworkResponseAfter(urlPath: string, status?: number): void {
    LocatorCoreCalls.waitForNetworkResponseAfter(urlPath, status && status);
  }

  /**
   * click
   * * A static method that is used to click on an element and/or wait for network response.
   * @param options Locator options Interface
   */
  public async click(options?: LocatorOptions): Promise<void> {
    await LocatorCoreCalls.click(this.locator, this.options && this.options);
  }

  /**
   * dispatchEvent
   * * A static method that is used to dispatchEvent on an element and/or wait for network response.
   * @param type The type of dispatch event
   * @param options Locator options Interface
   */
  public async dispatchEvent(
    type: string,
    options?: LocatorOptions
  ): Promise<void> {
    await LocatorCoreCalls.dispatchEvent(
      this.locator,
      type,
      options ? options : this.options
    );
  }

  /**
   * dblclick
   * * A static method that is used to double click on an element and/or wait for network response.
   * @param options Locator options Interface
   */
  public async dblclick(options?: LocatorOptions): Promise<void> {
    await LocatorCoreCalls.dblclick(
      this.locator,
      options ? options : this.options
    );
  }

  /**
   * check
   * * A static method that is used to check on a checkbox element and/or wait for network response.
   * @param options Locator options Interface
   */
  public async check(options?: LocatorOptions): Promise<void> {
    await LocatorCoreCalls.check(
      this.locator,
      options ? options : this.options
    );
  }

  /**
   * uncheck
   * * A static method that is used to uncheck on a checkbox element and/or wait for network response.
   * @param options Locator options Interface
   */
  public async uncheck(options?: LocatorOptions): Promise<void> {
    await LocatorCoreCalls.uncheck(
      this.locator,
      options ? options : this.options
    );
  }
  /**
   * press
   * * A static method that is used to Press key on an element and/or wait for network response.
   * @param text The Key to be pressed
   * @param options Locator options Interface
   */
  public async press(text: string, options?: LocatorOptions): Promise<void> {
    await LocatorCoreCalls.press(
      this.locator,
      text,
      options ? options : this.options
    );
  }

  /**
   * type
   * * A static method that is used to type text into an element and/or wait for network response.
   * @param text The text to be entered
   * @param options Locator options Interface
   */
  public async type(text: string, options?: LocatorOptions): Promise<void> {
    await LocatorCoreCalls.type(
      this.locator,
      text,
      options ? options : this.options
    );
  }

  /**
   * find
   * * Creating a static method that is called to find the element.
   * @param locator Locator of the element to be found
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
  public find(locator: string, options?: FindOptions): PlaywrightPageLocator {
    return LocatorCoreCalls.find(locator, this.locator, options);
  }

  /**
   * findFirst
   * * Creating a static method that is called to find the first element.
   * @returns PlaywrightPageLocator (this)
   */
  public findFirst(): PlaywrightPageLocator {
    return LocatorCoreCalls.findFirst(this.locator);
  }

  /**
   * findFirst
   * * Creating a static method that is called to find the nth element.
   * @param nth Nth count of element to be found
   * @returns PlaywrightPageLocator (this)
   */
  public findNth(nth: number): PlaywrightPageLocator {
    return LocatorCoreCalls.findNth(nth, this.locator);
  }

  /**
   * verifyActionable
   * * To check few actionables on a web element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  public async verifyActionable(
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void> {
    await LocatorCoreCalls.verifyActionable(
      this.locator,
      actionable,
      options ? options : this.options
    );
  }

  /**
   * verifyNotActionable
   * * To check few actionables on a web element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  public async verifyNotActionable(
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<void> {
    await LocatorCoreCalls.verifyNotActionable(
      this.locator,
      actionable,
      options ? options : this.options
    );
  }

  /* Assertions */

  /**
   * not
   * * Negated Assertions
   */
  public not(): void {
    LocatorCoreCalls.negativeAssertion = !LocatorCoreCalls.negativeAssertion;
  }

  /**
   * toBeEmpty
   * * To check if the Element is empty or has no text
   * @param message The message to be shown on expect
   */
  public async toBeEmpty(message?: string | undefined): Promise<void> {
    await LocatorCoreCalls.toBeEmpty(this.locator, message);
  }

  /**
   * toHaveText
   * * To check if the Element is has the expected test
   * @param expected The Expected Text in the element
   * @param message The message to be shown on expect
   */
  public async toHaveText(
    expected: string | RegExp | (string | RegExp)[],
    message?: string | undefined
  ): Promise<void> {
    await LocatorCoreCalls.toHaveText(this.locator, expected, message);
  }

  /**
   * toHaveValue
   * * To check if the Element is has the expected input value
   * @param value The Expected value in the element
   * @param message The message to be shown on expect
   */
  public async toHaveValue(
    value: string | RegExp,
    message?: string | undefined
  ): Promise<void> {
    await LocatorCoreCalls.toHaveValue(this.locator, value, message);
  }

  /**
   * toHaveAttribute
   * * To check if the Element is has the expected attribute and value
   * @param name The Expected name of attribute in the element
   * @param value The Expected value of attribute in the element
   * @param message The message to be shown on expect
   */
  public async toHaveAttribute(
    name: string,
    value: string | RegExp,
    message?: string | undefined
  ): Promise<void> {
    await LocatorCoreCalls.toHaveAttribute(this.locator, name, value, message);
  }

  /**
   * toHaveCSS
   * * To check if the Element is has the expected css attribute and value
   * @param name The Expected name of  CSS attribute in the element
   * @param value The Expected value of CSS attribute in the element
   * @param message The message to be shown on expect
   */
  public async toHaveCSS(
    name: string,
    value: string | RegExp,
    message?: string | undefined
  ): Promise<void> {
    await LocatorCoreCalls.toHaveCSS(this.locator, name, value, message);
  }

  /**
   * toHaveClass
   * * To check if the Element is has the expected class
   * @param expected The Expected class in the element
   * @param message The message to be shown on expect
   */
  public async toHaveClass(
    expected: string | RegExp | (string | RegExp)[],
    message?: string | undefined
  ): Promise<void> {
    await LocatorCoreCalls.toHaveClass(this.locator, expected, message);
  }

  /**
   * toHaveCount
   * * To check if the Locator resolves to expected number of elements
   * @param count The count expected to be found - as DOM nodes
   * @param message The message to be shown on expect
   */
  public async toHaveCount(
    count: number,
    message?: string | undefined
  ): Promise<void> {
    await LocatorCoreCalls.toHaveCount(this.locator, count, message);
  }

  /**
   * toContainText
   * * To check if the element contains expected text
   * @param expected The expected part of text to be found
   * @param message The message to be shown on expect
   */
  public async toContainText(
    expected: string | RegExp | (string | RegExp)[],
    message?: string | undefined
  ): Promise<void> {
    await LocatorCoreCalls.toContainText(this.locator, expected, message);
  }

  /**
   * toHaveId
   * * To check if the element has expected ID
   * @param id The expected ID in web Element
   * @param message The message to be shown on expect
   */
  public async toHaveId(
    id: string | RegExp,
    message?: string | undefined
  ): Promise<void> {
    await LocatorCoreCalls.toHaveId(this.locator, id, message);
  }
}

/**
 * usePlaywrightPageLocator
 * * To use the Playwright Page Locator with proxy
 * @param locator The element Locator
 * @param options The Locator Options for element
 * @returns The PageLocator with Proxy
 */
export const usePlaywrightPageLocator = (
  locator: Locator,
  options?: LocatorOptions
): PlaywrightPageLocatorProps => {
  const returnObject: PlaywrightPageLocatorProps = new PlaywrightPageLocator(
    locator,
    options
  );

  const handler = {};
  return new Proxy(returnObject, handler) as PlaywrightPageLocatorProps;
};

/**
 * createFragment
 * * To create a web fragment object with proxy traps
 * @param ClassObject The ClassObject that will use WebFragment
 * @param urlProps The URLProps
 * @returns The WebFragment with Proxy traps
 * @example
 * //Use below example to create a new WebFragment
 * let todoMvcPage: TodoMvcPage = createFragment(
 *     TodoMvcPage,
 *     TodoMvcPageProps()
 *   );
 */
export const createFragment = <T extends object>(
  ClassObject: { new (urlProps?: URLProps): T },
  urlProps?: URLProps
) => {
  const handler = {
    construct(target: any, args: any) {
      return new Proxy(new target(...args), {
        get: (target: any, prop: any) => {
          const origMethod = target[prop];
          switch (typeof origMethod) {
            case 'function':
              return async function (...args: any[]) {
                let networkIdle: WaitForNetworkIdleProps | undefined =
                  undefined;
                if (args.length > 0) {
                  let arg = args[args.length - 1];
                  networkIdle =
                    arg.waitForNetworkIdle && arg.waitForNetworkIdle;
                }
                let result = await Promise.all([
                  origMethod.apply(target, args),
                  networkIdle && waitForNetworkIdle(networkIdle),
                ]);
                return result[0];
              };
            default:
              return origMethod;
          }
        },
      });
    },
  };
  const Fragment = new Proxy(ClassObject, handler);
  return new Fragment(urlProps) as T;
};

/**
 * createFragmentActions
 * * To create a web fragment actions object with proxy traps
 * @param ClassObject The ClassObject that will use WebFragment actions
 * @returns The WebFragment actions with Proxy traps
 * @example
 * //Use below example to create a new WebFragment
 * let actions: TodoMvcPageActions = createFragmentActions(
 *     TodoMvcPageActions
 *   );
 */
export const createFragmentActions = <T extends object>(
  ClassObject: { new (args?: any): T },
  args?: any
) => {
  const handler = {
    construct(target: any, args: any) {
      return new Proxy(new target(...args), {
        get: (target: any, prop: any) => {
          const origMethod = target[prop];
          switch (typeof origMethod) {
            case 'function':
              return async function (...args: any[]) {
                let networkIdle: WaitForNetworkIdleProps | undefined =
                  undefined;
                if (args.length > 0) {
                  let arg = args[args.length - 1];
                  networkIdle =
                    arg.waitForNetworkIdle && arg.waitForNetworkIdle;
                }
                let result = await Promise.all([
                  origMethod.apply(target, args),
                  networkIdle && waitForNetworkIdle(networkIdle),
                ]);
                return result[0];
              };
            default:
              return origMethod;
          }
        },
      });
    },
  };
  const FragmentActions = new Proxy(ClassObject, handler);
  return new FragmentActions(args) as T;
};
