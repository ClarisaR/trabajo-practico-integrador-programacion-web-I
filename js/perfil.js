cargarNombreDeUsuarioLogueado();

document.getElementById('form_perfil').addEventListener('submit', actualizarUsuario)

document.getElementById('eliminar_usuario').addEventListener('click', eliminarUsuario)

const nodoNombreUsuario = document.getElementById('usuario')
const nodoContrasenia = document.getElementById('contrasenia')
const nodoRepetirContrasenia = document.getElementById('repetir_contrasenia')
const nodoEmail = document.getElementById('email')
const nodoFechaNacimiento = document.getElementById('fecha_nacimiento')

const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || []

function cargarDatosDeUsuario() {
    const usuarioLogueadoString = localStorage.getItem('usuarioLogueado')
    const usuarioLogueadoOBJ = JSON.parse(usuarioLogueadoString)
    nodoNombreUsuario.value = usuarioLogueadoOBJ.usuario
    nodoContrasenia.value = usuarioLogueadoOBJ.contrasenia
    nodoRepetirContrasenia.value = usuarioLogueadoOBJ.contrasenia
    nodoEmail.value = usuarioLogueadoOBJ.email
    nodoFechaNacimiento.value = usuarioLogueadoOBJ.fechaNacimiento
}
cargarDatosDeUsuario()




function actualizarUsuario(evento) {

    ocultarMensajesDeError()
    evento.preventDefault()

    const usuario = nodoNombreUsuario.value
    const contrasenia = nodoContrasenia.value
    const repetirContrasenia = nodoRepetirContrasenia.value
    const fechaNacimiento = nodoFechaNacimiento.value
    const email = nodoEmail.value
    const id = JSON.parse(localStorage.getItem('usuarioLogueado')).id

    let hayError = false;

    if (usuario.length < 5) {
        mostrarMensajeDeError('mensaje_error_nombre', 'El nombre debe contener al menos 5 caracteres');
        hayError = true;
    }

    if (contrasenia.length < 8) {
        mostrarMensajeDeError('mensaje_error_contrasenia', 'La contraseña debe contener al menos 8 caracteres');
        hayError = true;
    }
    if (contrasenia != repetirContrasenia) {
        mostrarMensajeDeError('mensaje_error_contrasenias_distintas', 'Las contraseñas no coinciden');
        hayError = true;
    }
    const patronEmail = /^(?![_0-9])[\w0-9]{4,}@[\w.-]+\.[a-zA-Z]{2,}\.ar$/;
    const emailModelo = "ejemplo@alumno.edu.ar";

    if (!patronEmail.test(email)) {
        mostrarMensajeDeError('mensaje_error_email', "El mail debe ser similar a 'ejemplo@alumno.edu.ar'");
        hayError = true;
    }
    console.log(fechaNacimiento);
    if (fechaNacimiento == '') {
        mostrarMensajeDeError('campo_requerido_fecha', 'Campo requerido');
        hayError = true;
    }

    for (const usuarioActual of usuariosGuardados) {
        if (usuarioActual.id != id && usuarioActual.usuario == usuario) {
            mostrarMensajeDeError('mensaje_error_nombre', 'Este nombre de usuario no esta disponible')
            hayError = true;
        }
    }

    if (hayError) {
        return;
    }

    const usuarioEncontrado = usuariosGuardados.find(usuarioActual => usuarioActual.id == id)


    if (usuarioEncontrado.contrasenia == contrasenia) {
        usuarioEncontrado.usuario = usuario
        usuarioEncontrado.contrasenia = contrasenia
        usuarioEncontrado.repetirContrasenia = contrasenia
        usuarioEncontrado.email = email
        usuarioEncontrado.fechaNacimiento = fechaNacimiento
    }else{
        const contraseniaInvertida = invertirContrasenia(contrasenia);

        usuarioEncontrado.usuario = usuario
        usuarioEncontrado.contrasenia = contraseniaInvertida
        usuarioEncontrado.repetirContrasenia = contraseniaInvertida
        usuarioEncontrado.email = email
        usuarioEncontrado.fechaNacimiento = fechaNacimiento
    }


    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados))

    localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado))

    mostrarModal()
}

function mostrarMensajeDeError(id, mensaje) {
    const elemento = document.getElementById(id);
    elemento.innerText = mensaje
    elemento.style.display = 'block';
}

function invertirContrasenia(contrasenia) {
    let mitad = Math.floor(contrasenia.length / 2);
    let primeraMitad = contrasenia.slice(0, mitad);
    let segundaMitad = contrasenia.slice(mitad);
    return segundaMitad + primeraMitad;
}

function mostrarModal() {
    const respuesta = confirm('Datos guardados correctamente. Quieres ir al home?')
    if (respuesta) {
        window.location.href = 'pantalla-principal.html'
    }
}

function eliminarUsuario() {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')).usuario
    const usuarioEncontrado = usuariosGuardados.find(usuarioActual => usuarioActual.usuario == usuarioLogueado)
    const index = usuariosGuardados.indexOf(usuarioEncontrado)
    //Elimino el usuario del array de usuarios en el localStorage
    console.log(index)
    usuariosGuardados.splice(index, 1)
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados))

    //Elimino el usuario logueado del localStorage
    localStorage.removeItem('usuarioLogueado')
}

function ocultarMensajesDeError() {
    document.getElementById('mensaje_error_nombre').style.display = 'none';
    document.getElementById('mensaje_error_contrasenia').style.display = 'none';
    document.getElementById('mensaje_error_contrasenias_distintas').style.display = 'none';
    document.getElementById('mensaje_error_email').style.display = 'none';
    document.getElementById('campo_requerido_fecha').style.display = 'none';
}
