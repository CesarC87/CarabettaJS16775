const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //Letras, numeros, guion medio y bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,30}$/, // Letras y espacios, posibilidad de acentos
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,30}$/, // Letras y espacios, posibilidad de acentos
    contraseña: /^.{6,16}$/ // 6 a 16 digitos
}

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("input");

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "Nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("usuarioRegistro").classList.add("fieldOk");
                document.getElementById("usuarioRegistro").classList.remove("fieldFail");
                console.log("Todo ok!");
            }
            else {
                document.getElementById("usuarioRegistro").classList.remove("fieldOk");
                document.getElementById("usuarioRegistro").classList.add("fieldFail");
                console.log("Todo Mal!");
            }
        break;
        case "Apellido":
        break;
        case "Clave":
        break;
    }
}

inputs.forEach ((input) => {
    input.addEventListener(`keyup`, validarFormulario);
    input.addEventListener(`blur`, validarFormulario);
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
});

