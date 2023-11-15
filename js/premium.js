const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'))

if (usuarioLogueado) {
    cargarNombreDeUsuarioLogueado()

    const nodoCerrarSesion = document.getElementById('cerrar_sesion')
    nodoCerrarSesion.addEventListener('click', cerrarSesion)
}

const nodoAvanzar = document.getElementById('button_avanzar')



nodoAvanzar.addEventListener('submit', function (evento) {
    evento.preventDefault()
    const planElegido = document.querySelector('input[name="plan"]:checked')

    if (planElegido) {
        window.location.href = 'pagar-plan.html'
    }
})