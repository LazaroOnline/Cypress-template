# Cypress-template

With this template you can download the project and start working with Cypress E2E.

The first time you clone this repository you need to initialize it with:
```
npm install
```

To run the tests in debug mode file by file with user interface, execute the command:
```
npm run test:dev
```

To run all tests faster and without UI which is the recommended way to run them all, use:
```
npm run test:all
```

To run only tests with titles containing "[UI]", use:
```
npm run test:ui
```

## Documentation

* [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)
* [Test Selector](https://github.com/bahmutov/cypress-select-tests#cypress-select-tests)

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
```
Other usefull plugins:
```
npm install -D @4tw/cypress-drag-drop
npm install -D cypress-file-upload
```

Thanks to:
https://github.com/bahmutov/cly
