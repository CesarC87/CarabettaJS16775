document.querySelector("#clickAPI").addEventListener("click", getData)

function getData() {
    const xhttp = new XMLHttpRequest();    
    xhttp.open(`GET`, `baseClientes.json`, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         
         let datos = JSON.parse(this.responseText);
         let tablaJSON = document.querySelector("#tablaJSON");
         tablaJSON.textContent = "";
         
         for (let item of datos){
             console.log(item);
             tablaJSON.innerHTML += `
             <tr>
                <td>${item.nombre}</td>
                <td>${item.apellido}</td>
             </tr>
             `;
         }
        }
      }
    document.querySelector("#tabla").classList.remove("tabla");
    document.querySelector("#tabla").classList.add("table");  
    document.querySelector("#tabla").classList.add("table-hover");
    
  }

