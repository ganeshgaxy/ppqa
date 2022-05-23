import { URLBuilder, URLProps, useWebElement, WebElement } from "qa-framework";

export const TodoMvcPageProps = (): URLProps => new URLBuilder().suffix("todomvc").build();

export abstract class TodoMvcPageLocators{
    static newTodoTextBoxSelector = '.new-todo';
    static todoLabelSelector = '.view label';
    static todoCountLabelSelector = '.todo-count';
    static mainElementLocator = '.todo-count';
    static footerElementLocator = '.todo-count';
    static toggleAllBtnLocator = '.toggle-all';
    static todoItemsLocator = '.todo-list li';
    static todoToggleItemsLocator = '.todo-list li .toggle';
    static clearCompletedLabelLocator = '.clear-completed';
    static filterTodoWithTextLocator = (filterText: string) => `.filters >> text=${filterText}`;
}

export abstract class TodoMvcPageVars{
    static newTodoTextBox = (text?: string): WebElement => useWebElement({locator: TodoMvcPageLocators.newTodoTextBoxSelector, text})
    static todoLabels = (): WebElement => useWebElement({locator: TodoMvcPageLocators.todoLabelSelector})
    static todoCountLabel = (): WebElement => useWebElement({locator: TodoMvcPageLocators.todoCountLabelSelector})
    static mainBlockElement = (): WebElement => useWebElement({locator: TodoMvcPageLocators.mainElementLocator})
    static footerBlockElement = (): WebElement => useWebElement({locator: TodoMvcPageLocators.footerElementLocator})
    static toggleAllBtn = (): WebElement => useWebElement({locator: TodoMvcPageLocators.toggleAllBtnLocator})
    static todoItems = (): WebElement => useWebElement({locator: TodoMvcPageLocators.todoItemsLocator})
    static todoToggleItems = (): WebElement => useWebElement({locator: TodoMvcPageLocators.todoToggleItemsLocator})
    static nthTodoItem = (nth: number) => useWebElement({locator: TodoMvcPageLocators.todoItemsLocator, nth})
    static clearCompletedLabel = (): WebElement => useWebElement({locator: TodoMvcPageLocators.clearCompletedLabelLocator})
    static filterTodoWithText = (filterText: string): WebElement => useWebElement({locator: TodoMvcPageLocators.filterTodoWithTextLocator(filterText)})
}