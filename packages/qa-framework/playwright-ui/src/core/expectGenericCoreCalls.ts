import { playwrightExpect } from '../utils/fixtureHooks';

/* The above code is a generic class which is used to call the playwright expect methods but its all generic. */
export abstract class ExpectGenericCoreCalls {
  public static negativeAssertion: boolean = false;

  /**
   * toHaveLength
   * * To check if the object/array to have expected length
   * @param object The Object/Array to checked for length
   * @param expected Expected Length of the Object/Array
   * @param message The Message to be used on expect
   */
  public static toHaveLength = (
    object: unknown,
    expected: number,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(object, message).not.toHaveLength(expected)
      : playwrightExpect.expect(object, message).toHaveLength(expected);
    ExpectGenericCoreCalls.negativeAssertion = false;
  };

  /**
   * toHaveProperty
   * * To check if the object/array to have expected property/key
   * @param object The Object/Array to checked for length
   * @param keyPath The property/key of an object
   * @param value The expected value of key/property
   * @param message The Message to be used on expect
   */
  public static toHaveProperty = (
    object: unknown,
    keyPath: string | Array<string>,
    value?: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect
          .expect(object, message)
          .not.toHaveProperty(keyPath, value)
      : playwrightExpect.expect(object, message).toHaveProperty(keyPath, value);
    ExpectGenericCoreCalls.negativeAssertion = false;
  };

  /**
   * toBe
   * * To check if the actual is same as expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public static toBe = (
    actual: unknown,
    expected: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBe(expected)
      : playwrightExpect.expect(actual, message).toBe(expected);
    ExpectGenericCoreCalls.negativeAssertion = false;
  };

  /**
   * toEqual
   * * To check if the actual is same as expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public static toEqual = (
    actual: unknown,
    expected: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toEqual(expected)
      : playwrightExpect.expect(actual, message).toEqual(expected);
    ExpectGenericCoreCalls.negativeAssertion = false;
  };

  /**
   * toBeFalsy
   * * To check if the actual data is false
   * @param actual The actual data to be checked
   * @param message The Message to be used on expect
   */
  public static toBeFalsy = (
    actual: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeFalsy()
      : playwrightExpect.expect(actual, message).toBeFalsy();
    ExpectGenericCoreCalls.negativeAssertion = false;
  };

  /**
   * toBeTruthy
   * * To check if the actual data is true
   * @param actual The actual data to be checked
   * @param message The Message to be used on expect
   */
  public static toBeTruthy = (
    actual: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeTruthy()
      : playwrightExpect.expect(actual, message).toBeTruthy();
    ExpectGenericCoreCalls.negativeAssertion = false;
  };

  /**
   * toBeCloseTo
   * * To check if the actual data is as close to expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param numDigits The expected data to close to match
   * @param message The Message to be used on expect
   */
  public static toBeCloseTo = (
    actual: unknown,
    expected: number,
    numDigits?: number,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect
          .expect(actual, message)
          .not.toBeCloseTo(expected, numDigits)
      : playwrightExpect
          .expect(actual, message)
          .toBeCloseTo(expected, numDigits);
    ExpectGenericCoreCalls.negativeAssertion = false;
  };

  /**
   * toBeGreaterThan
   * * To check if the actual data is greater than expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public static toBeGreaterThan = (
    actual: unknown,
    expected: number | bigint,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeGreaterThan(expected)
      : playwrightExpect.expect(actual, message).toBeGreaterThan(expected);
    ExpectGenericCoreCalls.negativeAssertion = false;
  };

  /**
   * toBeGreaterThanOrEqual
   * * To check if the actual data is greater than or equal to expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public static toBeGreaterThanOrEqual = (
    actual: unknown,
    expected: number | bigint,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect
          .expect(actual, message)
          .not.toBeGreaterThanOrEqual(expected)
      : playwrightExpect
          .expect(actual, message)
          .toBeGreaterThanOrEqual(expected);
    ExpectGenericCoreCalls.negativeAssertion = false;
  };

  /**
   * toBeLessThan
   * * To check if the actual data is less than expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public static toBeLessThan = (
    actual: unknown,
    expected: number | bigint,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeLessThan(expected)
      : playwrightExpect.expect(actual, message).toBeLessThan(expected);
    ExpectGenericCoreCalls.negativeAssertion = false;
  };

  /**
   * toBeLessThanOrEqual
   * * To check if the actual data is less than or equal to expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  public static toBeLessThanOrEqual = (
    actual: unknown,
    expected: number | bigint,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect
          .expect(actual, message)
          .not.toBeLessThanOrEqual(expected)
      : playwrightExpect.expect(actual, message).toBeLessThanOrEqual(expected);
    ExpectGenericCoreCalls.negativeAssertion = false;
  };

  /**
   * toBeUndefined
   * * To check if the actual data is undefined
   * @param actual The actual data to be checked
   * @param message The Message to be used on expect
   */
  public static toBeUndefined = (
    actual: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toBeUndefined()
      : playwrightExpect.expect(actual, message).toBeUndefined();
    ExpectGenericCoreCalls.negativeAssertion = false;
  };

  /**
   * toContain
   * * To check if the actual data to contain expected
   * @param actual The actual data to be checked
   * @param expected The actual data to be checked
   * @param message The Message to be used on expect
   */
  public static toContain = (
    actual: unknown,
    expected: unknown,
    message?: string | undefined
  ): void => {
    ExpectGenericCoreCalls.negativeAssertion
      ? playwrightExpect.expect(actual, message).not.toContain(expected)
      : playwrightExpect.expect(actual, message).toContain(expected);
    ExpectGenericCoreCalls.negativeAssertion = false;
  };
}
