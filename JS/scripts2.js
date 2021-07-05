const btnEnviar = document.querySelector("#botonEnvioRegistro");

const baseClientes = [
    {nombre: "Jorge", apellido: "Perez", clave: 1234},
    {nombre: "Carla", apellido: "Santoro", clave: 6789},
    {nombre: "Juan", apellido: "Batman", clave: 5678},
];   


const capturaNombre = document.querySelector("#usuarioRegistro");
const capturaApellido = document.querySelector("#apellidoRegistro");
const capturaClave = document.querySelector("#claveRegistro");


iniciarRegistro();
capturaNombre.addEventListener("blur", validarUsuario);
capturaApellido.addEventListener("blur", validarUsuario);
capturaClave.addEventListener("blur", validarUsuario);
btnEnviar.addEventListener("click", registrarUsuario);

function iniciarRegistro() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add("desabilitar-boton");
}

function validarUsuario() {
    console.log("Validando usuario");
    
    if(capturaNombre.value !== "" && capturaApellido.value !== "" && capturaClave.value !== "") {
        console.log("Habilitar botón");
        btnEnviar.disabled = false;
        btnEnviar.classList.remove("desabilitar-boton");
        registroDiv.removeChild(errorDeRegistro);
    }
    else {
        registroDiv.appendChild(errorDeRegistro);
    }
        
}

function Cliente (nombre, apellido, clave){
    this.nombre = nombre;
    this.apellido = apellido;
    this.clave = clave;        
}

function registrarUsuario() {
    console.log("Registrando nuevo usuario");
    let nuevoCliente;

    nuevoCliente = new Cliente(capturaNombre.value, capturaApellido.value, capturaClave.value);
    baseClientes.push(nuevoCliente); 
    console.log(baseClientes);
    registroDiv.appendChild(registroExitoso);
    
    setTimeout(() => {
        registroExitoso.remove();
        resetarInputs();
        iniciarRegistro();
    }, 5000);
}

function resetarInputs() {
    capturaNombre.value = "";
    capturaApellido.value = "";
    capturaClave.value = "";
}

const registroDiv = document.querySelector(".registro");

const errorDeRegistro = document.createElement("p");
errorDeRegistro.classList.add("errorRegistro");
errorDeRegistro.setAttribute("id", "registroFail");
errorDeRegistro.textContent = "Debe completar todos los campos"; 

const registroExitoso = document.createElement("p");
registroExitoso.classList.add("okRegistro");
registroExitoso.setAttribute("id", "registroSuccess");
registroExitoso.textContent = "¡Registro exitoso!"; 
