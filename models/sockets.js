
class Sockets {

    constructor( io ) {
        
        this.io = io;

        this.socketsEvents();
    }

    socketsEvents() {
        //On connection
        this.io.on('connection', ( socket ) => { // identificador del cliente que se conecto, client dispositivo del que se conecto
            
            //Escuchar evento
            socket.on('mensaje-to-server', ( payload ) =>{
                if (payload.msg === '') return;
                console.log( payload );
                this.io.emit('mensaje-from-server', payload ) // io emite a todos los clientes conectados, socket solo ala instancia que creo ese cliente
            });

    
        });
    }

}


module.exports = Sockets;



// Est clase sirve para tener control absoluto de los clientes que se vayan conectando.