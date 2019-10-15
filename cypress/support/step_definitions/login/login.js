import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import { setElementSelector, setScreens } from 'picklejs/common/variables'
import generateAutoPhrases from 'picklejs/cypress'
import selectors from './selectors.json'
import screens from '../screens.json'

generateAutoPhrases()
setScreens(screens)
setElementSelector(selectors)

Given(`I do something`, () => {
	// do something...
})

When(`I do something`, () => {
	// do something...
})

Then(`I see {string} in the title`, (title) => {
	cy.title().should("include", title)
})
