import { playwrightPage, playwrightPageLocator } from '../utils/fixtureHooks';
import { Actionable } from '../utils/uiActions';
import { GenericExpect, PageLocatorExpect } from '../utils/uiAssertions';
import { ElementOrFragmentProps } from './generic';

export interface LocatorFragmentProps
  extends ElementOrFragmentProps<LocatorFragmentProps> {
  pageLocatorExpect: PageLocatorExpect;
  search(text: string): Promise<LocatorFragmentProps>;
  typeIn(text: string): Promise<LocatorFragmentProps>;
  findInLocator(locator: string): LocatorFragmentProps;
  findNth(nth: number, locator: string): LocatorFragmentProps;
  findFirst(locator: string): LocatorFragmentProps;
  assert(): PageLocatorExpect;
}

export class LocatorFragment implements LocatorFragmentProps {
  public pageLocatorExpect: PageLocatorExpect;
  public genericExpect: GenericExpect;
  constructor() {
    this.pageLocatorExpect = new PageLocatorExpect();
    this.genericExpect = new GenericExpect();
  }
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
  public async search(text: string): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.type(text);
    return this;
  }
  public async typeIn(text: string): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.type(text);
    return this;
  }
  public findInLocator(locator: string): LocatorFragmentProps {
    playwrightPage.find(locator, playwrightPageLocator.locator);
    return this;
  }
  public findNth(nth: number, locator: string): LocatorFragmentProps {
    playwrightPage.findNth(nth, locator);
    return this;
  }
  public findFirst(locator: string): LocatorFragmentProps {
    playwrightPage.findFirst(locator);
    return this;
  }
  public async click(): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.click();
    return this;
  }
  public async dispatchEvent(type: string): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.dispatchEvent(type);
    return this;
  }
  public async dblclick(): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.dblclick();
    return this;
  }
  public async check(): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.check();
    return this;
  }
  public async uncheck(): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.uncheck();
    return this;
  }
  public async pressKey(text: string): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.press(text);
    return this;
  }
  public async verifyActionable(
    actionable: Actionable
  ): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.verifyActionable(actionable);
    return this;
  }
  public async verifyNotActionable(
    actionable: Actionable
  ): Promise<LocatorFragmentProps> {
    await playwrightPageLocator.verifyNotActionable(actionable);
    return this;
  }
  public assert(): PageLocatorExpect {
    return this.pageLocatorExpect;
  }
}
