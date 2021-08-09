// ------------------------------- Animación H1 

$(".h1Cuenta").animate({opacity:1},1300);

$(".h1Cuenta").animate({opacity:0},1200, function(){    
        $(".h1Cuenta").text("Caja de ahorros");
        $(".h1Cuenta").animate({opacity:1},2000);        
    }); 

    document.querySelector("#btnCuentas").addEventListener("click", getData)

    function getData() {
        const xhttp = new XMLHttpRequest();    
        xhttp.open(`GET`, `baseClientes.json`, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
             let inputDNI = document.querySelector("#cuentas__input");
             let display = document.querySelector("#cuentas__display");
             let datos = JSON.parse(this.responseText);             
             let DNI = datos.filter(x => x.DNI == inputDNI.value);
             let caja = DNI[0].caja;
             display.value = `$${caja}`;
             
            }
          }       
        
      }