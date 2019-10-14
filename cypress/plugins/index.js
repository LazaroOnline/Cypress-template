// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)


/* Custom tests selector:
const selectTests = require('cypress-select-tests')
// return test names you want to run
const pickTests = (filename, foundTests, cypressConfig) => {
	// found tests will be names of the tests found in "filename" spec
	// it is a list of names, each name an Array of strings
	// ['suite 1', 'suite 2', ..., 'test name']

	// return [] to skip ALL tests
	// OR
	// let's only run tests with "does" in the title
	return foundTests.filter(fullTestName => fullTestName.join(' ').includes('does'))
}
*/

/*
const selectTestsWithGrep = require('cypress-select-tests/grep')
module.exports = (on, config) => {
	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config
	on('file:preprocessor', selectTestsWithGrep(config))
	// Custom selector:
	// on('file:preprocessor', selectTests(config, pickTests))
}
*/

const pickle = require('picklejs/cypress/plugin');

module.exports = pickle;
