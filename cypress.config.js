const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  env: {
    login_username: 'myUserNameExample',
    login_password: 'myPasswordExample',
  },
  e2e: {
    baseUrl: 'http://todomvc.com/examples/',
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      //return require('./cypress/plugins/index.js')(on, config)
      return config
    },
  },
})
