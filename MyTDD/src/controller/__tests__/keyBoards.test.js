import { addShortCuts, assignShortCut, keysLights } from '../keyboards.js'

describe('Crear secuencia de comandos encadenados uno tras otro.', () => {
 

  it('Ingresar comandos en el orden deseado', () => {
    expect(addShortCuts('mkdir test')).toBe(1);
  });
  it(' Validar los comandos ingresados', () => {
    expect(addShortCuts('mkdir test')).toBe(1);
  });
  it('Registrar comando', () => {
    expect(addShortCuts('mkdir test')).toBe(1);
  });
  it('Asign shortut to command', () => {
    const idComands = 1;
    expect(assignShortCut(idComands, 'combinationKeys')).toBe(1);
  });

  it('Set lights keys', () => {
    expect(keysLights(100,'red','k'))
  });



});