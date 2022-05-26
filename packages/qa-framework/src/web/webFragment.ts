import { Locator } from 'playwright';
import {
  appInfo,
  playwrightExpect,
  playwrightPage,
  playwrightPageLocator,
} from '../utils/fixtureHooks';
import { Actionable } from '../utils/uiActions';
import { GenericExpect, PageLocatorExpect } from '../utils/uiAssertions';
import { LocatorFragmentProps, LocatorFragment } from './locatorFragment';

export interface WebFragmentProps {
  open(urlProps?: URLProps): Promise<WebFragmentProps>;
  reload(): Promise<WebFragmentProps>;
  goBack(): Promise<WebFragmentProps>;
  getTitle(): Promise<string>;
  waitForPageLoad(): Promise<WebFragmentProps>;
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
  culture(culture: string): URLBuilder {
    this._url.culture = culture;
    this._url.url = `${this._url.url}${this._url.culture}`;
    return this;
  }
  suffix(suffix: string): URLBuilder {
    this._url.suffix = suffix;
    this._url.url = `${this._url.url}${this._url.suffix}`;
    return this;
  }
  extra(extra: string): URLBuilder {
    this._url.extra = extra;
    this._url.url = `${this._url.url}${this._url.extra}`;
    return this;
  }
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
  expectedTitle(expectedTitle: string): URLBuilder {
    this._url.expectedTitle = expectedTitle;
    return this;
  }

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
  public async open(urlProps?: URLProps): Promise<WebFragmentProps> {
    urlProps && (await playwrightPage.goto(urlProps));
    !urlProps &&
      this.defaultURL &&
      (await playwrightPage.goto(this.defaultURL));
    return this;
  }
  public async reload(): Promise<WebFragmentProps> {
    await playwrightPage.reload();
    return this;
  }
  public async goBack(): Promise<WebFragmentProps> {
    await playwrightPage.goBack();
    return this;
  }
  public async getTitle(): Promise<string> {
    return await playwrightPage.getTitle();
  }
  public async waitForPageLoad(): Promise<WebFragmentProps> {
    await playwrightPage.waitForPageLoad();
    return this;
  }
  public assert(): GenericExpect {
    return new LocatorFragment().genericExpect;
  }
  protected webElement(locator: string): LocatorFragmentProps {
    playwrightPage.find(locator);
    return new LocatorFragment();
  }
  protected waitForWebElement(
    locator: string,
    actionable?: Actionable | Actionable[]
  ): LocatorFragmentProps {
    playwrightPage.find(locator);
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

export class WebFragmentActions implements WebFragmentActionsProps {
  protected webElement(locator: string): LocatorFragmentProps {
    playwrightPage.find(locator);
    return new LocatorFragment();
  }
  public assert(): PageLocatorExpect {
    return new LocatorFragment().pageLocatorExpect;
  }
  protected waitForWebElement(
    locator: string,
    actionable?: Actionable | Actionable[]
  ): LocatorFragmentProps {
    playwrightPage.find(locator);
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

export const checkPageActionable = async (
  locator: string,
  actionable: Actionable,
  negative: boolean = false
) => {
  switch (actionable) {
    case Actionable.ToBeChecked:
      negative
        ? playwrightExpect
            .expect(await playwrightPage.page.isChecked(locator))
            .toBeFalsy()
        : playwrightExpect
            .expect(await playwrightPage.page.isChecked(locator))
            .toBeTruthy();
      break;
    case Actionable.ToBeDisabled:
      negative
        ? playwrightExpect
            .expect(await playwrightPage.page.isDisabled(locator))
            .toBeFalsy()
        : playwrightExpect
            .expect(await playwrightPage.page.isDisabled(locator))
            .toBeTruthy();
      break;
    case Actionable.ToBeEditable:
      negative
        ? playwrightExpect
            .expect(await playwrightPage.page.isEditable(locator))
            .toBeFalsy()
        : playwrightExpect
            .expect(await playwrightPage.page.isEditable(locator))
            .toBeTruthy();
      break;
    case Actionable.ToBeEnabled:
      negative
        ? playwrightExpect
            .expect(await playwrightPage.page.isEnabled(locator))
            .toBeFalsy()
        : playwrightExpect
            .expect(await playwrightPage.page.isEnabled(locator))
            .toBeTruthy();
      break;
    case Actionable.ToBeHidden:
      negative
        ? playwrightExpect
            .expect(await playwrightPage.page.isHidden(locator))
            .toBeFalsy()
        : playwrightExpect
            .expect(await playwrightPage.page.isHidden(locator))
            .toBeTruthy();
      break;
    case Actionable.ToBeVisible:
      negative
        ? playwrightExpect
            .expect(await playwrightPage.page.isVisible(locator))
            .toBeFalsy()
        : playwrightExpect
            .expect(await playwrightPage.page.isVisible(locator))
            .toBeTruthy();
      break;
    default:
      console.log('HardPass');
  }
};

export const checkLocatorActionable = async (
  locator: Locator,
  actionable: Actionable,
  negative: boolean = false
) => {
  switch (actionable) {
    case Actionable.ToBeChecked:
      negative
        ? playwrightExpect.expect(await locator.isChecked()).toBeFalsy()
        : playwrightExpect.expect(await locator.isChecked()).toBeTruthy();
      break;
    case Actionable.ToBeDisabled:
      negative
        ? playwrightExpect.expect(await locator.isDisabled()).toBeFalsy()
        : playwrightExpect.expect(await locator.isDisabled()).toBeTruthy();
      break;
    case Actionable.ToBeEditable:
      negative
        ? playwrightExpect.expect(await locator.isEditable()).toBeFalsy()
        : playwrightExpect.expect(await locator.isEditable()).toBeTruthy();
      break;
    case Actionable.ToBeEnabled:
      negative
        ? playwrightExpect.expect(await locator.isEnabled()).toBeFalsy()
        : playwrightExpect.expect(await locator.isEnabled()).toBeTruthy();
      break;
    case Actionable.ToBeHidden:
      negative
        ? playwrightExpect.expect(await locator.isHidden()).toBeFalsy()
        : playwrightExpect.expect(await locator.isHidden()).toBeTruthy();
      break;
    case Actionable.ToBeVisible:
      negative
        ? playwrightExpect.expect(await locator.isVisible()).toBeFalsy()
        : playwrightExpect.expect(await locator.isVisible()).toBeTruthy();
      break;
    default:
      console.log('HardPass');
  }
};
