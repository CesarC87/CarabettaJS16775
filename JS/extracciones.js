const cambioDinero = document.querySelector("#tipoRetiro"); 
const retiroDinero = document.querySelector("#montoRetiro"); 
const btnRetirar = document.querySelector("#botonRetiro");


btnRetirar.addEventListener("click", Retiro);

cambioDinero.value = "";
retiroDinero.value = "";

function tipoBillete() {
      
    if(retiroDinero.value % cambioDinero.value == 0){
        switch (cambioDinero.value) {
            case cambioDinero.value:                
                retiroDiv.appendChild(retiroExitoso);                
                break;
            
            default: 
            alert("No ha ingresado un tipo de billete correcto");  
            cambioDinero.value = "";
            retiroDinero.value = "";
            }    
            
        }else {
            if(retiroDinero.value % cambioDinero.value != 0) {                
                retiroDiv.appendChild(errorRetiro);
                tipoBillete();
        }    
        cambioDinero.value = "";
        retiroDinero.value = "";
    };           
  
   }
function Retiro() {
    
    if(retiroDinero.value == null || retiroDinero.value < 100){
        retiroDiv.appendChild(errorRetiro);
        //retiroDinero.value = prompt("Ingrese el monto a retirar. Recuerde que nuestros cajeros solo permiten el retiro de cifras que sean multiplos de 100 (es decir, que terminen en 00). Monto mínimo de extracción: $100");
    }
    if(retiroDinero.value % 100 == 0) {    
    tipoBillete();
  }
    else {
        if(retiroDinero.value % 100 != 0) {
            
            retiroDiv.appendChild(errorRetiro);
            Retiro();
            cambioDinero.value = "";
            retiroDinero.value = "";
        }
    } 

}

const retiroDiv = document.querySelector(".extracciones");

const errorRetiro = document.createElement("p");
errorRetiro.classList.add("failRetiro");
errorRetiro.setAttribute("id", "retiroFail");
errorRetiro.textContent = "Monto no ingresado o incorrecto"; 

const retiroExitoso = document.createElement("p");
retiroExitoso.classList.add("okRetiro");
retiroExitoso.setAttribute("id", "retiroSuccess");
retiroExitoso.textContent = `Usted recibirá ${retiroDinero.value/cambioDinero.value} billete/s de ${cambioDinero.value}, gracias por utilizar nuestros servicios`; 


