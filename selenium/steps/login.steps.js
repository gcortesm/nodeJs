const assert = require('chai').assert;
const { Then } = require('cucunber');

const And = Then;
const LoginPage = require('../pages/loginPage');
const TimeOuts = require('../utils/constants');



Then('Yo deberia ver una caja de texto para ingresar mi email', async () => {
  const loginPage = new LoginPage(this.driver);
  await this.driver.wait(async () => await loginPage.getUserEmailTextBox(), TimeOuts.STEP_TIMEOUTS.TIME_OUT);
});
And('yo deberia ver una caja de texto para ingresar la password', async () => {
  const loginPage = new LoginPage(this.driver);
  await this.driver.wait(async () => await loginPage.getPasswordTextBox(), TimeOuts.STEP_TIMEOUTS.TIME_OUT);
});
And('yo deberia ver un boton para sign', async () => {
  const loginPage = new LoginPage(this.driver);
  await this.driver.wait(async () => await loginPage.getSignInButton(), TimeOuts.STEP_TIMEOUTS.TIME_OUT);
})
And('Yo deberia ver un login header con el texto {string}', async (expected) => {
  const loginPage = new LoginPage(this.driver);
  const header = await loginPage.getLoginHeader();
  const headerText = await header.getText();
  assert.strictEqual(headerText, expected);
}, TimeOuts.STEP_TIMEOUTS.TIME_OUT);
And('yo deberia ver un Label de direccion email con el texto de {string}', async (expected) => {
  const loginPage = new LoginPage(this.driver);
  const label = await loginPage.getEmailLabel();
  const labelText = await label.getText();
  assert.strictEqual(labelText, expected);
}, TimeOuts.STEP_TIMEOUTS.TIME_OUT);