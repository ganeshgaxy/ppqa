import { Actionable, useWebElement, WebElement } from "qa-framework";

export abstract class TodoMvcPageVars{

    static newTodoTextBox = (locator: string, text: string): WebElement => {
        return useWebElement({locator, text, actionable: Actionable.ToBeEditable})
    }
}