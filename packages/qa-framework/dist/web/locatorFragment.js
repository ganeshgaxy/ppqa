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
exports.LocatorFragment = void 0;
const fixtureHooks_1 = require("../utils/fixtureHooks");
class LocatorFragment {
    search(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fixtureHooks_1.playwrightPageLocator.type(text);
            return this;
        });
    }
    typeIn(text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fixtureHooks_1.playwrightPageLocator.type(text);
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
exports.LocatorFragment = LocatorFragment;
