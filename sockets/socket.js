const io= require('../index');
//mensaje de los sockets
io.on('connection', client => {
    console.log("Cliente conextado");
    client.on('disconnect', () => { 
        console.log("Cliente desconectado");
     });
     client.on('mensaje',(payload) => {console.log('Mensaje!!',payload)});
     io.emit('mensaje', {admin:'Nuevo Mensaje'});
});