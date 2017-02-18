var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const Emitter = require('events');
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.use(express.static(__dirname + '/public'));

let clients = {};
clients.arduino = null;
clients.control = new Emitter();

io.on('connection', function(client){
  client.on('ready', function (id) {
    if (id == 'arduino') {
      console.log("arduino connected");
      clients.arduino = client;
      //clients.arduino.join('room');

    } else if (id = 'control') {
      console.log("control connected");
      control = client;
      //clients.control.join('room');
    }
  });

   clients.control.on('prender', function () {
    clients.arduino.emit('prender');
  });

  clients.control.on('apagar', function () {
    clients.arduino.emit('apagar');
  })

});
