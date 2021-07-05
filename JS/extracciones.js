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
