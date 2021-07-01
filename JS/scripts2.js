document.getElementById("usuarioRegistro").value = "";
document.getElementById("apellidoRegistro").value = "";
document.getElementById("claveRegistro").value = "";
document.getElementById("botonEnvioRegistro").addEventListener("click", registro);

 
 let capturaNombre = document.getElementById("usuarioRegistro").value;
 let capturaApellido = document.getElementById("apellidoRegistro").value;
 let capturaClave = document.getElementById("claveRegistro").value;

function registro() {
    if ((capturaNombre != "") && (capturaApellido != "") && (capturaClave != "")) {
        function Cliente (nombre, apellido, clave){
            this.nombre = nombre;
            this.apellido = apellido;
            this.clave = clave;        
        }        
        let capturaNombre = document.getElementById("usuarioRegistro").value;
        let capturaApellido = document.getElementById("apellidoRegistro").value;
        let capturaClave = document.getElementById("claveRegistro").value;

        let nuevoCliente = new Cliente(capturaNombre,capturaApellido,capturaClave);     
        console.log(nuevoCliente);
    }
    else {
    document.getElementById("errorRegistro").innerHTML = "<p>Debe completar todos los campos</p>";
 }

}