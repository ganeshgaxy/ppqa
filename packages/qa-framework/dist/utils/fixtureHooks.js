"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPlaywrightPageLocator = exports.registerPlaywrightExpect = exports.registerPlaywrightPage = exports.playwrightPageLocator = exports.playwrightExpect = exports.playwrightPage = void 0;
const uiActions_1 = require("./uiActions");
const uiAssertions_1 = require("./uiAssertions");
const registerPlaywrightPage = (page) => {
    exports.playwrightPage = (0, uiActions_1.usePlaywrightPage)(page);
};
exports.registerPlaywrightPage = registerPlaywrightPage;
const registerPlaywrightExpect = (expect) => {
    exports.playwrightExpect = (0, uiAssertions_1.usePlaywrightExpect)(expect);
};
exports.registerPlaywrightExpect = registerPlaywrightExpect;
const registerPlaywrightPageLocator = (locator, options) => {
    exports.playwrightPageLocator = (0, uiActions_1.usePlaywrightPageLocator)(locator, options && options);
};
exports.registerPlaywrightPageLocator = registerPlaywrightPageLocator;
