process.title = 'node-chat-server';
const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 });
 
// list of currently connected clients (users)
var clients = [ ];

wss.on('connection', function connection(ws) {

	   var index = clients.push(ws) - 1;
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    for (var i=0; i < clients.length; i++) {
                    clients[i].send(message);
                }


  });

      // user disconnected
    ws.on('close', function(connection) {
            // remove user from the list of connected clients
            clients.splice(index, 1);
 
    });
 
});