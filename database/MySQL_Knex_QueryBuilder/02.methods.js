const knex = require('../connection');

  // consultar o usuário pelo e-mail para validação
  await knex.select('email').from('users').where({ email }).first();

  // consultar o usuario pelo email e pegar todos os dados
  await knex.select(['name', 'lastname', 'email', 'age']).from('users').where({ email }).first();
   
  // pegar senha do usuário pelo email
  await knex.select('password').from('users').where({ email }).first();
   
  // inserir dados do usuário no banco
  await knex.insert({ 
    name: user.name, 
    lastname: user.lastname,
    email: user.email,
    age: user.age,
    password: user.password, }).into('users');
 
  // selecioar usuario pelo id
  await knex.select(['id', 'name', 'lastname', 'email', 'age']).where({ id }).table('users');

  // deletar usuario
  await knex.delete().from('users').where('id', id);

  // selecionar todos os usuarios
  await knex.select('id', 'name', 'lastname', 'email', 'age').from('users');
  
  // atualizar dados do usuario
  await knex.update({ id, name, lastname, email, age }).where({ id }).table('users');
     