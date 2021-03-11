/**
 * Set class: una coleccion de valores como lo es una matriz.
 * sin embargo a diferencia de las matrices los Sets no estan
 * ordenados ni indexados , no permiten duplicados. un valor es 
 * miembro de un conjunto o no lo es
 */

'use strict';
function useSet(){


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
}

/***
 * Class map : Representa un conjunto de valores conocidos como claves, donde cada
 * valor tiene otro valor asignado
 * es como una matriz pero en lugar de usar un conjunto de numeros enteros secuenciales como claves
 * los mapas nos permiten usar valores arbitrarios 
 */

function useMap(){
    let map1  = new Map() // empty map 
    let map2 = new Map([
        [1,4],
        ['2',6],
        ['5',0],
        [2,6]
    ]);// un nuevo map inicializado con claves de tipo String y mapeadas a numeros
    let map3 = new Map(map2);

    let obj={x:1,y:6};
    let map4 = new Map(Object.entries(obj));

    let map5 = new Map();
    map5.set("one",2);
    map5.set("two",5);//para agregar nuevos elementos
    console.log(map5.size);
    console.log((map5.get("one")));
    map5.set("one",true);
    console.log(map5);

    console.log(map5.has("one"));

    map5.delete("one");
    console.log(map5);
    map5.clear();

    console.log(map5);
    map5.set("1",43).set("2",54).set("3",6);
    console.log(map5);

    let map6 = new Map();
    let object={};
    map6.set(object,2);
    map6.set({},1); //Creo que el pone como llave el espacio en memoria de este nuevo objeto

    console.log(map6);
    console.log(map6.get({}));// Si los hacemos asi este seria una nueva referencia en memoria.nunca la va ha encontrar
    console.log(map6.get(object));

    let map7 = new Map();
    map7.set("1",43).set("2",54).set("3",6);

    console.log([... map7]);
    //itereables
    for(let [key,value] of map7){
        console.log(` llave ${key} - valor ${value}`);
    }
    //Traemos las keys y las convertimos en un arreglo
    console.log([...map7.keys()]);

    //Traemos los values del map 
    console.log([...map7.values()]);

    console.log([...map7.entries()]);

    //Iterando con forEach()
    map7.forEach( (key,value)=> console.log(`llave: ${key} - valor: ${value}`));
}

//useMap();

//Ejercicio de Map

function Ejercicio(){
    let equipos=['Real Madrid','Manchester United','Manc city','Bayern Muchen',
            'Juventus','Barcelona','Atletico Madrid', 'Inter milan',
            'Porto','Sevilla','Ac Milan','Valencia','Lazio'];
    let finalesChampios = new Map();
    //Ultimas 30 finales de la champions
    for(let i=0; i<30;i++){
        let aleatorio = Math.round(Math.random()*13);
        let equipoGanador=equipos[aleatorio];
        if(finalesChampios.has(equipoGanador))
            finalesChampios.set(equipoGanador,finalesChampios.get(equipoGanador)+1);
        else
            finalesChampios.set(equipoGanador,1);
    }
    //Lista de campeones
    finalesChampios.forEach((value,key)=> console.log(` Equipo: ${key} Copas ganadas: ${value}`));

    //ordenar por mas ganadores.
    console.log([...finalesChampios.entries()].sort((a,b)=> b[1]-a[1]));

    //Sancion a un equipo al azr por un soborno, se elimnan todas las copas que tenga
    let sancionado = Math.round(Math.random() * finalesChampios.size);  
    let nombreSancionado = [...finalesChampios.keys()][sancionado];
    console.log(`Equipo sancionado por la FIFA: ${nombreSancionado}`);
    if(finalesChampios.delete(nombreSancionado))
        console.log('El equipo se elimino del salon de la fama.');

    console.log('Equipos despues de la depuracion por faltas.');
    for(let [key,value] of finalesChampios){
        console.log(` Equipo: ${key} - Numero de copas: ${value}`);
    }
}
//Ejercicio();

/*
 *arrays con tipo: Los elmentos de un typed array son todos numeros. 
 *se debe especificar la logitud de una matriz con tipo cuando  se crea 
 *esa longitud no puede cambiar.
 *siempre se inicializan a 0 cuando se crean.
*/

function arrayTipos(){
    let matriz = new Uint8Array(1024);//1024 bits en el costructor se pasa el tamao del array
    let matrix = new Float64Array(9); // matriz 3x3
    let point  = new Int16Array(3); //un punto en un espacio de 3D

    let rgba = new Uint8ClampedArray(4); // Un valor de pixel rgba de 4 bits

    let white = Uint8ClampedArray.of(255,255,255,0);
    
    let ints = Uint32Array.from(white);

    console.log(ints);

    console.log(Uint8Array.of(2,3,5,2,3,8000));

    //Referencias opacas.

    let buffer = new ArrayBuffer(1024*1024);
    console.log(buffer.byteLength);

    //crear matrices de tipo que usen ese tamanio.
    let asBytes = new Uint8Array(buffer);    
    let asInt =  new Int32Array(buffer);

    console.log(asBytes); 
    
    //console.log(point);
    //console.log(matrix);
    //console.log(matriz);

}
//arrayTipos();

//Solucion brayan 

function sieve(n){
    let arra = new Uint8Array(n+1);
    let max = Math.floor(Math.sqrt(n));
    let p = 2;
    while( p <= max ){
        for(let index = 2*p ; index<=n ; index+=p ){
            arra[index]=1;
        }
        while(arra[++p]){}
    }
    while(arra[n]){
        n--;
    }
    return n;
}

//console.log(sieve(22));

/**
 * Expresiones regulares: una expresion regular es un objeto que describe un patron textual. 
 * 
 * 
 */

 let patern = /s$/i;
 let patern2 = new RegExp("s$");//metacaracter 
 let javaPater = /java/;
 console.log(' jg java javaita'.match(javaPater));

 /**
  * caracteres de puntuacion en una expresion
  * ^ $ 
  * . => Cualquier carácter excepto nueva línea u otro terminador de línea Unicode. O, si la expresión regular usa la marca s, 
  *      entonces un punto coincide con cualquier carácter, incluidos los terminadores de línea.
  * 
  *   * + ? = ! : | / \ ( ) [ ] { }
  * 
  * \w Cualquier carácter de palabra ASCII. Equivalente a [a-zA-Z0-9_].
    \W Cualquier carácter que no sea un carácter de palabra ASCII. Equivalente a [^a-zA-Z0-9_].
    \s Cualquier carácter de espacio en blanco Unicode.
    \S Cualquier carácter que no sea un espacio en blanco Unicode.
    \d Cualquier dígito ASCII. Equivalente a [0-9].
    \D Cualquier carácter que no sea un dígito ASCII. Equivalente a [^0-9].
    [\b] Un retroceso literal (caso especial). 
  */

  //para hacer coincidir alguno de estos tendriamos que usar back slach \

  let pattern =/[abc]/; //Coincide con cualquiera de las letras a, b y c
  let patternnegado = /[^abc]/; //negamos que no coincida

  pattern =/[a-z]/; //Este es para solo letras de la a-z
  pattern =/[a-zA-Z]/; // Del a -z en mayusculas y minusculas
  pattern =/[a-zA-Z0-9]/; // Del a -z en mayusculas y minusculas y los numeros del 0-9
  pattern =/[...]/; //Cualquier caracter entre corchetes.ke
  pattern =/[^...]/; // Coincide con cualquer caracter que no este entre corchetes.
  
  /* repetciones.
   * cuantas veces se pueda repetir un elemento
   * {n.m}  => conicide con el digito anterior almenos n veces pero no mas de m veces
     {n,}   => coincide almenos n o mas veces
     {n}    => Existe exactamente con n veces 
     ?      => Conicide con cero o una aparicion del elemento anterior Seria como un elemento opcional
            equivale {0,1}
     +      => una o mas ocurrencias del elemento anterior equivale {1,}
     *      => con cero o mas ocurrencias del elemento anterior {0,}    
   */
  pattern = /\d/;//coincide con un digito entre 0-9
  pattern = /\d{2,6}/;//coincide con un digito entre 0-9

  pattern = /\w{3}\d?/;//Coincide con 3 digitos de palbra y un digito opcional
  pattern = /\s+java\s+/; // coincide con java mas uno o mas espacio antes y despues
  pattern = /[^(*]/; //Coincide con 0 o mas caracteres que no sean parentesis abiertos

/**
 * cada expresion regular puede tener uno o mas para afectar las coincidencias.
 * g    => significa que es global, todas las coincidencias dentro de una cadena en lugar de la primera
 * i    => Especifica que la coincidencia no debe distinguir entre mayusculas y minusculas
 * m    => Especifica que la coincidencia debe realizarse en modo multilinea.
 * s    => es util cuando se trabaja con texto que incluye nuevas lineas
 * u    => Significa unicode, con los puntos unicode completos, en lugar de coincidir
 *         con los valores de 16 bits, si no se hace no funcionara con texto que tengan emojis y otros caracteres chinos.
 * y    => Esta bandera indica que la expresion debe coincidir al principio de una cadena
 *         o en el primer caracter que sigue a la coincidencia anteipor
 */


 //Metodos de string para coincidencia de patrones

 /**
  *  search() : toma un argumento de expreion regular y devuelve la primera sub cadena oincidente o -1 si no encuentra nada
  */

  console.log("javascript melo ".search(/script/));


let funcionLet = (n)=>{
    if( n===2)
        return ' dos ';
    return ' doscientos veinticnco ';
};
 
  //replace, reemplaza
  let times ='2 times is 225';
  console.log(times.replace(/\d+/gu, n=> funcionLet(parseInt(n))));// Transformamos los digitos en exadecimal
  console.log(times.replace(/\d+/gu, n=> parseInt(n).toString(8)));// Transformamos los digitos en exadecimal
  console.log(times.replace(/\d+/gu, n=> parseInt(n).toString(16)));// Transformamos los digitos en exadecimal

  //Match como el de tinder ajajjajajaj
  /**
   * Toma una expresion regular como unico argumento y devuelve una matriz como resultado de la coincidencia
   * 
   */




let matchtest ='7plus igual a 8 plus menos 1';
console.log(matchtest.match(/\d+/g));

//Ejemplo Match
let urlPatter=/(\w+):\/\/([\w.]+)\/(\S*)/;
let texturl ='Log visitame htpps://miblogmelo.com/miperfil/proyectos';

let matchurl = texturl.match(urlPatter);
console.log(matchurl);
let fullUrl,host,protocolo,path;
if(matchurl!=null){
    fullUrl = matchurl[0];
    protocolo = matchurl[1];
    host =matchurl[2];
    path = matchurl[3];
}
console.log(`full url ${fullUrl} protocolo ${protocolo} host ${host}  path ${path}`);

console.log(matchurl.index);
console.log(matchurl.input);
console.log(matchurl.groups);

function ejercicioVocales(){
    let vocalesmatch = 'un murcielago grande';
    let matchvocales =/[aeiou]/g;
    let matcVocales = vocalesmatch.match(matchvocales);
    console.log(matchvocales);
    
    for (let str  of matcVocales){
        console.log( str );
    }    
}
ejercicioVocales();



