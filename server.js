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

let arduino = new Emitter();
let control = new Emitter();

io.on('connection', function(client){
  client.on('ready', function (id) {
    if (id == 'arduino') {
      console.log("arduino connected");
      arduino = client;

    } else if (id = 'control') {
      console.log("control connected");
      control = client;
    }
  });

   control.on('prender', function () {
    arduino.emit('prender');
  });

  control.on('apagar', function () {
    arduino.emit('apagar');
  });

  control.on('girar', function () {
    arduino.emit('girar');
    console.log('girar emit');
  });

  control.on('slide', function (value) {
    arduino.emit('slide', value);
  });

});
