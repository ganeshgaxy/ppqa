import { playwrightPage, playwrightPageLocator } from '../utils/fixtureHooks';
import { Actionable, FindOptions, LocatorOptions } from '../utils/uiActions';
import { GenericExpect, PageLocatorExpect } from '../utils/uiAssertions';
import { ElementOrFragmentProps } from './generic';

export interface LocatorFragmentProps
  extends ElementOrFragmentProps<LocatorFragmentProps> {
  pageLocatorExpect: PageLocatorExpect;

  /**
   * search
   * * A method that is used to type text into an element and/or wait for network response.
   * @param text The text to be entered
   * @param options Locator options Interface
   */
  search(text: string, options?: LocatorOptions): Promise<LocatorFragmentProps>;

  /**
   * typeIn
   * * A method that is used to type text into an element and/or wait for network response.
   * @param text The text to be entered
   * @param options Locator options Interface
   */
  typeIn(text: string, options?: LocatorOptions): Promise<LocatorFragmentProps>;

  /**
   * pressKey
   * * A function that is press a key on element and/or then waiting for the network response.
   * @param text The Key to be pressed
   * @param options Locator options Interface
   */
  pressKey(
    text: string,
    options?: LocatorOptions
  ): Promise<LocatorFragmentProps>;
  /**
   * findInLocator
   * * Creating a method that is called to find the element.
   * @param locator The locator string for the element
   * @param options FindOptions Interface
   * @returns PlaywrightPageLocator (this)
   */
  findInLocator(locator: string, options?: FindOptions): LocatorFragmentProps;

  /**
   * findNth
   * * Creating a method that is called to find the nth element.
   * @param nth Nth count of element to be found
   * @returns PlaywrightPageLocator (this)
   */
  findNth(
    nth: number,
    locator: string,
    options?: FindOptions
  ): LocatorFragmentProps;

  /**
   * findFirst
   * * Creating a method that is called to find the first element.
   * @returns PlaywrightPageLocator (this)
   */
  findFirst(locator: string, options?: FindOptions): LocatorFragmentProps;
  assert(): PageLocatorExpect;
}

export class LocatorFragment implements LocatorFragmentProps {
  public pageLocatorExpect: PageLocatorExpect;
  public genericExpect: GenericExpect;
  constructor() {
    this.pageLocatorExpect = new PageLocatorExpect();
    this.genericExpect = new GenericExpect();
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
  ): LocatorFragmentProps {
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
    text: string,
    options?: LocatorOptions
  ): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.type(text, options);
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
    text: string,
    options?: LocatorOptions
  ): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.type(text, options);
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
  ): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.press(text, options);
    return this;
  }

  /**
   * findInLocator
   * * Finds a locator in a locator
   * @param {string} locator - string - the locator you want to find
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragmentProps.
   */
  public findInLocator(
    locator: string,
    options?: FindOptions
  ): LocatorFragmentProps {
    playwrightPage.find(locator, playwrightPageLocator.locator, options);
    return this;
  }

  /**
   * findNth
   * * "Finds the nth element that matches the locator and returns a new LocatorFragmentProps object."
   * * The function is called like this:
   * @param {number} nth - number - The nth element to find.
   * @param {string} locator - string - The locator to find the element
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragmentProps.
   */
  public findNth(
    nth: number,
    locator: string,
    options?: FindOptions
  ): LocatorFragmentProps {
    playwrightPage.findNth(nth, locator, options);
    return this;
  }

  /**
   * findFirst
   * * "Finds the first element that matches the locator and returns a new LocatorFragmentProps object."
   * * The LocatorFragmentProps object is a class that extends the LocatorFragment class
   * @param {string} locator - string - The locator to find the element
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragmentProps.
   */
  public findFirst(
    locator: string,
    options?: FindOptions
  ): LocatorFragmentProps {
    playwrightPage.findFirst(locator, options);
    return this;
  }

  /**
   * click
   * * Click on the element and return the LocatorFragmentProps.
   * @param options LocatorOptions - Interface
   * @returns The LocatorFragmentProps object.
   */
  public async click(options?: LocatorOptions): Promise<LocatorFragmentProps> {
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
  ): Promise<LocatorFragmentProps> {
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
  public async dblclick(
    options?: LocatorOptions
  ): Promise<LocatorFragmentProps> {
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
  public async check(options?: LocatorOptions): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.check(options);
    return this;
  }

  /**
   * uncheck
   * * Uncheck the checkbox if it is checked, otherwise do nothing.
   * @param options LocatorOptions - Interface
   * @returns The return type is LocatorFragmentProps.
   */
  public async uncheck(
    options?: LocatorOptions
  ): Promise<LocatorFragmentProps> {
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
  ): Promise<LocatorFragmentProps> {
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
  ): Promise<LocatorFragmentProps> {
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
