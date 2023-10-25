const mongoose = require('mongoose'); // import mongoose


async function connection() {
  try {
    await mongoose.connect(process.env.URI); // mongodb://127.0.0.1:27017/database
    
    if (!process.env.URI) {
      throw new Error('A variavel de ambiente nao esta definida');
    }
    console.log('Connect Database');
  } catch (error) {
    console.error('Erro na conexão com o banco de dados');
  }
}

connection().catch((err) => console.error('Erro ao tentar se conectar com o banco de dados', err));

module.exports = mongoose;