//Servidor de express
const express = require('express');
const { createServer } = require('http');
const socketio = require('socket.io');
const Sockets = require('./sockets');


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT || 8080;

        //  Http Server
        this.server = new createServer( this.app )

        //Configuraciones sockets
        this.io = socketio( this.server, {/* Confifuraciones */ } );
    }

    middlewares() {
        //Desplegar carpeta estatica public
        this.app.use( express.static('public') )
    }

    //Configurar sockets
    configurarSockets() {
        new Sockets( this.io );
    }


    execute() {
        // Inicializar Middlewares
        this.middlewares();

        //Inicializar sockets
        this.configurarSockets();

        //Inicializar Server
        this.server.listen(this.port, () =>{
            console.log(`Server corriendo en puerto: ${ this.port }`);
        });
    }

}

module.exports = Server;