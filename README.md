# Cypress-template

With this template you can download the project and start working with Cypress E2E.

## Requirements
* [Node Js](https://nodejs.org)
* Code editor ([Visual Studio Code](https://code.visualstudio.com) recommended)

## How to run
The first time you clone this repository you need to initialize it by running this command from the project directory:
```
npm install
```

To run the tests in debug mode, file by file with user interface, execute the command:
```
npm run test-Dev
```

To run all tests faster and without UI which is the recommended way to run them all, use:
```
npm run test-All
```

To run only tests with titles containing "[UI]", use:
```
npm run test-UI
```

To update the libraries run:
```
npm install -D cypress@latest
npm install -D @cypress/grep@latest
```


## Documentation

* [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)  
* [Test Grep Selector](https://github.com/cypress-io/cypress/tree/develop/npm/grep)  
  To filter test by tags [see the tag docs](https://github.com/cypress-io/cypress/tree/develop/npm/grep#filter-with-tags)  


Other Plugins:
* [Drag & Drop](https://github.com/4teamwork/cypress-drag-drop#cypress-drag-drop)
* [File Upload](https://github.com/abramenal/cypress-file-upload#cypress-file-upload)


## Source
This template was built by using these commands:
```
npm init
npm install -D cypress
npm install -D @cypress/grep 
npx @bahmutov/cly init

npm install -D cypress-grep
```
Other useful plugins:
```
npm install -D @4tw/cypress-drag-drop
npm install -D cypress-file-upload
```

Thanks to:
https://github.com/bahmutov/cly
