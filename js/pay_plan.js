const nodoFormPagar = document.getElementById('form_pagar')

nodoFormPagar.addEventListener('submit', pagarPlan)

const paramString = window.location.search
console.log(paramString)
const params = new URLSearchParams(paramString)
const nombrePlanURL = params.get('plan')
const nodoPlanElegido = document.getElementById('plan_elegido')
const nodoPagar = document.getElementById('buttonPagar')
const nodoCancelar = document.getElementById('cancelar')

const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'))
const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || []

if (usuarioLogueado) {
    cargarNombreDeUsuarioLogueado()

    const nodoCerrarSesion = document.getElementById('cerrar_sesion')
    nodoCerrarSesion.addEventListener('click', cerrarSesion)
}

function cargarPlanElegido(planes) {

    const planElegido = planes.find(plan => plan.value == nombrePlanURL)

    const { nombre, portada, precio, beneficioUno, beneficioDos, beneficioTres } = planElegido

    const nodoNombrePlan = document.createElement('h3')
    nodoNombrePlan.innerText = `Elegiste el ${nombre}`

    const nodoDescripcionPlan = document.createElement('div')
    nodoDescripcionPlan.className = 'plan_description'

    const nodoPortadaPlan = document.createElement('img')
    nodoPortadaPlan.src = `img/${portada}.png`

    const nodoListaBeneficios = document.createElement('ul')
    const nodoPrecio = document.createElement('li')
    nodoPrecio.innerText = precio
    const nodoBeneficioUno = document.createElement('li')
    nodoBeneficioUno.innerText = beneficioUno
    const nodoBeneficioDos = document.createElement('li')
    nodoBeneficioDos.innerText = beneficioDos
    const nodoBeneficioTres = document.createElement('li')
    nodoBeneficioTres.innerText = beneficioTres

    nodoListaBeneficios.appendChild(nodoPrecio)
    nodoListaBeneficios.appendChild(nodoBeneficioUno)
    nodoListaBeneficios.appendChild(nodoBeneficioDos)
    nodoListaBeneficios.appendChild(nodoBeneficioTres)

    nodoDescripcionPlan.appendChild(nodoPortadaPlan)
    nodoDescripcionPlan.appendChild(nodoListaBeneficios)

    nodoPlanElegido.appendChild(nodoNombrePlan)
    nodoPlanElegido.appendChild(nodoDescripcionPlan)
}

cargarPlanElegido(planes)

function pagarPlan(evento) {
    evento.preventDefault()
    ocultarMensajesDeError()

    const tarjeta = document.getElementById('tarjeta').value
    const CVC = document.getElementById('CVC').value
    const VTO = document.getElementById('VTO').value
    const nombreYApellido = document.getElementById('nombre_apellido').value

    let hayError = false;

    const patronTarjeta = /^\d{16}$/

    if (!patronTarjeta.test(tarjeta)) {
        mostrarMensajeDeError('mensaje_error_tarjeta', 'El numero debe ser de 16 dígitos')
        hayError = true;
    }

    if (VTO == '') {
        mostrarMensajeDeError('mensaje_error_VTO', 'La fecha es requerida')
        hayError = true;
    }

    const patronCVC = /^(?!000|999)\d{3}$/
    if (!patronCVC.test(CVC)) {
        mostrarMensajeDeError('mensaje_error_CVC', 'El número debe ser de tres dígitos, excepto 000 y 999')
        hayError = true
    }
    if (nombreYApellido < 5) {
        mostrarMensajeDeError('mensaje_error_nombre_apellido', 'El nombre debe ser de al menos 5 dígitos')
        hayError = true;
    }


    const usuarioEncontrado = usuariosGuardados.find(usuarioActual => usuarioActual.usuario == nombreYApellido)
  
    if (!usuarioEncontrado) {
        mostrarMensajeDeError('mensaje_error_usuario', 'El usuario no esta registrado')
        nodoCancelar.href = 'index.html'
        hayError = true;
    }

    if (hayError) {
        return;
    }

    pagoExitoso(usuarioEncontrado, usuarioLogueado)

}

function mostrarMensajeDeError(id, mensaje) {
    const elemento = document.getElementById(id);
    elemento.innerText = mensaje
    elemento.style.display = 'block';
}

function ocultarMensajesDeError() {
    document.getElementById('mensaje_error_nombre_apellido').style.display = 'none';
    document.getElementById('mensaje_error_tarjeta').style.display = 'none';
    document.getElementById('mensaje_error_CVC').style.display = 'none';
    document.getElementById('mensaje_error_VTO').style.display = 'none';
}

function pagoExitoso(usuarioEncontrado, usuarioLogueado) {
    document.querySelector(".popup").style.display = "block";
        const btnAceptar = document.getElementById("btnAceptar");
        btnAceptar.addEventListener("click", function () {
            if (usuarioEncontrado && usuarioLogueado == null) {
                usuarioEncontrado.planPremium = nombrePlanURL
                localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados))
                window.location.href = 'index.html'
            }
            else {
                if (usuarioEncontrado && usuarioEncontrado.usuario == usuarioLogueado.usuario) {
                    usuarioEncontrado.planPremium = nombrePlanURL
                    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados))
                    window.location.href = 'pantalla-principal.html'
                }
            }
        });
}

