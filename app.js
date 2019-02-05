const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res, nex) => {
   res.render('index')
})

io.on('connection', (socket) => {

   socket.on('chatMessage', (msg) => {
      // console.log(socket.id)
      socket.broadcast.emit('broadMessage', msg)
   })

   socket.on('disconnect', () => {
      console.log('Usuário desconectado')
   })
})

http.listen(80, () => {
   console.log('Rodando em localhost:3000')
})