//Referencia conexion al sokcets
const socket =  io('http://localhost:8080' || 'https://socketio-server-basic-production.up.railway.app/'); // socket del cliente y el otro es el socket del servidor
//Referencias HTLM
const formulario = document.querySelector('#miFormulario');
const mensajes = document.querySelector('#misMensajes');
const txtMensaje = document.querySelector('#txtMensaje');

formulario.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const nuevoMensaje = txtMensaje.value;

    socket.emit('mensaje-to-server', {
        msg: nuevoMensaje
    })
});

socket.on('mensaje-from-server', ( data ) =>{
    if ( data.msg === '' ) {
        return;
    }
    mensajes.innerHTML +=
    `
    <li>${data.msg}</li>
    `
})




//  socket.on('mensaje-bienvenida', ( data ) =>{
//      console.log( data );
//  });

 // setTimeout(() => {
 //     socket.emit('mensaje-cliente',{
 //         msg:'cliente',
 //         nombre:'Kevin'
 //     })
 // }, 2000 );


//* Se usa esta configuracion const socket=io('http://localhost:8080'); cuando tenemos el front y el back eln lugares diferentes