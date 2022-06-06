import { Expect } from '@playwright/test';
import { GenericExpectProps, LocatorExpectProps } from '../web/generic';
import { ExpectGenericCoreCalls } from './coreCalls';
import { playwrightPageLocator } from './fixtureHooks';

export interface PlaywrightExpectProps {
  expect: Expect;
}

export class PlaywrightExpect implements PlaywrightExpectProps {
  public expect: Expect;
  constructor(expect: Expect) {
    this.expect = expect;
  }
}

export const usePlaywrightExpect = (expect: Expect): PlaywrightExpectProps => {
  const returnObject: PlaywrightExpectProps = new PlaywrightExpect(expect);

  const handler = {};
  return new Proxy(returnObject, handler) as PlaywrightExpectProps;
};

export class PageLocatorExpect implements LocatorExpectProps<void> {
  public not(): PageLocatorExpect {
    playwrightPageLocator.not();
    return this;
  }
  public async toBeEmpty(): Promise<void> {
    await playwrightPageLocator.toBeEmpty();
  }
  public async toHaveText(
    expected: string | RegExp | (string | RegExp)[]
  ): Promise<void> {
    await playwrightPageLocator.toHaveText(expected);
  }
  public async toHaveValue(value: string | RegExp): Promise<void> {
    await playwrightPageLocator.toHaveValue(value);
  }
  public async toHaveAttribute(
    name: string,
    value: string | RegExp
  ): Promise<void> {
    await playwrightPageLocator.toHaveAttribute(name, value);
  }
  public async toHaveCSS(name: string, value: string | RegExp): Promise<void> {
    await playwrightPageLocator.toHaveCSS(name, value);
  }
  public async toHaveClass(
    expected: string | RegExp | (string | RegExp)[]
  ): Promise<void> {
    await playwrightPageLocator.toHaveClass(expected);
  }
  public async toHaveCount(count: number): Promise<void> {
    await playwrightPageLocator.toHaveCount(count);
  }
  public async toContainText(
    expected: string | RegExp | (string | RegExp)[]
  ): Promise<void> {
    await playwrightPageLocator.toContainText(expected);
  }
  public async toHaveId(id: string | RegExp): Promise<void> {
    await playwrightPageLocator.toHaveId(id);
  }
}

export class GenericExpect implements GenericExpectProps<void> {
  public not(): GenericExpect {
    ExpectGenericCoreCalls.negativeAssertion =
      !ExpectGenericCoreCalls.negativeAssertion;
    return this;
  }
  public toHaveLength(object: unknown, expected: number): void {
    ExpectGenericCoreCalls.toHaveLength(object, expected);
  }
  public toHaveProperty(
    object: unknown,
    keyPath: string | string[],
    value?: unknown
  ): void {
    ExpectGenericCoreCalls.toHaveProperty(object, keyPath, value);
  }
  public toBe(actual: unknown, expected: unknown): void {
    ExpectGenericCoreCalls.toBe(actual, expected);
  }
  public toEqual(actual: unknown, expected: unknown): void {
    ExpectGenericCoreCalls.toEqual(actual, expected);
  }
  public toBeFalsy(actual: unknown): void {
    ExpectGenericCoreCalls.toBeFalsy(actual);
  }
  public toBeTruthy(actual: unknown): void {
    ExpectGenericCoreCalls.toBeTruthy(actual);
  }
  public toBeCloseTo(
    actual: unknown,
    expected: number,
    numDigits?: number
  ): void {
    ExpectGenericCoreCalls.toBeCloseTo(actual, expected, numDigits);
  }
  public toBeGreaterThan(actual: unknown, expected: number | bigint): void {
    ExpectGenericCoreCalls.toBeGreaterThan(actual, expected);
  }
  public toBeLessThan(actual: unknown, expected: number | bigint): void {
    ExpectGenericCoreCalls.toBeLessThan(actual, expected);
  }
  public toBeLessThanOrEqual(actual: unknown, expected: number | bigint): void {
    ExpectGenericCoreCalls.toBeLessThanOrEqual(actual, expected);
  }
  public toBeUndefined(actual: unknown): void {
    ExpectGenericCoreCalls.toBeUndefined(actual);
  }
  public toContain(actual: unknown, expected: unknown): void {
    ExpectGenericCoreCalls.toContain(actual, expected);
  }
}
