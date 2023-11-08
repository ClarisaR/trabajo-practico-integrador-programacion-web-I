
//var regexCampo=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
var regexCampoCVC=/^[0-9]{3}$/;
var regexCampoTarjeta = /^[0-9]{16}$/;

function validar (){
        
    var error=false;
    var mensajeError=""; 
    document.getElementById("mensaje").style.color="red";

        //Valida campo nombre y apellido   
        if(document.getElementById("Nombre_Apellido").value==""){
            error=true;
            mensajeError+="<p>Completar Nombre y Apellido</p>";
        }
        //Valida campo CVC
        if(!regexCampoCVC.test(document.getElementById("CVC").value)){
            error=true;
            mensajeError+="<p>CVC no válido</p>";
        }
        // Valida numero de tarjeta
        if(!regexCampoTarjeta.test(document.getElementById("Tarjeta").value)){
            error=true;
            mensajeError+="<p>Número de tarjeta no válido</p>";
        }

        if(error){
            document.getElementById("mensaje").innerHTML=mensajeError;
            return false;
        }else {
            return true;
        }
            
}
document.getElementById("buttonPagar").addEventListener('click', pagoExitoso);
document.querySelector(".popup").style.display="none";
function pagoExitoso(){
    //Si la validación se cumple:
    if (validar()===true) {
        //Mostramos el div popup
        document.querySelector(".popup").style.display="block";
        //Llamamos al formulario
        var formulario = document.getElementById("form_pagar");
        //Agregamos el evento submit al formulario
        formulario.addEventListener("submit", function(event) {
        //Prevenimos el envío del formulario por defecto    
        event.preventDefault();
        //Llamamos al boton y le damos funcionalidad click para que al aceptar nos redireccione al home del sitio
            var btnAceptar = document.getElementById("btnAceptar");
            btnAceptar.addEventListener("click", function() {
            window.location.href = "pantalla-principal.html";
        });
         
    });
} 
}
