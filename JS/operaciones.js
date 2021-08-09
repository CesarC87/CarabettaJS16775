// ------------------------------- Animación H1 

$(".h1Operaciones").animate({opacity:1},1300);

$(".h1Operaciones").animate({opacity:0},1200, function(){    
        $(".h1Operaciones").text("Operaciones");
        $(".h1Operaciones").animate({opacity:1},2000);        
    }); 

// ------------------------------- Reseteo Valores 
let cantidadDolares = document.querySelector("#compraDolaresMonto");             
let costoDolares = document.querySelector("#compraDolaresCosto");
cantidadDolares.value = "";
costoDolares.value = "";
// ------------------------------- Datos de cotización dolar a través de API 
    function getData() {
        const xhttp = new XMLHttpRequest();    
        xhttp.open(`GET`, `https://www.dolarsi.com/api/api.php?type=valoresprincipales`, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {             
             let datos = JSON.parse(this.responseText);
             let tablaJSON = document.querySelector("#tablaDolarJSON");
             tablaJSON.textContent = "";             
             console.log(datos);
             for (let item of datos){                 
                 tablaJSON.innerHTML += `
                 <tr>
                    <td>${item.casa.nombre}</td>
                    <td>${item.casa.compra}</td>
                    <td>${item.casa.venta}</td>                    
                 </tr>
                 `;
             }  
             // ------------------------------- Cálculo de compra dolar             
             document.querySelector("#calcularDolar").addEventListener("click", calcularDolar);                                                
             function calcularDolar() {               
                let cotizacionDolar = datos[6].casa.venta;
                let cotizacionDolar1 = parseFloat(cotizacionDolar.replace(/,/g, '.'));
                let cantidadDolares1 = Number(cantidadDolares.value);                  
                costoDolares.value =  cantidadDolares1 * cotizacionDolar1;   
                console.log(cotizacionDolar1);
                console.log(typeof(cotizacionDolar1));
                console.log(cantidadDolares1);
                console.log(typeof(cantidadDolares1));                
            }                              
            }            
          }                
      }
      getData();
// ------------------------------- Cálculo de plazo fijo 

document.querySelector("#plazoFijo__boton--calculo").addEventListener("click", calcularPlazo);
let tasaValor = document.querySelector("#plazoFijo__plazo");
let tasa30 = 0.37 / 12;
let tasa60 = 0.39 / 6;
let tasa90 = 0.42 / 4;
let tasa360 = 0.47 / 1;
function checkTasa() {
        switch(tasaValor.value){
            case "30":
                tasa = tasa30;
              break;
            case "60":
                tasa = tasa60;
              break;
            case "90":
                tasa = tasa90;
              break;
            case "360":
                tasa = tasa360;
              break;
            default:
                tasa = tasa30;
              break;    
    }
};
let montoInicial = document.querySelector("#plazoFijoMonto");  
montoInicial.value = "";
let montoFinal = document.querySelector("#plazoFijo__interes");
montoFinal.value = "";
function calcularPlazo() {
    checkTasa()        
    let interes = Number(montoInicial.value) + (Number(montoInicial.value) * Number(tasa));
    montoFinal.value = `$${parseInt(interes)}`;
}


