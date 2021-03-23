/**?
 * La programacion asincrona en javascrip se realiza solo con callBack
 * 
 * Que es un callback, es una funcion que se declara y se envia como argumento a otra funcion.
 * se puede trabajar como vaiables.
 * 
 * la funcion que la recibe como parametro la ejecuta (Devuelve la llamada) a nuestra funcion cuando se cumple una condicion o se produce algun evento
 * Este es un evento asincronico.
 * 
 * la invocacion de la funcion de devolcionde llamada notifica la condicion o el evento.
 */
function callBackInit() {

    function cuadrado(x) {
        console.log((x * x));
    }

    console.log('Antes ' + cuadrado(12));
    cuadrado(12);
    console.log('Before ');


    function cuadradoAsync(x, callback) {
        setTimeout(() => callback(x), 2000);
    }


    console.log('Antes');
    cuadradoAsync(123, cuadrado);
    console.log('Despues');
}


//controlar la ejecucion del callback.
//Promesas. 
function promesas() {
    const promesas = new Promise((resolve, reject) => {
        const isResolve = false;
        if (isResolve) {
            resolve('Promesa resuelta');
        }
        else {
            reject('Algo no tan resuelto');
        }
    });
}

//promesas.then((response) => console.log(response)).catch((reject) => console.log(reject));


///Eliminar la dependencia 
let seconds = 10;

function iniciarCuentaRegresiva(callback) {
    setInterval(() => {
        seconds--;
        callback();
        if (seconds < 0) {
            clearInterval(iniciarCuentaRegresiva);
        }
    }, 1000);
}

function mostrarSegundos() {
    console.log(seconds);
}




//iniciarCuentaRegresiva(mostrarSegundos);

//La evolucion del Callback Inmantenible?
//callbak hell ?cuando abusamos de los callbakcs
/**
 * Errores con callbaks, lo ideal es devolverlo de primerito.
 * manejo de errores con los callbacks
 * 
 * Callbacks impredecibles
 */
import { readFile } from 'fs';

function eventloop() {
    const cache = new Map();

    function lecturaInconsistente(nombrearchivo, callBack) {
        if (cache.has(nombrearchivo)) {
            callBack(cache.get(nombrearchivo));
        }
        else {
            readFile(nombrearchivo, 'utf8', (err, data) => {
                cache.set(nombrearchivo, data);
                callBack(data);
            });
        }
    }

    function lectorArchivo(nombrearchivo) {
        const listeners = [];
        lecturaInconsistente(nombrearchivo, valor => listeners.forEach(listener => listener(valor)));
        return { onDataReady: listener => listeners.push(listener) }
    }

    const lector1 = lectorArchivo('./data.txt');

    lector1.onDataReady(data => {
        console.log(`primera llamada a data ${data}`);
        const lector2 = lectorArchivo('./data.txt');
        lector2.onDataReady(data => console.log(`segunda llamada a data ${data}`));
    });

}



/**
 * Callbacks hell
 * 
 **/


function comprarEmpanadas(empanadasActuales, callBack) {
    const empanadas = empanadasActuales + 1;
    callBack(empanadas);
}

function comprar3Empanadas(empanadasActuales, callBack) {
    const empanadas = empanadasActuales + 3;
    callBack(empanadas);
}

function comprar5Empanadas(empanadasActuales, callBack) {
    const empanadas = empanadasActuales + 5;
    callBack(empanadas);
}


let empanadas = 0;
comprarEmpanadas(empanadas, (primeraCompra) => {
    console.log(`Empanadas: ${primeraCompra}`);
    //Me ha gsutado quiero tres mas con aji.!!!!!!!! mi Reyyy
    comprar3Empanadas(primeraCompra, (segundaCompra) => {
        console.log(`Segunda compra ${segundaCompra}`);
        //Me han gustado quiero 5 mas!!!!!!!!!!
        comprar5Empanadas(segundaCompra, (terceraCompra) => {
            console.log(`Tercera compra ${terceraCompra}`);

        });
    });

});

console.log(empanadas);


//Promesas las promesas son un objeto que envuelven nuestro return se manejas varios estaso de resuleto y 
//estado de rechazo


function comprarEmpanadasConPromesas(empanadasActuales) {
    const empanadas = empanadasActuales + 1;
    return  new Promise((resolve) => resolve(empanadas));
}

function comprarTresEmpanadsPromesas(empanadasActuales) {
    const empanadas = empanadasActuales + 3;

    return new Promise((resolve) => resolve(empanadas));
}


function comprarCincoEmpanadsPromesas(empanadasActuales) {
    const empanadas = empanadasActuales + 5;
    
    return  new Promise((resolve) => resolve(empanadas));
}

let empanadas2 = 0;

comprarEmpanadasConPromesas(empanadas2)
    .then(result => {
        console.log(`empanadas  ${result}`)
        comprarTresEmpanadsPromesas(result).then(result =>{
            console.log(`empanadas ${result}`);
            comprarCincoEmpanadsPromesas(result).then(result =>{
                console.log(`empanadas ${result}`);
            });
        });
    });



    /**
     * 
     * 
     * 
     */


let empanadasAsync = 0;
async function comprar(){
    const firsBuy = await  comprarEmpanadasConPromesas(empanadasAsync);
    console.log(`Empanadas ${firsBuy}`);
    const secondBuy = await  comprarTresEmpanadsPromesas(firsBuy);
    console.log(`Second buy Empanadas ${secondBuy}`);
    const tercerBuy = await  comprarCincoEmpanadsPromesas(secondBuy);
    console.log(`Second buy Empanadas ${tercerBuy}`);
}

comprar();