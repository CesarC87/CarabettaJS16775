document.getElementById("usuarioRegistro").value = "";
document.getElementById("apellidoRegistro").value = "";
document.getElementById("claveRegistro").value = "";
document.getElementById("botonEnvioRegistro").addEventListener("click", campoIncompleto);

 
let capturaNombre = document.getElementById("usuarioRegistro").value;
let capturaApellido = document.getElementById("apellidoRegistro").value;
let capturaClave = document.getElementById("claveRegistro").value;

const baseClientes = [
    {nombre: "Jorge", apellido: "Perez", clave: 1234},
    {nombre: "Carla", apellido: "Santoro", clave: 6789},
    {nombre: "Juan", apellido: "Batman", clave: 5678},
];      

function registro() {
    //if ((capturaNombre != "") && (capturaApellido != "") && (capturaClave != "")) {
        function Cliente (nombre, apellido, clave){
            this.nombre = nombre;
            this.apellido = apellido;
            this.clave = clave;        
        }        
        let capturaNombre = document.getElementById("usuarioRegistro").value;
        let capturaApellido = document.getElementById("apellidoRegistro").value;
        let capturaClave = document.getElementById("claveRegistro").value;

        let nuevoCliente = new Cliente(capturaNombre,capturaApellido,capturaClave);     
        baseClientes.push(nuevoCliente);
        console.log(baseClientes);
    }
    //else {
    //document.getElementById("errorRegistro").innerHTML = "<p>Debe completar todos los campos</p>";
 //}
//}
const registroDiv = document.querySelector(".registro");
const errorDeRegistro = document.createElement("p");
errorDeRegistro.classList.add("errorRegistro");
errorDeRegistro.setAttribute("id", "registroFail");
errorDeRegistro.innerHTML = "Debe completar todos los campos";

function campoIncompleto() {
    if ((capturaNombre = "") || (capturaApellido = "") || (capturaClave = "")) {
    registroDiv.appendChild(errorDeRegistro);
    }
    else {
        registro();
    }
}
