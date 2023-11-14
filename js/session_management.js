function cargarNombreDeUsuarioLogueado() {
    const nodoNombreUsuario = document.getElementById('nombre_usuario');
    const usuarioLogueadoString = localStorage.getItem('usuarioLogueado')
    if (!usuarioLogueadoString) {
        nodoNombreUsuario.innerText = 'User'
        return
    }

    const usuarioLogueadoOBJ = JSON.parse(usuarioLogueadoString)
    nodoNombreUsuario.innerHTML = usuarioLogueadoOBJ.usuario

}

function cerrarSesion() {
    localStorage.removeItem('usuarioLogueado')

    localStorage.removeItem('musica_sonando')
}