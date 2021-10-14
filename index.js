const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server)

io.on('connection', socket => {
    
    socket.emit('setId', socket.id)

    socket.on('sendMessage', message => {
        io.emit('loadMessage', message)
    })
})

server.listen(process.env.PORT || 3001)