
var socket = io();

// para establecer comunicación con el servidor
// saber si estamos conectados al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});


// saber si se perdió la conexion con el servidor
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información desde el cliente al servidor
socket.emit('enviarMensaje',
           { usuario: 'Pedro',mensaje: 'Hola Mundo'}, 
           function(resp) {
                console.log('respuesta server: ', resp);
           });


// Escuchar información desde el servidor 
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});