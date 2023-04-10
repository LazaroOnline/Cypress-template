
/** Prevent any api call that can modify data. Useful to perform UI integration tests. */
export var stubAll = () => {
	stubAllEditsForUrl('.*', 'all')
}

export var stubAllEditsForUrl = (url, alias, staticResponse = { statusCode: 200, body: 'Ok (cypress stub response)' }) => {
	// If no methods are specified then all methods are intercepted.
	// var methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
	var routeMatcher = {
		url: url,
	}
	cy.intercept(routeMatcher, staticResponse)
		.as(alias)
}
