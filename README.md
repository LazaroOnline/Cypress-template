# Cypress-template

With this template you can download the project and start working with Cypress E2E.

## Requirements
* [Node Js](https://nodejs.org)
* [yarn](https://yarnpkg.com/en/docs/install)
* Code editor ([Visual Studio Code](https://code.visualstudio.com) recommended)
* Visual Studio Code's [plugin for Cucumber's gherkin syntax](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)

## How to run
The first time you clone this repository you need to initialize it by running this commands from the project directory:
```
npm install
yarn install
```

To run the tests in debug mode, file by file with user interface, execute the command:
```
npm run test-Dev
```

To run all tests faster and without UI which is the recommended way to run them all, use:
```
npm run test-All
```

To run only tests written in pure cypress js, use:
```
npm run test-Cypress
```

To run only tests written in cucumber feature files, use:
```
npm run test-Cucumber
```

*Note: "cypress-select-tests" plugin that filters tests by using `grep` doesn't currently work with pickle.js. You can still filter based on file name using `--spec` or maybe using cucumber's tags.

## Documentation

* [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)
* [Test Selector](https://github.com/bahmutov/cypress-select-tests#cypress-select-tests)
* [Cucumber](https://cucumber.io/docs)
* [Cucumber Js](https://github.com/cucumber/cucumber-js#cucumberjs)
* [Cucumber Preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor#run-cucumbergherkin-syntaxed-specs-with-cypressio)
* [PickleJs](https://www.picklejs.com)

Other examples:
* [Cypress Cucumber example](https://github.com/TheBrainFamily/cypress-cucumber-example)
* [PickleJs webpage tests example](https://github.com/hoverinc/picklejs/tree/master/website)

Other Plugins:
* [Drag & Drop](https://github.com/4teamwork/cypress-drag-drop#cypress-drag-drop)
* [File Upload](https://github.com/abramenal/cypress-file-upload#cypress-file-upload)


## Source
This template was built by using these commands:
```
npm init
npm install -D cypress
npx @bahmutov/cly init

npm install -D cypress-select-tests
npm install -D cypress-dark
npm install -D picklejs
```
Other usefull plugins:
```
npm install -D @4tw/cypress-drag-drop
npm install -D cypress-file-upload
```

Thanks to:
https://github.com/bahmutov/cly
