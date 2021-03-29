const express = require('express');
//const bodyParser = require('body-parser');

const { createRoutes } = require('./routes/routes');


const PORT = 9000;
const miServer= express();

miServer.set('views','./views')
miServer.set('view engine','pug');
//Uso de Midelware que es algo que se ejecuta antes o desdepues de que llegue la peticion a nuestra app.
//Documentacion relacioanda https://medium.com/@aarnlpezsosa/middleware-en-express-js-5ef947d668b#:~:text=Un%20middleware%20es%20una%20funci%C3%B3n%20que%20se%20puede%20ejecutar%20antes,y%20la%20funci%C3%B3n%20next().
miServer.use(express.json());


createRoutes(miServer);

miServer.use((req,res)=>{
    res.status(404).send({ message: 'No se encontro nada'});
});

miServer.listen(PORT, ()=> console.log(`The server is a live ${PORT}`));