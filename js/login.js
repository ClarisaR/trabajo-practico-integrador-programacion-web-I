document.getElementById('form_inicio_sesion').addEventListener('submit', iniciar_sesion);
function iniciar_sesion(evento) {
    evento.preventDefault();
    ocultarMensajeDeError();
    let usuario = document.getElementById('usuario').value;
    let contrasenia = document.getElementById('contrasenia').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    // JSON.parse
    // JSON.stringify
    if (usuarios == null) {
        mostrarMensajeError('mensaje_error');
        return;
    }

    let contraseniaInvertida= invertirContrasenia(contrasenia);

    const usuarioEncontrado = usuarios.find(usuarioActual => usuarioActual.usuario == usuario)


    if (usuarioEncontrado && usuarioEncontrado.contrasenia == contraseniaInvertida) {
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
        window.location.href = 'pantalla-principal.html';
    } else {
        mostrarMensajeError('mensaje_error');
    }
}
function mostrarMensajeError(id) {
    let elemento = document.getElementById(id);
    elemento.style.display = 'block';
}
function invertirContrasenia(contrasenia) {
    let mitad = Math.floor(contrasenia.length / 2);
    let primeraMitad = contrasenia.slice(0, mitad);
    let segundaMitad = contrasenia.slice(mitad);
    return segundaMitad + primeraMitad;
}
function ocultarMensajeDeError() {
    document.getElementById('mensaje_error').style.display = 'none';
}