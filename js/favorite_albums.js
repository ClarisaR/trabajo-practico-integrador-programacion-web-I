cargarNombreDeUsuarioLogueado();

//todos los nodos que utilizaré
const albumesNodo = document.getElementById('albumes')
const nodoCerrarSesion = document.getElementById('cerrar_sesion')
const nodoCancionOAlbumSonando = document.getElementById('cancion_album_sonando')

nodoCerrarSesion.addEventListener('click', cerrarSesion)

function cargarAlbumesFavoritos() {
    albumesNodo.innerHTML = ""

    const idUsuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')).id
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    const usuario = usuarios.find(usuario => usuario.id == idUsuarioLogueado)
    const { albumesFavoritos } = usuario


    if (albumesFavoritos.length > 0) {
        for (const albumFavorito of albumesFavoritos) {
            const { id, nombre, portada, id_artista, estrella} = albumFavorito

            const nodoAlbum = document.createElement('a')
            nodoAlbum.href = `musica-sonando.html?id_album=${id}`;
            nodoAlbum.id = 'enlace'
            const nodoPortada = document.createElement('img')
            nodoPortada.src = `img/${portada}.jpg`;
            nodoPortada.alt = portada;
            const nodoNombreAlbum = document.createElement('p')
            nodoNombreAlbum.className = 'info';
            nodoNombreAlbum.innerText = nombre;
            const nodoNombreArtista = document.createElement('small')
            nodoNombreArtista.innerText = artistas[id_artista - 1].nombre;
            const nodoEstrella = document.createElement('img')
            nodoEstrella.src = 'img/icon_favorite.png'
            nodoEstrella.alt = estrella
            nodoEstrella.className = 'estrellita'
            nodoEstrella.dataset.id_album = id

            nodoAlbum.appendChild(nodoPortada)
            nodoAlbum.appendChild(nodoNombreAlbum)
            nodoAlbum.appendChild(nodoNombreArtista)
            nodoAlbum.appendChild(nodoEstrella)
            albumesNodo.appendChild(nodoAlbum)


            nodoEstrella.addEventListener('click', function (evento) {
                evento.preventDefault()
                const usuarios = JSON.parse(localStorage.getItem('usuarios'))
                const usuario = usuarios.find(usuario => usuario.id == idUsuarioLogueado)
                const { albumesFavoritos } = usuario

                const { id_album } = evento.target.dataset

                nodoEstrella.src = `img/${estrella}.png`
                usuario.albumesFavoritos = albumesFavoritos.filter(albumFavorito => albumFavorito.id != id_album)

                localStorage.setItem('usuarios', JSON.stringify(usuarios))
                cargarAlbumesFavoritos()
            })
        }
    }
}

cargarAlbumesFavoritos()



function mostrarCancionAlbumSonando() {
    const musicaSonando = JSON.parse(localStorage.getItem('musica_sonando'))
    if (musicaSonando) {
        const { nombre, portada } = musicaSonando

        const nodoPortada = document.createElement('div')
        nodoPortada.className = 'portada'
        const nodoImagenPortada = document.createElement('img')
        nodoImagenPortada.src = `img/${portada}.jpg`
        nodoImagenPortada.alt = portada
        nodoImagenPortada.className = 'cover'

        nodoPortada.appendChild(nodoImagenPortada)

        const nodoInfo = document.createElement('div')
        nodoInfo.className = 'paragraph'
        const nodoNombreCancionAlbum = document.createElement('p')
        nodoNombreCancionAlbum.innerText = nombre

        nodoInfo.appendChild(nodoNombreCancionAlbum)

        nodoCancionOAlbumSonando.appendChild(nodoPortada)
        nodoCancionOAlbumSonando.appendChild(nodoInfo)
    }
}

mostrarCancionAlbumSonando()