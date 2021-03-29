'use strict';

const hapi = require('@hapi/hapi');

const init = async () => {
  const server = hapi.Server({ port: 3000, host: 'localhost' });

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return 'Hola desde hapi';
    }
  });

  server.route({
    method: 'GET',
    path: '/test/{param}',
    handler: (req, h) => {
      console.log(req.params);
      return `Hola ${req.params.param.toUpperCase()} desde hapi`;
    }
  });

  server.route({
    method: 'GET',
    path: '/redirect',
    handler: (req, h) => {
      console.log('Redireccionando desde hapi');
      return h.redirect('/test/gustavo');
    }
  });

  server.route({
    method: 'GET',
    path: '/user',

    handler: (req, h) => {
      const obj = { name: 'Gustavo', lastName: 'Cortes' };
      return obj;
    }
  });

  server.ext('onRequest', (req, h) => {
    console.log('Ejecuta antes de que se resuelva la peticion');
    return h.continue;
  });

  await server.start();
  console.log(`The server is alive ${server.info.uri}`);
};


process.on('unhandledRejection',(err)=>{
  console.log(err);
  process.exit(1);
});

init();