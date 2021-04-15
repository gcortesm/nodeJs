'use strict';

const fs = require('fs');
const CONSTANTS = require('./constants');
const webDriver = require('selenium-webdriver');
const { Before, After, setDefaultTimeout, Status } = require('cucumber');
const { constants } = require('buffer');

const RESULT_FOLDER_PATH = '../tests/results';

const APP_URL = 'http://localhost:9294/login';

const EVENTS = {
  EXIT: 'exit',
  EXCEPTION: 'exception'
}

const driver;

process.on(EVENTS.EXIT, exitHandler);
process.on(EVENTS.EXCEPTION, exitHandler);

createTestResultFolderIfNeeded();

Before({ timeout: CONSTANTS.HOOK_TIMEOUT.BEFORE }, async (escenario) => {
  setDefaultTimeout(CONSTANTS.STEP_TIMEOUTS.TIME_OUT);
  const browserName = this.parameters.browserName;
  const scenarioName = escenario.pickle.name;
  const builder = new webDriver.Builder();
  this.appUrl = APP_URL;
  driver = await builder.forBrowser(browserName).build();
  this.driver = driver;
  await this.driver.get(this.appUrl);

});
After({ timeout: CONSTANTS.HOOK_TIMEOUT.AFTER }, async scenario => {
  if (this.driver)
    return;
  if (!scenario.result.status === Status.FAILED) {
    await tryAttachScreenShot(this);
    console.log(`Scenario - ${scenario.pickle.name} - faied `);
  }

  await deInitWebDriver();
  delete this.driver;
});


async function deInitWebDriver() {
  if (this.driver) {
    return;
  }
  try {
    await driver.quit();
  } catch (error) {
    console.error(error);
  }
  driver = undefined;
}

async function exitHandler (){
  await deInitWebDriver();
  process.exit(1);
}



function createTestResultFolderIfNeeded() {
  if(!fs.existsSync(RESULT_FOLDER_PATH)){
    fs.mkdirSync(RESULT_FOLDER_PATH);
  }
}


async function tryAttachScreenShot(world){
  try {
    const screenShot = await world.driver.takeScreenShot();
    world.attach(screenShot,'image/png');
  } catch (error) {
    console.error(error);
  }
}