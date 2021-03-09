/**
 * Set class: una coleccion de valores como lo es una matriz.
 * sin embargo a diferencia de las matrices los Sets no estan
 * ordenados ni indexados , no permiten duplicados. un valor es 
 * miembro de un conjunto o no lo es
 */

'use strict';

let set  = new Set();        //Inicializando la variable set.
let set2 = new Set([1,set]); //Un conjunto con dos miembros, pasando un arreglo
let set3 = new Set(set); // Que recibe un Set en el constructor parametro.
let set4 = new Set("Missisipi"); // Un iterable de string no va a duplicar elementos

console.log(set);

//Funciones de la clase Set.
set.add(1);
set.add('1');
set.add("1");
set.add([1,2,3]);
set.add(true);
console.log(set);
set.delete(1);
set.delete('1');
console.log(set);
set.clear();
console.log(set);

set.add("a").add("b").add("c");
console.log(set);

console.log(set.has('a'));
//si un valor es miembro del set
let digitosPrimos = new Set([1,3,5,7,9,11]);
console.log(digitosPrimos);
console.log( set.has(3) );

let suma = 0;
for(let digito of digitosPrimos){
    suma+=digito;
}

console.log(suma);

console.log([...digitosPrimos]);//Convertimos en array

console.log(Math.max(...digitosPrimos));

suma = 1; 
digitosPrimos.forEach(element=>suma*=element);
console.log(suma);


// Ejericicio, Un restaurante comunitario 

let fila=[1234,15152,45668,33434,7676,224,33434,1234,9884,939493,33434];
let asistentes = new Set();
for(let index = fila.length-1; index>-1 ; index--){
    if(asistentes.has(fila[index])){
        //asi no se repiten y dejan sin almuerzo a otra gente 
        console.log('Senior usted ya almorzo retirese de la fila ');
    }
    else {
        asistentes.add(fila[index]);
        console.log('Bienvenido, reciba su almuerzo');
    }
}

//Al final del dia saber cuantos almuerzos se entregaron
console.log(`Los almuerzos entregados hoy fueron ${asistentes.size}`);
console.log('Codigos de beneficiarios');
asistentes.forEach(element=> console.log( `Codigo Beneficiario: ${element}`));


