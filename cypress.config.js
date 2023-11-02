const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o95qsi',
  experimentalCspAllowList: true,
  experimentalWebKitSupport: true,
  includeShadowDom: true,
  chromeWebSecurity: false,
  experimentalSourceRewriting: true,
  e2e: {
    defaultCommandTimeout: 10000,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/*.feature',
    supportFile: "cypress/support/commands.js",
    env: {
      allureReuseAfterSpec: true
    }
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:'cypress/report',
    charts: true,
    reportPageTitle: 'Test Automation Result',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    debug: true,
  }
});
