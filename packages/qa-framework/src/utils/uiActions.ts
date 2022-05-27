import { Locator, Page } from '@playwright/test';
import { LocatorExpectProps, PageExpectProps } from '../web/generic';
import { URLProps } from '../web/webFragment';
import { PageCoreCalls, LocatorCoreCalls } from './coreCalls';
import { NetworkIdleProps, waitForNetworkIdle } from './waitActions';

export interface PlaywrightPageProps extends PageExpectProps<void> {
  page: Page;
  goto(urlProps: URLProps): Promise<void>;
  getTitle(): Promise<string>;
  reload(): Promise<void>;
  goBack(): Promise<void>;
  waitForPageLoad(): Promise<void>;
  waitForNetworkResponseAfter(urlPath: string, status?: number): void;
  click(selector: string): Promise<void>;
  dispatchEvent(selector: string, type: string): Promise<void>;
  dblclick(selector: string): Promise<void>;
  check(selector: string): Promise<void>;
  uncheck(selector: string): Promise<void>;
  type(selector: string, text: string): Promise<void>;
  find(locator: string, baseLocator?: Locator): PlaywrightPageLocator;
  findFirst(locator: string): PlaywrightPageLocator;
  findNth(nth: number, locator: string): PlaywrightPageLocator;
  verifyActionable(locator: string, actionable: Actionable): Promise<void>;
  verifyNotActionable(locator: string, actionable: Actionable): Promise<void>;
  not(): void;
}

export enum Actionable {
  ToBeChecked,
  ToBeDisabled,
  ToBeEditable,
  ToBeEnabled,
  ToBeHidden,
  ToBeVisible,
}

export interface PageOptions {
  timeout?: number;
  state?: 'networkidle' | 'load' | 'domcontentloaded' | 'commit';
}

export interface FindOptions {
  has?: Locator;
  hasText?: string | RegExp;
}

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

export class PlaywrightPage implements PlaywrightPageProps {
  public page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  public async goto(urlProps: URLProps): Promise<void> {
    await PageCoreCalls.goto(urlProps);
  }
  public async getTitle(): Promise<string> {
    return await PageCoreCalls.getTitle();
  }
  public async reload(): Promise<void> {
    await PageCoreCalls.reload();
  }
  public async goBack(): Promise<void> {
    await PageCoreCalls.goBack();
  }
  public async waitForPageLoad(): Promise<void> {
    await PageCoreCalls.waitForPageLoad();
  }
  public waitForNetworkResponseAfter(urlPath: string, status?: number): void {
    LocatorCoreCalls.waitForNetworkResponseAfter(urlPath, status && status);
  }
  public async click(locator: string, options?: LocatorOptions): Promise<void> {
    await PageCoreCalls.click(locator, options && options);
  }
  public async dispatchEvent(
    locator: string,
    type: string,
    options?: LocatorOptions
  ): Promise<void> {
    await PageCoreCalls.dispatchEvent(locator, type, options && options);
  }
  public async dblclick(
    locator: string,
    options?: LocatorOptions
  ): Promise<void> {
    await PageCoreCalls.dblclick(locator, options && options);
  }
  public async check(locator: string, options?: LocatorOptions): Promise<void> {
    await PageCoreCalls.check(locator, options && options);
  }
  public async uncheck(
    locator: string,
    options?: LocatorOptions
  ): Promise<void> {
    await PageCoreCalls.uncheck(locator, options && options);
  }
  public async type(
    locator: string,
    text: string,
    options?: LocatorOptions
  ): Promise<void> {
    await PageCoreCalls.type(locator, text, options && options);
  }
  public find(locator: string, baseLocator?: Locator): PlaywrightPageLocator {
    return PageCoreCalls.find(locator, baseLocator && baseLocator);
  }
  public findFirst(locator: string): PlaywrightPageLocator {
    return PageCoreCalls.findFirst(locator);
  }
  public findNth(nth: number, locator: string): PlaywrightPageLocator {
    return PageCoreCalls.findNth(nth, locator);
  }
  public async verifyActionable(
    locator: string,
    actionable: Actionable
  ): Promise<void> {
    await PageCoreCalls.verifyActionable(locator, actionable);
  }
  public async verifyNotActionable(
    locator: string,
    actionable: Actionable
  ): Promise<void> {
    await PageCoreCalls.verifyNotActionable(locator, actionable);
  }

  public not(): void {
    PageCoreCalls.negativeAssertion = true;
  }
  public async toBeEmpty(locator: string): Promise<void> {
    await PageCoreCalls.toBeEmpty(locator);
  }
  public async toHaveText(
    locator: string,
    expected: string | RegExp | (string | RegExp)[]
  ): Promise<void> {
    await PageCoreCalls.toHaveText(locator, expected);
  }
  public async toHaveValue(
    locator: string,
    value: string | RegExp
  ): Promise<void> {
    await PageCoreCalls.toHaveValue(locator, value);
  }
  public async toHaveAttribute(
    locator: string,
    name: string,
    value: string | RegExp
  ): Promise<void> {
    await PageCoreCalls.toHaveAttribute(locator, name, value);
  }
  public async toHaveCSS(
    locator: string,
    name: string,
    value: string | RegExp
  ): Promise<void> {
    await PageCoreCalls.toHaveCSS(locator, name, value);
  }
  public async toHaveClass(
    locator: string,
    expected: string | RegExp | (string | RegExp)[]
  ): Promise<void> {
    await PageCoreCalls.toHaveClass(locator, expected);
  }
  public async toHaveCount(locator: string, count: number): Promise<void> {
    await PageCoreCalls.toHaveCount(locator, count);
  }
  public async toContainText(
    locator: string,
    expected: string | RegExp | (string | RegExp)[]
  ): Promise<void> {
    await PageCoreCalls.toContainText(locator, expected);
  }
  public async toHaveId(locator: string, id: string | RegExp): Promise<void> {
    await PageCoreCalls.toHaveId(locator, id);
  }
}

export const usePlaywrightPage = (page: Page): PlaywrightPageProps => {
  const returnObject: PlaywrightPageProps = new PlaywrightPage(page);

  const handler = {};
  return new Proxy(returnObject, handler) as PlaywrightPageProps;
};

export interface PlaywrightPageLocatorProps extends LocatorExpectProps<void> {
  locator: Locator;
  options: LocatorOptions | undefined;
  waitForNetworkResponseAfter(urlPath: string, status?: number): void;
  click(): Promise<void>;
  dispatchEvent(type: string): Promise<void>;
  dblclick(): Promise<void>;
  check(): Promise<void>;
  uncheck(): Promise<void>;
  type(text: string): Promise<void>;
  press(text: string): Promise<void>;
  find(locator: string): PlaywrightPageLocator;
  findFirst(): PlaywrightPageLocator;
  findNth(nth: number): PlaywrightPageLocator;
  verifyActionable(actionable: Actionable): Promise<void>;
  verifyNotActionable(actionable: Actionable): Promise<void>;
  not(): void;
}

export class PlaywrightPageLocator implements PlaywrightPageLocatorProps {
  public locator: Locator;
  public options: LocatorOptions | undefined;
  constructor(locator: Locator, options?: LocatorOptions) {
    this.locator = locator;
    this.options = options && options;
  }
  public waitForNetworkResponseAfter(urlPath: string, status?: number): void {
    LocatorCoreCalls.waitForNetworkResponseAfter(urlPath, status && status);
  }
  public async click(): Promise<void> {
    await LocatorCoreCalls.click(this.locator, this.options && this.options);
  }
  public async dispatchEvent(type: string): Promise<void> {
    await LocatorCoreCalls.dispatchEvent(
      this.locator,
      type,
      this.options && this.options
    );
  }
  public async dblclick(): Promise<void> {
    await LocatorCoreCalls.dblclick(this.locator, this.options && this.options);
  }
  public async check(options?: LocatorOptions): Promise<void> {
    await LocatorCoreCalls.check(this.locator, options && options);
  }
  public async uncheck(options?: LocatorOptions): Promise<void> {
    await LocatorCoreCalls.uncheck(this.locator, options && options);
  }
  public async press(text: string): Promise<void> {
    await LocatorCoreCalls.press(
      this.locator,
      text,
      this.options && this.options
    );
  }
  public async type(text: string): Promise<void> {
    await LocatorCoreCalls.type(
      this.locator,
      text,
      this.options && this.options
    );
  }
  public find(locator: string): PlaywrightPageLocator {
    return LocatorCoreCalls.find(locator, this.locator);
  }
  public findFirst(): PlaywrightPageLocator {
    return LocatorCoreCalls.findFirst(this.locator);
  }
  public findNth(nth: number): PlaywrightPageLocator {
    return LocatorCoreCalls.findNth(nth, this.locator);
  }
  public async verifyActionable(actionable: Actionable): Promise<void> {
    await LocatorCoreCalls.verifyActionable(this.locator, actionable);
  }
  public async verifyNotActionable(actionable: Actionable): Promise<void> {
    await LocatorCoreCalls.verifyNotActionable(this.locator, actionable);
  }

  public not(): void {
    LocatorCoreCalls.negativeAssertion = !LocatorCoreCalls.negativeAssertion;
  }
  public async toBeEmpty(): Promise<void> {
    await LocatorCoreCalls.toBeEmpty(this.locator);
  }
  public async toHaveText(
    expected: string | RegExp | (string | RegExp)[]
  ): Promise<void> {
    await LocatorCoreCalls.toHaveText(this.locator, expected);
  }
  public async toHaveValue(value: string | RegExp): Promise<void> {
    await LocatorCoreCalls.toHaveValue(this.locator, value);
  }
  public async toHaveAttribute(
    name: string,
    value: string | RegExp
  ): Promise<void> {
    await LocatorCoreCalls.toHaveAttribute(this.locator, name, value);
  }
  public async toHaveCSS(name: string, value: string | RegExp): Promise<void> {
    await LocatorCoreCalls.toHaveCSS(this.locator, name, value);
  }
  public async toHaveClass(
    expected: string | RegExp | (string | RegExp)[]
  ): Promise<void> {
    await LocatorCoreCalls.toHaveClass(this.locator, expected);
  }
  public async toHaveCount(count: number): Promise<void> {
    await LocatorCoreCalls.toHaveCount(this.locator, count);
  }
  public async toContainText(
    expected: string | RegExp | (string | RegExp)[]
  ): Promise<void> {
    await LocatorCoreCalls.toContainText(this.locator, expected);
  }
  public async toHaveId(id: string | RegExp): Promise<void> {
    await LocatorCoreCalls.toHaveId(this.locator, id);
  }
}

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

export const createFragment = <T extends object>(
  ClassObject: { new (urlProps?: URLProps): T },
  urlProps?: URLProps
) => {
  const handler = {
    construct(target: any, args: any) {
      return new Proxy(new target(...args), {
        get: (target: any, prop: any) => {
          const origMethod = target[prop];
          if (typeof origMethod == 'function') {
            return async function (...args: any[]) {
              let networkIdle = false;
              if (args.length > 0) {
                let arg = args[args.length - 1];
                networkIdle = arg.waitForNetworkIdle && arg.waitForNetworkIdle;
              }
              let result = await Promise.all([
                origMethod.apply(target, args),
                networkIdle && waitForNetworkIdle(),
              ]);
              return result[0];
            };
          } else {
            return origMethod;
          }
        },
      });
    },
  };
  const Fragment = new Proxy(ClassObject, handler);
  return new Fragment(urlProps) as T;
};

export const createFragmentActions = <T extends object>(
  ClassObject: { new (args?: any): T },
  args?: any
) => {
  const handler = {
    construct(target: any, args: any) {
      return new Proxy(new target(...args), {
        get: (target: any, prop: any) => {
          const origMethod = target[prop];
          if (typeof origMethod == 'function') {
            return async function (...args: any[]) {
              let networkIdle = false;
              if (args.length > 0) {
                let arg = args[args.length - 1];
                networkIdle = arg.waitForNetworkIdle && arg.waitForNetworkIdle;
              }
              let result = await Promise.all([
                origMethod.apply(target, args),
                networkIdle && waitForNetworkIdle(),
              ]);
              return result[0];
            };
          } else {
            return origMethod;
          }
        },
      });
    },
  };
  const FragmentActions = new Proxy(ClassObject, handler);
  return new FragmentActions(args) as T;
};
