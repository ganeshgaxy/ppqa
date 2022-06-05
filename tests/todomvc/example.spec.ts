import { test, expect, Page } from '@playwright/test';
import QAFramework, { createFragment } from '@qa-framework/playwright-ui';
import { TodoMvcPage } from '../../project/todomvc/ui/pages/TodoMvc/TodoMvcPage';
import { TodoMvcPageProps } from '../../project/todomvc/ui/pages/TodoMvc/TodoMvcPage.vars';

test.beforeEach(async ({ page }) => {
  QAFramework.registerAppUrl('https://demo.playwright.dev/');
  QAFramework.registerPlaywrightPage(page);
  QAFramework.registerPlaywrightExpect(expect);
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment',
];

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    // Create 1st todo.
    await todoMvcPage.addNewTodo(TODO_ITEMS[0]);
    await todoMvcPage.verifyTodoLabel(TODO_ITEMS[0]);

    // Create 2nd todo.
    await todoMvcPage.addNewTodo(TODO_ITEMS[1]);
    await todoMvcPage.verifyTodoLabel([TODO_ITEMS[0], TODO_ITEMS[1]]);

    await checkNumberOfTodosInLocalStorage(page, 2);
  });

  test('should clear text input field when an item is added', async ({
    page,
  }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    // Create one todo item.
    await todoMvcPage.addNewTodo(TODO_ITEMS[0]);
    await todoMvcPage.verifyTodoLabel(TODO_ITEMS[0]);

    // Check that input is empty.
    await todoMvcPage.verifyEmptyTodoTextBox();
    await checkNumberOfTodosInLocalStorage(page, 1);
  });

  test('should append new items to the bottom of the list', async ({
    page,
  }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    // Create 3 items.
    await createDefaultTodos(todoMvcPage);

    // Check test using different methods.
    await todoMvcPage.verifyTodoCountLabel('3 items left');
    await todoMvcPage.verifyTodoCountLabelContains('3');
    await todoMvcPage.verifyTodoCountLabel(/3/);

    // Check all items in one call.
    await todoMvcPage.verifyTodoLabel(TODO_ITEMS);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test('should show #main and #footer when items added', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    // Create one todo item.
    await todoMvcPage.addNewTodo(TODO_ITEMS[0]);

    await todoMvcPage.verifyIfMainElementVisible();
    await todoMvcPage.verifyIfFooterElementVisible();
    await checkNumberOfTodosInLocalStorage(page, 1);
  });
});

test.describe('Mark all as completed', () => {
  test.beforeEach(async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    await createDefaultTodos(todoMvcPage);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test.afterEach(async ({ page }) => {
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test('should allow me to mark all items as completed', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    // Complete all todos.
    await todoMvcPage.toggleAllTodosCheck();

    // Ensure all todos have 'completed' class.
    await todoMvcPage.verifyTodoItemsClass([
      'completed',
      'completed',
      'completed',
    ]);
    await checkNumberOfCompletedTodosInLocalStorage(page, 3);
  });

  test('should allow me to clear the complete state of all items', async ({
    page,
  }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    // Check and then immediately uncheck.
    await todoMvcPage.toggleAllTodosCheck();
    await todoMvcPage.toggleAllTodosUncheck();

    // Should be no completed classes.
    await todoMvcPage.verifyTodoItemsClass(['', '', '']);
  });

  test('complete all checkbox should update state when items are completed / cleared', async ({
    page,
  }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );

    await todoMvcPage.toggleAllTodosCheck();
    await todoMvcPage.verifyIfToggleAllIsChecked();
    await checkNumberOfCompletedTodosInLocalStorage(page, 3);

    // Uncheck first todo.
    await todoMvcPage.toggleATodoUncheck(0);

    // Reuse toggleAll locator and make sure its not checked.
    await todoMvcPage.verifyIfToggleAllIsNotChecked();

    await todoMvcPage.toggleATodoCheck(0);
    await checkNumberOfCompletedTodosInLocalStorage(page, 3);

    // Assert the toggle all is checked again.
    await todoMvcPage.verifyIfToggleAllIsChecked();
  });
});

test.describe('Item', () => {
  test('should allow me to mark items as complete', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    // Create two items.
    for (const item of TODO_ITEMS.slice(0, 2)) {
      await todoMvcPage.addNewTodo(item);
    }

    // Check first item.
    await todoMvcPage.toggleATodoCheck(0);
    await todoMvcPage.verifyATodoItemClass(0, 'completed');

    // Check second item.
    await todoMvcPage.verifyATodoItemWithoutClass(1, 'completed');
    await todoMvcPage.toggleATodoCheck(1);

    // Assert completed class.
    await todoMvcPage.verifyATodoItemClass(0, 'completed');
    await todoMvcPage.verifyATodoItemClass(1, 'completed');
  });

  test('should allow me to un-mark items as complete', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    // Create two items.
    for (const item of TODO_ITEMS.slice(0, 2)) {
      await todoMvcPage.addNewTodo(item);
    }

    await todoMvcPage.toggleATodoCheck(0);
    await todoMvcPage.verifyATodoItemClass(0, 'completed');

    await todoMvcPage.verifyATodoItemWithoutClass(1, 'completed');
    await checkNumberOfCompletedTodosInLocalStorage(page, 1);
    await todoMvcPage.toggleATodoUncheck(0);

    await todoMvcPage.verifyATodoItemWithoutClass(0, 'completed');
    await todoMvcPage.verifyATodoItemWithoutClass(1, 'completed');
    await checkNumberOfCompletedTodosInLocalStorage(page, 0);
  });

  test('should allow me to edit an item', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    await createDefaultTodos(todoMvcPage);

    await todoMvcPage.dblClickATodo(1);
    await todoMvcPage.verifyAEditedTodoItemValue(1, TODO_ITEMS[1]);
    await todoMvcPage.editATodoText(1, 'buy some sausages');

    // Explicitly assert the new text value.
    await todoMvcPage.verifyTodosText([
      TODO_ITEMS[0],
      'buy some sausages',
      TODO_ITEMS[2],
    ]);
    await checkTodosInLocalStorage(page, 'buy some sausages');
  });
});

test.describe('Editing', () => {
  test.beforeEach(async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    await createDefaultTodos(todoMvcPage);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test('should hide other controls when editing', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.dblClickATodo(1);
    await todoMvcPage.verifyATodoToggleNotVisible(1);
    await todoMvcPage.verifyATodoLabelNotVisible(1);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test('should save edits on blur', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.dblClickATodo(1);
    await todoMvcPage.editATodoTextWithDispatch(1, 'buy some sausages');

    await todoMvcPage.verifyTodosText([
      TODO_ITEMS[0],
      'buy some sausages',
      TODO_ITEMS[2],
    ]);
    await checkTodosInLocalStorage(page, 'buy some sausages');
  });

  test('should trim entered text', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.dblClickATodo(1);
    await todoMvcPage.editATodoText(1, '    buy some sausages    ');

    await todoMvcPage.verifyTodosText([
      TODO_ITEMS[0],
      'buy some sausages',
      TODO_ITEMS[2],
    ]);
    await checkTodosInLocalStorage(page, 'buy some sausages');
  });

  test('should remove the item if an empty text string was entered', async ({
    page,
  }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.dblClickATodo(1);
    await todoMvcPage.editATodoText(1, '');

    await todoMvcPage.verifyTodosText([TODO_ITEMS[0], TODO_ITEMS[2]]);
  });

  test('should cancel edits on escape', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.dblClickATodo(1);
    await todoMvcPage.escapeATodoText(1);

    await todoMvcPage.verifyTodosText(TODO_ITEMS);
  });
});

test.describe('Counter', () => {
  test('should display the current number of todo items', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    await todoMvcPage.addNewTodo(TODO_ITEMS[0]);
    await todoMvcPage.verifyTodoCountLabelContains('1');

    await todoMvcPage.addNewTodo(TODO_ITEMS[1]);
    await todoMvcPage.verifyTodoCountLabelContains('2');

    await checkNumberOfTodosInLocalStorage(page, 2);
  });
});

test.describe('Clear completed button', () => {
  test.beforeEach(async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    await createDefaultTodos(todoMvcPage);
  });

  test('should display the correct text', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.firstTodoToggleCheck();
    await todoMvcPage.verifyClearCompletedLabel('Clear completed');
  });

  test('should remove completed items when clicked', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.toggleATodoCheck(1);
    await todoMvcPage.clickClearCompletedLabel();
    await todoMvcPage.verifyTodosCount(2);
    await todoMvcPage.verifyTodosText([TODO_ITEMS[0], TODO_ITEMS[2]]);
  });

  test('should be hidden when there are no items that are completed', async ({
    page,
  }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.firstTodoToggleCheck();
    await todoMvcPage.clickClearCompletedLabel();
    await todoMvcPage.verifyClearCompletedIsHidden();
  });
});

test.describe('Persistence', () => {
  test('should persist its data', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    for (const item of TODO_ITEMS.slice(0, 2)) {
      await todoMvcPage.addNewTodo(item);
    }

    await todoMvcPage.toggleATodoCheck(0);
    await todoMvcPage.verifyTodosText([TODO_ITEMS[0], TODO_ITEMS[1]]);
    await todoMvcPage.verifyTodoItemsClass(['completed', '']);

    // Ensure there is 1 completed item.
    checkNumberOfCompletedTodosInLocalStorage(page, 1);

    // Now reload.
    await todoMvcPage.reload();
    await todoMvcPage.verifyTodosText([TODO_ITEMS[0], TODO_ITEMS[1]]);
    await todoMvcPage.verifyTodoItemsClass(['completed', '']);
  });
});

test.describe('Routing', () => {
  test.beforeEach(async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.open();
    await createDefaultTodos(todoMvcPage);
    // make sure the app had a chance to save updated todos in storage
    // before navigating to a new view, otherwise the items can get lost :(
    // in some frameworks like Durandal
    await checkTodosInLocalStorage(page, TODO_ITEMS[0]);
  });

  test('should allow me to display active items', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.nthTodoToggleCheck(1);

    await checkNumberOfCompletedTodosInLocalStorage(page, 1);
    await todoMvcPage.clickOnFilterTodosWithText('Active');
    await todoMvcPage.verifyTodosCount(2);
    await todoMvcPage.verifyTodosText([TODO_ITEMS[0], TODO_ITEMS[2]]);
  });

  test('should respect the back button', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.nthTodoToggleCheck(1);
    await checkNumberOfCompletedTodosInLocalStorage(page, 1);

    await test.step('Showing all items', async () => {
      await todoMvcPage.clickOnFilterTodosWithText('All');
      await todoMvcPage.verifyTodosCount(3);
    });

    await test.step('Showing active items', async () => {
      await todoMvcPage.clickOnFilterTodosWithText('Active');
    });

    await test.step('Showing completed items', async () => {
      await todoMvcPage.clickOnFilterTodosWithText('Completed');
    });

    await todoMvcPage.verifyTodosCount(1);
    await todoMvcPage.goBack();
    await todoMvcPage.verifyTodosCount(2);
    await todoMvcPage.goBack();
    await todoMvcPage.verifyTodosCount(3);
  });

  test('should allow me to display completed items', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.nthTodoToggleCheck(1);
    await checkNumberOfCompletedTodosInLocalStorage(page, 1);
    await todoMvcPage.clickOnFilterTodosWithText('Completed');
    await todoMvcPage.verifyTodosCount(1);
  });

  test('should allow me to display all items', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.nthTodoToggleCheck(1);
    await checkNumberOfCompletedTodosInLocalStorage(page, 1);
    await todoMvcPage.clickOnFilterTodosWithText('Active');
    await todoMvcPage.clickOnFilterTodosWithText('Completed');
    await todoMvcPage.clickOnFilterTodosWithText('All');
    await todoMvcPage.verifyTodosCount(3);
  });

  test('should highlight the currently applied filter', async ({ page }) => {
    let todoMvcPage: TodoMvcPage = createFragment(
      TodoMvcPage,
      TodoMvcPageProps()
    );
    await todoMvcPage.verifyFilterTodosClassWithText('All', 'selected');
    await todoMvcPage.clickOnFilterTodosWithText('Active');
    // Page change - active items.
    await todoMvcPage.verifyFilterTodosClassWithText('Active', 'selected');
    await todoMvcPage.clickOnFilterTodosWithText('Completed');
    // Page change - completed items.
    await todoMvcPage.verifyFilterTodosClassWithText('Completed', 'selected');
  });
});

async function createDefaultTodos(todoMvcPage: TodoMvcPage) {
  for (const item of TODO_ITEMS) {
    await todoMvcPage.addNewTodo(item);
  }
}

async function checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
  return await page.waitForFunction((e) => {
    return JSON.parse(localStorage['react-todos']).length === e;
  }, expected);
}

async function checkNumberOfCompletedTodosInLocalStorage(
  page: Page,
  expected: number
) {
  return await page.waitForFunction((e) => {
    return (
      JSON.parse(localStorage['react-todos']).filter(
        (todo: any) => todo.completed
      ).length === e
    );
  }, expected);
}

async function checkTodosInLocalStorage(page: Page, title: string) {
  return await page.waitForFunction((t) => {
    return JSON.parse(localStorage['react-todos'])
      .map((todo: any) => todo.title)
      .includes(t);
  }, title);
}
