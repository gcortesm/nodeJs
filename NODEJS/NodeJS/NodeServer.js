
const http = require('http');//Usar https si se tiene un certificado.
const url = require('url');  //para analizar urls
const path = require('path');//Para manipular rutas de los sistemas de archivos.
const fs = require('fs');//Leer archivos.
const { Readable } = require('stream');
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



function serve(routeDirectory, port) {
    const server = new http.Server();// creamos la instancia de un nuevo servidor http
    server.listen(port);//Escucha en el puerto especificado
    console.log('The server is a live, listeng in ', port);



    server.on('request', (request, response) => { //cuando lleguen solicitudes las manipulamos con esta funcion
        let endPoint = url.parse(request.url).pathname;
        /**obtiene la ruta de la url que trae la solicitud
         * ignora los parametros de la consulta que se le agregan
        */
        if (endPoint === '/test/mirror') {
            console.log('Esta llegando al mirror');
            response.setHeader('Content-Type', 'text/plain; charset=UTF-8');
            response.writeHead(200); //Codigo http 200
            response.write(`${request.method} ${request.url} http/${request.httpVersion
                } \r\n `);
            const headers = request.rawHeaders;
            for (let index = 0; index < headers.length; index += 2) {
                response.write(`${headers[index]}: ${headers[index + 1]} \r\n`);
            }
            response.write('\r\n');
            request.pipe(response);
        }
        else {//if (endPoint === '/test/file') {
            //let fileName = endPoint.substring(1);
            let fileName = '';
            fileName = fileName.replace(/\.\.\\/g, ''); //No va a permitir ../ dentro 
            fileName = path.resolve(routeDirectory, fileName); // Convertimos una ruta relativa a una ruta absoluta.
            let typeFile;

            switch (path.extname(fileName)) {
                case '.html':
                case '.htm':
                    typeFile = 'text/html';
                    break;
                case '.js':
                    typeFile = 'text/javascript';
                    break;
                case '.css':
                    typeFile = 'text/css';
                    break;
                case '.png':
                    typeFile = 'image/png';
                    break;
                case '.txt':
                    typeFile = 'text/plain';
                    break;
                default:
                    typeFile = 'application/octet-stream';
                    break;
            }

            console.log(fileName);
            let stream = fs.createReadStream(fileName);
            stream.once('readable', () => {
                response.setHeader('Content-Type', typeFile);
                response.writeHead(200);
                stream.pipe(response);
            });
            stream.on('error', (err) => {
                //  console.log(err)
                response.setHeader('Content-Type', 'text/plain; charset =UTF-8');
                response.writeHead(404); //Codigo not found
                response.end(err.message);
            });




        }
    });
}
serve(process.argv[2] || '/tmp', parseInt(process.argv[3] || 9000));