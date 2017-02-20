//Cambio de informacion entre menus.
function infoFunction() {
    document.getElementById("title").innerHTML = "Info";    
    document.getElementById("text").innerHTML = "Prototipo de brazo robotico controlado por arduino, leapmotion y aplicaciones web alojadas en Microsoft Azure.";
    $("#info").show();
    $("#controls").hide();
}

function instFunction() {
    document.getElementById("title").innerHTML = "Instrucciones";    
    document.getElementById("text").innerHTML = "Miembros del equipo bla bla bla";
    $("#info").hide();
    $("#controls").hide();
}

function controlFunction() {
    document.getElementById("title").innerHTML = "Control";    
    document.getElementById("text").innerHTML = "Control bla bla bla";
    $("#info").hide();
    $("#controls").show();
}

function contactFunction() {
    document.getElementById("title").innerHTML = "About";    
    document.getElementById("text").innerHTML = "About bla bla bla";
    $("#info").hide();
    $("#controls").hide();
}

