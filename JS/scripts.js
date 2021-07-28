let instructivo;
let detenerBucle = false; 
let ingresoUsuario = document.getElementById("usuarioValidacion");
let validarClave = document.getElementById("claveValidacion");
let botonValidacion = document.getElementById("botonValidacion");
let navbarIndex = document.querySelector(".navbarIndex");
let instrucciones = $("#instrucciones");
let botones = $(".botones");

//--------------- Animación H1
$("h1").animate({opacity: 1}, 1500);

instructivo = [`<p>No compartas claves ni datos con otras personas</p>`, 
                `<p>Recordá cambiar tu clave cada 6 meses</p>`, 
                `<p>Si tenes dudas, sugerencias o reclamos, comunicate al<br> 0810-999-qwerty</p>`];

//--------------- Base Clientes para validar

const baseClientes = [
    {nombre: "Jorge", apellido: "Perez", clave: 1234},
    {nombre: "Carla", apellido: "Santoro", clave: 6789},
    {nombre: "Juan", apellido: "Batman", clave: 5678},
];      

//--------------- Campos en blanco por default y agregado de evento "Click" al botón

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
        $(".errorRegistro").fadeOut(500);        
        $(".okRegistro").fadeIn(1000);          
         navbarIndex.classList.add("navbar");
         navbarIndex.classList.remove("navbarIndex");
         mostrarInstrucciones();
         instrucciones.fadeIn(2500);
         $(".botones").fadeOut(1000);
              
     } else {
        validacionMensajeDiv.append(`<p class="errorRegistro"> Usuario o clave incorrecto </p>`);
        $(".errorRegistro").fadeIn(1000);        
        $(".okRegistro").fadeOut(500);          
         break;
     }
  }
 }
//--------------- Mensaje de error / éxito
 const validacionMensajeDiv = $(".validacion");

//--------------- Si la validación es correcta, despliega enlace a sección "Extracciones"
const linkExtracciones = document.createElement("a");
linkExtracciones.classList.add("linkExtracciones");
linkExtracciones.setAttribute("href", "./Pages/extracciones.html");
linkExtracciones.textContent = "Extracciones"; 

 function mostrarInstrucciones() {
    for (let i = 0; i < instructivo.length; i++) {
    instrucciones.append(instructivo[i]);    
    }
};











