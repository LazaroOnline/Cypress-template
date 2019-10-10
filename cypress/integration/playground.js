/// <reference types="Cypress" />
import * as stubs from '../support/stubs.js'

describe('Test playground to develop tests', () => 
{
	it('[UI] open the page with all stubs for ui integration tests.', function() {
		cy.server()
		stubs.stubAll()
		cy.visit('/vue')
		
	})

	xit('Tests with xit are skipped', () => {

		cy.login()
		// ...	
	})
})
