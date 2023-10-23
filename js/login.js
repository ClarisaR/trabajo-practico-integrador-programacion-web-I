document.getElementById('form_inicio_sesion').addEventListener('submit', iniciar_sesion);
function iniciar_sesion(evento) {
    evento.preventDefault();
    let usuario = document.getElementById('usuario').value;
    let contrasenia = document.getElementById('contrasenia').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    // JSON.parse
    // JSON.stringify

    let usuarioEncontrado = false;
    if (usuarios == null) {
        mostrarMensajeError();
        return;
    }

    let contraseniaAlmacenada = invertirContrasenia(contrasenia);

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario == usuario && usuarios[i].contrasenia == contraseniaAlmacenada) {
            usuarioEncontrado = true;
            break;
        }
    }
    if (usuarioEncontrado) {
        localStorage.setItem('usuario', usuario);
        window.location.href = 'pantalla-principal.html';
    } else {
        mostrarMensajeError();
    }
}
function mostrarMensajeError() {
    let elemento = document.getElementById('mensaje_error');
    elemento.style.display = 'block';
}
function invertirContrasenia(contrasenia) {
    let mitad = Math.floor(contrasenia.length / 2);
    let primeraMitad = contrasenia.slice(0, mitad);
    let segundaMitad = contrasenia.slice(mitad);
    return segundaMitad + primeraMitad;
}