let claveUsuario;
let ingresoClave;
let instructivo;
let retiroDinero;
let detenerBucle = false; 
let ingresoUsuario = document.getElementById("usuarioValidacion");
let validarClave = document.getElementById("claveValidacion");

instructivo = ["No compartas claves ni datos con otras personas", "Recordá cambiar tu clave cada 6 meses", "Si tenes dudas, sugerencias o reclamos, comunicate al 0810-999-qwerty"];


const baseClientes = [
    {nombre: "Jorge", apellido: "Perez", clave: 1234},
    {nombre: "Carla", apellido: "Santoro", clave: 6789},
    {nombre: "Juan", apellido: "Batman", clave: 5678},
];      

 document.getElementById("usuarioValidacion").value = "";
 document.getElementById("claveValidacion").value = "";
 document.getElementById("botonValidacion").addEventListener("click", validacionUsuario);
  
 function validacionUsuario() {
    
    while((ingresoUsuario.value != null) && (validarClave.value != null) && (!detenerBucle)) {
     for (let i = 0; i < baseClientes.length; i++) {
         if((ingresoUsuario.value == baseClientes[i].nombre) && (validarClave.value == baseClientes[i].clave) ){
             detenerBucle = true;
         }
     }

     if (detenerBucle) {
         document.getElementById("bienvenidaUsuario").innerHTML = `<p>Bienvenido/a ${ingresoUsuario.value}!</p>`;
         validacionDiv.appendChild(linkExtracciones);
         document.getElementById("error").innerHTML = "";
         
         
     } else {
         document.getElementById("error").innerHTML = "Usuario o clave incorrecta";         
         break;
     }
 }
 }

const validacionDiv = document.querySelector(".linkExtracciones");

const linkExtracciones = document.createElement("a");
linkExtracciones.classList.add("linkExtracciones");
linkExtracciones.setAttribute("href", "./Pages/extracciones.html");
linkExtracciones.textContent = "Extracciones"; 

 

 function mostrarInstrucciones() {
    for (let i = 0; i < instructivo.length; i++) {
    document.getElementById("instrucciones").innerHTML = instructivo[i];    
    }
};











