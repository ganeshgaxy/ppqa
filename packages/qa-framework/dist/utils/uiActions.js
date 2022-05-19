"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFragment = exports.usePlaywrightPageLocator = exports.PlaywrightPageLocator = exports.usePlaywrightPage = exports.PlaywrightPage = exports.Actionable = void 0;
const coreCalls_1 = require("./coreCalls");
var Actionable;
(function (Actionable) {
    Actionable[Actionable["ToBeChecked"] = 0] = "ToBeChecked";
    Actionable[Actionable["ToBeDisabled"] = 1] = "ToBeDisabled";
    Actionable[Actionable["ToBeEditable"] = 2] = "ToBeEditable";
    Actionable[Actionable["ToBeEnabled"] = 3] = "ToBeEnabled";
    Actionable[Actionable["ToBeHidden"] = 4] = "ToBeHidden";
    Actionable[Actionable["ToBeVisible"] = 5] = "ToBeVisible";
})(Actionable = exports.Actionable || (exports.Actionable = {}));
class PlaywrightPage {
    constructor(page) {
        this.page = page;
    }
    goto(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield coreCalls_1.PageCoreCalls.goto(url);
        });
    }
    click(selector, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield coreCalls_1.PageCoreCalls.click(selector, options && options);
        });
    }
    type(selector, text, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield coreCalls_1.PageCoreCalls.type(selector, text, options && options);
        });
    }
    find(locator) {
        return coreCalls_1.PageCoreCalls.find(locator);
    }
}
exports.PlaywrightPage = PlaywrightPage;
const usePlaywrightPage = (page) => {
    const returnObject = new PlaywrightPage(page);
    const handler = {};
    return new Proxy(returnObject, handler);
};
exports.usePlaywrightPage = usePlaywrightPage;
class PlaywrightPageLocator {
    constructor(locator, options) {
        this.locator = locator;
        this.options = options && options;
    }
    click() {
        return __awaiter(this, void 0, void 0, function* () {
            yield coreCalls_1.LocatorCoreCalls.click(this.locator, this.options && this.options);
        });
    }
    press(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield coreCalls_1.LocatorCoreCalls.press(this.locator, text, this.options && this.options);
        });
    }
    type(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield coreCalls_1.LocatorCoreCalls.type(this.locator, text, this.options && this.options);
        });
    }
}
exports.PlaywrightPageLocator = PlaywrightPageLocator;
const usePlaywrightPageLocator = (locator, options) => {
    const returnObject = new PlaywrightPageLocator(locator, options);
    const handler = {};
    return new Proxy(returnObject, handler);
};
exports.usePlaywrightPageLocator = usePlaywrightPageLocator;
const createFragment = (ClassObject, url) => {
    const returnObject = new ClassObject(url && url);
    const handler = {};
    return new Proxy(returnObject, handler);
};
exports.createFragment = createFragment;
