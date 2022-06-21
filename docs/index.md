 Classes

<dl>
<dt><a href="#ApiURLBuilder">ApiURLBuilder</a></dt>
<dd><p>To Build API URLs</p>
</dd>
<dt><a href="#URLBuilder">URLBuilder</a></dt>
<dd></dd>
</dl>

 Functions

<dl>
<dt><a href="#usePlaywrightApi">usePlaywrightApi(request)</a> ⇒</dt>
<dd><p>usePlaywrightApi</p>
<ul>
<li>It returns a proxy object that wraps the PlaywrightApi class</li>
</ul>
</dd>
<dt><a href="#createApiFragment">createApiFragment(ClassObject)</a> ⇒</dt>
<dd><p>createApiFragment</p>
<ul>
<li>To create a api fragment actions object with proxy traps</li>
</ul>
</dd>
<dt><a href="#registerAppUrl">registerAppUrl(url)</a></dt>
<dd><p>registerAppUrl</p>
<ul>
<li>To register the base url for testing</li>
</ul>
</dd>
<dt><a href="#registerAppInfo">registerAppInfo(info)</a></dt>
<dd><p>It takes an object of type AppInfo and assigns it to the appInfo variable</p>
</dd>
<dt><a href="#registerPlaywrightPage">registerPlaywrightPage(page)</a></dt>
<dd><p>registerPlaywrightPage</p>
<ul>
<li>To register the page to be used for testing</li>
</ul>
</dd>
<dt><a href="#registerPlaywrightExpect">registerPlaywrightExpect(expect)</a></dt>
<dd><p>registerPlaywrightExpect</p>
<ul>
<li>To register the expect object to be used for testing</li>
</ul>
</dd>
<dt><a href="#registerPlaywrightAPI">registerPlaywrightAPI(request)</a></dt>
<dd><p>registerPlaywrightAPI</p>
<ul>
<li>To register the api object to be used for testing</li>
</ul>
</dd>
<dt><a href="#registerAll">registerAll(hooks)</a></dt>
<dd><p>It registers all the Playwright functions that we&#39;ll be using in our tests</p>
</dd>
<dt><a href="#registerPlaywrightPageLocator">registerPlaywrightPageLocator(locator, options)</a></dt>
<dd><p>registerPlaywrightPageLocator</p>
<ul>
<li>To register the locator to be used for testing</li>
</ul>
</dd>
<dt><a href="#usePlaywrightPage">usePlaywrightPage(page)</a> ⇒</dt>
<dd><p>usePlaywrightPage
A method called to initialize the PlaywrightPage with given page</p>
</dd>
<dt><a href="#usePlaywrightPageLocator">usePlaywrightPageLocator(locator, options)</a> ⇒</dt>
<dd><p>usePlaywrightPageLocator</p>
<ul>
<li>To use the Playwright Page Locator with proxy</li>
</ul>
</dd>
<dt><a href="#createFragment">createFragment(ClassObject, urlProps)</a> ⇒</dt>
<dd><p>createFragment</p>
<ul>
<li>To create a web fragment object with proxy traps</li>
</ul>
</dd>
<dt><a href="#createFragmentActions">createFragmentActions(ClassObject)</a> ⇒</dt>
<dd><p>createFragmentActions</p>
<ul>
<li>To create a web fragment actions object with proxy traps</li>
</ul>
</dd>
<dt><a href="#usePlaywrightExpect">usePlaywrightExpect(expect)</a> ⇒</dt>
<dd><p>usePlaywrightExpect
To use the playwright expect with Proxy traps</p>
</dd>
<dt><a href="#useWebElement">useWebElement(webElementProps)</a> ⇒</dt>
<dd><p>useWebElement</p>
<ul>
<li>To create a WebElement for the given props</li>
</ul>
</dd>
<dt><a href="#checkPageActionable">checkPageActionable(locator, actionable, [negative], [options])</a></dt>
<dd><p>checkPageActionable</p>
<ul>
<li>This function takes in a locator, an actionable, and an optional negative boolean and options</li>
<li>object, and then checks the page for the actionable based on the locator and options.</li>
</ul>
</dd>
<dt><a href="#checkLocatorActionable">checkLocatorActionable(locator, actionable, [negative], [options])</a></dt>
<dd><p>checkLocatorActionable</p>
<ul>
<li>This function takes in a locator, an actionable, and a negative boolean, and then checks the locator</li>
<li>against the actionable, and if the negative boolean is true, it will check the opposite of the</li>
<li>actionable.</li>
</ul>
</dd>
</dl>

<a name="ApiURLBuilder"></a>

 ApiURLBuilder
To Build API URLs

**Kind**: global class  
<a name="URLBuilder"></a>

 URLBuilder
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

 new URLBuilder()
A Simple constructor to initialize the _page value
without this, above data member will become undefined

<a name="URLBuilder+culture"></a>

 urlBuilder.culture(culture) ⇒
This function takes a string as a parameter and returns a URLBuilder object.

**Kind**: instance method of [<code>URLBuilder</code>](#URLBuilder)  
**Returns**: The URLBuilder object.  

| Param | Type | Description |
| --- | --- | --- |
| culture | <code>string</code> | string |

<a name="URLBuilder+suffix"></a>

 urlBuilder.suffix(suffix) ⇒
This function takes a string as an argument and sets the suffix property of the URLBuilder class
to the value of the string argument. It then sets the url property of the URLBuilder class to the
value of the url property plus the value of the suffix property. It then returns the URLBuilder
class.

**Kind**: instance method of [<code>URLBuilder</code>](#URLBuilder)  
**Returns**: The URLBuilder object.  

| Param | Type | Description |
| --- | --- | --- |
| suffix | <code>string</code> | string - The suffix to be added to the URL. |

<a name="URLBuilder+extra"></a>

 urlBuilder.extra(extra) ⇒
It takes a string as an argument, sets the extra property of the _url object to the string, and
then sets the url property of the _url object to the url property of the _url object plus the
extra property of the _url object.

**Kind**: instance method of [<code>URLBuilder</code>](#URLBuilder)  
**Returns**: The URLBuilder object.  

| Param | Type | Description |
| --- | --- | --- |
| extra | <code>string</code> | string - This is the extra string that will be appended to the url. |

<a name="URLBuilder+options"></a>

 urlBuilder.options(options) ⇒
"This function takes an object with optional properties and returns an object with optional
properties."

**Kind**: instance method of [<code>URLBuilder</code>](#URLBuilder)  
**Returns**: The URLBuilder object.  

| Param | Description |
| --- | --- |
| options | simpleOptions |

<a name="URLBuilder+expectedTitle"></a>

 urlBuilder.expectedTitle(expectedTitle) ⇒
This function sets the expectedTitle property of the URL object and returns the URLBuilder object.

**Kind**: instance method of [<code>URLBuilder</code>](#URLBuilder)  
**Returns**: The URLBuilder object.  

| Param | Type | Description |
| --- | --- | --- |
| expectedTitle | <code>string</code> | The title of the page you expect to be on. |

<a name="URLBuilder+build"></a>

 urlBuilder.build() ⇒
The function returns the URLProps object that was created in the constructor.

**Kind**: instance method of [<code>URLBuilder</code>](#URLBuilder)  
**Returns**: The URLProps object.  
<a name="usePlaywrightApi"></a>

 usePlaywrightApi(request) ⇒
usePlaywrightApi
* It returns a proxy object that wraps the PlaywrightApi class

**Kind**: global function  
**Returns**: A Proxy object that is a PlaywrightApiProps.  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>APIRequestContext</code> | APIRequestContext - This is the request object that is passed to the API function. |

<a name="createApiFragment"></a>

 createApiFragment(ClassObject) ⇒
createApiFragment
* To create a api fragment actions object with proxy traps

**Kind**: global function  
**Returns**: The ApiFragment actions with Proxy traps  

| Param | Description |
| --- | --- |
| ClassObject | The ClassObject that will use ApiFragment actions |

<a name="registerAppUrl"></a>

 registerAppUrl(url)
registerAppUrl
* To register the base url for testing

**Kind**: global function  

| Param | Description |
| --- | --- |
| url | The base URL string |

<a name="registerAppInfo"></a>

 registerAppInfo(info)
It takes an object of type AppInfo and assigns it to the appInfo variable

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| info | <code>AppInfo</code> | AppInfo |

<a name="registerPlaywrightPage"></a>

 registerPlaywrightPage(page)
registerPlaywrightPage
* To register the page to be used for testing

**Kind**: global function  

| Param | Description |
| --- | --- |
| page | Playwright tests page to be used |

<a name="registerPlaywrightExpect"></a>

 registerPlaywrightExpect(expect)
registerPlaywrightExpect
* To register the expect object to be used for testing

**Kind**: global function  

| Param | Description |
| --- | --- |
| expect | Playwright tests expect to be used |

<a name="registerPlaywrightAPI"></a>

 registerPlaywrightAPI(request)
registerPlaywrightAPI
* To register the api object to be used for testing

**Kind**: global function  

| Param | Description |
| --- | --- |
| request | Playwright tests request to be used |

<a name="registerAll"></a>

 registerAll(hooks)
It registers all the Playwright functions that we'll be using in our tests

**Kind**: global function  

| Param | Description |
| --- | --- |
| hooks | object that accepts url, page, expect, request module from Playwright |

<a name="registerPlaywrightPageLocator"></a>

 registerPlaywrightPageLocator(locator, options)
registerPlaywrightPageLocator
* To register the locator to be used for testing

**Kind**: global function  

| Param | Description |
| --- | --- |
| locator | The locator to be used for testing |
| options |  |

<a name="usePlaywrightPage"></a>

 usePlaywrightPage(page) ⇒
usePlaywrightPage
A method called to initialize the PlaywrightPage with given page

**Kind**: global function  
**Returns**: The Playwright page object's proxy  

| Param | Description |
| --- | --- |
| page | Playwright page to be used |

<a name="usePlaywrightPageLocator"></a>

 usePlaywrightPageLocator(locator, options) ⇒
usePlaywrightPageLocator
* To use the Playwright Page Locator with proxy

**Kind**: global function  
**Returns**: The PageLocator with Proxy  

| Param | Description |
| --- | --- |
| locator | The element Locator |
| options | The Locator Options for element |

<a name="createFragment"></a>

 createFragment(ClassObject, urlProps) ⇒
createFragment
* To create a web fragment object with proxy traps

**Kind**: global function  
**Returns**: The WebFragment with Proxy traps  

| Param | Description |
| --- | --- |
| ClassObject | The ClassObject that will use WebFragment |
| urlProps | The URLProps |

<a name="createFragmentActions"></a>

 createFragmentActions(ClassObject) ⇒
createFragmentActions
* To create a web fragment actions object with proxy traps

**Kind**: global function  
**Returns**: The WebFragment actions with Proxy traps  

| Param | Description |
| --- | --- |
| ClassObject | The ClassObject that will use WebFragment actions |

<a name="usePlaywrightExpect"></a>

 usePlaywrightExpect(expect) ⇒
usePlaywrightExpect
To use the playwright expect with Proxy traps

**Kind**: global function  
**Returns**: A proxy object for PlaywrightExpect  

| Param | Description |
| --- | --- |
| expect | Playwright Expect to be used |

<a name="useWebElement"></a>

 useWebElement(webElementProps) ⇒
useWebElement
* To create a WebElement for the given props

**Kind**: global function  
**Returns**: WebElement  

| Param | Description |
| --- | --- |
| webElementProps | WebElementType |

<a name="checkPageActionable"></a>

 checkPageActionable(locator, actionable, [negative], [options])
checkPageActionable
* This function takes in a locator, an actionable, and an optional negative boolean and options
* object, and then checks the page for the actionable based on the locator and options.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| locator | <code>string</code> |  | string - the locator of the element |
| actionable | <code>Actionable</code> |  | Actionable - This is an enum that I created that has the following values: |
| [negative] | <code>boolean</code> | <code>false</code> | boolean = false, |
| [options] | <code>LocatorOptions</code> |  | LocatorOptions = { |

<a name="checkLocatorActionable"></a>

 checkLocatorActionable(locator, actionable, [negative], [options])
checkLocatorActionable
* This function takes in a locator, an actionable, and a negative boolean, and then checks the locator
* against the actionable, and if the negative boolean is true, it will check the opposite of the
* actionable.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| locator | <code>Locator</code> |  | Locator - this is the locator that you want to check |
| actionable | <code>Actionable</code> |  | Actionable - This is an enum that contains the following values: |
| [negative] | <code>boolean</code> | <code>false</code> | boolean = false, |
| [options] | <code>LocatorOptions</code> |  | LocatorOptions |

