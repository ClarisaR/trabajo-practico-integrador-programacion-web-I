/*function cargarNombreDeUsuarioLogueado() {
    const nodoNombreUsuario = document.getElementById('nombre_usuario');
    const usuarioLogueadoString = localStorage.getItem('usuarioLogueado')
    if (!usuarioLogueadoString) {
        nodoNombreUsuario.innerText = 'User'
        return
    }

    const usuarioLogueadoOBJ = JSON.parse(usuarioLogueadoString)
    nodoNombreUsuario.innerHTML = usuarioLogueadoOBJ.usuario

}*/

function cargarNombreDeUsuarioLogueado() {

    const usuarioLogueadoString = localStorage.getItem('usuarioLogueado')
    if (usuarioLogueadoString) {

        const usuarioLogueadoOBJ = JSON.parse(usuarioLogueadoString)

        const nodoUsuario = document.getElementById('user_info')
        const nodoInfoDeUsuario = document.createElement('div')
        const nodoNombre = document.createElement('p')
        nodoNombre.innerText = usuarioLogueadoOBJ.usuario
        const nodoCerrarSesion = document.createElement('a')
        nodoCerrarSesion.href = 'index.html'
        nodoCerrarSesion.className = 'cerrar_sesion'
        nodoCerrarSesion.id = 'cerrar_sesion'
        nodoCerrarSesion.innerText = 'Cerrar Sesion'

        nodoInfoDeUsuario.appendChild(nodoNombre)
        nodoInfoDeUsuario.appendChild(nodoCerrarSesion)

        const nodoAvatar = document.createElement('a')
        nodoAvatar.href = 'perfil.html'
        const nodoImgAvatar = document.createElement('img')
        nodoImgAvatar.src = 'img/avatar.png'
        nodoImgAvatar.className = 'avatar'
        nodoImgAvatar.alt = 'avatar'

        nodoAvatar.appendChild(nodoImgAvatar)
        
        nodoUsuario.appendChild(nodoInfoDeUsuario)
        nodoUsuario.appendChild(nodoAvatar)
    }

}

function cerrarSesion() {
    localStorage.removeItem('usuarioLogueado')

    localStorage.removeItem('musica_sonando')
}