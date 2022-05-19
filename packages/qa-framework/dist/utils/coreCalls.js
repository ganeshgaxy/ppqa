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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocatorCoreCalls = exports.PageCoreCalls = void 0;
const fixtureHooks_1 = require("./fixtureHooks");
class PageCoreCalls {
}
exports.PageCoreCalls = PageCoreCalls;
_a = PageCoreCalls;
PageCoreCalls.goto = (url) => __awaiter(void 0, void 0, void 0, function* () {
    yield fixtureHooks_1.playwrightPage.page.goto(url);
});
PageCoreCalls.click = (selector, options) => __awaiter(void 0, void 0, void 0, function* () {
    yield fixtureHooks_1.playwrightPage.page.click(selector);
});
PageCoreCalls.type = (selector, text, options) => __awaiter(void 0, void 0, void 0, function* () {
    yield fixtureHooks_1.playwrightPage.page.fill(selector, text);
});
PageCoreCalls.press = (selector, text, options) => __awaiter(void 0, void 0, void 0, function* () {
    yield fixtureHooks_1.playwrightPage.page.press(selector, text);
});
PageCoreCalls.find = (selector) => {
    let locator = fixtureHooks_1.playwrightPage.page.locator(selector);
    (0, fixtureHooks_1.registerPlaywrightPageLocator)(locator);
    return fixtureHooks_1.playwrightPageLocator;
};
class LocatorCoreCalls {
}
exports.LocatorCoreCalls = LocatorCoreCalls;
_b = LocatorCoreCalls;
LocatorCoreCalls.click = (locator, options) => __awaiter(void 0, void 0, void 0, function* () {
    yield locator.click();
});
LocatorCoreCalls.press = (locator, text, options) => __awaiter(void 0, void 0, void 0, function* () {
    yield locator.press(text);
});
LocatorCoreCalls.type = (locator, text, options) => __awaiter(void 0, void 0, void 0, function* () {
    yield locator.fill(text);
});
