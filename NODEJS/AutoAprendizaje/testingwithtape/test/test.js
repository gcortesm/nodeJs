const test = require('tape');
const calculatos = require('../calculator.js');
const fs = require('fs');



test('Prueba para ejecutar una suma de dos enteros.', t => {
  t.plan(1);//Le estamos diciendo que en este test solo vamos a hacer una validacion
  t.equal(calculatos.add(4, 5), 9);
});


test('Prueba para ejecutar una suma de dos string.', t => {
  t.plan(1);//Le estamos diciendo que en este test solo vamos a hacer una validacion
  t.equal(calculatos.add("4", "5"), '45');
});

test('Prueba de resta de numeros enteros', t => {
  t.plan(1);
  t.equal(calculatos.rest(5, 5), 0);
});

test('metodos ok', t => {
  t.plan(1);
  t.ok('sdf', 'Estado ok'); // Este metodo nos sirve para saber si un resultado es false o no tiene valor . Esto se llama acerts.

});



test('metodos no ok', t => {
  t.plan(1);
  t.notOk('', 'Estado ok'); // Este es contrario al metodo ok 
});


test('metodos error', t => {
  t.plan(1);
  t.error(false, 'Estado error'); // Este es para saber si un metodo de error nos retorna algun valor. Esto se llama acerts.
});

test('Metodo not Equasl', t => {
  t.plan(1);
  t.notEqual(true, 'otra cosa', 'DEfinitivamente no es igual')
});


test('Metodo loose Equasl', t => {
  t.plan(1);
  t.looseEqual(calculatos.add('5', '5'), '55', 'Es igual en valor');
});

test('Metodo deep Equasl', t => {
  t.plan(1);
  t.deepEqual(calculatos.add('5', '5'), '55');
});



test('Metodo no loose Equasl', t => {
  t.plan(1);
  t.notLooseEqual(calculatos.rest('5', '5'), 55);
});

test('Metodo deep Equasl', t => {
  t.plan(1);
  t.notDeepEqual(calculatos.rest('5', '5'), 55);
});


test('Metodo multiplicar', t => {
  t.plan(1);
  t.equal(calculatos.multiplicar(4, 4), 16);
});


test('Metodo dividir', t => {
  t.plan(1);
  t.equal(calculatos.dividir(4, 4), 1);
});


const writeStream = fs.createWriteStream('secret.txt');


const htest = test.createHarness();
htest('Metodo dividir', t => {
  t.plan(1);
  t.equal(calculatos.dividir(4, 4), 1);
});


htest.createStream().pipe(writeStream);