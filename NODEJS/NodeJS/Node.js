console.log('argv',process.argv);

//Nodemon
/*
    Esta es una liberia cona mas de 3.6 descargas semanales
    https://www.npmjs.com/package/nodemon

    su ultima actualizacion fue hace 3 meses


*/

/**
 * NestJs/core
 * Una libreria con mas de 600 mil descargas semanales 
 * 
 * ultima actualizacion fue el 22 de marzo de 2021.
 */

/**
 * 
 * Buffers , 
 * es una secuencia de bytes en lugar de una secuencia de caacteres 
 *,Es una subclase de la Uint8Array,esta  diseado para operar con cadenas de 
 * javascript , 
 * se puede inicializar con cadenas de caracteres o convertirse a cadenas de caracteres, Como lo hacen 
 * con una codificacion, asigna cada caracter a un numero entero.
 * 
 * Codificaciones admitidas
 * UTF-8:por defecto 
 * Unicode.
 * UTF-16LE. uNICODE DE DOS BYTES
 * Latin1 : codificacion para idionas de europa occidental 
 * ASCII.  Tabla Ascci, solo ingles de 7 bits
 * Hex. Convierte cada byte en un par de digitos Exadecimales de ASCII
 * base64. Convierte cada 3 bites en una secuencia de cuatro caracteres ASCCI.
 * 
 */

function buffers() {

    let buffer = Buffer.from([0x41, 0x42, 0x43]);

    console.log(buffer.toString());
    console.log(buffer.toString('HEX'));


    let computer = Buffer.from("Ibm 3111", 'ASCII');


    console.log(computer.toString('ascii'));
    console.log(computer.subarray(0, 3).map(x => x + 1).toString());

    for (let i = 0; i < computer.length; i++) {
        console.log(computer[i]--);
    }
    console.log(computer.toString('ascii'));

    //Con esto terminamos el tema de los buffers, Array de tipos con cadenas en Bites. 

    //Se pueden crear buffers Vacios


    let ceros = Buffer.alloc(1024);
    console.log(ceros);

    let unos = Buffer.alloc(1024, 1);
    console.log(unos);

    let patterns = Buffer.alloc(1024, 'AB', 'HEX');
    console.log(patterns);

    /**
     * Esto es mas bajo nivel
     */

}
/**
 * La emision de eventos de en JavaScript con NodeJs 
 */

const EventEmiter = require('events');
const net = require('net');

let server = new net.Server();
console.log(server instanceof EventEmiter);



server.on('connection', socket => {
    socket.end('Alguien se conecto a nuestro server', 'utf-8');
});

//server.listen(1234);


//Vamos a utilizar ahora el modulo de fs.

/**
 * Streams 
 * 
 * readable : Son streams como una fuente de datos
 * writable :son receptores o destinatarios de datos. 
 * duplex : combina el readable con el writable
 * transform : son los transformadores, estos tambien pueden leer y escribir pero con la diferencia de que estos datos que se leen 
 * se transforman en solamente readable. para psar de un lado a otro son como puentes. 
 * 
 */

//con un pipe  => tuberia, pasamos la escritura a la pipe, el se encarga de escribilo en la red
const fs = require('fs');


function pipeFileToSocket(fileName, socket) {
    fs.createReadStream(fileName).pipe(socket);



}

/**
 * 
 * Process.
 * 
 * 
 */

console.log(process.argv);
console.log(process.arch);//Arquitectura del CPU
console.log(process.cwd());//Directorio actual 
//console.log(process.chdir());//Cambiar el directorio de trabajo
console.log(process.cpuUsage());// Uso dle CPU 
console.log(process.env);
 //Esto aneterior es a bajo nivel , podemos obtetnerlo a manera de mas alto nivel

 const os = require('os');

 console.log(os.arch());
 console.log(os.cpus());
 console.log(os.type());

