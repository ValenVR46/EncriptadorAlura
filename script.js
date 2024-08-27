const entradaTexto = document.getElementById("inputTexto");
const resultado = document.getElementById("resultado");
const copiarButton = document.getElementById("copiarButton");
const outputContainer = document.getElementById("outputContainer");

// Validar el texto ingresado
function validarTexto(texto) {
    if (!texto) {
        alert("El campo de texto está vacío.");
        return false;
    }
    if (/[A-ZÁÉÍÓÚáéíóú]/.test(texto)) {
        alert("No se permiten mayúsculas y/o tildes");
        return false;
    }
    return true;
}

// Encripta el texto
function encriptar() {
    const texto = entradaTexto.value.trim();
    if (!validarTexto(texto)) return;

    const encriptacion = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    mostrarResultado(encriptacion);
}

// Desencripta el texto
function desencriptar() {
    const textoEncriptado = entradaTexto.value.trim();
    if (!validarTexto(textoEncriptado)) return;

    const desencriptacion = textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    mostrarResultado(desencriptacion);
}

// Muestra el resultado y gestiona la visibilidad del botón de copiar
function mostrarResultado(texto) {
    resultado.value = texto;
    resultado.style.display = "block";
    copiarButton.style.display = "block"; // Asegura que el botón se muestre
    outputContainer.style.display = "none";
}

// Copia el texto al portapapeles usando Clipboard API
function copiarTexto() {
    navigator.clipboard.writeText(resultado.value)
        .then(() => alert("Texto copiado al portapapeles"))
        .catch(() => alert("Error al copiar el texto"));
}

// Detecta si el campo de entrada está vacío
entradaTexto.addEventListener("input", function () {
    if (entradaTexto.value.trim() === "") {
        outputContainer.style.display = "flex";
        resultado.style.display = "none";
        copiarButton.style.display = "none"; // Oculta el botón cuando el input está vacío
    }
});


