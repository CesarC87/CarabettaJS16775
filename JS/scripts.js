let instructivo;
let detenerBucle = false; 
let ingresoUsuario = document.getElementById("usuarioValidacion");
let validarClave = document.getElementById("claveValidacion");
let botonValidacion = document.getElementById("botonValidacion");

$("h1").animate({opacity: 1}, 1500);

instructivo = ["No compartas claves ni datos con otras personas", "Recordá cambiar tu clave cada 6 meses", "Si tenes dudas, sugerencias o reclamos, comunicate al 0810-999-qwerty"];

//--------------- Base Clientes para validar

const baseClientes = [
    {nombre: "Jorge", apellido: "Perez", clave: 1234},
    {nombre: "Carla", apellido: "Santoro", clave: 6789},
    {nombre: "Juan", apellido: "Batman", clave: 5678},
];      

//--------------- Reseteo de campos y agregado de evento "Click" al botón

ingresoUsuario.value = "";
validarClave.value = "";
botonValidacion.addEventListener("click", validacionUsuario);

//--------------- Función para validar Usuario
  
 function validacionUsuario() {    
    while((ingresoUsuario.value != null) && (validarClave.value != null) && (!detenerBucle)) {
     for (let i = 0; i < baseClientes.length; i++) {
         if((ingresoUsuario.value == baseClientes[i].nombre) && (validarClave.value == baseClientes[i].clave) ){
             detenerBucle = true;
         }
     }
     if (detenerBucle) {
        validacionMensajeDiv.append(`<p class="okRegistro"> Bienvenido/a ${ingresoUsuario.value}! </p>`);
        $(".errorRegistro").hide(1000);        
        $(".okRegistro").show(700); 
         validacionDiv.appendChild(linkExtracciones);
              
     } else {
        validacionMensajeDiv.append(`<p class="errorRegistro"> Usuario o clave incorrecto </p>`);
        $(".errorRegistro").show(700);        
        $(".okRegistro").hide(1000);          
         break;
     }
  }
 }
//--------------- Mensaje de error / éxito
 const validacionMensajeDiv = $(".bodyflex");
//--------------- Si la validación es correcta, despliega enlace a sección "Extracciones"

const validacionDiv = document.querySelector("#linkExtracciones");

const linkExtracciones = document.createElement("a");
linkExtracciones.classList.add("linkExtracciones");
linkExtracciones.setAttribute("href", "./Pages/extracciones.html");
linkExtracciones.textContent = "Extracciones"; 

 function mostrarInstrucciones() {
    for (let i = 0; i < instructivo.length; i++) {
    document.getElementById("instrucciones").innerHTML = instructivo[i];    
    }
};











