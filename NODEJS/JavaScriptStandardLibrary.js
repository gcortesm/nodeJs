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
Ejercicio();