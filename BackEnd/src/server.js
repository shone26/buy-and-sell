import Hapi from '@hapi/hapi';

const start = async () => {
    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
    });

    server.route({
        method: 'GET',
        path: '/hello',
        handler: (req, h) => {
            return 'Hello!';
        }
    });

    server.route({
        method: 'Get',
        path: '/kawadabn',
        handler: (req, h) => {
            return 'හුත්තක් කෑවා'
        }
    })

    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

start();