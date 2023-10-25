const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '123',
      database: 'namedb',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  });
  
module.exports = knex;