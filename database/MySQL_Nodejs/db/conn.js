const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host:'localhost',
    user: 'root',
    password: '29262926',
    database: 'curso'

})

module.exports = pool