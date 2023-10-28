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
      // implement node event listeners here
    },
  },
});
