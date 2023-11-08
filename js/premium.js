/* let formPlan = document.querySelector(".form_plan");
let btnRadio1 = document.querySelector('input[value="plan_mensual"]');
let btnRadio2 = document.querySelector('input[value="plan_anual"]');
let btnRadio3 = document.querySelector('input[value="plan_infinito"]');
let btnAvanzar = document.getElementById("buttonAvanzar");
let vistaActual = document.getElementById("vistaActual");




const vistaMensual = `<h3>Elegiste el Plan Mensual</h3> 
                        <div class="plan_description">
                            <img src=""> 
                            <ul>
                                <li>✔ A <strong>$1499</strong> por mes</li>
                                <li>✔ Escucha música sin anuncios</li>
                                <li>✔ Reproduce tus canciones en cualquier lugar, hasta sin conexión</li>
                                <li>✔ Arma tus propios playlist</li>
                            </ul>`
const vistaAnual = `<h3>Elegiste el Plan Anual</h3> 
                    <div class="plan_description">
                        <img src=""> 
                        <ul>
                            <li>✔ A <strong>$9999</strong> por año</li>
                            <li>✔ Escucha música sin anuncios</li>
                            <li>✔ Reproduce tus canciones en cualquier lugar, hasta sin conexión</li>
                            <li>✔ Arma tus propios playlist</li>
                        </ul>`
const vistaInfinito = `<h3>Elegiste el Plan Infinito</h3> 
                        <div class="plan_description">
                            <img src=""> 
                            <ul>
                                <li>✔ Un <strong>único</strong> pago de $29.999</li>
                                <li>✔ Escucha música sin anuncios</li>
                                <li>✔ Reproduce tus canciones en cualquier lugar, hasta sin conexión</li>
                                <li>✔ Arma tus propios playlist</li>
                                <li>✔ Música de por vida</li>
                            </ul>`    
                            
                            
function mostrarVista(vista) {
    vistaActual.innerHTML = vista;
}                            
// Agregamos un evento change a los radio inputs
btnRadio1.addEventListener("change", function () {
    habilitarBoton(vistaMensual);
});
btnRadio2.addEventListener("change", function () {
    habilitarBoton(vistaAnual);
});
btnRadio3.addEventListener("change", function () {
    habilitarBoton(vistaInfinito);
});

function habilitarBoton() {
    btnAvanzar.removeAttribute("disabled");
}

// Agregamos un evento submit al formulario
formPlan.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario
    
    // Obtener el valor seleccionado

    if (btnRadio1.checked) {
        mostrarVista(vistaMensual);
        window.location.href = "pagar-plan.html";
    } else if (btnRadio2.checked) {
        mostrarVista(vistaAnual);
        window.location.href = "pagar-plan.html";
    }
        else if (btnRadio3.checked) {
        mostrarVista(vistaInfinito);
        window.location.href = "pagar-plan.html";    
    }
    

}); */
