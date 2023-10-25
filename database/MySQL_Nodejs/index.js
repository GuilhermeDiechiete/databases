// IMPORTAÇÕES 
const express = require('express') // servidor
const exphbs = require('express-handlebars') // para o html
const pool = require('./db/conn') // banco de dados

const app = express()

// MIDLEWARES
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))


// ROTA RAIZ DA APLICAÇÃO
app.get('/', (req, res)=>{
    res.render('home')
})

// ROTA PARA ADICIONAR BOOKS

// PREPARANDO A QUERY ( não confiamos no que vem do usuario)
app.post('/books/insertbook', (req, res)=>{
    const title = req.body.title 
    const pages = req.body.pages 

    const sql = `INSERT INTO books (??, ??) VALUES (?,?)`
    const data = ['title', 'pages', title, pages]

    pool.query(sql, data, function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/') 
    })
})

// RESGATANDO DADOS DO BANCO DE DADOS
app.get('/books', (req, res)=>{
    const sql = "SELECT * FROM books"

    pool.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const books = data
        console.log(books)
        res.render('books', {books})
    })

})

//RESGATANDO DADOS DO BANCO DE DADOS COM WHERE
app.get('/books/:id', (req,res)=>{

    const id = req.params.id 

    const sql = `SELECT * FROM books WHERE ?? = ?`
    data = ['id', id]
    pool.query(sql, data, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const book = data[0]
        res.render('book', { book })
    })
})

app.get('/books/edit/:id' , (req, res)=>{
    // IDENTIFICANDO O DADO PARA EDITAR
    const id = req.params.id 
    const sql = `SELECT * FROM books WHERE ?? = ?`
    data = ['id', id]
    pool.query(sql, data, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const book = data[0]
        res.render('editbook', {book})
    })
})

app.post('/books/updatebook', (req, res) => {
    const id = req.body.id 
    const title = req.body.title 
    const pages = req.body.pages 

    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'pages', pages, 'id', id]
    pool.query(sql, data, function(err, data){
        if(err){
            console.log(err)
            return 
        }
        res.redirect('/books')
    })
})

// REMOVER UM BOOK DO BANCO DE DADOS
app.post('/books/remove/:id', (req, res)=>{
    const id = req.params.id
    const sql = `DELETE FROM books WHERE ?? = ?`
    const data = ['id', id]
    pool.query(sql, data, function(err){
        if(err){
            console.log(err)
            return 
        }
        res.redirect('/books')
    })
})


app.listen(3000)