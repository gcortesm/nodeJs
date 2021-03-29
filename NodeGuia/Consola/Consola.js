//el modulo consola el cual es el mismo que hemos usado en el navegador 



console.log('Algo')//Imprime lo que le pasemos por parametro
//console.clear(); //OLimpiamos consola
console.count('contando cosas');//constaomos 
console.count('contando cosas');//constaomos 
console.count('contando cosas');//constaomos cuantas veces hemos mostrado algo.


console.time('algo()');


//imprimir seguimiento de pila
function algo(){
    console.log('Mensaje antes del Trace'); //Es como el rastreo
    console.trace();
}
algo();

//podemos hasta agregar colores.
console.log('\x1b[33m%s\x1b[0m', 'hi!')


console.timeEnd('algo()');
