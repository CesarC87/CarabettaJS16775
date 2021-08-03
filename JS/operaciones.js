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