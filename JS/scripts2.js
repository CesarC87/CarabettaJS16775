const btnEnviar = $("#botonEnvioRegistro");

const baseClientes = [
    {nombre: "Jorge", apellido: "Perez", clave: 1234},
    {nombre: "Carla", apellido: "Santoro", clave: 6789},
    {nombre: "Juan", apellido: "Batman", clave: 5678},
    { nombre:"Apu",  apellido:"Nahasapemapetilan" , clave:4321},
    { nombre:"Marge",  apellido:"Thompson" , clave:2255},
    { nombre:"Mirtha",  apellido:"Legrand" , clave:9999},
    { nombre:"John",  apellido:"Malkovich" , clave:1212},
    { nombre:"Juan",  apellido:"Perez" , clave:3321},
    { nombre:"Gerardo",  apellido:"Sofovich" , clave:2121},
    { nombre:"Anibal",  apellido:"Troilo" , clave:2112},
    { nombre:"Carlos",  apellido:"Memen" , clave:2525}  
];   



$(".h1Registro").animate({opacity:1},1300);

$(".h1Registro").animate({opacity:0},1200, function(){    
        $(".h1Registro").text("Registro Usuario");
        $(".h1Registro").animate({opacity:1},2000);        
    }); 
//   Base de datos en JSON

const baseClientesJSON = JSON.stringify(baseClientes);
localStorage.setItem("pruebaJSON", baseClientesJSON);
let recuperar = localStorage.getItem("pruebaJSON");
let datosRecuperados = JSON.parse(recuperar);
console.log(datosRecuperados);
console.log(baseClientesJSON);

//--------------------------------

// Levantar datos del user input

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

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "Nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("usuarioRegistro").classList.add("fieldOk");
                document.getElementById("usuarioRegistro").classList.remove("fieldFail");
                document.querySelector(`.registro__usuario i`).classList.add(`fa-check-circle`);
                console.log("Todo ok!");
            }
            else {
                document.getElementById("usuarioRegistro").classList.remove("fieldOk");
                document.getElementById("usuarioRegistro").classList.add("fieldFail");
                document.querySelector(`.registro__usuario i`).classList.remove(`fa-check-circle`);
                console.log("Todo Mal!");
            }
        break;
        case "Apellido":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("apellidoRegistro").classList.add("fieldOk");
                document.getElementById("apellidoRegistro").classList.remove("fieldFail");
                document.querySelector(`.registro__apellido i`).classList.add(`fa-check-circle`);
                console.log("Todo ok!");
            }
            else {
                document.getElementById("apellidoRegistro").classList.remove("fieldOk");
                document.getElementById("apellidoRegistro").classList.add("fieldFail");
                document.querySelector(`.registro__apellido i`).classList.remove(`fa-check-circle`);
                console.log("Todo Mal!");
            }
        break;
        case "Clave":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("claveRegistro").classList.add("fieldOk");
                document.getElementById("claveRegistro").classList.remove("fieldFail");
                document.querySelector(`.registro__clave i`).classList.add(`fa-check-circle`);
                console.log("Todo ok!");
            }
            else {
                document.getElementById("claveRegistro").classList.remove("fieldOk");
                document.getElementById("claveRegistro").classList.add("fieldFail");
                document.querySelector(`.registro__clave i`).classList.remove(`fa-check-circle`);
                console.log("Todo Mal!");
            }
        break;
    }
}

inputs.forEach ((input) => {
    input.addEventListener(`keyup`, validarFormulario);
    input.addEventListener(`blur`, validarFormulario);
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
});

//-------------------------------- Expresiones Regulares

iniciarRegistro();
capturaNombre.addEventListener("blur", validarUsuario);
capturaApellido.addEventListener("blur", validarUsuario);
capturaClave.addEventListener("blur", validarUsuario);
btnEnviar.on("click", registrarUsuario);

function iniciarRegistro() {
    btnEnviar.disabled = true;
    btnEnviar.addClass("desabilitar-boton");
}

function validarUsuario() {
    console.log("Validando usuario");
    
    if(capturaNombre.value !== "" && capturaApellido.value !== "" && capturaClave.value !== "") {
        console.log("Habilitar botón");
        btnEnviar.disabled = false;
        btnEnviar.removeClass("desabilitar-boton");
        $(".errorRegistro").hide(1000); 
    }
    else {
        $(".errorRegistro").show(1000);
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
    $(".errorRegistro").hide(1000);        
    $(".okRegistro").show(1000);
        
    setTimeout(() => {
        $(".okRegistro").hide(1000);
        resetarInputs();
        iniciarRegistro();
        
    }, 5000);
    
}

function resetarInputs() {
    capturaNombre.value = "";
    capturaApellido.value = "";
    capturaClave.value = "";
}

// Animaciones con show y hide para desplegar mensajes de error

const registroDiv = $(".registro");
const errorDeRegistro = registroDiv.append(`<p class="errorRegistro"> Debe completar todos los campos </p>`);
const registroExitoso = registroDiv.append(`<p class="okRegistro"> ¡Registro Exitoso! </p>`); 

// Mensajes fijos

//const registroDiv = document.querySelector(".registro");

//const errorDeRegistro = document.createElement("p");
//errorDeRegistro.classList.add("errorRegistro");
//errorDeRegistro.setAttribute("id", "registroFail");
//errorDeRegistro.textContent = "Debe completar todos los campos"; 

//const registroExitoso = document.createElement("p");
//registroExitoso.classList.add("okRegistro");
//registroExitoso.setAttribute("id", "registroSuccess");
//registroExitoso.textContent = "¡Registro exitoso!"; 




