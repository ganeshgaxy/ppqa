import { playwrightPage, playwrightPageLocator } from '../utils/fixtureHooks';
import { Actionable, FindOptions, LocatorOptions } from '../utils/uiActions';
import { PageLocatorExpect } from '../utils/uiAssertions';
import { ElementOrFragmentProps } from './generic';
import { checkPageActionable } from './webFragment';

export interface WebElementProps extends ElementOrFragmentProps<WebElement> {
  webElementProps: TypeWebElement;
  pageLocatorExpect: PageLocatorExpect;

  /**
   * search
   * * A static method that is used to type text into an element and/or wait for network response.
   * @param text The text to be entered
   * @param options Locator options Interface
   */
  search(text?: string, options?: LocatorOptions): Promise<WebElement>;

  /**
   * typeIn
   * * A static method that is used to type text into an element and/or wait for network response.
   * @param text The text to be entered
   * @param options Locator options Interface
   */
  typeIn(text?: string, options?: LocatorOptions): Promise<WebElement>;

  /**
   * pressKey
   * * A function that is press a key on element and/or then waiting for the network response.
   * @param text The Key to be pressed
   * @param options Locator options Interface
   */
  pressKey(text?: string, options?: LocatorOptions): Promise<WebElement>;

  /**
   * findInLocator
   * * Finds a locator in a locator
   * @param {string} locator - string - the locator you want to find
   * @returns The return type is LocatorFragmentProps.
   */
  findInLocator(locator: string, options?: FindOptions): WebElement;

  /**
   * findNth
   * * Creating a method that is called to find the nth element.
   * @param nth Nth count of element to be found
   * @returns PlaywrightPageLocator (this)
   */
  findNth(nth: number, options?: FindOptions): WebElement;

  /**
   * findFirst
   * * Creating a method that is called to find the first element.
   * @returns PlaywrightPageLocator (this)
   */
  findFirst(options?: FindOptions): WebElement;
  assert(): PageLocatorExpect;
}

export interface TypeWebElementProps {
  locator: string;
  text?: string;
  nth?: number;
  actionable?: Actionable | Actionable[];
  options?: LocatorOptions;
}

export type TypeWebElement = TypeWebElementProps;

export class WebElement implements WebElementProps {
  public webElementProps: TypeWebElement;
  public pageLocatorExpect: PageLocatorExpect;
  constructor(webElementProps: TypeWebElement) {
    this.webElementProps = webElementProps;
    this.pageLocatorExpect = new PageLocatorExpect();
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
   * @returns The return type is LocatorFragmentProps.
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
   * @returns The LocatorFragmentProps object.
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
   * @returns The return type is LocatorFragmentProps.
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
   * @returns The return type is LocatorFragmentProps.
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
   * @returns The return type is LocatorFragmentProps.
   */
  public findInLocator(locator: string): WebElement {
    playwrightPageLocator.find(locator);
    return this;
  }

  /**
   * findNth
   * * "Finds the nth element that matches the locator and returns a new LocatorFragmentProps object."
   * * The function is called like this:
   * @param {number} nth - number - The nth element to find.
   * @returns The return type is LocatorFragmentProps.
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
   * * Click on the element and return the LocatorFragmentProps.
   * @param options LocatorOptions - Interface
   * @returns The LocatorFragmentProps object.
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
   * @returns The return type is LocatorFragmentProps.
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
   * * The function dblclick() is a public function that returns a promise of type LocatorFragmentProps.
   * * The function dblclick() is an async function that calls the function dblclick() from the
   * * playwrightPageLocator object.
   * @param options LocatorOptions - Interface
   * @returns The LocatorFragmentProps object.
   */
  public async dblclick(options?: LocatorOptions): Promise<WebElement> {
    await playwrightPageLocator.dblclick(options);
    return this;
  }

  /**
   * check
   * * The check function is a public function that returns a promise of a LocatorFragmentProps object.
   * * The check function is an async function that calls the check function of the playwrightPageLocator
   * * object.
   * @param options LocatorOptions - Interface
   * @returns The LocatorFragmentProps object.
   */
  public async check(options?: LocatorOptions): Promise<WebElement> {
    await playwrightPageLocator.check(options);
    return this;
  }

  /**
   * uncheck
   * * Uncheck the checkbox if it is checked, otherwise do nothing.
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragmentProps.
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
   * @returns The return type is LocatorFragmentProps.
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
   * @returns The return type is LocatorFragmentProps.
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
  public assert(): PageLocatorExpect {
    return this.pageLocatorExpect;
  }
}

/**
 * useWebElement
 * * To create a WebElement for the given props
 * @param webElementProps WebElementType
 * @returns WebElement
 */
export const useWebElement = (
  webElementProps: TypeWebElement
): WebElementProps => {
  const returnObject: WebElementProps = new WebElement(webElementProps);

  const handler = {};
  return new Proxy(returnObject, handler) as WebElementProps;
};
