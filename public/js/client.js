(function() {
    var socket = io();
    var ledOn = document.getElementById('btnOn');
    var ledOff = document.getElementById('btnOff');

    socket.on('connect', function(data) {
        socket.emit('ready', 'control');
    });

    ledOn.addEventListener('click', function(){
        socket.emit('prender');
         console.log('prender');
    });

    ledOff.addEventListener('click', function(){
        socket.emit('apagar');
    });
})();