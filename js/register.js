document.getElementById('form_registro').addEventListener('submit', registrarUsuario);
function registrarUsuario(evento) {
    evento.preventDefault();
    // Recupera la lista actual de usuarios almacenada en el localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    let nombre = document.getElementById('nombre').value;
    let contrasenia = document.getElementById('contrasenia').value;
    let repetirContrasenia = document.getElementById('repetir_contrasenia').value;
    let email = document.getElementById('email').value;
    let fechaNacimiento = document.getElementById('fecha_nacimiento').value;

    if (contrasenia != repetirContrasenia) {
        mostrarMensajeErrorContrasenia();
    }
    let patronEmail = /^(?![_0-9])[\w0-9]{4,}@alumno\.edu\.ar$/
    let emailModelo = "ejemplo@alumno.edu.ar"

    if (!patronEmail.test(email)) {
        mostrarMensajeErrorEmail();
    }

    if (contrasenia == repetirContrasenia && patronEmail.test(email)) {
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
}
function mostrarMensajeErrorEmail() {
    let elemento = document.getElementById('mensaje_error_email');
    elemento.style.display = 'block';
}
function mostrarMensajeErrorContrasenia() {
    let elemento = document.getElementById('mensaje_error_contrasenia');
    elemento.style.display = 'block';
}
function invertirContrasenia(contrasenia) {
    let mitad = Math.floor(contrasenia.length / 2);
    let primeraMitad = contrasenia.slice(0, mitad);
    let segundaMitad = contrasenia.slice(mitad);
    return segundaMitad + primeraMitad;
}