const { io } = require('../server');


// saber si un usuario está conectado al servidor
io.on('connection', (client) => {

    console.log('Usuario conectado');
    
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });


    // Si un usuario se desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        // enviamos a traves del evento enviarMensaje
        client.broadcast.emit('enviarMensaje', data);
        

         if (mensaje.usuario) {
             callback({
                 resp: 'TODO SALIO BIEN!'
             });
            } 
         else {
             callback({
                 resp: 'TODO SALIO MAL!!!!!!!!'
             });
         }



    });

});