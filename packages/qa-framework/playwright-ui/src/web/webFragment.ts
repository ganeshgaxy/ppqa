import { Locator } from 'playwright';
import {
  appInfo,
  playwrightExpect,
  playwrightPage,
  playwrightPageLocator,
} from '../utils/fixtureHooks';
import {
  Actionable,
  FindOptions,
  LocatorOptions,
  PageOptions,
} from '../utils/uiActions';
import { GenericExpect, PageLocatorExpect } from '../utils/uiAssertions';
import { LocatorFragmentProps, LocatorFragment } from './locatorFragment';

export interface WebFragmentProps {
  /**
   * open
   * * To open the webpage with url
   * @param urlProps URLProps Interface
   */
  open(urlProps?: URLProps): Promise<WebFragmentProps>;

  /**
   * reload
   * * A method that is being called on the playwrightPage object.
   * @param options PageOptions Interface
   */
  reload(options?: PageOptions): Promise<WebFragmentProps>;

  /**
   * goBack
   * * A method that is used to go back to the previous page.
   * @param options PageOptions Interface
   */
  goBack(options?: PageOptions): Promise<WebFragmentProps>;

  /**
   * getTitle
   * * To get a title of a page as a promise
   * @returns Title of the page as a promise
   */
  getTitle(): Promise<string>;

  /**
   * waitForPageLoad
   * * Waiting for the page to load.
   * @param timeout timeout in milliseconds
   * @param state state to achieve upon load
   */
  waitForPageLoad(
    timeout?: number,
    state?: 'networkidle' | 'load' | 'domcontentloaded' | 'commit'
  ): Promise<WebFragmentProps>;
}

export interface WebFragmentActionsProps {}

export class URLBuilder {
  private _url: URLProps;

  /**
   * A Simple constructor to initialize the _page value
   * without this, above data member will become undefined
   */
  constructor() {
    this._url = {
      url: `${appInfo.baseURL}`,
    };
  }

  /**
   * This function takes a string as a parameter and returns a URLBuilder object.
   * @param {string} culture - string
   * @returns The URLBuilder object.
   */
  culture(culture: string): URLBuilder {
    this._url.culture = culture;
    this._url.url = `${this._url.url}${this._url.culture}`;
    return this;
  }

  /**
   * This function takes a string as an argument and sets the suffix property of the URLBuilder class
   * to the value of the string argument. It then sets the url property of the URLBuilder class to the
   * value of the url property plus the value of the suffix property. It then returns the URLBuilder
   * class.
   * @param {string} suffix - string - The suffix to be added to the URL.
   * @returns The URLBuilder object.
   */
  suffix(suffix: string): URLBuilder {
    this._url.suffix = suffix;
    this._url.url = `${this._url.url}${this._url.suffix}`;
    return this;
  }

  /**
   * It takes a string as an argument, sets the extra property of the _url object to the string, and
   * then sets the url property of the _url object to the url property of the _url object plus the
   * extra property of the _url object.
   * @param {string} extra - string - This is the extra string that will be appended to the url.
   * @returns The URLBuilder object.
   */
  extra(extra: string): URLBuilder {
    this._url.extra = extra;
    this._url.url = `${this._url.url}${this._url.extra}`;
    return this;
  }

  /**
   * "This function takes an object with optional properties and returns an object with optional
   * properties."
   * @param options - simpleOptions
   * @returns The URLBuilder object.
   */
  options(options: {
    referer?: string | undefined;
    timeout?: number | undefined;
    waitUntil?:
      | 'load'
      | 'domcontentloaded'
      | 'networkidle'
      | 'commit'
      | undefined;
  }): URLBuilder {
    this._url.options = options;
    return this;
  }

  /**
   * This function sets the expectedTitle property of the URL object and returns the URLBuilder object.
   * @param {string} expectedTitle - The title of the page you expect to be on.
   * @returns The URLBuilder object.
   */
  expectedTitle(expectedTitle: string): URLBuilder {
    this._url.expectedTitle = expectedTitle;
    return this;
  }

  /**
   * The function returns the URLProps object that was created in the constructor.
   * @returns The URLProps object.
   */
  build(): URLProps {
    return this._url;
  }
}

export interface URLProps {
  culture?: string;
  suffix?: string;
  extra?: string;
  expectedTitle?: string;
  url: string;
  options?: {
    referer?: string | undefined;
    timeout?: number | undefined;
    waitUntil?:
      | 'load'
      | 'domcontentloaded'
      | 'networkidle'
      | 'commit'
      | undefined;
  };
}

export class WebFragment implements WebFragmentProps {
  protected defaultURL: URLProps | undefined;

  constructor(urlProps?: URLProps) {
    this.defaultURL = urlProps && urlProps;
  }

  /**
   * open
   * * To open the webpage with url
   * @param urlProps URLProps Interface
   */
  public async open(urlProps?: URLProps): Promise<WebFragmentProps> {
    urlProps && (await playwrightPage.goto(urlProps));
    !urlProps &&
      this.defaultURL &&
      (await playwrightPage.goto(this.defaultURL));
    return this;
  }

  /**
   * reload
   * * A method that is being called on the playwrightPage object.
   * @param options PageOptions Interface
   */
  public async reload(options?: PageOptions): Promise<WebFragmentProps> {
    await playwrightPage.reload(options);
    return this;
  }

  /**
   * goBack
   * * A method that is used to go back to the previous page.
   * @param options PageOptions Interface
   */
  public async goBack(options?: PageOptions): Promise<WebFragmentProps> {
    await playwrightPage.goBack(options);
    return this;
  }

  /**
   * getTitle
   * * To get a title of a page as a promise
   * @returns Title of the page as a promise
   */
  public async getTitle(): Promise<string> {
    return await playwrightPage.getTitle();
  }

  /**
   * waitForPageLoad
   * * Waiting for the page to load.
   * @param timeout timeout in milliseconds
   * @param state state to achieve upon load
   */
  public async waitForPageLoad(
    timeout?: number,
    state?: 'networkidle' | 'load' | 'domcontentloaded' | 'commit'
  ): Promise<WebFragmentProps> {
    await playwrightPage.waitForPageLoad();
    return this;
  }

  /**
   * assert
   * * It returns a new instance of the class `LocatorFragment` and then returns the property
   * * `genericExpect` of that instance
   * @returns A new instance of the LocatorFragment class.
   */
  public assert(): GenericExpect {
    return new LocatorFragment().genericExpect;
  }

  /**
   * webElement
   * * This function returns a new instance of the LocatorFragment class, which is a class that contains
   * * a bunch of functions that can be used to interact with the web element that was found by the
   * * playwrightPage.find() function.
   * @param {string} locator - string - the locator to find the element
   * @returns A LocatorFragmentProps object.
   */
  protected webElement(
    locator: string,
    baseLocator?: Locator,
    options?: FindOptions
  ): LocatorFragmentProps {
    playwrightPage.find(locator, baseLocator, options);
    return new LocatorFragment();
  }

  /**
   * waitForWebElement
   * * Wait for a web element to be present, then return a new LocatorFragment object.
   * @param {string} locator - string - the locator to find
   * @param {Actionable | Actionable[]} [actionable] - Actionable | Actionable[]
   * @param {Locator} [baseLocator] - The base locator to use for the find.
   * @param {FindOptions} [options] - FindOptions = {
   * @returns A LocatorFragment object.
   */
  protected waitForWebElement(
    locator: string,
    actionable?: Actionable | Actionable[],
    baseLocator?: Locator,
    options?: FindOptions
  ): LocatorFragmentProps {
    playwrightPage.find(locator, baseLocator, options);
    if (actionable && Array.isArray(actionable)) {
      for (let actionableCheck of actionable) {
        new Promise((resolve, _) => {
          resolve(checkPageActionable(locator, actionableCheck));
        });
      }
    } else if (actionable) {
      new Promise((resolve, _) => {
        resolve(checkPageActionable(locator, actionable));
      });
    }
    return new LocatorFragment();
  }

  /**
   * waitForNthWebElement
   * * Wait for the nth element to be visible, then return a new LocatorFragment object.
   * @param {string} locator - string - the locator to find
   * @param {number} nth - number - the nth element to find
   * @param {Actionable | Actionable[]} [actionable] - Actionable | Actionable[]
   * @param {FindOptions} [options] - FindOptions = {
   * @returns A new instance of the LocatorFragment class.
   */
  protected waitForNthWebElement(
    locator: string,
    nth: number,
    actionable?: Actionable | Actionable[],
    options?: FindOptions
  ): LocatorFragmentProps {
    playwrightPage.findNth(nth, locator, options);
    if (actionable && Array.isArray(actionable)) {
      for (let actionableCheck of actionable) {
        new Promise((resolve, _) => {
          resolve(checkPageActionable(locator, actionableCheck));
        });
      }
    } else if (actionable) {
      new Promise((resolve, _) => {
        resolve(checkPageActionable(locator, actionable));
      });
    }
    return new LocatorFragment();
  }
}

export class WebFragmentActions implements WebFragmentActionsProps {
  /**
   * webElement
   * * This function returns a new LocatorFragment object, which is a class that extends the
   * * LocatorFragmentProps interface.
   * @param {string} locator - string - the locator to find
   * @param {Locator} [baseLocator] - The base locator to use for the element.
   * @param {FindOptions} [options] - FindOptions
   * @returns A LocatorFragmentProps object.
   */
  protected webElement(
    locator: string,
    baseLocator?: Locator,
    options?: FindOptions
  ): LocatorFragmentProps {
    playwrightPage.find(locator, baseLocator, options);
    return new LocatorFragment();
  }

  /**
   * assert
   * * It returns a new instance of the LocatorFragment class.
   * @returns A new instance of the LocatorFragment class.
   */
  public assert(): PageLocatorExpect {
    return new LocatorFragment().pageLocatorExpect;
  }

  /**
   * waitForWebElement
   * * Wait for a web element to be visible, then return a new LocatorFragment object.
   * @param {string} locator - string - the locator to find
   * @param {Actionable | Actionable[]} [actionable] - Actionable | Actionable[]
   * @param {Locator} [baseLocator] - The base locator to use for the find.
   * @param {FindOptions} [options] - FindOptions = {
   * @returns A LocatorFragment object.
   */
  protected waitForWebElement(
    locator: string,
    actionable?: Actionable | Actionable[],
    baseLocator?: Locator,
    options?: FindOptions
  ): LocatorFragmentProps {
    playwrightPage.find(locator, baseLocator, options);
    if (actionable && Array.isArray(actionable)) {
      for (let actionableCheck of actionable) {
        new Promise((resolve, _) => {
          resolve(checkPageActionable(locator, actionableCheck));
        });
      }
    } else if (actionable) {
      new Promise((resolve, _) => {
        resolve(checkPageActionable(locator, actionable));
      });
    }
    return new LocatorFragment();
  }

  /**
   * waitForNthWebElement
   * * Wait for the nth element to be visible, then return a new LocatorFragment object.
   * @param {string} locator - string - the locator to find
   * @param {number} nth - number - the nth element to wait for
   * @param {Actionable | Actionable[]} [actionable] - Actionable | Actionable[]
   * @returns A new instance of the LocatorFragment class.
   */
  protected waitForNthWebElement(
    locator: string,
    nth: number,
    actionable?: Actionable | Actionable[]
  ): LocatorFragmentProps {
    playwrightPage.findNth(nth, locator);
    if (actionable && Array.isArray(actionable)) {
      for (let actionableCheck of actionable) {
        new Promise((resolve, _) => {
          resolve(checkPageActionable(locator, actionableCheck));
        });
      }
    } else if (actionable) {
      new Promise((resolve, _) => {
        resolve(checkPageActionable(locator, actionable));
      });
    }
    return new LocatorFragment();
  }
}

/**
 * checkPageActionable
 * * This function takes in a locator, an actionable, and an optional negative boolean and options
 * * object, and then checks the page for the actionable based on the locator and options.
 * @param {string} locator - string - the locator of the element
 * @param {Actionable} actionable - Actionable - This is an enum that I created that has the following
 * values:
 * @param {boolean} [negative=false] - boolean = false,
 * @param {LocatorOptions} [options] - LocatorOptions = {
 */
export const checkPageActionable = async (
  locator: string,
  actionable: Actionable,
  negative: boolean = false,
  options?: LocatorOptions
) => {
  switch (actionable) {
    case Actionable.ToBeChecked:
      negative
        ? playwrightExpect
            .expect(await playwrightPage.page.isChecked(locator, options))
            .toBeFalsy()
        : playwrightExpect
            .expect(await playwrightPage.page.isChecked(locator, options))
            .toBeTruthy();
      break;
    case Actionable.ToBeDisabled:
      negative
        ? playwrightExpect
            .expect(await playwrightPage.page.isDisabled(locator, options))
            .toBeFalsy()
        : playwrightExpect
            .expect(await playwrightPage.page.isDisabled(locator, options))
            .toBeTruthy();
      break;
    case Actionable.ToBeEditable:
      negative
        ? playwrightExpect
            .expect(await playwrightPage.page.isEditable(locator, options))
            .toBeFalsy()
        : playwrightExpect
            .expect(await playwrightPage.page.isEditable(locator, options))
            .toBeTruthy();
      break;
    case Actionable.ToBeEnabled:
      negative
        ? playwrightExpect
            .expect(await playwrightPage.page.isEnabled(locator, options))
            .toBeFalsy()
        : playwrightExpect
            .expect(await playwrightPage.page.isEnabled(locator, options))
            .toBeTruthy();
      break;
    case Actionable.ToBeHidden:
      negative
        ? playwrightExpect
            .expect(await playwrightPage.page.isHidden(locator, options))
            .toBeFalsy()
        : playwrightExpect
            .expect(await playwrightPage.page.isHidden(locator, options))
            .toBeTruthy();
      break;
    case Actionable.ToBeVisible:
      negative
        ? playwrightExpect
            .expect(await playwrightPage.page.isVisible(locator, options))
            .toBeFalsy()
        : playwrightExpect
            .expect(await playwrightPage.page.isVisible(locator, options))
            .toBeTruthy();
      break;
    default:
      console.log('HardPass');
  }
};

/**
 * checkLocatorActionable
 * * This function takes in a locator, an actionable, and a negative boolean, and then checks the locator
 * * against the actionable, and if the negative boolean is true, it will check the opposite of the
 * * actionable.
 * @param {Locator} locator - Locator - this is the locator that you want to check
 * @param {Actionable} actionable - Actionable - This is an enum that contains the following values:
 * @param {boolean} [negative=false] - boolean = false,
 * @param {LocatorOptions} [options] - LocatorOptions
 */
export const checkLocatorActionable = async (
  locator: Locator,
  actionable: Actionable,
  negative: boolean = false,
  options?: LocatorOptions
) => {
  switch (actionable) {
    case Actionable.ToBeChecked:
      negative
        ? playwrightExpect.expect(await locator.isChecked(options)).toBeFalsy()
        : playwrightExpect
            .expect(await locator.isChecked(options))
            .toBeTruthy();
      break;
    case Actionable.ToBeDisabled:
      negative
        ? playwrightExpect.expect(await locator.isDisabled(options)).toBeFalsy()
        : playwrightExpect
            .expect(await locator.isDisabled(options))
            .toBeTruthy();
      break;
    case Actionable.ToBeEditable:
      negative
        ? playwrightExpect.expect(await locator.isEditable(options)).toBeFalsy()
        : playwrightExpect
            .expect(await locator.isEditable(options))
            .toBeTruthy();
      break;
    case Actionable.ToBeEnabled:
      negative
        ? playwrightExpect.expect(await locator.isEnabled(options)).toBeFalsy()
        : playwrightExpect
            .expect(await locator.isEnabled(options))
            .toBeTruthy();
      break;
    case Actionable.ToBeHidden:
      negative
        ? playwrightExpect.expect(await locator.isHidden(options)).toBeFalsy()
        : playwrightExpect.expect(await locator.isHidden(options)).toBeTruthy();
      break;
    case Actionable.ToBeVisible:
      negative
        ? playwrightExpect.expect(await locator.isVisible(options)).toBeFalsy()
        : playwrightExpect
            .expect(await locator.isVisible(options))
            .toBeTruthy();
      break;
    default:
      console.log('HardPass');
  }
};
