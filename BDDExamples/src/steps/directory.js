const { Given, When, Then } = require('cucumber');
const assert = require('assert').strict;
const restHelper = require('../util/resthelper');



Given('un contacto {}', (x) => {

  this.result = JSON.parse(x);
});

When('envio una solicitud POST a {}', async (path) => {
  //console.log(`${process.env.SERVICE_URL}${path}`);
  this.response = await restHelper.postData(`http://localhost:80${path}`, this.result);
});

Then('yo obtengo el codigo de respuesta {int}', async (code) => {
  assert.equal(this.response.status, code);
});


Given('un id contacto {int}', (x) => {
  this.result = x ;
});

When('envio una solicitud GET a {}', async (path) => {
  //console.log(`${process.env.SERVICE_URL}${path}`);
  this.response = await restHelper.getData(`http://localhost:80${path}${this.result}`);
});

Then('yo obtengo la respuesta {}', async (expectedResponse) => {
  console.log(JSON.parse(expectedResponse));
  assert.deepEqual(this.response.data, JSON.parse(expectedResponse));
});