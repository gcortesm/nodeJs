const upperCase = require('../uppercase');

describe('UpperCase',()=>{
  test('obtener uppercase hello',()=>{
    expect(upperCase('hello')).toBe('HELLO');
  });

  beforeAll(()=>{
    console.log('Soy el before all');
  });

  beforeEach(()=>console.log('Before each'));

  afterAll(()=> console.log('After all'));

  afterEach(()=> console.log('After Each'));
});