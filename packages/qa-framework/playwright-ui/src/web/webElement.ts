import { playwrightPage, playwrightPageLocator } from '../utils/fixtureHooks';
import { Actionable, FindOptions, LocatorOptions } from '../utils/uiActions';
import { PageLocatorExpect } from '../utils/uiAssertions';
import { ElementOrFragmentProps } from './generic';
import { checkPageActionable } from './webFragment';

/* Defining the interface for the props that will be passed into the WebElement class. */
export interface TypeWebElement {
  locator: string;
  text?: string;
  nth?: number;
  actionable?: Actionable | Actionable[];
  options?: LocatorOptions;
}

/**
 * This class can be used to create a WebElement for Dom Nodes and interact with them using the functions in this class
 * The class is a wrapper for the playwrightPageLocator object. The class is used to create a fluent interface for the playwrightPageLocator object.
 * @example
 * //Just like below one can simply create a WebElement using the below example
 * const newTodoTextBox = (text?: string): WebElement =>
 *   useWebElement({
 *     locator: '.new-todo',
 *     text,
 *   });
 */
export class WebElement {
  public webElementProps: TypeWebElement;
  public assert: PageLocatorExpect;
  constructor(webElementProps: TypeWebElement) {
    this.webElementProps = webElementProps;
    this.assert = new PageLocatorExpect();
    webElementProps.nth !== undefined
      ? playwrightPage.findNth(
          webElementProps.nth,
          this.webElementProps.locator
        )
      : playwrightPage.find(this.webElementProps.locator);
    if (
      webElementProps.actionable &&
      Array.isArray(webElementProps.actionable)
    ) {
      for (let actionableCheck of webElementProps.actionable) {
        new Promise((resolve, _) => {
          resolve(
            checkPageActionable(webElementProps.locator, actionableCheck)
          );
        });
      }
    } else if (webElementProps.actionable) {
      let actionable = webElementProps.actionable;
      new Promise((resolve, _) => {
        resolve(checkPageActionable(webElementProps.locator, actionable));
      });
    }
  }

  /**
   * waitForNetworkResponseAfter
   * * Wait for a network response after a given URL path and status.
   * @param {string} urlPath - string - The URL path to wait for.
   * @param {number} [status] - The HTTP status code to wait for.
   * @returns The return type is LocatorFragment.
   */
  public waitForNetworkResponseAfter(
    urlPath: string,
    status?: number
  ): WebElement {
    playwrightPageLocator.waitForNetworkResponseAfter(
      urlPath,
      status && status
    );
    return this;
  }

  /**
   * search
   * * "Type text into the search box and return the current page object."
   * * The function is async, so we can use the await keyword
   * @param {string} text - string - the text to search for
   * @param options LocatorOptions - Interface
   * @returns The LocatorFragment object.
   */
  public async search(
    text?: string,
    options?: LocatorOptions
  ): Promise<WebElement> {
    if (text) {
      await playwrightPageLocator.type(text, options);
    } else if (!text && this.webElementProps.text) {
      await playwrightPageLocator.type(this.webElementProps.text, options);
    }
    return this;
  }

  /**
   * typeIn
   * * Type in the text passed in as a parameter and return the current instance of the class.
   * @param {string} text - string - The text to type into the element
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragment.
   */
  public async typeIn(
    text?: string,
    options?: LocatorOptions
  ): Promise<WebElement> {
    if (text) {
      await playwrightPageLocator.type(text, options);
    } else if (!text && this.webElementProps.text) {
      await playwrightPageLocator.type(this.webElementProps.text, options);
    }
    return this;
  }

  /**
   * pressKey
   * * This function will press a key on the page and return the locator fragment props.
   * @param {string} text - string - The text to type into the element.
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragment.
   */
  public async pressKey(
    text: string,
    options?: LocatorOptions
  ): Promise<WebElement> {
    await playwrightPageLocator.press(text, options);
    return this;
  }

  /**
   * findInLocator
   * * Finds a locator in a locator
   * @param {string} locator - string - the locator you want to find
   * @returns The return type is LocatorFragment.
   */
  public findInLocator(locator: string): WebElement {
    playwrightPageLocator.find(locator);
    return this;
  }

  /**
   * findNth
   * * "Finds the nth element that matches the locator and returns a new LocatorFragment object."
   * * The function is called like this:
   * @param {number} nth - number - The nth element to find.
   * @returns The return type is LocatorFragment.
   */
  public findNth(nth: number): WebElement {
    playwrightPageLocator.findNth(nth);
    return this;
  }

  /**
   * findFirst
   * * Creating a static method that is called to find the first element.
   * @returns PlaywrightPageLocator (this)
   */
  public findFirst(): WebElement {
    playwrightPageLocator.findFirst();
    return this;
  }

  /**
   * click
   * * Click on the element and return the LocatorFragment.
   * @param options LocatorOptions - Interface
   * @returns The LocatorFragment object.
   */
  public async click(options?: LocatorOptions): Promise<WebElement> {
    await playwrightPageLocator.click(options);
    return this;
  }

  /**
   * dispatchEvent
   * * This function dispatches an event to the element that is currently being located.
   * @param {string} type - string - The type of event to dispatch.
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragment.
   */
  public async dispatchEvent(
    type: string,
    options?: LocatorOptions
  ): Promise<WebElement> {
    await playwrightPageLocator.dispatchEvent(type, options);
    return this;
  }

  /**
   * dblclick
   * * The function dblclick() is a public function that returns a promise of type LocatorFragment.
   * * The function dblclick() is an async function that calls the function dblclick() from the
   * * playwrightPageLocator object.
   * @param options LocatorOptions - Interface
   * @returns The LocatorFragment object.
   */
  public async dblclick(options?: LocatorOptions): Promise<WebElement> {
    await playwrightPageLocator.dblclick(options);
    return this;
  }

  /**
   * check
   * * The check function is a public function that returns a promise of a LocatorFragment object.
   * * The check function is an async function that calls the check function of the playwrightPageLocator
   * * object.
   * @param options LocatorOptions - Interface
   * @returns The LocatorFragment object.
   */
  public async check(options?: LocatorOptions): Promise<WebElement> {
    await playwrightPageLocator.check(options);
    return this;
  }

  /**
   * uncheck
   * * Uncheck the checkbox if it is checked, otherwise do nothing.
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragment.
   */
  public async uncheck(options?: LocatorOptions): Promise<WebElement> {
    await playwrightPageLocator.uncheck(options);
    return this;
  }

  /**
   * verifyActionable
   * * Verify that the actionable is present on the page, and return the locator fragment props.
   * @param {Actionable} actionable - Actionable
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragment.
   */
  public async verifyActionable(
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<WebElement> {
    await playwrightPageLocator.verifyActionable(actionable, options);
    return this;
  }

  /**
   * verifyNotActionable
   * * Verify that the element is not actionable.
   * @param {Actionable} actionable - Actionable
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragment.
   */
  public async verifyNotActionable(
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<WebElement> {
    await playwrightPageLocator.verifyNotActionable(actionable, options);
    return this;
  }

  /**
   * assert
   * * This function returns a new instance of the PageLocatorExpect class.
   * @returns The pageLocatorExpect object.
   */
  /*public assert(): PageLocatorExpect {
    return this.pageLocatorExpect;
  }*/
}

/**
 * useWebElement
 * * To create a WebElement for the given props
 * @param webElementProps WebElementType
 * @returns WebElement
 * @example
 * //Just like below one can simply create a WebElement using the below example
 * const newTodoTextBox = (text?: string): WebElement =>
 *   useWebElement({
 *     locator: '.new-todo',
 *     text,
 *   });
 */
export const useWebElement = (webElementProps: TypeWebElement): WebElement => {
  const returnObject: WebElement = new WebElement(webElementProps);

  const handler = {};
  return new Proxy(returnObject, handler) as WebElement;
};
