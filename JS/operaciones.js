// ------------------------------- Animación H1 
$(".h1Operaciones").animate({opacity:1},1300);

$(".h1Operaciones").animate({opacity:0},1200, function(){    
        $(".h1Operaciones").text("Operaciones");
        $(".h1Operaciones").animate({opacity:1},2000);        
    }); 
 
    function getData() {
        const xhttp = new XMLHttpRequest();    
        xhttp.open(`GET`, `https://www.dolarsi.com/api/api.php?type=valoresprincipales`, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {             
             let datos = JSON.parse(this.responseText);
             let tablaJSON = document.querySelector("#tablaDolarJSON");
             tablaJSON.textContent = "";
             
             for (let item of datos){
                 console.log(item);
                 tablaJSON.innerHTML += `
                 <tr>
                    <td>${item.casa.nombre}</td>
                    <td>${item.casa.compra}</td>
                    <td>${item.casa.venta}</td>                    
                 </tr>
                 `;
             }
            }
          }                
      }
      getData();

document.querySelector("#plazoFijo__boton--calculo").addEventListener("click", calcular);
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
function calcular() {
    checkTasa()
    let montoInicial = document.querySelector("#plazoFijoMonto");      
    let montoFinal = Number(montoInicial.value) + (Number(montoInicial.value) * Number(tasa));
    document.querySelector("#plazoFijo__interes").value = `$${parseInt(montoFinal)}`;
}