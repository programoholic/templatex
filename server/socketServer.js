const io = require('socket.io')();
// const redis = require('redis');
console.log('.............insise socket');
let clientCount=0;
// const config = require('./config').redis;

io.on('connection', (clientSocket) => {
io.emit('userConnected',clientSocket.client.conn.server.clientsCount);
// console.log('**********new client joined');
// clientSocket.emit('userConnected', clientSocket.client.conn.server.clientsCount );
// // clientSocket.on('connected',()=>{
// // clientSocket.emit('userConnected', clientSocket.client.conn.server.clientsCount );
// // });
  clientSocket.on('disconnect', () => {
        console.log('*************** client left');
        io.emit('userConnected', clientSocket.client.conn.server.clientsCount );      
  });
});

module.exports = io;
