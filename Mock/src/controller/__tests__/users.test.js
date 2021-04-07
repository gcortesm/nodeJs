import { getUsers, getUserById } from '../users.js';

const url = 'https://www.eduar.com/users/';


function forEach(items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
}

describe('test users', () => {
  it(' Obtener lista de usuarios #getUsers()', async () => {
    const users = await getUsers(url);
    expect(users.length).toBeGreaterThan(0);
  });

  it(' Obtener lista usuario con promesa ', (done) => {
    getUsers(url).then(result => expect(result.length).toBeGreaterThan(0));
    done();
  });

  it('Obtener usuario por ID', () => {
    return getUserById(url, 1).then(result => {
      expect(result.id).toBe(1)
    });
  });

  it('Obtener error cuando un usuario no se encuentra', async () => {

    try {
      expect.assertions(1);
      const result = await getUserById(url, 5);
    }
    catch (err) {
      expect(err.message).toMatch('code 404');
      //console.error(err);
    }
  });

  it('Mock funcion foreach', () => {
    const mockCallBack = jest.fn(x => x * 2);
    forEach([2, 3], mockCallBack);
    //la funcion moc es llamada 2 veces.
    expect(mockCallBack.mock.calls.length).toBe(2);
    expect(mockCallBack.mock.calls[0][0]).toBe(2); //argumentos pasados a la funcion primero
    expect(mockCallBack.mock.calls[1][0]).toBe(3); // Segundo argumento.
    console.log(mockCallBack.mock.calls);//imprimiendo el objetoi completo


    expect(mockCallBack.mock.results[0].value).toBe(4);
    expect(mockCallBack.mock.results[1].value).toBe(6);

    console.log(mockCallBack.mock.results);

  });

  it('mock valores retorno', () => {
    const mockCallBack = jest.fn();
    //console.log(mockCallBack);
    mockCallBack.mockReturnValueOnce(2) //primera llamada
      .mockReturnValueOnce('y') // Segunda llamada
      .mockReturnValue(false); // demas llamadas
    console.log(mockCallBack(), mockCallBack(), mockCallBack(), mockCallBack());

    const filterTest = jest.fn();
    filterTest.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const result = [2, 3].filter(i => filterTest(i));
    console.log(result); // Un filtro del arreglo [2,3] como el primer valor es true del mockreturnvalueonce nos devuelve el primer elemento
    console.log(filterTest.mock.calls);//Llamadas de la funcion 

  });
});


function timerFun(callback) {
  setTimeout(  () => callback('Despues de un segundo'), 1000);// retornamos nuestro callback
}


jest.useFakeTimers();

describe('Teste de timers', () => {
  it('test timer', () => {
    timerFun(jest.fn());
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000); //Le decimos que vamos a esperar cualquier funcion 
  });
});