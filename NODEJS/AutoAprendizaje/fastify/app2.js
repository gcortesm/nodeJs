const path = require('path');
const fastify = require('fastify')({
    logger: {
        level: 'info',
        file: path.join(__dirname, "/logs/logs.log")
    }
});


fastify.route({
    method: 'GET',
    url: '/',
    schema: {
        querystring: {
            name: { type: 'string' }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    },
    preHandler: async (req, res) => {
        console.log('Esta es una autenticacion'); //Se ejecuta antes del handler principal   
    },
    handler: async (req, res) => {
        req.log.info(`Un get a nuestro server ${new Date()}`);
        return { hello: 'Hola desde fastify, con eschema' };
    }
});

const start = async () => {
    try {
        await fastify.listen(3300);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();