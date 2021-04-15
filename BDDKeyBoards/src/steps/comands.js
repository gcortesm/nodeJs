const { Given, When, Then } = require("cucumber");
const assert = require("assert").strict;
const apiKeyBoards = require("../util/apiKeyBoards");

const url = 'http://localhost:80'

Given("un conjunto de comandos {}", request => {
  this.request = JSON.parse(request);
});

When("envio una solicitud POST a {}", async path => {
  this.response = await apiKeyBoards.createCommand(url+path, this.request);
});

Then("yo obtengo el codigo de respuesta {int}", async code => {
  assert.equal(this.response.status, code);
});


Given("un comando con el {int}", request => {
  this.request = request;
});

When("envio una solicitud GET a {}", async path => {
  this.response = await apiKeyBoards.getCommandById(url+path,this.request);
});

Then("yo obtengo el commando con respuesta {}", async code => {
  assert.deepEqual(this.response.data, JSON.parse(code));
});