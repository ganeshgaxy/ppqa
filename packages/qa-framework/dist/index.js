"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFragment = exports.Actionable = exports.useWebElement = exports.WebElement = exports.WebFragment = exports.registerPlaywrightPage = exports.playwrightPage = void 0;
const fixtureHooks_1 = require("./utils/fixtureHooks");
const webElement_1 = require("./web/webElement");
const webFragment_1 = require("./web/webFragment");
const uiActions_1 = require("./utils/uiActions");
var fixtureHooks_2 = require("./utils/fixtureHooks");
Object.defineProperty(exports, "playwrightPage", { enumerable: true, get: function () { return fixtureHooks_2.playwrightPage; } });
Object.defineProperty(exports, "registerPlaywrightPage", { enumerable: true, get: function () { return fixtureHooks_2.registerPlaywrightPage; } });
var webFragment_2 = require("./web/webFragment");
Object.defineProperty(exports, "WebFragment", { enumerable: true, get: function () { return webFragment_2.WebFragment; } });
var webElement_2 = require("./web/webElement");
Object.defineProperty(exports, "WebElement", { enumerable: true, get: function () { return webElement_2.WebElement; } });
Object.defineProperty(exports, "useWebElement", { enumerable: true, get: function () { return webElement_2.useWebElement; } });
var uiActions_2 = require("./utils/uiActions");
Object.defineProperty(exports, "Actionable", { enumerable: true, get: function () { return uiActions_2.Actionable; } });
Object.defineProperty(exports, "createFragment", { enumerable: true, get: function () { return uiActions_2.createFragment; } });
class QAFramework {
}
exports.default = QAFramework;
QAFramework.playwrightPage = fixtureHooks_1.playwrightPage;
QAFramework.registerPlaywrightPage = fixtureHooks_1.registerPlaywrightPage;
QAFramework.WebFragment = webFragment_1.WebFragment;
QAFramework.WebElement = webElement_1.WebElement;
QAFramework.useWebElement = webElement_1.useWebElement;
QAFramework.Actionable = uiActions_1.Actionable;
QAFramework.createFragment = uiActions_1.createFragment;
