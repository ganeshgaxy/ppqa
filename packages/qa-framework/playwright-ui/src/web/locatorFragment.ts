import { playwrightPage, playwrightPageLocator } from '../utils/fixtureHooks';
import { Actionable, FindOptions, LocatorOptions } from '../utils/uiActions';
import { GenericExpect, PageLocatorExpect } from '../utils/uiAssertions';
import { ElementOrFragmentProps } from './generic';

export class LocatorFragment {
  public assert: PageLocatorExpect;
  public genericExpect: GenericExpect;
  constructor() {
    this.assert = new PageLocatorExpect();
    this.genericExpect = new GenericExpect();
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
  ): LocatorFragment {
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
    text: string,
    options?: LocatorOptions
  ): Promise<LocatorFragment> {
    await playwrightPageLocator.type(text, options);
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
    text: string,
    options?: LocatorOptions
  ): Promise<LocatorFragment> {
    await playwrightPageLocator.type(text, options);
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
  ): Promise<LocatorFragment> {
    await playwrightPageLocator.press(text, options);
    return this;
  }

  /**
   * findInLocator
   * * Finds a locator in a locator
   * @param {string} locator - string - the locator you want to find
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragment.
   */
  public findInLocator(
    locator: string,
    options?: FindOptions
  ): LocatorFragment {
    playwrightPage.find(locator, playwrightPageLocator.locator, options);
    return this;
  }

  /**
   * findNth
   * * "Finds the nth element that matches the locator and returns a new LocatorFragment object."
   * * The function is called like this:
   * @param {number} nth - number - The nth element to find.
   * @param {string} locator - string - The locator to find the element
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragment.
   */
  public findNth(
    nth: number,
    locator: string,
    options?: FindOptions
  ): LocatorFragment {
    playwrightPage.findNth(nth, locator, options);
    return this;
  }

  /**
   * findFirst
   * * "Finds the first element that matches the locator and returns a new LocatorFragment object."
   * * The LocatorFragment object is a class that extends the LocatorFragment class
   * @param {string} locator - string - The locator to find the element
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragment.
   */
  public findFirst(locator: string, options?: FindOptions): LocatorFragment {
    playwrightPage.findFirst(locator, options);
    return this;
  }

  /**
   * click
   * * Click on the element and return the LocatorFragment.
   * @param options LocatorOptions - Interface
   * @returns The LocatorFragment object.
   */
  public async click(options?: LocatorOptions): Promise<LocatorFragment> {
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
  ): Promise<LocatorFragment> {
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
  public async dblclick(options?: LocatorOptions): Promise<LocatorFragment> {
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
  public async check(options?: LocatorOptions): Promise<LocatorFragment> {
    await playwrightPageLocator.check(options);
    return this;
  }

  /**
   * uncheck
   * * Uncheck the checkbox if it is checked, otherwise do nothing.
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragment.
   */
  public async uncheck(options?: LocatorOptions): Promise<LocatorFragment> {
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
  ): Promise<LocatorFragment> {
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
  ): Promise<LocatorFragment> {
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
