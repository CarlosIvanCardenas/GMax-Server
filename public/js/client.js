(function() {
    var socket = io();
    var ledOn = document.getElementById('btnOn');
    var ledOff = document.getElementById('btnOff');
    var servo = document.getElementById('btnGirar');
    var slide = document.getElementById('slide');

    socket.on('connect', function() {
        socket.emit('ready', 'control');
    });

    ledOn.addEventListener('click', function(){
        socket.emit('prender');
    });

    ledOff.addEventListener('click', function(){
        socket.emit('apagar');
    });

    servo.addEventListener('click', function(){
        socket.emit('girar');
    });

    slide.addEventListener('click', function(){
        let value = document.getElementById('slide').value;
        socket.emit('slide', value);
    });
})();