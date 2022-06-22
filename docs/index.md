 Classes

<dl>
<dt><a href="#ApiURLBuilder">ApiURLBuilder</a></dt>
<dd><p>To Build API URLs</p></dd>
<dt><a href="#WaitLogic">WaitLogic</a></dt>
<dd><p>This class is used to wait for the network to be idle before continuing with the test.
This module cannot be used directly by a test code, but can be provided to be used by Proxy
Check createFragment and createFragmentActions for how it is being used</p></dd>
<dt><a href="#LocatorFragment">LocatorFragment</a></dt>
<dd><p>The LocatorFragment class is a class that can be used to do playwright operations on top of the current locator.</p></dd>
<dt><a href="#WebElement">WebElement</a></dt>
<dd><p>This class can be used to create a WebElement for Dom Nodes and interact with them using the functions in this class
The class is a wrapper for the playwrightPageLocator object. The class is used to create a fluent interface for the playwrightPageLocator object.</p></dd>
<dt><a href="#URLBuilder">URLBuilder</a></dt>
<dd><p>This class is used to build a URLProps object.
This will be used build the URL to be used later to create an URLProps to add WebFragment(WebPage/Component/or any sort)</p></dd>
<dt><a href="#WebFragment">WebFragment</a></dt>
<dd><p>It's a class that contains functions that can be used to interact with the dom nodes in a web page/component/anything by that design</p></dd>
</dl>

 Members

<dl>
<dt><a href="#PlaywrightApi">PlaywrightApi</a> ⇒</dt>
<dd><p>usePlaywrightApi</p>
<ul>
<li>It returns a proxy object that wraps the PlaywrightApi class</li>
</ul></dd>
<dt><a href="#usePlaywrightApi">usePlaywrightApi</a> ⇒</dt>
<dd><p>createApiFragment</p>
<ul>
<li>To create a api fragment actions object with proxy traps</li>
</ul></dd>
<dt><a href="#appInfo">appInfo</a></dt>
<dd><p>The basic appinfo data might be needed for testing the app</p></dd>
<dt><a href="#registerAppUrl">registerAppUrl</a></dt>
<dd><p>It takes an object of type AppInfo and assigns it to the appInfo variable</p></dd>
<dt><a href="#registerAppInfo">registerAppInfo</a></dt>
<dd><p>registerPlaywrightPage</p>
<ul>
<li>To register the page to be used for testing</li>
</ul></dd>
<dt><a href="#registerPlaywrightPage">registerPlaywrightPage</a></dt>
<dd><p>registerPlaywrightExpect</p>
<ul>
<li>To register the expect object to be used for testing</li>
</ul></dd>
<dt><a href="#registerPlaywrightExpect">registerPlaywrightExpect</a></dt>
<dd><p>registerPlaywrightAPI</p>
<ul>
<li>To register the api object to be used for testing</li>
</ul></dd>
<dt><a href="#registerPlaywrightAPI">registerPlaywrightAPI</a></dt>
<dd><p>It registers all the Playwright functions that we'll be using in our tests</p></dd>
<dt><a href="#registerAll">registerAll</a></dt>
<dd><p>registerPlaywrightPageLocator</p>
<ul>
<li>To register the locator to be used for testing</li>
</ul></dd>
<dt><a href="#PlaywrightPage">PlaywrightPage</a> ⇒</dt>
<dd><p>usePlaywrightPage
A method called to initialize the PlaywrightPage with given page</p></dd>
<dt><a href="#PlaywrightPageLocator">PlaywrightPageLocator</a> ⇒</dt>
<dd><p>usePlaywrightPageLocator</p>
<ul>
<li>To use the Playwright Page Locator with proxy</li>
</ul></dd>
<dt><a href="#usePlaywrightPageLocator">usePlaywrightPageLocator</a> ⇒</dt>
<dd><p>createFragment</p>
<ul>
<li>To create a web fragment object with proxy traps</li>
</ul></dd>
<dt><a href="#createFragment">createFragment</a> ⇒</dt>
<dd><p>createFragmentActions</p>
<ul>
<li>To create a web fragment actions object with proxy traps</li>
</ul></dd>
<dt><a href="#PlaywrightExpect">PlaywrightExpect</a> ⇒</dt>
<dd><p>usePlaywrightExpect
To use the playwright expect with Proxy traps</p></dd>
<dt><a href="#WebElement">WebElement</a> ⇒</dt>
<dd><p>useWebElement</p>
<ul>
<li>To create a WebElement for the given props</li>
</ul></dd>
<dt><a href="#WebFragment">WebFragment</a></dt>
<dd><p>This class is a base class for all page objects. It contains functions that return a new instance of the LocatorFragment class.
Use this class to pawn of the actions thats can be done in a web page, primary building actions of the available DOM nodes in a web fragment
This is almost similar to how WebFragment works except this class will not have any actions one can see on page like goBack(), reload(), etc</p></dd>
<dt><a href="#WebFragmentActions">WebFragmentActions</a></dt>
<dd><p>checkPageActionable</p>
<ul>
<li>This function takes in a locator, an actionable, and an optional negative boolean and options</li>
<li>object, and then checks the page for the actionable based on the locator and options.</li>
</ul></dd>
<dt><a href="#checkPageActionable">checkPageActionable</a></dt>
<dd><p>checkLocatorActionable</p>
<ul>
<li>This function takes in a locator, an actionable, and a negative boolean, and then checks the locator</li>
<li>against the actionable, and if the negative boolean is true, it will check the opposite of the</li>
<li>actionable.</li>
</ul></dd>
</dl>

 Functions

<dl>
<dt><a href="#registerAppUrl">registerAppUrl(url)</a></dt>
<dd><p>registerAppUrl</p>
<ul>
<li>To register the base url for testing</li>
</ul></dd>
<dt><a href="#waitForPageNetworkResponse">waitForPageNetworkResponse()</a></dt>
<dd><p>If the WAIT_FOR_NETWORK_RESPONSE property is set, wait for a network response with the specified URL
and status.</p></dd>
<dt><a href="#waitForLocatorNetworkResponse">waitForLocatorNetworkResponse()</a></dt>
<dd><p>If the LocatorCoreCalls.WAIT_FOR_NETWORK_RESPONSE property is set, wait for a network response with
the specified URL and status.</p></dd>
<dt><a href="#waitForNetworkIdle">waitForNetworkIdle(options)</a> ⇒</dt>
<dd><p>This function waits for the network to be idle for a certain amount of time before continuing.</p></dd>
</dl>

<a name="ApiURLBuilder"></a>

 ApiURLBuilder
<p>To Build API URLs</p>

**Kind**: global class  
<a name="WaitLogic"></a>

 WaitLogic
<p>This class is used to wait for the network to be idle before continuing with the test.
This module cannot be used directly by a test code, but can be provided to be used by Proxy
Check createFragment and createFragmentActions for how it is being used</p>

**Kind**: global class  
<a name="LocatorFragment"></a>

 LocatorFragment
<p>The LocatorFragment class is a class that can be used to do playwright operations on top of the current locator.</p>

**Kind**: global class  

* [LocatorFragment](#LocatorFragment)
    * [.waitForNetworkResponseAfter(urlPath, [status])](#LocatorFragment+waitForNetworkResponseAfter) ⇒
    * [.search(text, options)](#LocatorFragment+search) ⇒
    * [.typeIn(text, options)](#LocatorFragment+typeIn) ⇒
    * [.pressKey(text, options)](#LocatorFragment+pressKey) ⇒
    * [.findInLocator(locator, options)](#LocatorFragment+findInLocator) ⇒
    * [.findNth(nth, locator, options)](#LocatorFragment+findNth) ⇒
    * [.findFirst(locator, options)](#LocatorFragment+findFirst) ⇒
    * [.click(options)](#LocatorFragment+click) ⇒
    * [.dispatchEvent(type, options)](#LocatorFragment+dispatchEvent) ⇒
    * [.dblclick(options)](#LocatorFragment+dblclick) ⇒
    * [.check(options)](#LocatorFragment+check) ⇒
    * [.uncheck(options)](#LocatorFragment+uncheck) ⇒
    * [.verifyActionable(actionable, options)](#LocatorFragment+verifyActionable) ⇒
    * [.verifyNotActionable(actionable, options)](#LocatorFragment+verifyNotActionable) ⇒

<a name="LocatorFragment+waitForNetworkResponseAfter"></a>

# locatorFragment.waitForNetworkResponseAfter(urlPath, [status]) ⇒
<p>waitForNetworkResponseAfter</p>
<ul>
<li>Wait for a network response after a given URL path and status.</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| urlPath | <code>string</code> | <p>string - The URL path to wait for.</p> |
| [status] | <code>number</code> | <p>The HTTP status code to wait for.</p> |

<a name="LocatorFragment+search"></a>

# locatorFragment.search(text, options) ⇒
<p>search</p>
<ul>
<li>&quot;Type text into the search box and return the current page object.&quot;</li>
<li>The function is async, so we can use the await keyword</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The LocatorFragment object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | <p>string - the text to search for</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="LocatorFragment+typeIn"></a>

# locatorFragment.typeIn(text, options) ⇒
<p>typeIn</p>
<ul>
<li>Type in the text passed in as a parameter and return the current instance of the class.</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | <p>string - The text to type into the element</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="LocatorFragment+pressKey"></a>

# locatorFragment.pressKey(text, options) ⇒
<p>pressKey</p>
<ul>
<li>This function will press a key on the page and return the locator fragment props.</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | <p>string - The text to type into the element.</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="LocatorFragment+findInLocator"></a>

# locatorFragment.findInLocator(locator, options) ⇒
<p>findInLocator</p>
<ul>
<li>Finds a locator in a locator</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| locator | <code>string</code> | <p>string - the locator you want to find</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="LocatorFragment+findNth"></a>

# locatorFragment.findNth(nth, locator, options) ⇒
<p>findNth</p>
<ul>
<li>&quot;Finds the nth element that matches the locator and returns a new LocatorFragment object.&quot;</li>
<li>The function is called like this:</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| nth | <code>number</code> | <p>number - The nth element to find.</p> |
| locator | <code>string</code> | <p>string - The locator to find the element</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="LocatorFragment+findFirst"></a>

# locatorFragment.findFirst(locator, options) ⇒
<p>findFirst</p>
<ul>
<li>&quot;Finds the first element that matches the locator and returns a new LocatorFragment object.&quot;</li>
<li>The LocatorFragment object is a class that extends the LocatorFragment class</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| locator | <code>string</code> | <p>string - The locator to find the element</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="LocatorFragment+click"></a>

# locatorFragment.click(options) ⇒
<p>click</p>
<ul>
<li>Click on the element and return the LocatorFragment.</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The LocatorFragment object.</p>  

| Param | Description |
| --- | --- |
| options | <p>LocatorOptions - Interface</p> |

<a name="LocatorFragment+dispatchEvent"></a>

# locatorFragment.dispatchEvent(type, options) ⇒
<p>dispatchEvent</p>
<ul>
<li>This function dispatches an event to the element that is currently being located.</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | <p>string - The type of event to dispatch.</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="LocatorFragment+dblclick"></a>

# locatorFragment.dblclick(options) ⇒
<p>dblclick</p>
<ul>
<li>The function dblclick() is a public function that returns a promise of type LocatorFragment.</li>
<li>The function dblclick() is an async function that calls the function dblclick() from the</li>
<li>playwrightPageLocator object.</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The LocatorFragment object.</p>  

| Param | Description |
| --- | --- |
| options | <p>LocatorOptions - Interface</p> |

<a name="LocatorFragment+check"></a>

# locatorFragment.check(options) ⇒
<p>check</p>
<ul>
<li>The check function is a public function that returns a promise of a LocatorFragment object.</li>
<li>The check function is an async function that calls the check function of the playwrightPageLocator</li>
<li>object.</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The LocatorFragment object.</p>  

| Param | Description |
| --- | --- |
| options | <p>LocatorOptions - Interface</p> |

<a name="LocatorFragment+uncheck"></a>

# locatorFragment.uncheck(options) ⇒
<p>uncheck</p>
<ul>
<li>Uncheck the checkbox if it is checked, otherwise do nothing.</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Description |
| --- | --- |
| options | <p>LocatorOptions - Interface</p> |

<a name="LocatorFragment+verifyActionable"></a>

# locatorFragment.verifyActionable(actionable, options) ⇒
<p>verifyActionable</p>
<ul>
<li>Verify that the actionable is present on the page, and return the locator fragment props.</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| actionable | <code>Actionable</code> | <p>Actionable</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="LocatorFragment+verifyNotActionable"></a>

# locatorFragment.verifyNotActionable(actionable, options) ⇒
<p>verifyNotActionable</p>
<ul>
<li>Verify that the element is not actionable.</li>
</ul>

**Kind**: instance method of [<code>LocatorFragment</code>](#LocatorFragment)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| actionable | <code>Actionable</code> | <p>Actionable</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="WebElement"></a>

 WebElement
<p>This class can be used to create a WebElement for Dom Nodes and interact with them using the functions in this class
The class is a wrapper for the playwrightPageLocator object. The class is used to create a fluent interface for the playwrightPageLocator object.</p>

**Kind**: global class  

* [WebElement](#WebElement)
    * [.waitForNetworkResponseAfter(urlPath, [status])](#WebElement+waitForNetworkResponseAfter) ⇒
    * [.search(text, options)](#WebElement+search) ⇒
    * [.typeIn(text, options)](#WebElement+typeIn) ⇒
    * [.pressKey(text, options)](#WebElement+pressKey) ⇒
    * [.findInLocator(locator)](#WebElement+findInLocator) ⇒
    * [.findNth(nth)](#WebElement+findNth) ⇒
    * [.findFirst()](#WebElement+findFirst) ⇒
    * [.click(options)](#WebElement+click) ⇒
    * [.dispatchEvent(type, options)](#WebElement+dispatchEvent) ⇒
    * [.dblclick(options)](#WebElement+dblclick) ⇒
    * [.check(options)](#WebElement+check) ⇒
    * [.uncheck(options)](#WebElement+uncheck) ⇒
    * [.verifyActionable(actionable, options)](#WebElement+verifyActionable) ⇒
    * [.verifyNotActionable(actionable, options)](#WebElement+verifyNotActionable) ⇒

<a name="WebElement+waitForNetworkResponseAfter"></a>

# webElement.waitForNetworkResponseAfter(urlPath, [status]) ⇒
<p>waitForNetworkResponseAfter</p>
<ul>
<li>Wait for a network response after a given URL path and status.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| urlPath | <code>string</code> | <p>string - The URL path to wait for.</p> |
| [status] | <code>number</code> | <p>The HTTP status code to wait for.</p> |

<a name="WebElement+search"></a>

# webElement.search(text, options) ⇒
<p>search</p>
<ul>
<li>&quot;Type text into the search box and return the current page object.&quot;</li>
<li>The function is async, so we can use the await keyword</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The LocatorFragment object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | <p>string - the text to search for</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="WebElement+typeIn"></a>

# webElement.typeIn(text, options) ⇒
<p>typeIn</p>
<ul>
<li>Type in the text passed in as a parameter and return the current instance of the class.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | <p>string - The text to type into the element</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="WebElement+pressKey"></a>

# webElement.pressKey(text, options) ⇒
<p>pressKey</p>
<ul>
<li>This function will press a key on the page and return the locator fragment props.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | <p>string - The text to type into the element.</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="WebElement+findInLocator"></a>

# webElement.findInLocator(locator) ⇒
<p>findInLocator</p>
<ul>
<li>Finds a locator in a locator</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| locator | <code>string</code> | <p>string - the locator you want to find</p> |

<a name="WebElement+findNth"></a>

# webElement.findNth(nth) ⇒
<p>findNth</p>
<ul>
<li>&quot;Finds the nth element that matches the locator and returns a new LocatorFragment object.&quot;</li>
<li>The function is called like this:</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| nth | <code>number</code> | <p>number - The nth element to find.</p> |

<a name="WebElement+findFirst"></a>

# webElement.findFirst() ⇒
<p>findFirst</p>
<ul>
<li>Creating a static method that is called to find the first element.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>PlaywrightPageLocator (this)</p>  
<a name="WebElement+click"></a>

# webElement.click(options) ⇒
<p>click</p>
<ul>
<li>Click on the element and return the LocatorFragment.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The LocatorFragment object.</p>  

| Param | Description |
| --- | --- |
| options | <p>LocatorOptions - Interface</p> |

<a name="WebElement+dispatchEvent"></a>

# webElement.dispatchEvent(type, options) ⇒
<p>dispatchEvent</p>
<ul>
<li>This function dispatches an event to the element that is currently being located.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | <p>string - The type of event to dispatch.</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="WebElement+dblclick"></a>

# webElement.dblclick(options) ⇒
<p>dblclick</p>
<ul>
<li>The function dblclick() is a public function that returns a promise of type LocatorFragment.</li>
<li>The function dblclick() is an async function that calls the function dblclick() from the</li>
<li>playwrightPageLocator object.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The LocatorFragment object.</p>  

| Param | Description |
| --- | --- |
| options | <p>LocatorOptions - Interface</p> |

<a name="WebElement+check"></a>

# webElement.check(options) ⇒
<p>check</p>
<ul>
<li>The check function is a public function that returns a promise of a LocatorFragment object.</li>
<li>The check function is an async function that calls the check function of the playwrightPageLocator</li>
<li>object.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The LocatorFragment object.</p>  

| Param | Description |
| --- | --- |
| options | <p>LocatorOptions - Interface</p> |

<a name="WebElement+uncheck"></a>

# webElement.uncheck(options) ⇒
<p>uncheck</p>
<ul>
<li>Uncheck the checkbox if it is checked, otherwise do nothing.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Description |
| --- | --- |
| options | <p>LocatorOptions - Interface</p> |

<a name="WebElement+verifyActionable"></a>

# webElement.verifyActionable(actionable, options) ⇒
<p>verifyActionable</p>
<ul>
<li>Verify that the actionable is present on the page, and return the locator fragment props.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| actionable | <code>Actionable</code> | <p>Actionable</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="WebElement+verifyNotActionable"></a>

# webElement.verifyNotActionable(actionable, options) ⇒
<p>verifyNotActionable</p>
<ul>
<li>Verify that the element is not actionable.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| actionable | <code>Actionable</code> | <p>Actionable</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="URLBuilder"></a>

 URLBuilder
<p>This class is used to build a URLProps object.
This will be used build the URL to be used later to create an URLProps to add WebFragment(WebPage/Component/or any sort)</p>

**Kind**: global class  

* [URLBuilder](#URLBuilder)
    * [new URLBuilder()](#new_URLBuilder_new)
    * [.culture(culture)](#URLBuilder+culture) ⇒
    * [.suffix(suffix)](#URLBuilder+suffix) ⇒
    * [.extra(extra)](#URLBuilder+extra) ⇒
    * [.options(options)](#URLBuilder+options) ⇒
    * [.expectedTitle(expectedTitle)](#URLBuilder+expectedTitle) ⇒
    * [.build()](#URLBuilder+build) ⇒

<a name="new_URLBuilder_new"></a>

# new URLBuilder()
<p>A Simple constructor to initialize the _page value
without this, above data member will become undefined</p>

**Example**  
```js
//Build a simple URLProps like belowexport const TodoMvcPageProps = (): URLProps => new URLBuilder().suffix('todomvc').build();
```
<a name="URLBuilder+culture"></a>

# urlBuilder.culture(culture) ⇒
<p>This function takes a string as a parameter and returns a URLBuilder object.</p>

**Kind**: instance method of [<code>URLBuilder</code>](#URLBuilder)  
**Returns**: <p>The URLBuilder object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| culture | <code>string</code> | <p>string</p> |

<a name="URLBuilder+suffix"></a>

# urlBuilder.suffix(suffix) ⇒
<p>This function takes a string as an argument and sets the suffix property of the URLBuilder class
to the value of the string argument. It then sets the url property of the URLBuilder class to the
value of the url property plus the value of the suffix property. It then returns the URLBuilder
class.</p>

**Kind**: instance method of [<code>URLBuilder</code>](#URLBuilder)  
**Returns**: <p>The URLBuilder object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| suffix | <code>string</code> | <p>string - The suffix to be added to the URL.</p> |

<a name="URLBuilder+extra"></a>

# urlBuilder.extra(extra) ⇒
<p>It takes a string as an argument, sets the extra property of the _url object to the string, and
then sets the url property of the _url object to the url property of the _url object plus the
extra property of the _url object.</p>

**Kind**: instance method of [<code>URLBuilder</code>](#URLBuilder)  
**Returns**: <p>The URLBuilder object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| extra | <code>string</code> | <p>string - This is the extra string that will be appended to the url.</p> |

<a name="URLBuilder+options"></a>

# urlBuilder.options(options) ⇒
<p>&quot;This function takes an object with optional properties and returns an object with optional
properties.&quot;</p>

**Kind**: instance method of [<code>URLBuilder</code>](#URLBuilder)  
**Returns**: <p>The URLBuilder object.</p>  

| Param | Description |
| --- | --- |
| options | <p>simpleOptions</p> |

<a name="URLBuilder+expectedTitle"></a>

# urlBuilder.expectedTitle(expectedTitle) ⇒
<p>This function sets the expectedTitle property of the URL object and returns the URLBuilder object.</p>

**Kind**: instance method of [<code>URLBuilder</code>](#URLBuilder)  
**Returns**: <p>The URLBuilder object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| expectedTitle | <code>string</code> | <p>The title of the page you expect to be on.</p> |

<a name="URLBuilder+build"></a>

# urlBuilder.build() ⇒
<p>The function returns the URLProps object that was created in the constructor.</p>

**Kind**: instance method of [<code>URLBuilder</code>](#URLBuilder)  
**Returns**: <p>The URLProps object.</p>  
<a name="WebFragment"></a>

 WebFragment
<p>It's a class that contains functions that can be used to interact with the dom nodes in a web page/component/anything by that design</p>

**Kind**: global class  

* [WebFragment](#WebFragment)
    * [.open(urlProps)](#WebFragment+open)
    * [.reload(options)](#WebFragment+reload)
    * [.goBack(options)](#WebFragment+goBack)
    * [.getTitle()](#WebFragment+getTitle) ⇒
    * [.waitForPageLoad(timeout, state)](#WebFragment+waitForPageLoad)
    * [.waitForWebElement(locator, [actionable], [baseLocator], [options])](#WebFragment+waitForWebElement) ⇒
    * [.waitForNthWebElement(locator, nth, [actionable], [options])](#WebFragment+waitForNthWebElement) ⇒

<a name="WebFragment+open"></a>

# webFragment.open(urlProps)
<p>open</p>
<ul>
<li>To open the webpage with url</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  

| Param | Description |
| --- | --- |
| urlProps | <p>URLProps Interface</p> |

<a name="WebFragment+reload"></a>

# webFragment.reload(options)
<p>reload</p>
<ul>
<li>A method that is being called on the playwrightPage object.</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  

| Param | Description |
| --- | --- |
| options | <p>PageOptions Interface</p> |

<a name="WebFragment+goBack"></a>

# webFragment.goBack(options)
<p>goBack</p>
<ul>
<li>A method that is used to go back to the previous page.</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  

| Param | Description |
| --- | --- |
| options | <p>PageOptions Interface</p> |

<a name="WebFragment+getTitle"></a>

# webFragment.getTitle() ⇒
<p>getTitle</p>
<ul>
<li>To get a title of a page as a promise</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  
**Returns**: <p>Title of the page as a promise</p>  
<a name="WebFragment+waitForPageLoad"></a>

# webFragment.waitForPageLoad(timeout, state)
<p>waitForPageLoad</p>
<ul>
<li>Waiting for the page to load.</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  

| Param | Description |
| --- | --- |
| timeout | <p>timeout in milliseconds</p> |
| state | <p>state to achieve upon load</p> |

<a name="WebFragment+waitForWebElement"></a>

# webFragment.waitForWebElement(locator, [actionable], [baseLocator], [options]) ⇒
<p>waitForWebElement</p>
<ul>
<li>Wait for a web element to be present, then return a new LocatorFragment object.</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  
**Returns**: <p>A LocatorFragment object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| locator | <code>string</code> | <p>string - the locator to find</p> |
| [actionable] | <code>Actionable</code> \| <code>Array.&lt;Actionable&gt;</code> | <p>Actionable | Actionable[]</p> |
| [baseLocator] | <code>Locator</code> | <p>The base locator to use for the find.</p> |
| [options] | <code>FindOptions</code> | <p>FindOptions = {</p> |

<a name="WebFragment+waitForNthWebElement"></a>

# webFragment.waitForNthWebElement(locator, nth, [actionable], [options]) ⇒
<p>waitForNthWebElement</p>
<ul>
<li>Wait for the nth element to be visible, then return a new LocatorFragment object.</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  
**Returns**: <p>A new instance of the LocatorFragment class.</p>  

| Param | Type | Description |
| --- | --- | --- |
| locator | <code>string</code> | <p>string - the locator to find</p> |
| nth | <code>number</code> | <p>number - the nth element to find</p> |
| [actionable] | <code>Actionable</code> \| <code>Array.&lt;Actionable&gt;</code> | <p>Actionable | Actionable[]</p> |
| [options] | <code>FindOptions</code> | <p>FindOptions = {</p> |

<a name="PlaywrightApi"></a>

 PlaywrightApi ⇒
<p>usePlaywrightApi</p>
<ul>
<li>It returns a proxy object that wraps the PlaywrightApi class</li>
</ul>

**Kind**: global variable  
**Returns**: <p>A Proxy object that is a PlaywrightApiProps.</p>  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>APIRequestContext</code> | <p>APIRequestContext - This is the request object that is passed to the API function.</p> |


* [PlaywrightApi](#PlaywrightApi) ⇒
    * [.updateHeaders(headers)](#PlaywrightApi+updateHeaders)
    * [.getRequest(url)](#PlaywrightApi+getRequest) ⇒
    * [.postRequest(url, [data])](#PlaywrightApi+postRequest) ⇒
    * [.getBody()](#PlaywrightApi+getBody) ⇒
    * [.getJson()](#PlaywrightApi+getJson) ⇒
    * [.getJsonWithKeys([options])](#PlaywrightApi+getJsonWithKeys) ⇒
    * [.dispose()](#PlaywrightApi+dispose) ⇒
    * [.isResponseOK()](#PlaywrightApi+isResponseOK) ⇒
    * [.returnResponse()](#PlaywrightApi+returnResponse) ⇒
    * [.resetResponseConfig()](#PlaywrightApi+resetResponseConfig)

<a name="PlaywrightApi+updateHeaders"></a>

# playwrightApi.updateHeaders(headers)
<p>updateHeaders</p>
<ul>
<li>This function updates the headers of the table</li>
</ul>

**Kind**: instance method of [<code>PlaywrightApi</code>](#PlaywrightApi)  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>HeadersProps</code> | <p>HeadersProps</p> |

<a name="PlaywrightApi+getRequest"></a>

# playwrightApi.getRequest(url) ⇒
<p>getRequest</p>
<ul>
<li>This function makes a get request to the url provided and returns the response.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightApi</code>](#PlaywrightApi)  
**Returns**: <p>The response from the API call.</p>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>string - The url to make the request to</p> |

<a name="PlaywrightApi+postRequest"></a>

# playwrightApi.postRequest(url, [data]) ⇒
<p>postRequest</p>
<ul>
<li>This function makes a post request to the url provided and returns the response.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightApi</code>](#PlaywrightApi)  
**Returns**: <p>The response object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | <p>string - The url to send the request to</p> |
| [data] | <code>unknown</code> | <p>The data to be sent to the server.</p> |

<a name="PlaywrightApi+getBody"></a>

# playwrightApi.getBody() ⇒
<p>getBody</p>
<ul>
<li>If the response body is requested, then return the response body.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightApi</code>](#PlaywrightApi)  
**Returns**: <p>The response body.</p>  
<a name="PlaywrightApi+getJson"></a>

# playwrightApi.getJson() ⇒
<p>getJson</p>
<ul>
<li>If the response is JSON, return the response as JSON.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightApi</code>](#PlaywrightApi)  
**Returns**: <p>The returnResponse() method is being called and the response is being returned.</p>  
<a name="PlaywrightApi+getJsonWithKeys"></a>

# playwrightApi.getJsonWithKeys([options]) ⇒
<p>getJsonWithKeys</p>
<ul>
<li>This function returns a promise that resolves to an object with two properties: json and keys. The</li>
<li>json property is a Serializable object, and the keys property is an array of strings.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightApi</code>](#PlaywrightApi)  
**Returns**: <p>An object with two properties: json and keys.</p>  

| Param | Description |
| --- | --- |
| [options] | <p>splicing options like keys</p> |

<a name="PlaywrightApi+dispose"></a>

# playwrightApi.dispose() ⇒
<p>dispose</p>
<ul>
<li>The function returns a promise that resolves to a void</li>
</ul>

**Kind**: instance method of [<code>PlaywrightApi</code>](#PlaywrightApi)  
**Returns**: <p>The response object.</p>  
<a name="PlaywrightApi+isResponseOK"></a>

# playwrightApi.isResponseOK() ⇒
<p>isResponseOK</p>
<ul>
<li>This function sets the responseOk property of the responseConfig object to true and returns the</li>
<li>responseConfig object.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightApi</code>](#PlaywrightApi)  
**Returns**: <p>The responseConfig object.</p>  
<a name="PlaywrightApi+returnResponse"></a>

# playwrightApi.returnResponse() ⇒
<p>returnResponse</p>
<ul>
<li>If the response is truthy, then return the response body, otherwise return the response.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightApi</code>](#PlaywrightApi)  
**Returns**: <p>The response object.</p>  
<a name="PlaywrightApi+resetResponseConfig"></a>

# playwrightApi.resetResponseConfig()
<p>resetResponseConfig</p>
<ul>
<li>This function resets the responseConfig object to its default values.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightApi</code>](#PlaywrightApi)  
<a name="usePlaywrightApi"></a>

 usePlaywrightApi ⇒
<p>createApiFragment</p>
<ul>
<li>To create a api fragment actions object with proxy traps</li>
</ul>

**Kind**: global variable  
**Returns**: <p>The ApiFragment actions with Proxy traps</p>  

| Param | Description |
| --- | --- |
| ClassObject | <p>The ClassObject that will use ApiFragment actions</p> |

<a name="appInfo"></a>

 appInfo
<p>The basic appinfo data might be needed for testing the app</p>

**Kind**: global variable  
<a name="registerAppUrl"></a>

 registerAppUrl
<p>It takes an object of type AppInfo and assigns it to the appInfo variable</p>

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| info | <code>AppInfo</code> | <p>AppInfo</p> |

<a name="registerAppInfo"></a>

 registerAppInfo
<p>registerPlaywrightPage</p>
<ul>
<li>To register the page to be used for testing</li>
</ul>

**Kind**: global variable  

| Param | Description |
| --- | --- |
| page | <p>Playwright tests page to be used</p> |

<a name="registerPlaywrightPage"></a>

 registerPlaywrightPage
<p>registerPlaywrightExpect</p>
<ul>
<li>To register the expect object to be used for testing</li>
</ul>

**Kind**: global variable  

| Param | Description |
| --- | --- |
| expect | <p>Playwright tests expect to be used</p> |

<a name="registerPlaywrightExpect"></a>

 registerPlaywrightExpect
<p>registerPlaywrightAPI</p>
<ul>
<li>To register the api object to be used for testing</li>
</ul>

**Kind**: global variable  

| Param | Description |
| --- | --- |
| request | <p>Playwright tests request to be used</p> |

<a name="registerPlaywrightAPI"></a>

 registerPlaywrightAPI
<p>It registers all the Playwright functions that we'll be using in our tests</p>

**Kind**: global variable  

| Param | Description |
| --- | --- |
| hooks | <p>object that accepts url, page, expect, request module from Playwright</p> |

<a name="registerAll"></a>

 registerAll
<p>registerPlaywrightPageLocator</p>
<ul>
<li>To register the locator to be used for testing</li>
</ul>

**Kind**: global variable  

| Param | Description |
| --- | --- |
| locator | <p>The locator to be used for testing</p> |
| options |  |

<a name="PlaywrightPage"></a>

 PlaywrightPage ⇒
<p>usePlaywrightPage
A method called to initialize the PlaywrightPage with given page</p>

**Kind**: global variable  
**Returns**: <p>The Playwright page object's proxy</p>  

| Param | Description |
| --- | --- |
| page | <p>Playwright page to be used</p> |


* [PlaywrightPage](#PlaywrightPage) ⇒
    * [.goto(urlProps)](#PlaywrightPage+goto)
    * [.getTitle()](#PlaywrightPage+getTitle) ⇒
    * [.reload(options)](#PlaywrightPage+reload)
    * [.goBack(options)](#PlaywrightPage+goBack)
    * [.waitForPageLoad(timeout, state)](#PlaywrightPage+waitForPageLoad)
    * [.waitForNetworkResponseAfter(urlPath, status)](#PlaywrightPage+waitForNetworkResponseAfter)
    * [.click(locator, options)](#PlaywrightPage+click)
    * [.dispatchEvent(locator, type, options)](#PlaywrightPage+dispatchEvent)
    * [.dblclick(locator, options)](#PlaywrightPage+dblclick)
    * [.check(locator, options)](#PlaywrightPage+check)
    * [.uncheck(locator, options)](#PlaywrightPage+uncheck)
    * [.type(locator, text, options)](#PlaywrightPage+type)
    * [.press(locator, text, options)](#PlaywrightPage+press)
    * [.find(locator, baseLocator, options)](#PlaywrightPage+find) ⇒
    * [.findFirst(selector, options)](#PlaywrightPage+findFirst) ⇒
    * [.findNth(selector, options)](#PlaywrightPage+findNth) ⇒
    * [.verifyActionable(locator, actionable, options)](#PlaywrightPage+verifyActionable)
    * [.verifyNotActionable(locator, actionable, options)](#PlaywrightPage+verifyNotActionable)
    * [.assert()](#PlaywrightPage+assert)
    * [.not()](#PlaywrightPage+not)
    * [.toBeEmpty(locator, message, options)](#PlaywrightPage+toBeEmpty)
    * [.toHaveText(locator, expected, message, options)](#PlaywrightPage+toHaveText)
    * [.toHaveValue(locator, value, message, options)](#PlaywrightPage+toHaveValue)
    * [.toHaveAttribute(locator, name, value, message, options)](#PlaywrightPage+toHaveAttribute)
    * [.toHaveCSS(locator, name, value, message, options)](#PlaywrightPage+toHaveCSS)
    * [.toHaveClass(locator, expected, message, options)](#PlaywrightPage+toHaveClass)
    * [.toHaveCount(locator, count, message, options)](#PlaywrightPage+toHaveCount)
    * [.toContainText(locator, expected, message, options)](#PlaywrightPage+toContainText)
    * [.toHaveId(locator, id, message, options)](#PlaywrightPage+toHaveId)

<a name="PlaywrightPage+goto"></a>

# playwrightPage.goto(urlProps)
<p>goto</p>
<ul>
<li>A method that is used to navigate to a URL.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| urlProps | <p>URLProps interface</p> |

<a name="PlaywrightPage+getTitle"></a>

# playwrightPage.getTitle() ⇒
<p>getTitle</p>
<ul>
<li>To get a title of a page as a promise</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  
**Returns**: <p>Title of the page as a promise</p>  
<a name="PlaywrightPage+reload"></a>

# playwrightPage.reload(options)
<p>reload</p>
<ul>
<li>A method that is being called on the playwrightPage object.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| options | <p>PageOptions Interface</p> |

<a name="PlaywrightPage+goBack"></a>

# playwrightPage.goBack(options)
<p>goBack</p>
<ul>
<li>A method that is used to go back to the previous page.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| options | <p>PageOptions Interface</p> |

<a name="PlaywrightPage+waitForPageLoad"></a>

# playwrightPage.waitForPageLoad(timeout, state)
<p>waitForPageLoad</p>
<ul>
<li>Waiting for the page to load.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| timeout | <p>timeout in milliseconds</p> |
| state | <p>state to achieve upon load</p> |

<a name="PlaywrightPage+waitForNetworkResponseAfter"></a>

# playwrightPage.waitForNetworkResponseAfter(urlPath, status)
<p>waitForNetworkResponseAfter</p>
<ul>
<li>This method will add a wait logic that will be executed after what follows</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| urlPath | <p>URL path as string</p> |
| status | <p>Response status code to be expected</p> |

<a name="PlaywrightPage+click"></a>

# playwrightPage.click(locator, options)
<p>click</p>
<ul>
<li>A method that is used to click on an element.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator as a string</p> |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPage+dispatchEvent"></a>

# playwrightPage.dispatchEvent(locator, type, options)
<p>dispatchEvent</p>
<ul>
<li>A method that is used to dispatch an event on a page.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator as a string</p> |
| type | <p>Event type</p> |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPage+dblclick"></a>

# playwrightPage.dblclick(locator, options)
<p>dblclick</p>
<ul>
<li>A method that is used to double click on an element.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator as a string</p> |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPage+check"></a>

# playwrightPage.check(locator, options)
<p>check</p>
<ul>
<li>A method that is checking a checkbox.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator as a string</p> |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPage+uncheck"></a>

# playwrightPage.uncheck(locator, options)
<p>uncheck</p>
<ul>
<li>A function that is unchecking the checkbox and/or then waiting for the network response</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator as a string</p> |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPage+type"></a>

# playwrightPage.type(locator, text, options)
<p>type</p>
<ul>
<li>A function that is typing in the text and/or then waiting for the network response.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator as a string</p> |
| text | <p>The text to be entered in the text box</p> |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPage+press"></a>

# playwrightPage.press(locator, text, options)
<p>press</p>
<ul>
<li>A function that is press a key on element and/or then waiting for the network response.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator as a string</p> |
| text | <p>The Key to be pressed</p> |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPage+find"></a>

# playwrightPage.find(locator, baseLocator, options) ⇒
<p>find</p>
<ul>
<li>Creating a static method that is called to find the element.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  
**Returns**: <p>PlaywrightPageLocator (this)</p>  

| Param | Description |
| --- | --- |
| locator | <p>The locator string for the element</p> |
| baseLocator | <p>Base Locator of the element to be found - optional</p> |
| options | <p>FindOptions Interface</p> |

<a name="PlaywrightPage+findFirst"></a>

# playwrightPage.findFirst(selector, options) ⇒
<p>findFirst</p>
<ul>
<li>Creating a static method that is called to find the first element.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  
**Returns**: <p>PlaywrightPageLocator (this)</p>  

| Param | Description |
| --- | --- |
| selector | <p>The locator string for the element</p> |
| options | <p>FindOptions Interface</p> |

<a name="PlaywrightPage+findNth"></a>

# playwrightPage.findNth(selector, options) ⇒
<p>findNth</p>
<ul>
<li>Creating a static method that is called to find the nth element.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  
**Returns**: <p>PlaywrightPageLocator (this)</p>  

| Param | Description |
| --- | --- |
| selector | <p>The locator string for the element</p> |
| options | <p>FindOptions Interface</p> |

<a name="PlaywrightPage+verifyActionable"></a>

# playwrightPage.verifyActionable(locator, actionable, options)
<p>verifyActionable</p>
<ul>
<li>To check few actionables on a web element</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator string for the element</p> |
| actionable | <p>Actionable enum to set a Actionable event on ELement</p> |
| options | <p>LocatorOptions - Interface</p> |

<a name="PlaywrightPage+verifyNotActionable"></a>

# playwrightPage.verifyNotActionable(locator, actionable, options)
<p>verifyNotActionable</p>
<ul>
<li>To check few actionables on a web element</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator string for the element</p> |
| actionable | <p>Actionable enum to set a Actionable event on ELement</p> |
| options | <p>LocatorOptions - Interface</p> |

<a name="PlaywrightPage+assert"></a>

# playwrightPage.assert()
<p>not</p>
<ul>
<li>Negated Assertions</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  
<a name="PlaywrightPage+not"></a>

# playwrightPage.not()
<p>not</p>
<ul>
<li>Negated Assertions</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  
<a name="PlaywrightPage+toBeEmpty"></a>

# playwrightPage.toBeEmpty(locator, message, options)
<p>toBeEmpty</p>
<ul>
<li>To check if the Element is empty or has no text</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator string for the element</p> |
| message | <p>The message to be shown on expect</p> |
| options | <p>FindOptions - Interface</p> |

<a name="PlaywrightPage+toHaveText"></a>

# playwrightPage.toHaveText(locator, expected, message, options)
<p>toHaveText</p>
<ul>
<li>To check if the Element is has the expected test</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator string for the element</p> |
| expected | <p>The Expected Text in the element</p> |
| message | <p>The message to be shown on expect</p> |
| options | <p>FindOptions - Interface</p> |

<a name="PlaywrightPage+toHaveValue"></a>

# playwrightPage.toHaveValue(locator, value, message, options)
<p>toHaveValue</p>
<ul>
<li>To check if the Element is has the expected input value</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator string for the element</p> |
| value | <p>The Expected value in the element</p> |
| message | <p>The message to be shown on expect</p> |
| options | <p>FindOptions - Interface</p> |

<a name="PlaywrightPage+toHaveAttribute"></a>

# playwrightPage.toHaveAttribute(locator, name, value, message, options)
<p>toHaveAttribute</p>
<ul>
<li>To check if the Element is has the expected attribute and value</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator string for the element</p> |
| name | <p>The Expected name of attribute in the element</p> |
| value | <p>The Expected value of attribute in the element</p> |
| message | <p>The message to be shown on expect</p> |
| options | <p>FindOptions - Interface</p> |

<a name="PlaywrightPage+toHaveCSS"></a>

# playwrightPage.toHaveCSS(locator, name, value, message, options)
<p>toHaveCSS</p>
<ul>
<li>To check if the Element is has the expected css attribute and value</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator string for the element</p> |
| name | <p>The Expected name of  CSS attribute in the element</p> |
| value | <p>The Expected value of CSS attribute in the element</p> |
| message | <p>The message to be shown on expect</p> |
| options | <p>FindOptions - Interface</p> |

<a name="PlaywrightPage+toHaveClass"></a>

# playwrightPage.toHaveClass(locator, expected, message, options)
<p>toHaveClass</p>
<ul>
<li>To check if the Element is has the expected class</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator string for the element</p> |
| expected | <p>The Expected class in the element</p> |
| message | <p>The message to be shown on expect</p> |
| options | <p>FindOptions - Interface</p> |

<a name="PlaywrightPage+toHaveCount"></a>

# playwrightPage.toHaveCount(locator, count, message, options)
<p>toHaveCount</p>
<ul>
<li>To check if the Locator resolves to expected number of elements</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator string for the element</p> |
| count | <p>The count expected to be found - as DOM nodes</p> |
| message | <p>The message to be shown on expect</p> |
| options | <p>FindOptions - Interface</p> |

<a name="PlaywrightPage+toContainText"></a>

# playwrightPage.toContainText(locator, expected, message, options)
<p>toContainText</p>
<ul>
<li>To check if the element contains expected text</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator string for the element</p> |
| expected | <p>The expected part of text to be found</p> |
| message | <p>The message to be shown on expect</p> |
| options | <p>FindOptions - Interface</p> |

<a name="PlaywrightPage+toHaveId"></a>

# playwrightPage.toHaveId(locator, id, message, options)
<p>toHaveId</p>
<ul>
<li>To check if the element has expected ID</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPage</code>](#PlaywrightPage)  

| Param | Description |
| --- | --- |
| locator | <p>The locator string for the element</p> |
| id | <p>The expected ID in web Element</p> |
| message | <p>The message to be shown on expect</p> |
| options | <p>FindOptions - Interface</p> |

<a name="PlaywrightPageLocator"></a>

 PlaywrightPageLocator ⇒
<p>usePlaywrightPageLocator</p>
<ul>
<li>To use the Playwright Page Locator with proxy</li>
</ul>

**Kind**: global variable  
**Returns**: <p>The PageLocator with Proxy</p>  

| Param | Description |
| --- | --- |
| locator | <p>The element Locator</p> |
| options | <p>The Locator Options for element</p> |


* [PlaywrightPageLocator](#PlaywrightPageLocator) ⇒
    * [.waitForNetworkResponseAfter(urlPath, status)](#PlaywrightPageLocator+waitForNetworkResponseAfter)
    * [.click(options)](#PlaywrightPageLocator+click)
    * [.dispatchEvent(type, options)](#PlaywrightPageLocator+dispatchEvent)
    * [.dblclick(options)](#PlaywrightPageLocator+dblclick)
    * [.check(options)](#PlaywrightPageLocator+check)
    * [.uncheck(options)](#PlaywrightPageLocator+uncheck)
    * [.press(text, options)](#PlaywrightPageLocator+press)
    * [.type(text, options)](#PlaywrightPageLocator+type)
    * [.find(locator, options)](#PlaywrightPageLocator+find) ⇒
    * [.findFirst()](#PlaywrightPageLocator+findFirst) ⇒
    * [.findNth(nth)](#PlaywrightPageLocator+findNth) ⇒
    * [.verifyActionable(actionable, options)](#PlaywrightPageLocator+verifyActionable)
    * [.verifyNotActionable(actionable, options)](#PlaywrightPageLocator+verifyNotActionable)
    * [.not()](#PlaywrightPageLocator+not)
    * [.toBeEmpty(message)](#PlaywrightPageLocator+toBeEmpty)
    * [.toHaveText(expected, message)](#PlaywrightPageLocator+toHaveText)
    * [.toHaveValue(value, message)](#PlaywrightPageLocator+toHaveValue)
    * [.toHaveAttribute(name, value, message)](#PlaywrightPageLocator+toHaveAttribute)
    * [.toHaveCSS(name, value, message)](#PlaywrightPageLocator+toHaveCSS)
    * [.toHaveClass(expected, message)](#PlaywrightPageLocator+toHaveClass)
    * [.toHaveCount(count, message)](#PlaywrightPageLocator+toHaveCount)
    * [.toContainText(expected, message)](#PlaywrightPageLocator+toContainText)
    * [.toHaveId(id, message)](#PlaywrightPageLocator+toHaveId)

<a name="PlaywrightPageLocator+waitForNetworkResponseAfter"></a>

# playwrightPageLocator.waitForNetworkResponseAfter(urlPath, status)
<p>waitForNetworkResponseAfter</p>
<ul>
<li>This method will add a wait logic that will be executed after what follows</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| urlPath | <p>URL path as string</p> |
| status | <p>Response status code to be expected</p> |

<a name="PlaywrightPageLocator+click"></a>

# playwrightPageLocator.click(options)
<p>click</p>
<ul>
<li>A static method that is used to click on an element and/or wait for network response.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPageLocator+dispatchEvent"></a>

# playwrightPageLocator.dispatchEvent(type, options)
<p>dispatchEvent</p>
<ul>
<li>A static method that is used to dispatchEvent on an element and/or wait for network response.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| type | <p>The type of dispatch event</p> |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPageLocator+dblclick"></a>

# playwrightPageLocator.dblclick(options)
<p>dblclick</p>
<ul>
<li>A static method that is used to double click on an element and/or wait for network response.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPageLocator+check"></a>

# playwrightPageLocator.check(options)
<p>check</p>
<ul>
<li>A static method that is used to check on a checkbox element and/or wait for network response.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPageLocator+uncheck"></a>

# playwrightPageLocator.uncheck(options)
<p>uncheck</p>
<ul>
<li>A static method that is used to uncheck on a checkbox element and/or wait for network response.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPageLocator+press"></a>

# playwrightPageLocator.press(text, options)
<p>press</p>
<ul>
<li>A static method that is used to Press key on an element and/or wait for network response.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| text | <p>The Key to be pressed</p> |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPageLocator+type"></a>

# playwrightPageLocator.type(text, options)
<p>type</p>
<ul>
<li>A static method that is used to type text into an element and/or wait for network response.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| text | <p>The text to be entered</p> |
| options | <p>Locator options Interface</p> |

<a name="PlaywrightPageLocator+find"></a>

# playwrightPageLocator.find(locator, options) ⇒
<p>find</p>
<ul>
<li>Creating a static method that is called to find the element.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  
**Returns**: <p>PlaywrightPageLocator (this)</p>  

| Param | Description |
| --- | --- |
| locator | <p>Locator of the element to be found</p> |
| options | <p>FindOptions Interface</p> |

<a name="PlaywrightPageLocator+findFirst"></a>

# playwrightPageLocator.findFirst() ⇒
<p>findFirst</p>
<ul>
<li>Creating a static method that is called to find the first element.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  
**Returns**: <p>PlaywrightPageLocator (this)</p>  
<a name="PlaywrightPageLocator+findNth"></a>

# playwrightPageLocator.findNth(nth) ⇒
<p>findFirst</p>
<ul>
<li>Creating a static method that is called to find the nth element.</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  
**Returns**: <p>PlaywrightPageLocator (this)</p>  

| Param | Description |
| --- | --- |
| nth | <p>Nth count of element to be found</p> |

<a name="PlaywrightPageLocator+verifyActionable"></a>

# playwrightPageLocator.verifyActionable(actionable, options)
<p>verifyActionable</p>
<ul>
<li>To check few actionables on a web element</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| actionable | <p>Actionable enum to set a Actionable event on ELement</p> |
| options | <p>LocatorOptions - Interface</p> |

<a name="PlaywrightPageLocator+verifyNotActionable"></a>

# playwrightPageLocator.verifyNotActionable(actionable, options)
<p>verifyNotActionable</p>
<ul>
<li>To check few actionables on a web element</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| actionable | <p>Actionable enum to set a Actionable event on ELement</p> |
| options | <p>LocatorOptions - Interface</p> |

<a name="PlaywrightPageLocator+not"></a>

# playwrightPageLocator.not()
<p>not</p>
<ul>
<li>Negated Assertions</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  
<a name="PlaywrightPageLocator+toBeEmpty"></a>

# playwrightPageLocator.toBeEmpty(message)
<p>toBeEmpty</p>
<ul>
<li>To check if the Element is empty or has no text</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| message | <p>The message to be shown on expect</p> |

<a name="PlaywrightPageLocator+toHaveText"></a>

# playwrightPageLocator.toHaveText(expected, message)
<p>toHaveText</p>
<ul>
<li>To check if the Element is has the expected test</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| expected | <p>The Expected Text in the element</p> |
| message | <p>The message to be shown on expect</p> |

<a name="PlaywrightPageLocator+toHaveValue"></a>

# playwrightPageLocator.toHaveValue(value, message)
<p>toHaveValue</p>
<ul>
<li>To check if the Element is has the expected input value</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| value | <p>The Expected value in the element</p> |
| message | <p>The message to be shown on expect</p> |

<a name="PlaywrightPageLocator+toHaveAttribute"></a>

# playwrightPageLocator.toHaveAttribute(name, value, message)
<p>toHaveAttribute</p>
<ul>
<li>To check if the Element is has the expected attribute and value</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| name | <p>The Expected name of attribute in the element</p> |
| value | <p>The Expected value of attribute in the element</p> |
| message | <p>The message to be shown on expect</p> |

<a name="PlaywrightPageLocator+toHaveCSS"></a>

# playwrightPageLocator.toHaveCSS(name, value, message)
<p>toHaveCSS</p>
<ul>
<li>To check if the Element is has the expected css attribute and value</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| name | <p>The Expected name of  CSS attribute in the element</p> |
| value | <p>The Expected value of CSS attribute in the element</p> |
| message | <p>The message to be shown on expect</p> |

<a name="PlaywrightPageLocator+toHaveClass"></a>

# playwrightPageLocator.toHaveClass(expected, message)
<p>toHaveClass</p>
<ul>
<li>To check if the Element is has the expected class</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| expected | <p>The Expected class in the element</p> |
| message | <p>The message to be shown on expect</p> |

<a name="PlaywrightPageLocator+toHaveCount"></a>

# playwrightPageLocator.toHaveCount(count, message)
<p>toHaveCount</p>
<ul>
<li>To check if the Locator resolves to expected number of elements</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| count | <p>The count expected to be found - as DOM nodes</p> |
| message | <p>The message to be shown on expect</p> |

<a name="PlaywrightPageLocator+toContainText"></a>

# playwrightPageLocator.toContainText(expected, message)
<p>toContainText</p>
<ul>
<li>To check if the element contains expected text</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| expected | <p>The expected part of text to be found</p> |
| message | <p>The message to be shown on expect</p> |

<a name="PlaywrightPageLocator+toHaveId"></a>

# playwrightPageLocator.toHaveId(id, message)
<p>toHaveId</p>
<ul>
<li>To check if the element has expected ID</li>
</ul>

**Kind**: instance method of [<code>PlaywrightPageLocator</code>](#PlaywrightPageLocator)  

| Param | Description |
| --- | --- |
| id | <p>The expected ID in web Element</p> |
| message | <p>The message to be shown on expect</p> |

<a name="usePlaywrightPageLocator"></a>

 usePlaywrightPageLocator ⇒
<p>createFragment</p>
<ul>
<li>To create a web fragment object with proxy traps</li>
</ul>

**Kind**: global variable  
**Returns**: <p>The WebFragment with Proxy traps</p>  

| Param | Description |
| --- | --- |
| ClassObject | <p>The ClassObject that will use WebFragment</p> |
| urlProps | <p>The URLProps</p> |

**Example**  
```js
//Use below example to create a new WebFragmentlet todoMvcPage: TodoMvcPage = createFragment(    TodoMvcPage,    TodoMvcPageProps()  );
```
<a name="createFragment"></a>

 createFragment ⇒
<p>createFragmentActions</p>
<ul>
<li>To create a web fragment actions object with proxy traps</li>
</ul>

**Kind**: global variable  
**Returns**: <p>The WebFragment actions with Proxy traps</p>  

| Param | Description |
| --- | --- |
| ClassObject | <p>The ClassObject that will use WebFragment actions</p> |

**Example**  
```js
//Use below example to create a new WebFragmentlet actions: TodoMvcPageActions = createFragmentActions(    TodoMvcPageActions  );
```
<a name="PlaywrightExpect"></a>

 PlaywrightExpect ⇒
<p>usePlaywrightExpect
To use the playwright expect with Proxy traps</p>

**Kind**: global variable  
**Returns**: <p>A proxy object for PlaywrightExpect</p>  

| Param | Description |
| --- | --- |
| expect | <p>Playwright Expect to be used</p> |

<a name="WebElement"></a>

 WebElement ⇒
<p>useWebElement</p>
<ul>
<li>To create a WebElement for the given props</li>
</ul>

**Kind**: global variable  
**Returns**: <p>WebElement</p>  

| Param | Description |
| --- | --- |
| webElementProps | <p>WebElementType</p> |

**Example**  
```js
//Just like below one can simply create a WebElement using the below exampleconst newTodoTextBox = (text?: string): WebElement =>  useWebElement({    locator: '.new-todo',    text,  });
```

* [WebElement](#WebElement) ⇒
    * [.waitForNetworkResponseAfter(urlPath, [status])](#WebElement+waitForNetworkResponseAfter) ⇒
    * [.search(text, options)](#WebElement+search) ⇒
    * [.typeIn(text, options)](#WebElement+typeIn) ⇒
    * [.pressKey(text, options)](#WebElement+pressKey) ⇒
    * [.findInLocator(locator)](#WebElement+findInLocator) ⇒
    * [.findNth(nth)](#WebElement+findNth) ⇒
    * [.findFirst()](#WebElement+findFirst) ⇒
    * [.click(options)](#WebElement+click) ⇒
    * [.dispatchEvent(type, options)](#WebElement+dispatchEvent) ⇒
    * [.dblclick(options)](#WebElement+dblclick) ⇒
    * [.check(options)](#WebElement+check) ⇒
    * [.uncheck(options)](#WebElement+uncheck) ⇒
    * [.verifyActionable(actionable, options)](#WebElement+verifyActionable) ⇒
    * [.verifyNotActionable(actionable, options)](#WebElement+verifyNotActionable) ⇒

<a name="WebElement+waitForNetworkResponseAfter"></a>

# webElement.waitForNetworkResponseAfter(urlPath, [status]) ⇒
<p>waitForNetworkResponseAfter</p>
<ul>
<li>Wait for a network response after a given URL path and status.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| urlPath | <code>string</code> | <p>string - The URL path to wait for.</p> |
| [status] | <code>number</code> | <p>The HTTP status code to wait for.</p> |

<a name="WebElement+search"></a>

# webElement.search(text, options) ⇒
<p>search</p>
<ul>
<li>&quot;Type text into the search box and return the current page object.&quot;</li>
<li>The function is async, so we can use the await keyword</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The LocatorFragment object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | <p>string - the text to search for</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="WebElement+typeIn"></a>

# webElement.typeIn(text, options) ⇒
<p>typeIn</p>
<ul>
<li>Type in the text passed in as a parameter and return the current instance of the class.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | <p>string - The text to type into the element</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="WebElement+pressKey"></a>

# webElement.pressKey(text, options) ⇒
<p>pressKey</p>
<ul>
<li>This function will press a key on the page and return the locator fragment props.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | <p>string - The text to type into the element.</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="WebElement+findInLocator"></a>

# webElement.findInLocator(locator) ⇒
<p>findInLocator</p>
<ul>
<li>Finds a locator in a locator</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| locator | <code>string</code> | <p>string - the locator you want to find</p> |

<a name="WebElement+findNth"></a>

# webElement.findNth(nth) ⇒
<p>findNth</p>
<ul>
<li>&quot;Finds the nth element that matches the locator and returns a new LocatorFragment object.&quot;</li>
<li>The function is called like this:</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| nth | <code>number</code> | <p>number - The nth element to find.</p> |

<a name="WebElement+findFirst"></a>

# webElement.findFirst() ⇒
<p>findFirst</p>
<ul>
<li>Creating a static method that is called to find the first element.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>PlaywrightPageLocator (this)</p>  
<a name="WebElement+click"></a>

# webElement.click(options) ⇒
<p>click</p>
<ul>
<li>Click on the element and return the LocatorFragment.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The LocatorFragment object.</p>  

| Param | Description |
| --- | --- |
| options | <p>LocatorOptions - Interface</p> |

<a name="WebElement+dispatchEvent"></a>

# webElement.dispatchEvent(type, options) ⇒
<p>dispatchEvent</p>
<ul>
<li>This function dispatches an event to the element that is currently being located.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | <p>string - The type of event to dispatch.</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="WebElement+dblclick"></a>

# webElement.dblclick(options) ⇒
<p>dblclick</p>
<ul>
<li>The function dblclick() is a public function that returns a promise of type LocatorFragment.</li>
<li>The function dblclick() is an async function that calls the function dblclick() from the</li>
<li>playwrightPageLocator object.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The LocatorFragment object.</p>  

| Param | Description |
| --- | --- |
| options | <p>LocatorOptions - Interface</p> |

<a name="WebElement+check"></a>

# webElement.check(options) ⇒
<p>check</p>
<ul>
<li>The check function is a public function that returns a promise of a LocatorFragment object.</li>
<li>The check function is an async function that calls the check function of the playwrightPageLocator</li>
<li>object.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The LocatorFragment object.</p>  

| Param | Description |
| --- | --- |
| options | <p>LocatorOptions - Interface</p> |

<a name="WebElement+uncheck"></a>

# webElement.uncheck(options) ⇒
<p>uncheck</p>
<ul>
<li>Uncheck the checkbox if it is checked, otherwise do nothing.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Description |
| --- | --- |
| options | <p>LocatorOptions - Interface</p> |

<a name="WebElement+verifyActionable"></a>

# webElement.verifyActionable(actionable, options) ⇒
<p>verifyActionable</p>
<ul>
<li>Verify that the actionable is present on the page, and return the locator fragment props.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| actionable | <code>Actionable</code> | <p>Actionable</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="WebElement+verifyNotActionable"></a>

# webElement.verifyNotActionable(actionable, options) ⇒
<p>verifyNotActionable</p>
<ul>
<li>Verify that the element is not actionable.</li>
</ul>

**Kind**: instance method of [<code>WebElement</code>](#WebElement)  
**Returns**: <p>The return type is LocatorFragment.</p>  

| Param | Type | Description |
| --- | --- | --- |
| actionable | <code>Actionable</code> | <p>Actionable</p> |
| options |  | <p>LocatorOptions - Interface</p> |

<a name="WebFragment"></a>

 WebFragment
<p>This class is a base class for all page objects. It contains functions that return a new instance of the LocatorFragment class.
Use this class to pawn of the actions thats can be done in a web page, primary building actions of the available DOM nodes in a web fragment
This is almost similar to how WebFragment works except this class will not have any actions one can see on page like goBack(), reload(), etc</p>

**Kind**: global variable  
**Example**  
```js
//Create a simple class and make sure the class extends WebFragment to avail all the below functionalitiesexport class TodoMvcPageActions extends WebFragmentActions {  constructor() {    super();  }  ...//This can be later called in a class that extends WebFragment to link the actions available in WebFragment like belowexport class TodoMvcPage extends WebFragment {  actions: TodoMvcPageActions;  constructor(urlProps?: URLProps) {    super(urlProps);    this.actions = createFragmentActions(TodoMvcPageActions);  }  ...
```

* [WebFragment](#WebFragment)
    * [.open(urlProps)](#WebFragment+open)
    * [.reload(options)](#WebFragment+reload)
    * [.goBack(options)](#WebFragment+goBack)
    * [.getTitle()](#WebFragment+getTitle) ⇒
    * [.waitForPageLoad(timeout, state)](#WebFragment+waitForPageLoad)
    * [.waitForWebElement(locator, [actionable], [baseLocator], [options])](#WebFragment+waitForWebElement) ⇒
    * [.waitForNthWebElement(locator, nth, [actionable], [options])](#WebFragment+waitForNthWebElement) ⇒

<a name="WebFragment+open"></a>

# webFragment.open(urlProps)
<p>open</p>
<ul>
<li>To open the webpage with url</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  

| Param | Description |
| --- | --- |
| urlProps | <p>URLProps Interface</p> |

<a name="WebFragment+reload"></a>

# webFragment.reload(options)
<p>reload</p>
<ul>
<li>A method that is being called on the playwrightPage object.</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  

| Param | Description |
| --- | --- |
| options | <p>PageOptions Interface</p> |

<a name="WebFragment+goBack"></a>

# webFragment.goBack(options)
<p>goBack</p>
<ul>
<li>A method that is used to go back to the previous page.</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  

| Param | Description |
| --- | --- |
| options | <p>PageOptions Interface</p> |

<a name="WebFragment+getTitle"></a>

# webFragment.getTitle() ⇒
<p>getTitle</p>
<ul>
<li>To get a title of a page as a promise</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  
**Returns**: <p>Title of the page as a promise</p>  
<a name="WebFragment+waitForPageLoad"></a>

# webFragment.waitForPageLoad(timeout, state)
<p>waitForPageLoad</p>
<ul>
<li>Waiting for the page to load.</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  

| Param | Description |
| --- | --- |
| timeout | <p>timeout in milliseconds</p> |
| state | <p>state to achieve upon load</p> |

<a name="WebFragment+waitForWebElement"></a>

# webFragment.waitForWebElement(locator, [actionable], [baseLocator], [options]) ⇒
<p>waitForWebElement</p>
<ul>
<li>Wait for a web element to be present, then return a new LocatorFragment object.</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  
**Returns**: <p>A LocatorFragment object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| locator | <code>string</code> | <p>string - the locator to find</p> |
| [actionable] | <code>Actionable</code> \| <code>Array.&lt;Actionable&gt;</code> | <p>Actionable | Actionable[]</p> |
| [baseLocator] | <code>Locator</code> | <p>The base locator to use for the find.</p> |
| [options] | <code>FindOptions</code> | <p>FindOptions = {</p> |

<a name="WebFragment+waitForNthWebElement"></a>

# webFragment.waitForNthWebElement(locator, nth, [actionable], [options]) ⇒
<p>waitForNthWebElement</p>
<ul>
<li>Wait for the nth element to be visible, then return a new LocatorFragment object.</li>
</ul>

**Kind**: instance method of [<code>WebFragment</code>](#WebFragment)  
**Returns**: <p>A new instance of the LocatorFragment class.</p>  

| Param | Type | Description |
| --- | --- | --- |
| locator | <code>string</code> | <p>string - the locator to find</p> |
| nth | <code>number</code> | <p>number - the nth element to find</p> |
| [actionable] | <code>Actionable</code> \| <code>Array.&lt;Actionable&gt;</code> | <p>Actionable | Actionable[]</p> |
| [options] | <code>FindOptions</code> | <p>FindOptions = {</p> |

<a name="WebFragmentActions"></a>

 WebFragmentActions
<p>checkPageActionable</p>
<ul>
<li>This function takes in a locator, an actionable, and an optional negative boolean and options</li>
<li>object, and then checks the page for the actionable based on the locator and options.</li>
</ul>

**Kind**: global variable  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| locator | <code>string</code> |  | <p>string - the locator of the element</p> |
| actionable | <code>Actionable</code> |  | <p>Actionable - This is an enum that I created that has the following values:</p> |
| [negative] | <code>boolean</code> | <code>false</code> | <p>boolean = false,</p> |
| [options] | <code>LocatorOptions</code> |  | <p>LocatorOptions</p> |


* [WebFragmentActions](#WebFragmentActions)
    * [.webElement(locator, [baseLocator], [options])](#WebFragmentActions+webElement) ⇒
    * [.waitForWebElement(locator, [actionable], [baseLocator], [options])](#WebFragmentActions+waitForWebElement) ⇒
    * [.waitForNthWebElement(locator, nth, [actionable])](#WebFragmentActions+waitForNthWebElement) ⇒

<a name="WebFragmentActions+webElement"></a>

# webFragmentActions.webElement(locator, [baseLocator], [options]) ⇒
<p>webElement</p>
<ul>
<li>This function returns a new LocatorFragment object, which is a class that extends the</li>
<li>LocatorFragment interface.</li>
</ul>

**Kind**: instance method of [<code>WebFragmentActions</code>](#WebFragmentActions)  
**Returns**: <p>A LocatorFragment object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| locator | <code>string</code> | <p>string - the locator to find</p> |
| [baseLocator] | <code>Locator</code> | <p>The base locator to use for the element.</p> |
| [options] | <code>FindOptions</code> | <p>FindOptions</p> |

<a name="WebFragmentActions+waitForWebElement"></a>

# webFragmentActions.waitForWebElement(locator, [actionable], [baseLocator], [options]) ⇒
<p>waitForWebElement</p>
<ul>
<li>Wait for a web element to be visible, then return a new LocatorFragment object.</li>
</ul>

**Kind**: instance method of [<code>WebFragmentActions</code>](#WebFragmentActions)  
**Returns**: <p>A LocatorFragment object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| locator | <code>string</code> | <p>string - the locator to find</p> |
| [actionable] | <code>Actionable</code> \| <code>Array.&lt;Actionable&gt;</code> | <p>Actionable | Actionable[]</p> |
| [baseLocator] | <code>Locator</code> | <p>The base locator to use for the find.</p> |
| [options] | <code>FindOptions</code> | <p>FindOptions = {</p> |

<a name="WebFragmentActions+waitForNthWebElement"></a>

# webFragmentActions.waitForNthWebElement(locator, nth, [actionable]) ⇒
<p>waitForNthWebElement</p>
<ul>
<li>Wait for the nth element to be visible, then return a new LocatorFragment object.</li>
</ul>

**Kind**: instance method of [<code>WebFragmentActions</code>](#WebFragmentActions)  
**Returns**: <p>A new instance of the LocatorFragment class.</p>  

| Param | Type | Description |
| --- | --- | --- |
| locator | <code>string</code> | <p>string - the locator to find</p> |
| nth | <code>number</code> | <p>number - the nth element to wait for</p> |
| [actionable] | <code>Actionable</code> \| <code>Array.&lt;Actionable&gt;</code> | <p>Actionable | Actionable[]</p> |

<a name="checkPageActionable"></a>

 checkPageActionable
<p>checkLocatorActionable</p>
<ul>
<li>This function takes in a locator, an actionable, and a negative boolean, and then checks the locator</li>
<li>against the actionable, and if the negative boolean is true, it will check the opposite of the</li>
<li>actionable.</li>
</ul>

**Kind**: global variable  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| locator | <code>Locator</code> |  | <p>Locator - this is the locator that you want to check</p> |
| actionable | <code>Actionable</code> |  | <p>Actionable - This is an enum that contains the following values:</p> |
| [negative] | <code>boolean</code> | <code>false</code> | <p>boolean = false,</p> |
| [options] | <code>LocatorOptions</code> |  | <p>LocatorOptions</p> |

<a name="registerAppUrl"></a>

 registerAppUrl(url)
<p>registerAppUrl</p>
<ul>
<li>To register the base url for testing</li>
</ul>

**Kind**: global function  

| Param | Description |
| --- | --- |
| url | <p>The base URL string</p> |

<a name="waitForPageNetworkResponse"></a>

 waitForPageNetworkResponse()
<p>If the WAIT_FOR_NETWORK_RESPONSE property is set, wait for a network response with the specified URL
and status.</p>

**Kind**: global function  
<a name="waitForLocatorNetworkResponse"></a>

 waitForLocatorNetworkResponse()
<p>If the LocatorCoreCalls.WAIT_FOR_NETWORK_RESPONSE property is set, wait for a network response with
the specified URL and status.</p>

**Kind**: global function  
<a name="waitForNetworkIdle"></a>

 waitForNetworkIdle(options) ⇒
<p>This function waits for the network to be idle for a certain amount of time before continuing.</p>

**Kind**: global function  
**Returns**: <p>A promise.</p>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>WaitForNetworkIdleProps</code> | <p>WaitForNetworkIdleProps = {</p> |

