"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPlaywrightPageLocator = exports.registerPlaywrightPage = exports.playwrightPageLocator = exports.playwrightPage = void 0;
const uiActions_1 = require("./uiActions");
const registerPlaywrightPage = (page) => {
    exports.playwrightPage = (0, uiActions_1.usePlaywrightPage)(page);
};
exports.registerPlaywrightPage = registerPlaywrightPage;
const registerPlaywrightPageLocator = (locator, options) => {
    exports.playwrightPageLocator = (0, uiActions_1.usePlaywrightPageLocator)(locator, options && options);
};
exports.registerPlaywrightPageLocator = registerPlaywrightPageLocator;
