import addContext from 'mochawesome/addContext';
function addTestContext(title, value) {
  cy.once('test:after:run', (test) => addContext({ test }, { title, value }));
};

function takeScreenshot(message) {
  message = message.split(' ').join('_');
  cy.screenshot(message, { overwrite: true, capture: 'viewport' });
  const screenshot = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name
    }/${message}.png`;
  addTestContext("Screenshot", screenshot);
}

Cypress.Commands.add('logMessage', (message) => {
  addTestContext("Log", message);
  takeScreenshot(message);
})

Cypress.Commands.add('clickOnElement', (locator) => {
  locator[0].click();
  addTestContext("Click", locator[1] + " on page : " + locator[2]);
  takeScreenshot(locator[1] + " " + locator[2]);
})

Cypress.Commands.add('verifyEqualValue', (locator, text) => {
  locator[0].should('have.value', text);
  addTestContext("Verify equals", locator[1] + " on page : " + locator[2] + " have text : " + text);
  takeScreenshot(locator[1] + " " + locator[2]);
})

Cypress.Commands.add('verifyVisible', (locator) => {
  locator[0].should('be.visible');
  addTestContext("Verify visible", locator[1] + " on page : " + locator[2]);
  takeScreenshot(locator[1] + " " + locator[2]);
})

Cypress.Commands.add('verifyListVisible', (locator) => {
  locator[0].should('have.length.greaterThan', 1);
  addTestContext("Verify list visible", locator[1] + " on page : " + locator[2]);
  takeScreenshot(locator[1] + " " + locator[2]);
})

Cypress.Commands.add('getFirstItem', (locator) => {
  return cy.wrap([locator[0].first(), locator[1] + ": first item", locator[2]]);
})

Cypress.Commands.add('selectFromDropdown', (locator, text) => {
  locator[0].select(text);
  addTestContext("Select from dropdown", locator[1] + " on page : " + locator[2] + " select option : " + text);
  takeScreenshot(locator[1] + " " + locator[2]);
})

Cypress.Commands.add('typeText', (locator, text) => {
  locator[0].clear().type(text);
  addTestContext("Type", "\"" + text + "\" in " + locator[1] + " on page :" + locator[2]);
  takeScreenshot(locator[1] + " " + locator[2]);
})

Cypress.Commands.add('verifyContains', (locator, text) => {
  locator[0].then(($items) => {
    expect($items).to.contain(text);
  });
  addTestContext("Verify Text Contains", "\"" + text + "\" contains in all " + locator[1] + " on page :" + locator[2]);
  takeScreenshot(locator[1] + " " + locator[2]);
})

Cypress.Commands.add('hover', (locator) => {
  locator[0].realHover().wait(5000);
  addTestContext("Hover", locator[1] + " on page :" + locator[2]);
  takeScreenshot(locator[1] + " " + locator[2]);
});

Cypress.Commands.add('clickNoScroll', (locator) => {
  locator[0].click({ scrollBehaviour: false, force: true })
  addTestContext("Click", locator[1] + " on page : " + locator[2]);
  takeScreenshot(locator[1] + " " + locator[2]);
});

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshot = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name
      }/${runnable.parent.title} -- ${test.title} (failed).png`;
    addTestContext("Test status :" + test.state, screenshot);
  }
});