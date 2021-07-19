const cambioDinero = document.querySelector("#tipoRetiro");
const retiroDinero = document.querySelector("#montoRetiro"); 
const btnRetirar = document.querySelector("#botonRetiro");


$("h1").animate({opacity: 1}, 1500, function(){    
    $("h3").slideDown(1200);
}); 

btnRetirar.addEventListener("click", Retiro);

cambioDinero.value = "";
retiroDinero.value = "";


function tipoBillete() {           
                      
     if(retiroDinero.value % cambioDinero.value == 0){                       
        retiroDiv.appendChild(retiroExitoso);              
        retiroExitoso.textContent = `Usted recibirá ${retiroDinero.value/cambioDinero.value} billete/s de $${cambioDinero.value}, gracias por utilizar nuestros servicios`;                
                    
     }else {
        if(retiroDinero.value % cambioDinero.value != 0) {                
             retiroDiv.appendChild(errorRetiro);
            tipoBillete();
                }    
            }
        
    };
        
    
    
function Retiro() {
    
    if(retiroDinero.value == "" || retiroDinero.value < 100){
        retiroDiv.appendChild(errorRetiro);        
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
 


