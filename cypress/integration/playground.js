/// <reference types="Cypress" />
import * as stubs from '../support/stubs.js'

describe('Test playground to develop tests', () => 
{
	it('open the page with all stubs', function() {
		cy.server()
		stubs.stubAll()
		cy.visit('/vue')
		
	})

	xit('Tests with xit are skipped', () => {

		cy.login()
		// ...	
	})
})
