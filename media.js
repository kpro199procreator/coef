// Ajuste dinámico de fuentes según el tamaño de la pantalla
function ajustarFuente() {
    const anchoPantalla = window.innerWidth;

    if (anchoPantalla < 600) {
        document.body.style.fontSize = "0.9rem"; // Móviles
    } else if (anchoPantalla >= 600 && anchoPantalla <= 1024) {
        document.body.style.fontSize = "1rem"; // Tabletas
    } else {
        document.body.style.fontSize = "1.1rem"; // Escritorio
    }
}

// Llama a ajustarFuente cuando se carga la página
window.addEventListener("load", ajustarFuente);

// Llama a ajustarFuente cuando se cambia el tamaño de la ventana
window.addEventListener("resize", ajustarFuente);