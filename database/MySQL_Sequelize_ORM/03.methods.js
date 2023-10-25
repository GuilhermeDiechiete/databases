const User = require("../database/models/UserModel")

// listar todos os usuarios do banco
await User.findAll({ attributes: {exclude: ['password', 'createdAt', 'updatedAt']}})
   
// busca por usuario no banco de dados pelo email
await User.findOne({where: {email:email}})

// inserir dados do usuario no banco 
await User.create({name, email, password: hashPassword})

// deleta usuario pelo id
await User.destroy({where: {id:id}})