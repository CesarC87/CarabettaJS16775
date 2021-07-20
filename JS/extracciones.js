const cambioDinero = document.querySelector("#tipoRetiro");
const retiroDinero = document.querySelector("#montoRetiro"); 
const btnRetirar = document.querySelector("#botonRetiro");


$("h1").animate({opacity: 1}, 1500, function(){    
    $("h3").slideDown(1200);
}); 

btnRetirar.addEventListener("click", Retiro);

cambioDinero.value = "";
retiroDinero.value = "";


function tipoBillete() {   // Función para chequear el tipo de billete a obtener
    if(retiroDinero.value % cambioDinero.value == 0){
                        
                retiroDiv.appendChild(retiroExitoso); 
                retiroExitoso.textContent = `Usted recibirá ${retiroDinero.value/cambioDinero.value} billete/s de ${cambioDinero.value}, gracias por utilizar nuestros servicios`;               
           
                            
        }else {
                           
                retiroDiv.appendChild(errorRetiro);
                tipoBillete();
        }    
        cambioDinero.value = "";
        retiroDinero.value = "";
    };             

   
           
function Retiro() {
    e.preventDefault();
    if((retiroDinero.value == "") || (retiroDinero.value < 100)){ //Si el monto a retirar no está ingresado o es menor a 100, mostrar error
        retiroDiv.appendChild(errorRetiro);        
    }
    if(retiroDinero.value % 100 == 0) {    // Si el monto ingresado es multiplo de 100, pasar a la otra función
    tipoBillete();
    }
    else {
        if(retiroDinero.value % 100 != 0) {   // Si el monto ingresado NO es multiplo de 100, mostrar error y reiniciar campos        
            retiroDiv.appendChild(errorRetiro);
            Retiro();
            
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
 

 


