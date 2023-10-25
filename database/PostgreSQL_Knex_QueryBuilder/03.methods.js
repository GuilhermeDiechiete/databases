const knex = require('../connection')


// consultar usuário pelo e-mail
await knex.select('email').from('users').where({ 'email': email }).first();
    
// consultar usuário pelo e-mail
await knex.select('id','name','email','phone', 'birth', 'city', 'state').from('users').where({ 'email': email }).first();
           
// consultar usuário pelo ID
await knex.select('name','email','phone', 'birth', 'city', 'state').from('users').where({ 'id': id }).first();

// pegar senha do usuario
await knex.select('password').from('users').where({ 'email': email }).first();

// salvar dados de usuario no banco
await knex('users').insert(user)

// atualizar dados do usuario pelo id
await knex('users').where({ id: id }).update({
    name: user.name,
    email: user.email,
    phone: user.phone,
    birth: user.birth,
    city: user.city,
    state: user.state
});

// atualizar senha do usuario pelo id
await knex('users').where({ id: id }).update({ password: newpassword })

// deletar usuario pelo id
await knex('users').where('id', id).del();
