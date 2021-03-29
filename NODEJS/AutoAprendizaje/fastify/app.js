const fastify = require('fastify')({ logger: true });


fastify.get('/',async (request,response)=>{
    return {message:'Hola desde fastify'};
});

fastify.listen('3200','127.0.1.1',(err,address)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Server listen on ${address}`);
});





