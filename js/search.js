cargarNombreDeUsuarioLogueado();
// todos los nodos que utilizaré
const albumesNodo = document.getElementById('albumes');
const artistasNodo = document.getElementById('artistas');
const cancionesNodo = document.getElementById('canciones');
const nodoInput = document.getElementById('buscar');
const nodoCerrarSesion = document.getElementById('cerrar_sesion')
const nodoCancionOAlbumSonando = document.getElementById('cancion_album_sonando')

//todos los listener
nodoInput.addEventListener('keyup', actualizarResultados);
nodoCerrarSesion.addEventListener('click' , cerrarSesion)




function actualizarResultados(evento) {
    const palabraABuscar = nodoInput.value;
    actualizar(palabraABuscar, artistas, cargarArtistas)
    actualizar(palabraABuscar, albumes, cargarAlbumes)
    actualizar(palabraABuscar, canciones, cargarCanciones)
}
function actualizar(palabraABuscar, array, callback){
    const arrayFiltrados = array.filter(function (elementoActual) {
        if (elementoActual.nombre.toLowerCase().includes(palabraABuscar.toLowerCase())) {
            return true;
        }
        return false;
    })
    callback(arrayFiltrados)
}

function cargarAlbumes(albumes) {
    albumesNodo.innerHTML ="";
    for (const album of albumes) {
        const { nombre, portada, id_artista, id } = album;

        const nodoAlbum = document.createElement('a');
        nodoAlbum.href = `musica-sonando.html?id_album=${id}`;
        const nodoPortada = document.createElement('img');
        nodoPortada.src = `img/${portada}.jpg`;
        nodoPortada.alt = portada;
        const nodoNombreAlbum = document.createElement('p');
        nodoNombreAlbum.className = 'info';
        nodoNombreAlbum.innerText = nombre;
        const nodoNombreArtista = document.createElement('small');
        nodoNombreArtista.innerText = artistas[id_artista - 1].nombre;
        nodoAlbum.appendChild(nodoPortada);
        nodoAlbum.appendChild(nodoNombreAlbum);
        nodoAlbum.appendChild(nodoNombreArtista);
        albumesNodo.appendChild(nodoAlbum);
    }
}

cargarAlbumes(albumes);

function cargarArtistas(artistas) {
    artistasNodo.innerHTML = "";
    for (const key in artistas) {
        const { nombre, fotografia, id} = artistas[key];

        const nodoArtista = document.createElement('a');
        nodoArtista.href = `musica-sonando.html?id_album=${id}`;
        const nodoFotografiaArtista = document.createElement('img');
        nodoFotografiaArtista.src = `img/${fotografia}.jpg`;
        nodoFotografiaArtista.alt = fotografia;
        const nodoNombreArtista = document.createElement('p');
        nodoNombreArtista.className = 'info';
        nodoNombreArtista.innerText = nombre;
        nodoArtista.appendChild(nodoFotografiaArtista);
        nodoArtista.appendChild(nodoNombreArtista);
        artistasNodo.appendChild(nodoArtista);
    }
}

cargarArtistas(artistas);

/*function cargarCanciones(canciones) {
    cancionesNodo.innerHTML = "";
    for (const cancion of canciones) {
        const { nombre, portada, id_album, id} = cancion;

        const nodoCancion = document.createElement('a');
        nodoCancion.href = `musica-sonando.html?id_album=${id_album}`;

        const nodoPortadaCancion = document.createElement('img');
        nodoPortadaCancion.src = `img/${portada}.jpg`;
        nodoPortadaCancion.alt = portada;
        const nodoNombreCancion = document.createElement('p');
        nodoNombreCancion.className = 'info';
        nodoNombreCancion.innerHTML = nombre;
        const id_artista = albumes[id_album - 1].id_artista;
        const nombreArtista = artistas[id_artista - 1].nombre;
        const nodoNombreArtista = document.createElement('small');
        nodoNombreArtista.innerHTML = nombreArtista;
        nodoCancion.appendChild(nodoPortadaCancion);
        nodoCancion.appendChild(nodoNombreCancion);
        nodoCancion.appendChild(nodoNombreArtista);
        cancionesNodo.appendChild(nodoCancion);
    }
}
cargarCanciones(canciones);*/

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


