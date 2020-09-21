var getDataTestSelector = (selectorAttribute, selectorOptions) => {
	var selectorPrefix = ''
	var selectorSuffix = ''
	var isLike = false
	var optionIsString = Cypress._.isString(selectorOptions)
	if (optionIsString) {
		selectorSuffix = selectorOptions
	} else if (selectorOptions != null) {
		isLike = selectorOptions.isLike
		selectorPrefix = selectorOptions.prefix || ''
		selectorSuffix = selectorOptions.suffix || ''
		if (selectorOptions.visible) {
			selectorSuffix += ':visible'
		}
	}
	return `${selectorPrefix}[data-test${isLike?'*':''}=${selectorAttribute}]${selectorSuffix}`
}

/** Get DOM elements with the attribute data-test="selectorAttribute" */
Cypress.Commands.add('getDataTest', (selectorAttribute, selectorOptions = null, options) => {
	var selector = getDataTestSelector(selectorAttribute, selectorOptions)
	return cy.get(selector, options)
})

/** Find child DOM elements with the attribute data-test="selectorAttribute" */
Cypress.Commands.add('findDataTest', { prevSubject: true }, (subject, selectorAttribute, selectorOptions = null, options) => {
	var selector = getDataTestSelector(selectorAttribute, selectorOptions)
	return cy.wrap(subject, {log:false}).find(selector, options)
})

Cypress.Commands.add('login', (userName, userPass) => {
	var loginUser = userName || Cypress.env('login_username')
	var loginPass = userPass || Cypress.env('login_password')

	// TODO: login in your app programmatically for non-login related tests. It is the recommended and fastest way. Do not use your UI to login before each test.
	// See examples for different types of logins at:
	// https://docs.cypress.io/guides/getting-started/testing-your-app.html#Logging-in
	// https://docs.cypress.io/examples/examples/recipes.html#Logging-In
	// https://docs.cypress.io/plugins/index.html#authentication
	/*
	// Example:
	return cy.request({
		method: 'POST',
		url: '/my-app/login',
		form: true, // sets Content-Type: application/x-www-form-urlencoded
		body: {
			username: loginUser,
			password: loginPass,
		}
	})
	*/
})
