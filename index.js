const Server = require("./models/server");
require('dotenv').config(); 

const server = new Server();

server.execute();


















































//? Basado sin clase
//Servidor de express
// const express = require('express');
// const app = express();

// //Servidor de sockets
// const server = require('http').createServer(app);

// // Configuracion del sokcet server
// const io = require('socket.io')(server);


// //Desplegar carpeta estatica public
// app.use( express.static('public') )

// io.on('connection', ( socket ) => { // identificador del cliente que se conecto, client dispositivo del que se conecto
//     console.log('Cliente conectado'); // dispositivo que se conecto al socket server, puede ser el mismo usuario con diferentes dispositivos
//     console.log( socket.id );
    
//     /socket.emit('mensaje-bienvenida',{
//          msg:'Bienvenido al chat server',
//          fecha: new Date()
//      });

//     socket.on('mensaje-to-server', ( payload ) =>{
//         if (payload.msg === '') {
//             return;
//         }
//         console.log( payload );

//         io.emit('mensaje-from-server', payload ) // io emite a todos los clientes conectados, socket solo ala instancia que creo ese cliente
//     })

// });



// server.listen(8080, () =>{
//     console.log('Server corriendo en puerto: 8080');
// });