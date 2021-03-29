const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = socketio(server);

app.use(express.static('client'));


let mensajes = [{
  texto: 'Bienvenido al chat.',
  alias: 'Gustavo'
}];

io.on('connection', (socket) => {
  console.log('Cliente conectado desde ' + socket.handshake.address);
  socket.emit('mensajes', mensajes);
  socket.on('agregar-mensaje', (data) => {
    mensajes.push(data);
    io.sockets.emit('mensajes', mensajes);
  });
});

server.listen(3000, () => console.log('listen in port 3000'));




