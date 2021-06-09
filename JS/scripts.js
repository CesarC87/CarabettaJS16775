let claveUsuario;
let ingresoClave;
let instructivo;
let retiroDinero;


claveUsuario = 1234;
nombreUsuario = prompt("Bienvenido a la red de cajeros GlobalBank. Por favor, ingrese su nombre de usuario");
instructivo = ["No compartas claves ni datos con otras personas", "Recordá cambiar tu clave cada 6 meses", "Si tenes dudas, sugerencias o reclamos, comunicate al 0810-999-qwerty"];

function bienvenida(nombreUsuario) {    
    ingresoClave = prompt(`Hola ${nombreUsuario}! Por favor, ingresá tu clave`)
}

bienvenida(nombreUsuario);

function validacionUsuario() {
    while(ingresoClave != null && ingresoClave != claveUsuario) {
        if(ingresoClave != claveUsuario) {
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
}

validacionUsuario();

function mostrarInstrucciones() {
    for (let i = 0; i < instructivo.length; i++) {
    alert(instructivo[i]);    
    }
}

mostrarInstrucciones();

function Retiro() {
    retiroDinero = prompt("Ingrese el monto a retirar. Recuerde que nuestros cajeros solo permiten el retiro de cifras que sean multiplos de 100 (es decir, que terminen en 00). Monto mínimo de extracción: $100");
    if(retiroDinero % 100 == 0) {    
    function tipoBillete() {
    cambioDinero = prompt("Indique con numeros que tipos de billete desea recibir:  $100 , $200 , $500 o $1000");   
    if(retiroDinero >= cambioDinero){
        switch (cambioDinero) {
            case "100":
                alert(`Usted recibirá ${retiroDinero/cambioDinero} billete/s de $100, gracias or utilizar nuestros servicios`);
                break;
            case "200":
                alert(`Usted recibirá ${retiroDinero/cambioDinero} billete/s de $200, gracias or utilizar nuestros servicios`);
                break;
            case "500":
                alert(`Usted recibirá ${retiroDinero/cambioDinero} billete/s de $500, gracias or utilizar nuestros servicios`);
                break;
            case "1000":
                alert(`Usted recibirá ${retiroDinero/cambioDinero} billete/s de $1000, gracias or utilizar nuestros servicios`);
                break; 
            default: 
            alert("No ha ingresado un tipo de billete correcto");  
            }    
        }else {
            while(retiroDinero < cambioDinero) {
                alert(`El billete elegido es de mayor valor que el monto ingresado. Elija otro tipo de billete`);
                tipoBillete();
        }    
    }
        
        if(retiroDinero < 100) {
        while(retiroDinero < 100) {
            alert(`El monto mínimo de retiro es de $100, vuelva a intentarlo`);
            Retiro();
        }
    }  
  
   }
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