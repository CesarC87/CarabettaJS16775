const btnEnviar = $("#botonEnvioRegistro");

const baseClientes = [
    { nombre: "Jorge", apellido: "Perez", clave: 1234 },
    { nombre: "Carla", apellido: "Santoro", clave: 6789 },
    { nombre: "Juan", apellido: "Batman", clave: 5678 },
    { nombre: "Apu", apellido: "Nahasapemapetilan", clave: 4321 },
    { nombre: "Marge", apellido: "Thompson", clave: 2255 },
    { nombre: "Mirtha", apellido: "Legrand", clave: 9999 },
    { nombre: "John", apellido: "Malkovich", clave: 1212 },
    { nombre: "Juan", apellido: "Perez", clave: 3321 },
    { nombre: "Gerardo", apellido: "Sofovich", clave: 2121 },
    { nombre: "Anibal", apellido: "Troilo", clave: 2112 },
    { nombre: "Carlos", apellido: "Memen", clave: 2525 }
];

// ------------------------------- Animación H1 
$(".h1Registro").animate({ opacity: 1 }, 1300);
$(".h1Registro").animate({ opacity: 0 }, 1200, function () {
    $(".h1Registro").text("Registro Usuario");
    $(".h1Registro").animate({ opacity: 1 }, 2000);
});
// ------------------------------- Seteo de baseClientes en Local Storage

if (localStorage.getItem("pruebaJSON")) {
    let recuperar = localStorage.getItem("pruebaJSON");
    let datosRecuperados = JSON.parse(recuperar);
    console.log(datosRecuperados);    
} else {
    let baseClientesJSON = JSON.stringify(baseClientes);
    localStorage.setItem("pruebaJSON", baseClientesJSON);
}


// ------------------------------- Levantar datos del user input

const capturaNombre = document.querySelector("#usuarioRegistro");
const capturaApellido = document.querySelector("#apellidoRegistro");
const capturaClave = document.querySelector("#claveRegistro");

//-------------------------------- Expresiones Regulares 

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //Letras, numeros, guion medio y bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,30}$/, // Letras y espacios, posibilidad de acentos
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,30}$/, // Letras y espacios, posibilidad de acentos
    contraseña: /^.{6,16}$/ // 6 a 16 digitos
}
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("input");

//-------------------------------- Testeo de inputs

let x = false;
let y = false;
let z = false;

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "Nombre":
            if (expresiones.nombre.test(e.target.value)) {
                capturaNombre.classList.add("fieldOk");
                capturaNombre.classList.remove("fieldFail");
                document.querySelector(`.registro__usuario i`).classList.add(`fa-check-circle`);
                x = true;
            }
            else {
                capturaNombre.classList.remove("fieldOk");
                capturaNombre.classList.add("fieldFail");
                document.querySelector(`.registro__usuario i`).classList.remove(`fa-check-circle`);
                x = false
            }
            break;
        case "Apellido":
            if (expresiones.apellido.test(e.target.value)) {
                capturaApellido.classList.add("fieldOk");
                capturaApellido.classList.remove("fieldFail");
                document.querySelector(`.registro__apellido i`).classList.add(`fa-check-circle`);
                y = true;
            }
            else {
                capturaApellido.classList.remove("fieldOk");
                capturaApellido.classList.add("fieldFail");
                document.querySelector(`.registro__apellido i`).classList.remove(`fa-check-circle`);
                y = false
            }
            break;
        case "Clave":
            if (expresiones.contraseña.test(e.target.value)) {
                capturaClave.classList.add("fieldOk");
                capturaClave.classList.remove("fieldFail");
                document.querySelector(`.registro__clave i`).classList.add(`fa-check-circle`);
                document.querySelector(`.registro p`).classList.remove(`registro__parrafo--mostrar`);
                z = true;
            }
            else {
                capturaClave.classList.remove("fieldOk");
                capturaClave.classList.add("fieldFail");
                document.querySelector(`.registro__clave i`).classList.remove(`fa-check-circle`);
                document.querySelector(`.registro p`).classList.add(`registro__parrafo--mostrar`);
                z = false
            }
            break;
    }
    if (x == true && y == true && z == true) {  // Si los 3 campos estan correctos, habilita el botón de registro
        console.log("Habilitar botón");
        btnEnviar.disabled = false;
        btnEnviar.removeClass("desabilitar-boton");
        $(".errorRegistro").hide(1000);
    }
    else {
        $(".errorRegistro").show(1000);
    }
}
// ------------------------------- Chequea si hay teclas presionadas o si el usuario se va del campo
inputs.forEach((input) => {
    input.addEventListener(`keyup`, validarFormulario);
    input.addEventListener(`blur`, validarFormulario);
});
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
});

// ------------------------------- Desabilita el boton enviar hasta que todos los campos se completen

function iniciarRegistro() {
    btnEnviar.disabled = true;
    btnEnviar.addClass("desabilitar-boton");
}
iniciarRegistro();

// ------------------------------- Funcion de registrar añadida al botón
btnEnviar.on("click", registrarUsuario);

// ------------------------------- Crea Cliente
function Cliente(nombre, apellido, clave) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.clave = clave;
}
// ------------------------------- Empuja al array de objetos "baseClientes" y al localStorage, creando un cliente con los inputs del usuario
function registrarUsuario() {
    if (x == true && y == true && z == true) {        
        let nuevoCliente;
        nuevoCliente = new Cliente(capturaNombre.value, capturaApellido.value, capturaClave.value);
        baseClientes.push(nuevoCliente);
        let itemsClientes = JSON.parse(localStorage.getItem("pruebaJSON"));
        itemsClientes.push(nuevoCliente);
        localStorage.setItem("pruebaJSON", JSON.stringify(itemsClientes));
        $(".errorRegistro").hide(1000);
        $(".okRegistro").show(1000);
        setTimeout(() => {
            $(".okRegistro").hide(1000);
            resetarInputs();
            iniciarRegistro();
            x = false;
            y = false;
            z = false;
        }, 4000);
    } else {
        $(".errorRegistro").show(1000);
    }
}
// ------------------------------- Retorna valores de inputs a valor inicial
function resetarInputs() {
    capturaNombre.value = "";
    capturaApellido.value = "";
    capturaClave.value = "";
    document.querySelector(`.registro__usuario i`).classList.remove(`fa-check-circle`);
    document.querySelector(`.registro__apellido i`).classList.remove(`fa-check-circle`);
    document.querySelector(`.registro__clave i`).classList.remove(`fa-check-circle`);
    document.getElementById("usuarioRegistro").classList.remove("fieldOk");
    document.getElementById("apellidoRegistro").classList.remove("fieldOk");
    document.getElementById("claveRegistro").classList.remove("fieldOk");
}
// ------------------------------- Animaciones con show y hide para desplegar mensajes de error (con jQuery)
const registroDiv = $(".registro");
const errorDeRegistro = registroDiv.append(`<p class="errorRegistro"> Debe completar todos los campos </p>`);
const registroExitoso = registroDiv.append(`<p class="okRegistro"> ¡Registro Exitoso! </p>`);

