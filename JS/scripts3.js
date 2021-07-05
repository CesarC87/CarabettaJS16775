const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //Letras, numeros, guion medio y bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,30}$/, // Letras y espacios, posibilidad de acentos
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,30}$/, // Letras y espacios, posibilidad de acentos
    contraseña: /^.{6,16}$/ // 6 a 16 digitos
}

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

inputs.forEach ((input) => {
    input.addEventListener("keyup", () => {

    })
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
});

