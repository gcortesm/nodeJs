/**
 * Modulos. Permite que grandes programas se ensamblen, y que funcionen correctamente.
 * Consiste en, ocultar detalles de implementacion privada
 * mantener ordenado el namespace global para que los modulos no puedan modificar accidentalmente las 
 * variables funciones y clases definidas por otros modulos.
 * 
 * 
 */

const statsInit = (function () {
    const sum = (x, y) => x + y;
    const square = x => x * x;

    function mean(data) {
        return data.reduce(sum) / data.length;
    }

    function stdDev(data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    }

    return {
        mean,
        sum
    }
}());


console.log(statsInit.mean([1, 3, 5, 7, 9]));
//console.log(stats.stdDev([1,3,5,9]));

console.log(statsInit.sum(1, 3));


const calculadoraInit = (function () {
    const multiplicar = (x, y) => x * y;
    const restar = (x, y) => x - y;
    const dividir = (x, y) => x / y;
    const sumar = (x, y) => x + y;


    return {
        multiplicar,
        restar,
        dividir,
        sumar
    }
}());

//console.log(calculadora.multiplicar(3, 4));


const modules = {};

function require(moduleName) {
    return modules[moduleName];
}

modules['stats.js'] = (function () {
    const exports = {};

    const sum = (x, y) => x + y;
    const square = x => x * x;

    exports.mean = function (data) {
        return data.reduce(sum) / data.length;
    };

    exports.stdDev = function (data) {
        let m = exports.mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    };

    return exports;
}());


modules['calculadora.js'] = (function () {

    const exports = {};

    exports.multiplicar = function (x, y) { return x * y };
    exports.restar = function (x, y) { return x - y };
    exports.dividir = function (x, y) { return x / y };
    exports.sumar = function (x, y) { return x + y };

    return exports;

}());


const stats = require('stats.js');
console.log(stats.mean([1, 2, 3, 9]));
console.log(stats.stdDev([1, 2, 4, 5, 6]));

const calculadora = require('calculadora.js');
console.log(calculadora.sumar(1, 4));


/**
 * Modulos en ES6
 * 
 * los modulos son oficiales para la mayoria de los navegadores Excepto IE
 * los modulos en ES6, para cada archivo contienen su propio contexto privado.
 * y se pueden usar las declaraciones de importacion o declaracion 
 * siempre se usa el modo stricto de manera automatica.
 */

//primera alternativa para exportar
export const PI = Math.PI;

export function convertirGradosRadianes(grados) {
    return (grados * PI) / 180;
};

export class Circle {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return PI * this.radio * this.radio;
    }
}

//segunda alternativa para exportar 
/*
const PI = Math.PI;

function convertirGradosRadianes(grados) {
    return (grados * PI) / 180;
};

class Circle {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return PI * this.radio * this.radio;
    }
}

export{
    PI,
    convertirGradosRadianes,
    Circle
}
/*

// En caso de que solo queramos exportar  un solo elemento
// de esta manera se sobre entiende que es la unica que queremos exportar.
// otra razon es por que para el(Javascript motorv8) es mas facil.
// un unico default en un archivo
// la palabra clve export solo debe aparecer emn el nivel superior de js,
//no se puede usar dentro de clase o funcion o cualquier otra sentencia de contol.
export default class OtraClase{

    constructor(){

    }


}

/**
 * Import, como su palabra lo dice importa los elementos que se han exportado
 * 
 */

import BitSet from './bitset';


//Podemos importar algunas cosas 
//import  {mean,stdDev} from exports; 
//Debemos tener en cuenta algunos puntos. 
/**
 * 1. las importaciones solo pueden aparece en el nivel superior. no puede estar dentro de ninguna clase ni inguna sentencia de control
 * 2. Por convencion. las importaciones van al inicio del modulo.
 * 3. No se puede usar la comilla inversa dentro de la ruta de importacion
 * 4. Importar de manera total o parcial  import * as alias from '' Traemos todos los elemntos de un modulo. 
 * 5. tenemos un default y otros exports. (para este import )
 *    import BitSet,{Otrros elementos del export} as otros  from './setbit'
 * 6. otra forma de importaciones 
 *    import  './'
 * 7. Podemos poner alias a las importaciones
 *    import {mean as meanPower , sdpDev } from './';
 * 8. Para los defaults podemos hacer lo siguiente
 *    import {default as bitset2} from './archivo'
 *  (Tambien podemos hacerlo en los exports).
 *    exports { mean as ReMean }
 */
//


//re-exports 
//unir dos archivos en uno solo

import { mean } from './stast/mean.js';
import { stdDev } from './stast/stdDev.js';

// Re -Export, desde nuevo archivo
export {mean,stdDev};


//Re-export desde los import
export { mean } from './stast/mean.js';
export { stdDev } from './stast/stdDev.js';


//Re-exportando todo desde los import
export * from './stast/mean.js';
export * from './stast/stdDev.js';

//importar modulos re-exportados.
import {mean ,stdDev} from './donde_puseTodo' ;

//re-export deafult elemts se hace con as

export {default as alias} from './stas.js'

