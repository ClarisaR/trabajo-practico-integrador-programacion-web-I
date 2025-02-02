cargarNombreDeUsuarioLogueado();


const nodoCerrarSesion = document.getElementById('cerrar_sesion')
const cancionAlbumSonandoNodo = document.getElementById('cancion_album_sonando')
const favoritasNodo = document.getElementById('favoritas_conteiner')

nodoCerrarSesion.addEventListener('click', cerrarSesion)



function agregarTitulosTabla() {
    const playNodo = document.createElement('p')
    playNodo.className = 'caja'
    const nombreCancionNodo = document.createElement('p')
    nombreCancionNodo.innerText = 'Cancion'
    nombreCancionNodo.className = 'caja'
    const albumNodo = document.createElement('p')
    albumNodo.innerText = 'Album'
    albumNodo.className = 'caja'
    const duracionNodo = document.createElement('p')
    duracionNodo.innerText = 'Duracion'
    duracionNodo.className = 'caja'
    const reproduccionesNodo = document.createElement('p')
    reproduccionesNodo.innerText = 'Reproducciones'
    reproduccionesNodo.className = 'caja'

    favoritasNodo.appendChild(playNodo)
    favoritasNodo.appendChild(nombreCancionNodo)
    favoritasNodo.appendChild(albumNodo)
    favoritasNodo.appendChild(duracionNodo)
    favoritasNodo.appendChild(reproduccionesNodo)
}

agregarTitulosTabla()


function cargarCancionesFavoritas() {
    favoritasNodo.innerHTML = ""
    agregarTitulosTabla()
    //obtengo canciones favoritos del usuario logueado
    const idUsuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')).id
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    const usuario = usuarios.find(usuario => usuario.id == idUsuarioLogueado)
    const { albumesFavoritos, cancionesFavoritas } = usuario

    for (const cancion of cancionesFavoritas) {

        const { id, nombre, duracion, portada, id_album, reproducciones, estrella } = cancion

        //icono play
        const playNodo = document.createElement('div')
        playNodo.className = 'caja'
        const iconoPlayNodo = document.createElement('i')
        iconoPlayNodo.className = 'fa-solid fa-play'
        playNodo.appendChild(iconoPlayNodo)

        //nombre de la cancion
        const nombreCancionNodo = document.createElement('div')
        nombreCancionNodo.innerText = nombre
        nombreCancionNodo.className = 'caja'
        nombreCancionNodo.id = 'nombre_cancion'
        const iconoEstrellaCancionNodo = document.createElement('i')
        iconoEstrellaCancionNodo.className = 'fa-solid fa-star'
        iconoEstrellaCancionNodo.dataset.id = id
        iconoEstrellaCancionNodo.style = 'color: 	#1DB954;'
        nombreCancionNodo.appendChild(iconoEstrellaCancionNodo)

        //funcionalidad de evento click en una cancion
        nombreCancionNodo.addEventListener('click', function () {
            //obtengo canciones favoritos del usuario logueado
            const idUsuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')).id
            const usuarios = JSON.parse(localStorage.getItem('usuarios'))
            const usuario = usuarios.find(usuario => usuario.id == idUsuarioLogueado)
            const { albumesFavoritos, cancionesFavoritas } = usuario

            musica_sonando = cancion
            cancionAlbumSonandoNodo.innerText = ""

            localStorage.setItem('musica_sonando', JSON.stringify(musica_sonando))

            const nodoPortada = document.createElement('div')
            nodoPortada.className = 'portada'
            const nodoImagenPortada = document.createElement('img')
            nodoImagenPortada.src = `img/${portada}.jpg`
            nodoImagenPortada.alt = portada
            nodoImagenPortada.className = 'cover'

            const nodoEstrella = document.createElement('img')
            nodoEstrella.alt = estrella
            nodoEstrella.className = 'star'
            const cancionFavEncontrado = cancionesFavoritas.find(album => album.id == id_album)
            if (cancionFavEncontrado) {
                nodoEstrella.src = 'img/icon_favorite.png'
            } else {
                nodoEstrella.src = `img/${estrella}.png`
            }

            nodoPortada.appendChild(nodoImagenPortada)
            nodoPortada.appendChild(nodoEstrella)

            const nodoInfo = document.createElement('div')
            nodoInfo.className = 'paragraph'
            const nodoCancion = document.createElement('p')
            nodoCancion.innerText = nombre
            const nodoAlbum = document.createElement('small')
            nodoAlbum.innerText = albumes[id_album - 1].nombre

            nodoInfo.appendChild(nodoCancion)
            nodoInfo.appendChild(nodoAlbum)

            cancionAlbumSonandoNodo.appendChild(nodoPortada)
            cancionAlbumSonandoNodo.appendChild(nodoInfo)

        })


        //funcionalidad de evento click en un icono estrella de una cancion
        iconoEstrellaCancionNodo.addEventListener('click', quitarDeFavoritas)

        //album de la cancion
        const albumNodo = document.createElement('div')
        albumNodo.innerText = albumes[id_album - 1].nombre
        albumNodo.className = 'caja'
        const iconoEstrellaAlbumNodo = document.createElement('i')
        iconoEstrellaAlbumNodo.className = 'fa-solid fa-star'

        const albumEncontrado = albumesFavoritos.find(album => album.id == id_album)
        if (albumEncontrado) {
            iconoEstrellaAlbumNodo.style = 'color: 	#1DB954;'
        } else {
            iconoEstrellaAlbumNodo.style = 'color: #808080;'
        }

        albumNodo.appendChild(iconoEstrellaAlbumNodo)

        //funcionalidad click en una estrella del album
        iconoEstrellaAlbumNodo.addEventListener('click', function () {
            //obtengo canciones y albumes favoritos del usuario logueado
            const idUsuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')).id
            const usuarios = JSON.parse(localStorage.getItem('usuarios'))
            const usuario = usuarios.find(usuario => usuario.id == idUsuarioLogueado)
            const { albumesFavoritos } = usuario

            const albumFavEncontrado = albumesFavoritos.find(album => album.id == id_album)
            if (albumFavEncontrado) {
                this.style = 'color: #808080;'
                usuario.albumesFavoritos = albumesFavoritos.filter(album => album.id != id_album)
                localStorage.setItem('usuarios', JSON.stringify(usuarios))
                window.location.reload()
            } else {
                this.style = 'color: 	#1DB954;'
                const albumEncontrado = albumes.find(album => album.id == id_album)
                usuario.albumesFavoritos.push(albumEncontrado)
                localStorage.setItem('usuarios', JSON.stringify(usuarios))
                window.location.reload()
            }

        })

        //duracion
        const duracionNodo = document.createElement('div')
        duracionNodo.innerText = duracion
        duracionNodo.className = 'caja'

        //reproducciones
        const reproduccionesNodo = document.createElement('div')
        reproduccionesNodo.innerText = reproducciones
        reproduccionesNodo.className = 'caja'

        favoritasNodo.appendChild(playNodo)
        favoritasNodo.appendChild(nombreCancionNodo)
        favoritasNodo.appendChild(albumNodo)
        favoritasNodo.appendChild(duracionNodo)
        favoritasNodo.appendChild(reproduccionesNodo)
    }
}

cargarCancionesFavoritas()

function quitarDeFavoritas(evento) {

    //obtengo canciones y albumes favoritos del usuario logueado
    const idUsuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')).id
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    const usuario = usuarios.find(usuario => usuario.id == idUsuarioLogueado)
    const { albumesFavoritos, cancionesFavoritas } = usuario
    evento.stopPropagation()

    const { id } = evento.target.dataset

    this.style = 'color: #808080;'
    usuario.cancionesFavoritas = cancionesFavoritas.filter(cancionFav => cancionFav.id != id)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    cargarCancionesFavoritas()
}

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

        cancionAlbumSonandoNodo.appendChild(nodoPortada)
        cancionAlbumSonandoNodo.appendChild(nodoInfo)
    }
}

mostrarCancionAlbumSonando()




