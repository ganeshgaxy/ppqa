import { Actionable, WebElement, WebFragment } from "qa-framework";
import { TodoMvcPageVars } from "./TodoMvcPage.vars";

export class TodoMvcPage extends WebFragment{
    constructor(url?: string){
        super(url);
    }

    async addNewTodo(locator: string, todo: string){
        let newTodoTextBox: WebElement = TodoMvcPageVars.newTodoTextBox(locator, todo);
        await newTodoTextBox.typeIn();
        await this.waitForWebElement(locator, Actionable.ToBeEnabled).pressKey('Enter');
        console.log("Add")
    }

    async verifyTodo(locator: string, todo: string | string[]){
        console.log("Verify")
        await this.waitForWebElement(locator, Actionable.ToBeEnabled).toHaveText(todo);
    }
}