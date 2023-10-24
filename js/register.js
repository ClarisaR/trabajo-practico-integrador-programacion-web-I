document.getElementById('form_registro').addEventListener('submit', registrarUsuario);
function registrarUsuario(evento) {
    evento.preventDefault();
    ocultarMensajesDeError();
    // Recupera la lista actual de usuarios almacenada en el localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    let nombre = document.getElementById('nombre').value;
    let contrasenia = document.getElementById('contrasenia').value;
    let repetirContrasenia = document.getElementById('repetir_contrasenia').value;
    let email = document.getElementById('email').value;
    let fechaNacimiento = document.getElementById('fecha_nacimiento').value;

    let hayError = false;
    if (nombre.length < 5) {
        mostrarMensajeDeError('mensaje_error_largo_nombre');
        hayError = true;
    }
    if (contrasenia.length < 8) {
        mostrarMensajeDeError('mensaje_error_largo_contrasenia');
        hayError = true;
    }
    if (contrasenia != repetirContrasenia) {
        mostrarMensajeDeError('mensaje_error_contrasenia');
        hayError = true;
    }
    let patronEmail = /^(?![_0-9])[\w0-9]{4,}@alumno\.edu\.ar$/
    let emailModelo = "ejemplo@alumno.edu.ar"

    if (!patronEmail.test(email)) {
        mostrarMensajeDeError('mensaje_error_email');
        hayError = true;
    }
    console.log(fechaNacimiento);
    if (fechaNacimiento == '') {
        mostrarMensajeDeError('campo_requerido_fecha');
        hayError = true;
    }
    if(hayError){
        return;
    }
    let contraseniaAlmacenada = invertirContrasenia(contrasenia);

    let nuevoUsuario = {
        usuario: nombre,
        contrasenia: contraseniaAlmacenada,
        email: email,
        fechaNacimiento: fechaNacimiento
    };

    usuariosGuardados.push(nuevoUsuario);

    // Convierte el array de usuarios en una cadena JSON
    let usuariosJSON = JSON.stringify(usuariosGuardados);

    // Almacena el array actualizado en el localStorage
    localStorage.setItem('usuarios', usuariosJSON);
    window.location.href = 'index.html';
}

function mostrarMensajeDeError(id){
    const elemento = document.getElementById(id);
    elemento.style.display = 'block';
}
function invertirContrasenia(contrasenia) {
    let mitad = Math.floor(contrasenia.length / 2);
    let primeraMitad = contrasenia.slice(0, mitad);
    let segundaMitad = contrasenia.slice(mitad);
    return segundaMitad + primeraMitad;
}
function ocultarMensajesDeError(){
    document.getElementById('mensaje_error_largo_nombre').style.display = 'none';
    document.getElementById('mensaje_error_largo_contrasenia').style.display = 'none';
    document.getElementById('mensaje_error_contrasenia').style.display = 'none';
    document.getElementById('mensaje_error_email').style.display = 'none';
    document.getElementById('campo_requerido_fecha').style.display = 'none';
}
