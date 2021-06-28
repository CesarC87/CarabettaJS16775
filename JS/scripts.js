let claveUsuario;
let ingresoClave;
let instructivo;
let retiroDinero;
let detenerBucle = false; 


class cliente {
    usuario(nombre, apellido, clave) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.clave = clave;        
    }       
};

const baseClientes = [
    {nombre: "Jorge", apellido: "Perez", clave: 1234},
    {nombre: "Carla", apellido: "Santoro", clave: 6789},
    {nombre: "Juan", apellido: "Batman", clave: 5678},
];      

//const cliente1 = baseClientes.push(new cliente("Jorge", "Camaleon", 5678));
//const cliente2 = baseClientes.push(new cliente("Juan Carlos", "Batman", 1234));
//const cliente3 = baseClientes.push(new cliente("Pepe", "De Santis", 0909)); 

//const validacion = baseClientes.find((usuario) => usuario.nombre == "Jorge");

//console.log(validacion);



 console.log(!detenerBucle);

 document.getElementById("usuario").value = "";
 document.getElementById("clave").value = "";
 document.getElementById("botonValidacion").addEventListener("click", validacionUsuario);

 

 function validacionUsuario() {
    let ingresoUsuario = document.getElementById("usuario").value;
    let validarClave = document.getElementById("clave").value;

    while((ingresoUsuario != null) && (validarClave != null) && (!detenerBucle)) {
     for (let i = 0; i < baseClientes.length; i++) {
         if((ingresoUsuario == baseClientes[i].nombre) && (validarClave == baseClientes[i].clave) ){
             detenerBucle = true;
         }
     }

     if (detenerBucle) {
         document.getElementById("bienvenidaUsuario").innerHTML = `<p>Bienvenido/a ${ingresoUsuario}!</p>`;
         document.getElementById("link").innerHTML = `Extracciones`;
     } else {
         alert("Usuario o clave incorrecta");         
         break;
     }
 }
 }

/*
//instructivo = ["No compartas claves ni datos con otras personas", "Recordá cambiar tu clave cada 6 meses", "Si tenes dudas, sugerencias o reclamos, comunicate al 0810-999-qwerty"];

function validacionUsuario() {
    ingresoUsuario = document.getElementById("usuario").innerHTML;
    while(ingresoUsuario != null && ingresoUsuario != usuarioGlobalBank.nombre) {
        if(ingresoUsuario != usuarioGlobalBank.nombre){
            alert("Usuario no registrado");
        }
            //ingresoUsuario = prompt("Por favor, ingrese su usuario");
        }
    if(ingresoUsuario == null) {
        alert("Hasta la próxima!");        
        }
    else {
        
        }
        ingresoClave = document.getElementById("clave").innerHTML;

    while(ingresoClave != null && ingresoClave != usuarioGlobalBank.clave) {
        if(ingresoClave != usuarioGlobalBank.clave) {
            alert("Clave incorrecta, vuelva a intentarlo");
        }
            ingresoClave = prompt("Bienvenido a la red de cajeros GlobalBank. Por favor, ingrese su clave");
        }
        if(ingresoClave == null) {
            alert("Hasta la próxima!");
        }
        else {
            alert("Bienvenido a la red!");
        }
};

//validacionUsuario();

function mostrarInstrucciones() {
    for (let i = 0; i < instructivo.length; i++) {
    alert(instructivo[i]);    
    }
};

while(ingresoUsuario == null || ingresoClave == null){
    break;
}

//mostrarInstrucciones();

function tipoBillete() {
    cambioDinero = prompt("Indique con numeros que tipos de billete desea recibir:  $100 , $200 , $500 o $1000");   
    if(retiroDinero % cambioDinero == 0){
        switch (cambioDinero) {
            case "100":
                alert(`Usted recibirá ${retiroDinero/cambioDinero} billete/s de $100, gracias por utilizar nuestros servicios`);
                break;
            case "200":
                alert(`Usted recibirá ${retiroDinero/cambioDinero} billete/s de $200, gracias por utilizar nuestros servicios`);
                break;
            case "500":
                alert(`Usted recibirá ${retiroDinero/cambioDinero} billete/s de $500, gracias por utilizar nuestros servicios`);
                break;
            case "1000":
                alert(`Usted recibirá ${retiroDinero/cambioDinero} billete/s de $1000, gracias por utilizar nuestros servicios`);
                break; 
            default: 
            alert("No ha ingresado un tipo de billete correcto");  
            }    
        }else {
            while(retiroDinero % cambioDinero != 0) {
                alert(`El billete elegido es de mayor valor que el monto ingresado. Elija otro tipo de billete`);
                tipoBillete();
        }    
    };           
  
   }
function Retiro() {
    retiroDinero = prompt("Ingrese el monto a retirar. Recuerde que nuestros cajeros solo permiten el retiro de cifras que sean multiplos de 100 (es decir, que terminen en 00). Monto mínimo de extracción: $100");
    while(retiroDinero == null || retiroDinero < 100){
        alert("Monto no ingresado o incorrecto");
        retiroDinero = prompt("Ingrese el monto a retirar. Recuerde que nuestros cajeros solo permiten el retiro de cifras que sean multiplos de 100 (es decir, que terminen en 00). Monto mínimo de extracción: $100");
    }
    if(retiroDinero % 100 == 0) {    
    tipoBillete();
  }
    else {
        while(retiroDinero % 100 != 0) {
            alert(`Debe ingresar un monto multiplo de 100 (debe terminar en 00), vuelva a intentarlo`);
            Retiro();
        }
    }
  
}

Retiro();



const datosDeExtraccion = {
		usuario: ingresoUsuario,
        extraccion: retiroDinero        
}

function datos() {
  document.getElementById("boton").innerHTML = `Usuario: ${ingresoUsuario} | Extracción $${retiroDinero}`;
}*/