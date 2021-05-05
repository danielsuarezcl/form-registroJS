var registro = [];
function AgregarRegistro(){
    let datosRegistro = new Object();
    let nombre = document.getElementById('nombre').value;
    let apellidomaterno = document.getElementById('apellidomaterno').value;
    let apellidopaterno = document.getElementById('apellidopaterno').value;
    let mail = document.getElementById('mail').value;
    let fono = document.getElementById('fono').value;
    let direccion = document.getElementById('direccion').value;

    datosRegistro['Nombre'] = nombre;
    datosRegistro['Apellido materno'] = apellidomaterno;
    datosRegistro['Apellido paterno'] = apellidopaterno;
    datosRegistro['Mail'] = mail;
    datosRegistro['Teléfono'] = fono;
    datosRegistro['Dirección'] = direccion;

    registro.push(datosRegistro);

    console.log(registro);
}