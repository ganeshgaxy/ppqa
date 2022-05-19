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
exports.useWebElement = exports.WebElement = void 0;
const fixtureHooks_1 = require("../utils/fixtureHooks");
const webFragment_1 = require("./webFragment");
class WebElement {
    constructor(webElementProps) {
        this.webElementProps = webElementProps;
        fixtureHooks_1.playwrightPage.find(this.webElementProps.locator);
        if (webElementProps.actionable && Array.isArray(webElementProps.actionable)) {
            for (let actionableCheck of webElementProps.actionable) {
                new Promise((resolve, _) => {
                    resolve((0, webFragment_1.checkActionable)(webElementProps.locator, actionableCheck));
                });
            }
        }
        else if (webElementProps.actionable) {
            let actionable = webElementProps.actionable;
            new Promise((resolve, _) => {
                resolve((0, webFragment_1.checkActionable)(webElementProps.locator, actionable));
            });
        }
    }
    search() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.webElementProps.text) {
                yield fixtureHooks_1.playwrightPageLocator.type(this.webElementProps.text);
            }
            return this;
        });
    }
    typeIn() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.webElementProps.text) {
                yield fixtureHooks_1.playwrightPageLocator.type(this.webElementProps.text);
            }
            return this;
        });
    }
    pressKey(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fixtureHooks_1.playwrightPageLocator.press(text);
            return this;
        });
    }
}
exports.WebElement = WebElement;
const useWebElement = (webElementProps) => {
    const returnObject = new WebElement(webElementProps);
    const handler = {};
    return new Proxy(returnObject, handler);
};
exports.useWebElement = useWebElement;
