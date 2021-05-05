function ValidaNombre(){
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("msgNombre");

    if(nombre.length < 5){
        mensaje.innerText = "El nombre debe de tener al menos 5 caracteres.";
        mensaje.classList.remove("formTrue");
        mensaje.classList.add("formFalse");
    }else{
        mensaje.innerText = "El nombre es correcto.";
        mensaje.classList.remove("formFalse");
        mensaje.classList.add("formTrue");
    }
}

function ValidaApellidoMaterno(){
    var nombre = document.getElementById("apellidomaterno").value;
    var mensaje = document.getElementById("msgApellidoMaterno");

    if(nombre.length < 5){
        mensaje.innerText = "El apellido debe de tener al menos 5 caracteres.";
        mensaje.classList.remove("formTrue");
        mensaje.classList.add("formFalse");
    }else{
        mensaje.innerText = "El apellido es correcto.";
        mensaje.classList.remove("formFalse");
        mensaje.classList.add("formTrue");
    }
}

function ValidaApellidoPaterno(){
    var nombre = document.getElementById("apellidopaterno").value;
    var mensaje = document.getElementById("msgApellidoPaterno");

    if(nombre.length < 5){
        mensaje.innerText = "El apellido debe de tener al menos 5 caracteres.";
        mensaje.classList.remove("formTrue");
        mensaje.classList.add("formFalse");
    }else{
        mensaje.innerText = "El apellido es correcto.";
        mensaje.classList.remove("formFalse");
        mensaje.classList.add("formTrue");
    }
}

function ValidaMail(){
    var regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var correo = document.getElementById("mail").value;
    var msgCorreo = document.getElementById("msgMail");

    if(!regex.test(correo)){
        msgCorreo.innerText = "Ingresa un correo válido, por favor.";
        msgCorreo.classList.remove("formTrue");
        msgCorreo.classList.add("formFalse");
    }else{
        msgCorreo.innerText = "El correo es correcto.";
        msgCorreo.classList.remove("formFalse");
        msgCorreo.classList.add("formTrue");
    }
}

function ValidaFono(){
    var fono = document.getElementById("fono").value;
    var mensaje = document.getElementById("msgFono");

    if(direccion.length < 3){
        mensaje.innerText = "El número debe contener al menos 3 digitos.";
        mensaje.classList.remove("formTrue");
        mensaje.classList.add("formFalse");
    }else{
        mensaje.innerText = "El teléfono es correcto.";
        mensaje.classList.remove("formFalse");
        mensaje.classList.add("formTrue");
    }
}

function ValidaDireccion(){
    var direccion = document.getElementById("direccion").value;
    var mensaje = document.getElementById("msgDireccion");

    if(direccion.length < 5){
        mensaje.innerText = "La dirección debe de tener al menos 10 caracteres.";
        mensaje.classList.remove("formTrue");
        mensaje.classList.add("formFalse");
    }else{
        mensaje.innerText = "La dirección es correcta.";
        mensaje.classList.remove("formFalse");
        mensaje.classList.add("formTrue");
    }
}