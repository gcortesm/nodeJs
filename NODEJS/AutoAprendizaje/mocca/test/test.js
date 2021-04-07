const calculator = require('../calculator');
const calcularIva  = require('../ivacalc');

const assert = require('chai').assert;

describe('prueba de sumar', () => {
  before(()=>console.log('Soy el before'));
  beforeEach(()=> console.log('Soy el before each'));
  it('obetener numero 3', () => {
    assert.equal(calculator.add(3,2) , 5 );
  });
  it('Obtener numero 4  de una multiplicacion', ()=>{
    assert.equal(calculator.multiplicar(2,2),4);
  });
  after(()=>console.log('Soy el after'));
  afterEach(()=> console.log('Soy el after each'));
});

// prueba de codigo dinamico





describe('Prueba de metodos de mocha', ()=>{
  const tests = [
    {args: [1200, 6], expected: 72},
    {args: [34512, 15], expected: 5176.8},
    {args: [300512, 4], expected: 12020.48}
  ];

  tests.forEach(({args, expected}) => {
    it(`calculadore de iva ${args.length} resultado: `, function() {
      const res = calcularIva(args);
      assert.equal(res, expected);
    });
  });
});