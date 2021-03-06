<p align="center">
  <a href="" rel="noopener">
 <img width=300px height=90px src="https://i.imgur.com/5dJr9VT.png" alt="Project logo"></a>
</p>

<h3 align="center">PPQA - Not a library but just a framework</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ganeshgaxy/ppqa.svg)](https://github.com/ganeshgaxy/ppqa/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/ganeshgaxy/ppqa.svg)](https://github.com/ganeshgaxy/ppqa/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> PPQA is a project not a standalone library which is designed to provide any software automation testing team with a framework that suites the corporate level standards and flexibility towards building your own test cases with good practices and guidelines. This project uses <a href='https://github.com/microsoft/playwright'>playwright</a> and <a href='https://github.com/microsoft/playwright-test'>playwright/test</a> for all UI and API interactions.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Codespaces](#codespaces)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Playwright is arguably a one of the best automation tool available right now. This project harnesses the power of playwright and combined it with good test writing principles to better help integration testers come up with good quality test cases and test components/modules. This project will also explain the necessary guidelines a tester has to follow while writing your test cases. Currently this project is only suitable for testing web apps.

## 🏁 Getting Started <a name = "getting_started"></a>

Yarn is highly recommended for this project/framework. Please install yarn if you don't have using below command.

This framework also forces the users to use only typescript and also requires a good practical knowledge on playwright.

```node
npm i yarn -g
```

If you are using this framework for the first time, see the below instructions to set it up. See [codespaces](#codespaces) for notes on how to deploy the project on a live system.

Clone this repo and open it in your VSCODE. After that open the terminal for the current project folder and start following the instructions below,

First time setup command in the terminal

```node
yarn run dev-setup
```

### Prerequisites

Dev setup command take care of everything that is required but in case of failure, please update nodejs. This project also uses [lerna](https://github.com/lerna/lerna) for using workspaces

Use the below command to install lerna globally, if required as Dev Setup should have already installed [lerna](https://github.com/lerna/lerna) locally.

```node
yarn add lerna -d
```

### Installing

A step by step series of examples that tell you how to get the project/framework usable.

This project has workspaces and it is present under _packages_ folder. So in order to build the workspace library project simple run below command from the current project's terminal. This command will link the package to the current project

```node
yarn run build
```

Install the necessary extensions mentioned in the Recommended Extensions sections, You can find them under _.vscode/extensions.json_

All the test files are placed under _tests_ folder and the project modules are under _project_ folder.

This framework design is mostly object oriented.

## 🔧 Running the tests <a name = "tests"></a>

You can simply use the playwright runner commands to run the tests in this framework

### Run tests individually

You can add the recommended playwright extension or simply run the below command to run cases by test name

```node
npx playwright test -g 'TEST_CASE_NAME'
```

## 🎈 Usage <a name="usage"></a>

Check the Github Pages [here](https://ganeshgaxy.github.io/ppqa/)

In order to use this framework just activate the below hooks in _test.beforeAll_ like below.

```ts
import { test, expect, Page } from '@playwright/test';
import QAFramework, { createFragment } from '@qa-framework/playwright-ui';

test.beforeEach(async ({ page }) => {
  QAFramework.registerAppUrl('https://demo.playwright.dev/');
  QAFramework.registerPlaywrightPage(page);
  QAFramework.registerPlaywrightExpect(expect);
});
```

And all the available core functionalities are available under _import QAFramework from '@qa-framework/playwright-ui';_

The usage of this framework is further reduced to few components like WebFragments, WebElements and WebFragmentActions

You can create a WebElement like below

```ts
export abstract class TodoMvcPageLocators {
  static newTodoTextBoxSelector = '.new-todo';
...

export abstract class TodoMvcPageVars {
  static newTodoTextBox = (text?: string): WebElement =>
    useWebElement({
      locator: TodoMvcPageLocators.newTodoTextBoxSelector,
      text,
    });
...
```

This WebElement can be later used like below,

```ts
async addNewTodo(todo: string) {
  let todoLabels: WebElement = TodoMvcPageVars.newTodoTextBox(todo);
  await todoLabels.typeIn();
  await todoLabels.pressKey('Enter');
}
```

This same thing can be achieved without using the WebElement too,

```ts
export abstract class TodoMvcPageLocators {
  static todoToggleItemsLocator = '.todo-list li .toggle';
...

export class TodoMvcPage extends WebFragment {
  constructor(urlProps?: URLProps) {
    super(urlProps);
  }
  async editATodoText(nth: number, text: string) {
      await this.waitForNthWebElement(TodoMvcPageLocators.todoItemsLocator, nth)
        .findInLocator('.edit')
        .typeIn(text);
...
```

As shown above the element can be accessed by using _this.webElement_, _this.waitForWebElement_ and more. It is only available under class that extends WebFragment

You can finally create test cases like below,

```ts
export const TodoMvcPageProps = (): URLProps =>
  new URLBuilder().suffix('todomvc').build();

...
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
...
```

## 🚀 Codespaces <a name = "codespaces"></a>

Dev container files are already added to this project. Users can simply create codespaces directly from Github and start following this same ReadMe to set up the framework.

The only difference is by default if you try to run a case, it will fail as xvfbrun is enabled by default.

Please either add HEADLESS option like below or edit the _playwright.config.ts_ to always run headless

```node
export HEADLESS=true && npx playwright test
```

## ⛏️ Built Using <a name = "built_using"></a>

- [Playwright](https://playwright.dev/) - Testing tool/framework
- [Lerna](https://expressjs.com/) - Monorepo management
- [Yarn](https://vuejs.org/) - Package management
- [NodeJs](https://nodejs.org/en/) - Environment

## ✍️ Authors <a name = "authors"></a>

- [@ganeshgaxy](https://github.com/ganeshgaxy) - Idea & Initial work

See also the list of [contributors](https://github.com/ganeshgaxy/ppqa/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Inspiration
- References
