import { Actionable, URLProps, WebElement, WebFragment } from "qa-framework";
import { TodoMvcPageLocators, TodoMvcPageVars } from "./TodoMvcPage.vars";

export class TodoMvcPage extends WebFragment{
    constructor(urlProps?: URLProps){
        super(urlProps);
    }

    async addNewTodo(todo: string){
        let todoLabels: WebElement = TodoMvcPageVars.newTodoTextBox(todo);
        await todoLabels.typeIn();
        await todoLabels.pressKey('Enter');
    }

    async toggleAllTodosCheck(){
        let toggleAllTodosBtn: WebElement = TodoMvcPageVars.toggleAllBtn();
        await toggleAllTodosBtn.check();
    }

    async editATodoText(nth: number, text: string){
        await this.waitForNthWebElement(TodoMvcPageLocators.todoItemsLocator, nth).findInLocator('.edit').typeIn(text);
        await this.waitForNthWebElement(TodoMvcPageLocators.todoItemsLocator, nth).findInLocator('.edit').pressKey('Enter');
    }

    async escapeATodoText(nth: number){
        await this.waitForNthWebElement(TodoMvcPageLocators.todoItemsLocator, nth).findInLocator('.edit').pressKey('Escape');
    }

    async editATodoTextWithDispatch(nth: number, text: string){
        await this.waitForNthWebElement(TodoMvcPageLocators.todoItemsLocator, nth).findInLocator('.edit').typeIn(text);
        await this.waitForNthWebElement(TodoMvcPageLocators.todoItemsLocator, nth).findInLocator('.edit').dispatchEvent('blur');
    }

    async toggleATodoCheck(nth: number){
        let toggleATodoBtn: WebElement = TodoMvcPageVars.nthTodoItem(nth);
        await toggleATodoBtn.findInLocator('.toggle').check();
    }

    async firstTodoToggleCheck(){
        let toggleATodoBtn: WebElement = TodoMvcPageVars.todoToggleItems();
        await toggleATodoBtn.findFirst().check();
    }

    async dblClickATodo(nth: number){
        let toggleATodoBtn: WebElement = TodoMvcPageVars.nthTodoItem(nth);
        await toggleATodoBtn.dblclick();
    }

    async toggleAllTodosUncheck(){
        let toggleAllTodosBtn: WebElement = TodoMvcPageVars.toggleAllBtn();
        await toggleAllTodosBtn.uncheck();
    }

    async toggleATodoUncheck(nth: number){
        let toggleATodoBtn: WebElement = TodoMvcPageVars.nthTodoItem(nth);
        await toggleATodoBtn.findInLocator('.toggle').uncheck();
    }

    async clickClearCompletedLabel(){
        await this.waitForWebElement(TodoMvcPageLocators.clearCompletedLabelLocator, Actionable.ToBeEnabled).click();
    }

    async verifyClearCompletedIsHidden(){
        await this.webElement(TodoMvcPageLocators.clearCompletedLabelLocator).verifyActionable(Actionable.ToBeHidden);
    }

    async verifyClearCompletedLabel(text: string | string[]){
        await this.waitForWebElement(TodoMvcPageLocators.clearCompletedLabelLocator, Actionable.ToBeEnabled).assert().toHaveText(text);
    }

    async verifyTodoLabel(todo: string | string[]){
        await this.waitForWebElement(TodoMvcPageLocators.todoLabelSelector, Actionable.ToBeEnabled).assert().toHaveText(todo);
    }

    async verifyTodosCount(count: number){
        await this.waitForWebElement(TodoMvcPageLocators.todoItemsLocator, Actionable.ToBeEnabled).assert().toHaveCount(count);
    }

    async verifyTodosText(text: string | RegExp | (string | RegExp)[]){
        await this.waitForWebElement(TodoMvcPageLocators.todoItemsLocator, Actionable.ToBeEnabled).assert().toHaveText(text);
    }

    async verifyTodoItemsClass(todoClass: string | string[]){
        await this.waitForWebElement(TodoMvcPageLocators.todoItemsLocator, Actionable.ToBeEnabled).assert().toHaveClass(todoClass);
    }

    async verifyATodoItemClass(nth: number, todoClass: string | string[]){
        await this.waitForNthWebElement(TodoMvcPageLocators.todoItemsLocator, nth, Actionable.ToBeEnabled).assert().toHaveClass(todoClass);
    }

    async verifyATodoItemWithoutClass(nth: number, todoClass: string | string[]){
        await this.waitForNthWebElement(TodoMvcPageLocators.todoItemsLocator, nth, Actionable.ToBeEnabled).assert().not().toHaveClass(todoClass);
    }

    async verifyAEditedTodoItemValue(nth: number, text: string | RegExp){
        let toggleATodoBtn: WebElement = TodoMvcPageVars.nthTodoItem(nth);
        await toggleATodoBtn.findInLocator('.edit').assert().toHaveValue(text);
    }

    async verifyTodoCountLabelContains(text: string){
        await this.waitForWebElement(TodoMvcPageLocators.todoCountLabelSelector, Actionable.ToBeEnabled).assert().toContainText(text);
    }

    async verifyTodoCountLabel(text: string | RegExp | (string | RegExp)[]){
        await this.waitForWebElement(TodoMvcPageLocators.todoCountLabelSelector, Actionable.ToBeEnabled).assert().toHaveText(text);
    }

    async verifyATodoToggleNotVisible(nth: number){
        let toggleATodoBtn: WebElement = TodoMvcPageVars.nthTodoItem(nth);
        await toggleATodoBtn.findInLocator('.toggle').verifyNotActionable(Actionable.ToBeVisible);
    }

    async verifyATodoLabelNotVisible(nth: number){
        let toggleATodoBtn: WebElement = TodoMvcPageVars.nthTodoItem(nth);
        await toggleATodoBtn.findInLocator('label').verifyNotActionable(Actionable.ToBeVisible);
    }

    async verifyIfMainElementVisible(){
        await this.webElement(TodoMvcPageLocators.mainElementLocator).verifyActionable(Actionable.ToBeVisible);
    }

    async verifyIfToggleAllIsChecked(){
        await this.webElement(TodoMvcPageLocators.toggleAllBtnLocator).verifyActionable(Actionable.ToBeChecked);
    }

    async verifyIfToggleAllIsNotChecked(){
        await this.webElement(TodoMvcPageLocators.toggleAllBtnLocator).verifyNotActionable(Actionable.ToBeChecked);
    }

    async verifyIfFooterElementVisible(){
        await this.webElement(TodoMvcPageLocators.footerElementLocator).verifyActionable(Actionable.ToBeVisible);
    }

    async verifyEmptyTodoTextBox(){
        let newTodoTextBox: WebElement = TodoMvcPageVars.newTodoTextBox();
        await newTodoTextBox.assert().toBeEmpty();
    }
}