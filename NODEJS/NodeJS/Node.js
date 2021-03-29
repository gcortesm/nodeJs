console.log('argv', process.argv);

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
function procesos() {

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

    console.log(
        Object.getOwnPropertyNames(process));



    process.argv // Una matriz de argumentos de la línea de comandos.
    process.arch // La arquitectura de la CPU: "x64", por ejemplo.
    process.cwd() // Devuelve el directorio de trabajo actual.
    //process.chdir() // Establece el directorio de trabajo actual.
    process.cpuUsage() // Informa el uso de la CPU.
    process.env // Un objeto de variables de entorno.
    process.execPath // La ruta absoluta del sistema de archivos al ejecutable del nodo.
    process.exit() // Termina el programa.
    process.exitCode // Un código entero que se informará cuando se cierre el programa.
    //process.getuid() // Devuelve el ID de usuario de Unix del usuario actual.
    process.hrtime.bigint() // Devuelve una marca de tiempo de nanosegundos de "alta resolución".
    //process.kill() // Envía una señal a otro proceso.
    process.memoryUsage() // Devuelve un objeto con detalles de uso de memoria.
    //process.nextTick() // Como setImmediate (), invoca una función pronto.
    process.pid // El ID de proceso del proceso actual.
    process.ppid // El ID del proceso padre.
    process.platform // El sistema operativo: "linux", "darwin" o "win32", por ejemplo.
    process.resourceUsage() // Devuelve un objeto con detalles de uso de recursos.
    //process.setuid() // Establece el usuario actual, por id o nombre.
    process.title // El nombre del proceso que aparece en los listados `ps`.
    process.umask() // Establece o devuelve los permisos predeterminados para nuevos archivos.
    process.uptime() // Devuelve el tiempo de actividad de Node en segundos.
    process.version // Cadena de versión de Node
    process.versions // Cadenas de versión para las bibliotecas de las que depende Node.

    //const os   = require('os');

    os.arch() // Devuelve la arquitectura de la CPU. "x64" o "arm", por ejemplo.
    os.constants // Constantes útiles como os.constants.signals.SIGINT.
    os.cpus() // Datos sobre los núcleos de la CPU del sistema, incluidos los tiempos de uso.
    os.endianness() // El endianness nativo de la CPU "BE" o "LE".
    os.EOL // El terminador de línea nativo del sistema operativo: "\ n" o "\ r \ n".
    os.freemem() // Devuelve la cantidad de RAM libre en bytes.
    os.getPriority() // Devuelve la prioridad de programación del sistema operativo de un proceso.
    os.homedir() // Devuelve el directorio de inicio del usuario actual.
    os.hostname() // Devuelve el nombre de host de la computadora.
    os.loadavg() // Devuelve los promedios de carga de 1, 5 y 15 minutos.
    os.networkInterfaces() // Devuelve detalles sobre la red disponible. conexiones.
    os.platform() // Devuelve OS: "linux", "darwin" o "win32", por ejemplo.
    os.release() // Devuelve el número de versión del SO.
    //os.setPriority() // Intenta establecer la prioridad de programación para un proceso.
    os.tmpdir() // Devuelve el directorio temporal predeterminado.
    os.totalmem() // Devuelve la cantidad total de RAM en bytes.
    os.type() // Devuelve SO: "Linux", "Darwin" o "Windows_NT", p. ej.
    os.uptime() // Devuelve el tiempo de actividad del sistema en segundos.
    os.userInfo()

}
/**
 * Modulos FS
 * Es una api para trabajar con archivos y directorios 
 * es una APi gigante de c++,, por los diferentes casos especificos 
 * para trabajar con archivos.
 * fs  en su mayoria sin acciones no bloqueantes por que son asincronaz 
 * 
 * 
 * fs.readFile => fs.readFileSync()
 * fs.promises.readFile() despues de la version 10 de NodeJs.
 */


/**
 * Paths.
 * 
 * todo el manejo de rutas.
 */

const path = require('path');

function paths() {
    console.log(process.cwd());

    console.log(__filename);

    console.log(__dirname);

    console.log(os.homedir());


    console.log(path.sep); //separacion de la ruta


    let directorio = 'src/pkg/test.js';

    console.log(path.basename(directorio));

    console.log(path.extname(directorio));


    console.log(path.dirname(directorio));

    console.log(path.basename(path.dirname(directorio)));

    //hace la normalizacion de rutas
    console.log(path.normalize(directorio));


    //Join esto es para unir rutas 
    console.log(path.join('src/pkg', 'gustavo.js')); //Tenemos la ruta completa.

    //REsolve

    console.log(path.resolve());

    console.log(path.resolve('t.js')); // Esto hace un join del resolver con la ruta que se pasa como parametro, esto es similar a cwd



    console.log(path.resolve('tmp', 't.js'));

    console.log(path.resolve('/tmp', 't.js'));


    console.log(path.posix);


}

const fs2 = require('fs');

function functionfs() {

    let buffer = fs2.readFileSync(path.join(__dirname, 'test.txt'));
    console.log(buffer);

    //Lectura async 

    fs2.readFile(path.join(__dirname, 'test.txt'), (err, buffer) => {
        if (err)
            console.log(err);
        else {
            console.log(buffer);
        }
    });


    fs2.promises.readFile(path.join(__dirname, 'test.txt'), 'utf-8')
        .then((data) => console.log(data))
        .catch((error) => { console.log(error) });



    async function readFileAsync(fileName, encoding = 'utf-8') {
        let test = await fs2.promises.readFile(fileName, encoding);
        console.log(test);
    }

    readFileAsync(path.join(__dirname, 'test.txt'));


    /**
     * Descriptores.
     * 
     * Salida estandar a nivel de contenedores. 
     * Deberian enviarse a la salida estandar de los contenedores 
     *  
     * Siempre todos los Logs a la salida estandarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr.....................
     * 
     * STDOUT => Asi se llama la salida estandar
     */

    function printFile(fileName, encoding = 'utf8') {
        fs.createReadStream(fileName, encoding).pipe(process.stdout);
    }
    console.log('Este es separando');
    printFile(path.join('test.txt'));


    //Creacion de archivos 

    const configuration = { name: "Esto es algo" };
    fs.writeFileSync(path.resolve(__dirname, "configuration.json"), JSON.stringify(configuration));



    fs.writeFile(path.resolve(__dirname, "configuration34.json"), JSON.stringify(configuration), (err, buffer) => {
        if (err)
            console.log(err);
        else {
            console.log('The file is write');
        }
    });

    fs.appendFile(path.resolve(__dirname, "configuration2.json"), 'G111111111', (err) => {
        if (err)
            console.log(err);
        else {
            console.log('Leyendo algo');
            console.log(fs.readFileSync(path.resolve(__dirname, "configuration2.json"), 'utf8'));
        }
    });


    //addpend sync
    fs.appendFileSync(path.join(__dirname, 'configuration2.json'), '\n More data in my file');

    fs.promises.appendFile(path.join(__dirname, 'configuration2.json'), ' \n Data with a promise').then(() => console.log('Agrego mas cosas con un promise')).catch(err => console.log(err));


    async function writeAsync(fileName, econding = 'utf8') {
        await fs.promises.writeFile(fileName, 'Date in file with  aysn and await', econding);
        console.log('Con asign');
    }
    writeAsync(path.join(__dirname, 'writeAsync.txt'));




    ///Metadatos de los archivos

    let stats = fs.statSync(path.join(__dirname, 'configuration.json'));
    console.log(stats.isFile());

    console.log(stats.isDirectory());

    console.log(stats.size);

    console.log(stats.atime);//Fecha cuando fue leido  el a de Acces
    console.log(stats.atimeMs);

    console.log(stats.mtime); // El m de modefication time.

    console.log(stats.uid); //Id del usuario duenio del archivo

    console.log(stats.gid);

    fs.copyFileSync(path.join(__dirname, 'configuration.json'), path.join(__dirname, 'configurationcopia.json'));

    //Sobre escribir en el flujo de un stream

    let output = fs.createWriteStream('counter.json');
    for (let i = 0; i < 100; i++) {
        output.write(`\n  ${i}`);
    }

    console.log(output.end());
}

const http = require('http');//Usar https si se tiene un certificado.
const url = require('url');  //para analizar urls
const pathServer = require ('path');//Para manipular rutas de los sistemas de archivos.
const fsServer = require('fs');//Leer archivos.
/**
 * 
 * HTTP,HTTPS,HTTP2
 * 
 * Estos son los modulos de nodejsm son la implementacion de http.
 * estas funciones tienen implementacion de bajo nivel relativamente.
 * 
 * 1. crear servidores
 * 2. llamar el listener para que se escuchen solicitudes en eun puerto
 * 3. registrar un controlador de eventos para eventos de request
 */



function serve (routeDirectory,port){
    const server = new http.server();// creamos la instancia de un nuevo servidor http
    server.liste(port);//Escucha en el puerto especificado
    console.log('The server is a live, listeng in ' , port);


    server.on('request',(request,response)=>{ //cuando lleguen solicitudes las manipulamos con esta funcion
        let endPoint =url.parse(request.url).pathName; 
        /**obtiene la ruta de la url que trae la solicitud
         * ignora los parametros de la consulta que se le agregan
        */
        if(endPoint==='/test/mirror'){
            console.log('Esta llegando al mirror');
            response.setHeader('Content-Type', 'text/plain; charset=UTF-8');
            response.writeHead(200); //Codigo http 200
            response.write(`${request.method} ${request.url} http/${
                request.httpVersion
            }` +JSON.stringify(request))
        
        }



    });

}
serve();
