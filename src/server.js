const hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = hapi.server({
    host: 'localhost',
    port: 3000,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  server.start();
  console.log(`server running on ${server.info.uri}`);
};

init();