/**
 * Funciones en JavaScript.
 * 
 * Es un bloque de codigo JavaScript que se define una vez pero que puede ejecutarse tantas veces como se desee.
 * 
 * parametro cuando nostros definimos la funcion.
 * Argumentos cuando llamamos la funcion.
 * 
 * las funciones en Js son objetos.
 * Ocupan un espacio en memoria, se pueden establecer propiedades 
 * invocar otras funciones. 
 * Puedo definir una funcion dentro de otra funcion javascript
 * 
 * La funcion anidada tiene acceso a cualquier variable dentro de la funcion que esta anidada
 * 
 * 3 formas de definir una funcion.
 * 
 */


//Forma declarativa de una funcion.
function factorial(x) {
    if (x <= 1)
        return 1;
    return x * factorial(--x);
}
console.log(factorial(10));

//Expresion de funcion.
const exprFactorial = function fact(x) {
    if (x <= 1)
        return 1;
    return x * fact(--x);
}

console.log(exprFactorial(10));

let otra = '1234';
function fnmela() {
    let abc = '123';
    function fnmela2() {
        console.log(abc);
        console.log(otra);
    }
    fnmela2();
}

fnmela();


const otrcuadrasdo = function (x) { return x * x };

console.log(otrcuadrasdo(3));

//Esta es una expresion que se auto invoca

(function () {
    console.log('Esta fue una funcion autoinvocada');
})();
// funciones flecha

const suma = (x, y) => x + y;

console.log(suma(12,3));

//con un solo parametro no necesita parentesis
const polinomio = x => x*x+2*x+3;

console.log(polinomio(3));

const devolverConst = () => 10;

console.log(devolverConst())