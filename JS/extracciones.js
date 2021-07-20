const cambioDinero = document.querySelector("#tipoRetiro");
const retiroDinero = document.querySelector("#montoRetiro"); 
const btnRetirar = document.querySelector("#botonRetiro");
const retiroDiv = document.querySelector(".extracciones");
const errorRetiro = document.createElement("p");
errorRetiro.classList.add("failRetiro");
errorRetiro.setAttribute("id", "retiroFail");
errorRetiro.textContent = "Monto no ingresado o valor de billete incorrecto"; 
const retiroExitoso = document.createElement("p");
retiroExitoso.classList.add("okRetiro");
retiroExitoso.setAttribute("id", "retiroSuccess");
retiroExitoso.textContent = `Usted recibirá ${retiroDinero.value/cambioDinero.value} billete/s de ${cambioDinero.value}, gracias por utilizar nuestros servicios`;       

$("h1").animate({opacity: 1}, 1500, function(){    
    $("h3").slideDown(1200);
}); 

btnRetirar.addEventListener("click", checkMonto);
cambioDinero.value = "";
retiroDinero.value = "";

function checkMonto(){
    if(cambioDinero.value == "" || retiroDinero.value == ""){
        x = false;
    }
    else if(retiroDinero.value % 100 != 0 || retiroDinero.value % cambioDinero.value != 0){
        x = false;
    }    
    else {
        x = true;
        checkBillete();
    }
    console.log(x);
    if(x == false){
        retiroDiv.appendChild(errorRetiro);
        setTimeout(() => {
            retiroDiv.removeChild(errorRetiro);             
            cambioDinero.value = "";
            retiroDinero.value = "";                           
        }, 2500);
    }    
} 
function checkBillete(){        
    switch(cambioDinero.value){            
        case "100":
            retiroDiv.appendChild(retiroExitoso);
            setTimeout(() => {
                retiroDiv.removeChild(retiroExitoso);             
                cambioDinero.value = "";
                retiroDinero.value = "";                           
            }, 2500);
        break;
        case "200":
            retiroDiv.appendChild(retiroExitoso);
            setTimeout(() => {
                retiroDiv.removeChild(retiroExitoso);             
                cambioDinero.value = "";
                retiroDinero.value = "";                           
            }, 2500);
        break;
        case "500":
            retiroDiv.appendChild(retiroExitoso);
            setTimeout(() => {
                retiroDiv.removeChild(retiroExitoso);             
                cambioDinero.value = "";
                retiroDinero.value = "";                           
            }, 2500);
        break;
        case "1000":
            retiroDiv.appendChild(retiroExitoso);
            setTimeout(() => {
                retiroDiv.removeChild(retiroExitoso);             
                cambioDinero.value = "";
                retiroDinero.value = "";                           
            }, 2500);
        break;
        default:
        retiroDiv.appendChild(errorRetiro);
        setTimeout(() => {
            retiroDiv.removeChild(errorRetiro);             
            cambioDinero.value = "";
            retiroDinero.value = "";                           
        }, 2500);
        break;
    }
}
 


