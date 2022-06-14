import { Actionable, LocatorOptions } from '../utils/uiActions';

export interface ElementOrFragmentProps<T> {
  /**
   * waitForNetworkResponseAfter
   * * This method will add a wait logic that will be executed after what follows
   * @param urlPath URL path as string
   * @param status Response status code to be expected
   */
  waitForNetworkResponseAfter(urlPath: string, status?: number): T;

  /**
   * click
   * * A method that is used to click on an element.
   * @param options Locator options Interface
   */
  click(options?: LocatorOptions): Promise<T>;

  /**
   * dispatchEvent
   * * A method that is used to dispatch an event on a page.
   * @param type Event type
   * @param options Locator options Interface
   */
  dispatchEvent(type: string, options?: LocatorOptions): Promise<T>;

  /**
   * dblclick
   * * A method that is used to double click on an element.
   * @param options Locator options Interface
   */
  dblclick(options?: LocatorOptions): Promise<T>;

  /**
   * check
   * * A method that is checking a checkbox.
   * @param options Locator options Interface
   */
  check(options?: LocatorOptions): Promise<T>;

  /**
   * uncheck
   * * A function that is unchecking the checkbox and/or then waiting for the network response
   * @param options Locator options Interface
   */
  uncheck(options?: LocatorOptions): Promise<T>;

  /**
   * typeIn
   * * A function that is typing in the text and/or then waiting for the network response.
   * @param text The text to be entered in the text box
   * @param options Locator options Interface
   */
  typeIn(text: string, options?: LocatorOptions): Promise<T>;

  /**
   * pressKey
   * * A function that is press a key on element and/or then waiting for the network response.
   * @param text The Key to be pressed
   * @param options Locator options Interface
   */
  pressKey(text: string, options?: LocatorOptions): Promise<T>;

  /**
   * verifyActionable
   * * To check few actionables on a web element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  verifyActionable(
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<T>;

  /**
   * verifyNotActionable
   * * To check few actionables on a web element
   * @param actionable Actionable enum to set a Actionable event on ELement
   * @param options LocatorOptions - Interface
   */
  verifyNotActionable(
    actionable: Actionable,
    options?: LocatorOptions
  ): Promise<T>;
}

export interface GenericExpectProps<T> {
  /**
   * toHaveLength
   * * To check if the object/array to have expected length
   * @param object The Object/Array to checked for length
   * @param expected Expected Length of the Object/Array
   * @param message The Message to be used on expect
   */
  toHaveLength(object: unknown, expected: number, message?: string): T;

  /**
   * toHaveProperty
   * * To check if the object/array to have expected property/key
   * @param object The Object/Array to checked for length
   * @param keyPath The property/key of an object
   * @param value The expected value of key/property
   * @param message The Message to be used on expect
   */
  toHaveProperty(
    object: unknown,
    keyPath: string | Array<string>,
    value?: unknown,
    message?: string
  ): T;

  /**
   * toBe
   * * To check if the actual is same as expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  toBe(actual: unknown, expected: unknown, message?: string): T;

  /**
   * toEqual
   * * To check if the actual is same as expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  toEqual(actual: unknown, expected: unknown, message?: string): T;

  /**
   * toBeFalsy
   * * To check if the actual data is false
   * @param actual The actual data to be checked
   * @param message The Message to be used on expect
   */
  toBeFalsy(actual: unknown, message?: string): T;

  /**
   * toBeTruthy
   * * To check if the actual data is true
   * @param actual The actual data to be checked
   * @param message The Message to be used on expect
   */
  toBeTruthy(actual: unknown, message?: string): T;

  /**
   * toBeCloseTo
   * * To check if the actual data is as close to expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param numDigits The expected data to close to match
   * @param message The Message to be used on expect
   */
  toBeCloseTo(
    actual: unknown,
    expected: number,
    numDigits?: number,
    message?: string
  ): T;

  /**
   * toBeGreaterThan
   * * To check if the actual data is greater than expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  toBeGreaterThan(
    actual: unknown,
    expected: number | bigint,
    message?: string
  ): T;

  /**
   * toBeGreaterThanOrEqual
   * * To check if the actual data is greater than or equal to expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  toBeGreaterThanOrEqual(
    actual: unknown,
    expected: number | bigint,
    message?: string
  ): T;

  /**
   * toBeLessThan
   * * To check if the actual data is less than expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  toBeLessThan(actual: unknown, expected: number | bigint, message?: string): T;

  /**
   * toBeLessThanOrEqual
   * * To check if the actual data is less than or equal to expected
   * @param actual The actual data to be checked
   * @param expected The expected data to be checked
   * @param message The Message to be used on expect
   */
  toBeLessThanOrEqual(
    actual: unknown,
    expected: number | bigint,
    message?: string
  ): T;

  /**
   * toBeUndefined
   * * To check if the actual data is undefined
   * @param actual The actual data to be checked
   * @param message The Message to be used on expect
   */
  toBeUndefined(actual: unknown, message?: string): T;

  /**
   * toContain
   * * To check if the actual data to contain expected
   * @param actual The actual data to be checked
   * @param expected The actual data to be checked
   * @param message The Message to be used on expect
   */
  toContain(actual: unknown, expected: unknown, message?: string): T;
}

export interface LocatorExpectProps<T> {
  /**
   * toBeEmpty
   * * To check if the Element is empty or has no text
   * @param message The message to be shown on expect
   */
  toBeEmpty(message?: string): Promise<T>;

  /**
   * toHaveText
   * * To check if the Element is has the expected test
   * @param expected The Expected Text in the element
   * @param message The message to be shown on expect
   */
  toHaveText(
    expected: string | RegExp | Array<string | RegExp>,
    message?: string
  ): Promise<T>;

  /**
   * toHaveValue
   * * To check if the Element is has the expected input value
   * @param value The Expected value in the element
   * @param message The message to be shown on expect
   */
  toHaveValue(value: string | RegExp, message?: string): Promise<T>;

  /**
   * toHaveAttribute
   * * To check if the Element is has the expected attribute and value
   * @param name The Expected name of attribute in the element
   * @param value The Expected value of attribute in the element
   * @param message The message to be shown on expect
   */
  toHaveAttribute(
    name: string,
    value: string | RegExp,
    message?: string
  ): Promise<T>;

  /**
   * toHaveCSS
   * * To check if the Element is has the expected css attribute and value
   * @param name The Expected name of  CSS attribute in the element
   * @param value The Expected value of CSS attribute in the element
   * @param message The message to be shown on expect
   */
  toHaveCSS(name: string, value: string | RegExp, message?: string): Promise<T>;

  /**
   * toHaveClass
   * * To check if the Element is has the expected class
   * @param expected The Expected class in the element
   * @param message The message to be shown on expect
   */
  toHaveClass(
    expected: string | RegExp | Array<string | RegExp>,
    message?: string
  ): Promise<T>;

  /**
   * toHaveCount
   * * To check if the Locator resolves to expected number of elements
   * @param count The count expected to be found - as DOM nodes
   * @param message The message to be shown on expect
   */
  toHaveCount(count: number, message?: string): Promise<T>;

  /**
   * toContainText
   * * To check if the element contains expected text
   * @param expected The expected part of text to be found
   * @param message The message to be shown on expect
   */
  toContainText(
    expected: string | RegExp | (string | RegExp)[],
    message?: string
  ): Promise<T>;

  /**
   * toHaveId
   * * To check if the element has expected ID
   * @param id The expected ID in web Element
   * @param message The message to be shown on expect
   */
  toHaveId(id: string | RegExp, message?: string): Promise<T>;
}

export interface PageExpectProps<T> {
  /**
   * toBeEmpty
   * * To check if the Element is empty or has no text
   * @param locator The locator for the element
   * @param message The message to be shown on expect
   */
  toBeEmpty(locator: string, message?: string): Promise<T>;

  /**
   * toHaveText
   * * To check if the Element is has the expected test
   * @param locator The locator for the element
   * @param expected The Expected Text in the element
   * @param message The message to be shown on expect
   */
  toHaveText(
    locator: string,
    expected: string | RegExp | Array<string | RegExp>,
    message?: string
  ): Promise<T>;

  /**
   * toHaveValue
   * * To check if the Element is has the expected input value
   * @param locator The locator for the element
   * @param value The Expected value in the element
   * @param message The message to be shown on expect
   */
  toHaveValue(
    locator: string,
    value: string | RegExp,
    message?: string
  ): Promise<T>;

  /**
   * toHaveAttribute
   * * To check if the Element is has the expected attribute and value
   * @param locator The locator for the element
   * @param name The Expected name of attribute in the element
   * @param value The Expected value of attribute in the element
   * @param message The message to be shown on expect
   */
  toHaveAttribute(
    locator: string,
    name: string,
    value: string | RegExp,
    message?: string
  ): Promise<T>;

  /**
   * toHaveCSS
   * * To check if the Element is has the expected css attribute and value
   * @param locator The locator for the element
   * @param name The Expected name of  CSS attribute in the element
   * @param value The Expected value of CSS attribute in the element
   * @param message The message to be shown on expect
   */
  toHaveCSS(
    locator: string,
    name: string,
    value: string | RegExp,
    message?: string
  ): Promise<T>;

  /**
   * toHaveClass
   * * To check if the Element is has the expected class
   * @param locator The locator for the element
   * @param expected The Expected class in the element
   * @param message The message to be shown on expect
   */
  toHaveClass(
    locator: string,
    expected: string | RegExp | Array<string | RegExp>,
    message?: string
  ): Promise<T>;

  /**
   * toHaveCount
   * * To check if the Locator resolves to expected number of elements
   * @param locator The locator for the element
   * @param count The count expected to be found - as DOM nodes
   * @param message The message to be shown on expect
   */
  toHaveCount(locator: string, count: number, message?: string): Promise<T>;

  /**
   * toContainText
   * * To check if the element contains expected text
   * @param locator The locator for the element
   * @param expected The expected part of text to be found
   * @param message The message to be shown on expect
   */
  toContainText(
    locator: string,
    expected: string | RegExp | (string | RegExp)[],
    message?: string
  ): Promise<T>;

  /**
   * toHaveId
   * * To check if the element has expected ID
   * @param locator The locator for the element
   * @param id The expected ID in web Element
   * @param message The message to be shown on expect
   */
  toHaveId(locator: string, id: string | RegExp, message?: string): Promise<T>;
}
