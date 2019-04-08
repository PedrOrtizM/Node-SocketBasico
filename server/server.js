const express = require('express');

// npm i socket.io
const socketIO = require('socket.io');

// modulo de node por defecto express está basado en express
const http = require('http');
const path = require('path');
const app = express();

// servidor con toda la confuguración de express
let server = http.createServer(app);

// Para hacer público el directorio public
const publicPath = path.resolve(__dirname, '../public');

// El puerto de Heroku o el puerto 300
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


// IO (InputOutput) = esta es la comunicacion del backend
// exportamos IO para que sea recibido en socket-server
module.exports.io = socketIO(server);
require('./sockets/socket-server');





server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});