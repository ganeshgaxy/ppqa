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
exports.checkActionable = exports.WebFragment = void 0;
const test_1 = require("@playwright/test");
const fixtureHooks_1 = require("../utils/fixtureHooks");
const uiActions_1 = require("../utils/uiActions");
const locatorFragment_1 = require("./locatorFragment");
class WebFragment {
    constructor(defaultUrl) {
        this.defaultURl = defaultUrl && defaultUrl;
    }
    open(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fixtureHooks_1.playwrightPage.goto(url ? url : this.defaultURl ? this.defaultURl : 'ha ha ha');
        });
    }
    webElement(locator) {
        fixtureHooks_1.playwrightPage.find(locator);
        return new locatorFragment_1.LocatorFragment();
    }
    waitForWebElement(locator, actionable) {
        fixtureHooks_1.playwrightPage.find(locator);
        if (actionable && Array.isArray(actionable)) {
            for (let actionableCheck of actionable) {
                new Promise((resolve, _) => {
                    resolve((0, exports.checkActionable)(locator, actionableCheck));
                });
            }
        }
        else if (actionable) {
            new Promise((resolve, _) => {
                resolve((0, exports.checkActionable)(locator, actionable));
            });
        }
        return new locatorFragment_1.LocatorFragment();
    }
}
exports.WebFragment = WebFragment;
const checkActionable = (locator, actionable) => __awaiter(void 0, void 0, void 0, function* () {
    switch (actionable) {
        case uiActions_1.Actionable.ToBeChecked:
            (0, test_1.expect)(yield fixtureHooks_1.playwrightPage.page.isChecked(locator)).toBeTruthy();
            break;
        case uiActions_1.Actionable.ToBeDisabled:
            (0, test_1.expect)(yield fixtureHooks_1.playwrightPage.page.isDisabled(locator)).toBeTruthy();
            break;
        case uiActions_1.Actionable.ToBeEditable:
            (0, test_1.expect)(yield fixtureHooks_1.playwrightPage.page.isEditable(locator)).toBeTruthy();
            break;
        case uiActions_1.Actionable.ToBeEnabled:
            (0, test_1.expect)(yield fixtureHooks_1.playwrightPage.page.isEnabled(locator)).toBeTruthy();
            break;
        case uiActions_1.Actionable.ToBeHidden:
            (0, test_1.expect)(yield fixtureHooks_1.playwrightPage.page.isHidden(locator)).toBeTruthy();
            break;
        case uiActions_1.Actionable.ToBeVisible:
            (0, test_1.expect)(yield fixtureHooks_1.playwrightPage.page.isVisible(locator)).toBeTruthy();
            break;
        default:
            console.log('HardPass');
    }
});
exports.checkActionable = checkActionable;
