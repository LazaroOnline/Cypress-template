/// <reference types="Cypress" />
import * as stubs from '../support/stubs.js'

describe('Test playground to develop tests', { tags: ['Playground']}, () => 
{
	it('[UI] open the page with all stubs for ui integration tests.', {tags: ['UI','UX']}, function() {
		stubs.stubAll()
		cy.visit('/vue')
	})

	it('[API] open the page without stubs for e2e tests.', function() {
		cy.visit('/vue')
	})

	xit('Tests with xit are skipped', () => {
		cy.login()
		// ...	
	})

})
