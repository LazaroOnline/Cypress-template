
/** Prevent any api call that can modify data. Usefull to perform UI integration tests. */
export var stubAll = () => {
	stubAllEditsForUrl('**', '*')
}

export var stubAllEditsForUrl = (url = '**', aliasPrefix = '*', response = 'Ok (cypress stub response)') => {
	var methods = ['POST', 'PATCH', 'DELETE', 'PUT']
	for (let method of methods) {
		var alias = `${aliasPrefix}-${method}`
		var routeOptions = {
			url: url,
			method: method,
			response: response
		}
		cy.route(routeOptions)
			.as(alias)
	}
}
