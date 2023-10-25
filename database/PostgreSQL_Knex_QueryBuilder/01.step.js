// 1- Precisamos iniciar o PostgreSQL no computador
    sudo service postgresql status
    sudo service postgresql start 
    sudo -u postgres psql 


// 2- Precisamos criar o banco de dados 
    CREATE DATABASE nomeDoBanco; 
    \dt // lista os bancos disponiveis
    \c nomeDoBanco; // seleciona o banco para uso


// 3- Precisamos criar o arquivo knexfile.js na raiz do projeto
    knex init // vai criar o arquivo knexfile.js

// 4- Configuramos o arquivo para o projeto
    module.exports = {

        client: 'postgresql',
        connection: {
        database: 'financial',
        user: 'postgres',
        password: '123'
        },
        pool: {
        min: 2,
        max: 10
        },
        migrations: {
        directory: './src/database/migrations',
        tableName: 'knex_migrations'
        }
    };


// 5- configuramos o knex no projeto - connection
    const config = require('../../knexfile')
    const knex = require('knex')(config)
    module.exports = knex

// 6- Apos configurar, podemos começar a criar as migrações de tabela para o banco de dados

    knex migrate:make create_table_users // cria o arquivo de migração -> criação da tabela
    knex migrate:make create_table_product // cria o arquivo de migração -> criação da tabela
    knex migrate:make create_table_catogories // cria o arquivo de migração -> criação da tabela

// 7 - Apos criar os arquivos de migrações, precisamos configurar as tabelas para o banco de dados 

    // exemplo de configuração de uma tabela
    exports.up = function(knex) {
        return knex.schema.createTable('users', function(table) {
            table.increments('id');
            table.string('name').notNullable();
            table.string('email').notNullable().unique();
            table.string('phone').notNullable();
            table.date('birth').notNullable();
            table.string('city').notNullable();
            table.string('state').notNullable();
            table.string('password').notNullable();
            table.timestamps(true, true);
        });
    };

    exports.down = function(knex) {
        return knex.schema.dropTable('users');
    };

// 8- Apos configurar as tabelas, digitamos o ultimo comando necessario para começarmos a utilizar as tabelas no banco de dados

knex migrate:latest // vai criar as tabelas no banco de dados