
//PORT
const PORT = process.env.PORT || 3030

//MODULES
const express = require('express')
const server = express()

//CONTROLLERS
const {HomeController,
      AboutController,
      UserController,
      users
} = require('./controllers')

//EXPRESS ENGINE
server.set('view engine', 'pug')
//STATIC FOLDERS

server.use(express.static('publics'))

//ROOTS
server.get('/', HomeController)
server.get('/calculator', AboutController)
server.get('/:name', UserController)

//SERVER LISTENING
server.listen(PORT, () =>{
    console.log(`Server is running at port:${PORT}`)
})