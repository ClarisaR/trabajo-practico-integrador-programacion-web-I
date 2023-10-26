function cargarNombreDeUsuarioLogueado(){
    const nombreUsuarioLogueado = localStorage.getItem('usuarioLogueado') || 'User';
    const nodoNombreUsuario= document.getElementById('nombreUsuario');
    nodoNombreUsuario.innerText = nombreUsuarioLogueado;
}

function cerrarSesion(){
    localStorage.removeItem('usuarioLogueado')
}