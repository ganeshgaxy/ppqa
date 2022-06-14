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

/**
 * usePlaywrightExpect
 * To use the playwright expect with Proxy traps
 * @param expect Playwright Expect to be used
 * @returns 
 */
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

  /**
   * toBeEmpty
   * * To check if the Element is empty or has no text
   * @param message The message to be shown on expect
   */
  public async toBeEmpty(message?: string): Promise<void> {
    await playwrightPageLocator.toBeEmpty(message);
  }

  /**
   * toHaveText
   * * To check if the Element is has the expected test
   * @param expected The Expected Text in the element
   * @param message The message to be shown on expect
   */
  public async toHaveText(
    expected: string | RegExp | (string | RegExp)[],
    message?: string
  ): Promise<void> {
    await playwrightPageLocator.toHaveText(expected, message);
  }

  /**
   * toHaveValue
   * * To check if the Element is has the expected input value
   * @param value The Expected value in the element
   * @param message The message to be shown on expect
   */
  public async toHaveValue(
    value: string | RegExp,
    message?: string
  ): Promise<void> {
    await playwrightPageLocator.toHaveValue(value, message);
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
    message?: string
  ): Promise<void> {
    await playwrightPageLocator.toHaveAttribute(name, value, message);
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
    message?: string
  ): Promise<void> {
    await playwrightPageLocator.toHaveCSS(name, value, message);
  }

  /**
   * toHaveClass
   * * To check if the Element is has the expected class
   * @param expected The Expected class in the element
   * @param message The message to be shown on expect
   */
  public async toHaveClass(
    expected: string | RegExp | (string | RegExp)[],
    message?: string
  ): Promise<void> {
    await playwrightPageLocator.toHaveClass(expected, message);
  }

  /**
   * toHaveCount
   * * To check if the Locator resolves to expected number of elements
   * @param count The count expected to be found - as DOM nodes
   * @param message The message to be shown on expect
   */
  public async toHaveCount(count: number, message?: string): Promise<void> {
    await playwrightPageLocator.toHaveCount(count, message);
  }

  /**
   * toContainText
   * * To check if the element contains expected text
   * @param expected The expected part of text to be found
   * @param message The message to be shown on expect
   */
  public async toContainText(
    expected: string | RegExp | (string | RegExp)[],
    message?: string
  ): Promise<void> {
    await playwrightPageLocator.toContainText(expected, message);
  }

  /**
   * toHaveId
   * * To check if the element has expected ID
   * @param id The expected ID in web Element
   * @param message The message to be shown on expect
   */
  public async toHaveId(id: string | RegExp, message?: string): Promise<void> {
    await playwrightPageLocator.toHaveId(id, message);
  }
}

export class GenericExpect implements GenericExpectProps<void> {
  public not(): GenericExpect {
    ExpectGenericCoreCalls.negativeAssertion =
      !ExpectGenericCoreCalls.negativeAssertion;
    return this;
  }

  /**
   * toHaveLength
   * * To check if the object/array to have expected length
   * @param object The Object/Array to checked for length
   * @param expected Expected Length of the Object/Array
   * @param message The Message to be used on expect
   */
  public toHaveLength(
    object: unknown,
    expected: number,
    message?: string
  ): void {
    ExpectGenericCoreCalls.toHaveLength(object, expected, message);
  }

  /**
   * toHaveProperty
   * * To check if the object/array to have expected property/key
   * @param object The Object/Array to checked for length
   * @param keyPath The property/key of an object
   * @param value The expected value of key/property
   * @param message The Message to be used on expect
   */
  public toHaveProperty(
    object: unknown,
    keyPath: string | string[],
    value?: unknown,
    message?: string
  ): void {
    ExpectGenericCoreCalls.toHaveProperty(object, keyPath, value, message);
  }

  /**
   * toBe
   * * To check if the actual is same as expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public toBe(actual: unknown, expected: unknown, message?: string): void {
    ExpectGenericCoreCalls.toBe(actual, expected, message);
  }

  /**
   * toEqual
   * * To check if the actual is same as expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public toEqual(actual: unknown, expected: unknown, message?: string): void {
    ExpectGenericCoreCalls.toEqual(actual, expected, message);
  }

  /**
   * toBeFalsy
   * * To check if the actual data is false
   * @param actual The actual data to be checked
   * @param message The Message to be used on expect
   */
  public toBeFalsy(actual: unknown, message?: string): void {
    ExpectGenericCoreCalls.toBeFalsy(actual, message);
  }

  /**
   * toBeTruthy
   * * To check if the actual data is true
   * @param actual The actual data to be checked
   * @param message The Message to be used on expect
   */
  public toBeTruthy(actual: unknown, message?: string): void {
    ExpectGenericCoreCalls.toBeTruthy(actual, message);
  }

  /**
   * toBeCloseTo
   * * To check if the actual data is as close to expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param numDigits The expected data to close to match
   * @param message The Message to be used on expect
   */
  public toBeCloseTo(
    actual: unknown,
    expected: number,
    numDigits?: number,
    message?: string
  ): void {
    ExpectGenericCoreCalls.toBeCloseTo(actual, expected, numDigits, message);
  }

  /**
   * toBeGreaterThan
   * * To check if the actual data is greater than expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public toBeGreaterThan(
    actual: unknown,
    expected: number | bigint,
    message?: string
  ): void {
    ExpectGenericCoreCalls.toBeGreaterThan(actual, expected, message);
  }

  /**
   * toBeGreaterThanOrEqual
   * * To check if the actual data is greater than or equal to expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public toBeGreaterThanOrEqual(
    actual: unknown,
    expected: number | bigint,
    message?: string
  ): void {
    ExpectGenericCoreCalls.toBeGreaterThanOrEqual(actual, expected, message);
  }

  /**
   * toBeLessThan
   * * To check if the actual data is less than expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public toBeLessThan(
    actual: unknown,
    expected: number | bigint,
    message?: string
  ): void {
    ExpectGenericCoreCalls.toBeLessThan(actual, expected, message);
  }

  /**
   * toBeLessThanOrEqual
   * * To check if the actual data is less than or equal to expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public toBeLessThanOrEqual(
    actual: unknown,
    expected: number | bigint,
    message?: string
  ): void {
    ExpectGenericCoreCalls.toBeLessThanOrEqual(actual, expected, message);
  }

  /**
   * toBeUndefined
   * * To check if the actual data is undefined
   * @param actual The actual data to be checked
   * @param message The Message to be used on expect
   */
  public toBeUndefined(actual: unknown, message?: string): void {
    ExpectGenericCoreCalls.toBeUndefined(actual, message);
  }

  /**
   * toContain
   * * To check if the actual data to contain expected
   * @param actual The actual data to be checked
   * @param expected The actual data to be checked
   * @param message The Message to be used on expect
   */
  public toContain(actual: unknown, expected: unknown, message?: string): void {
    ExpectGenericCoreCalls.toContain(actual, expected, message);
  }
}
