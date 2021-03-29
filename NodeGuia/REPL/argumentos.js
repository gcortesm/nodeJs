//Cuando empezamos a pasar argumentos tenemos que tener en cuenta un par de cosas 
//1. Esto lo hacemos llamando process.argv, esto nos va a retornar un arreglo
//2. la posicicion 0 es la rta de node y la posicion 2 sera la ruta del archivo que estamos 
//   ejecutando en nodeJs. todos los argumentos entonces que pasamos 
//estan desde la pocicion 1 en adelante.
 
console.log(process.argv);


//Para mejor manejo podemos usar minimist. de esta manera podemos 
// renombrar los argumentos pero ahora necesitaremos usar -- al pasarlos
const args =require('minimist')(process.argv.slice(2));
console.log(args['gcma']);


//Correlo de la siguiente manera
//node argumentos.js --gcma='Gustavo Cortes Mondragon' 