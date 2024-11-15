function ajustarEscalado() {
    const content = document.querySelector(".content");

    // Obtener dimensiones de la ventana actual
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;

    // Dimensiones base del contenido original
    const anchoOriginal = 800; // Ancho base
    const altoOriginal = 600; // Altura base

    // Calcula el escalado necesario para ajustar el contenido
    const escalaX = anchoVentana / anchoOriginal;
    const escalaY = altoVentana / altoOriginal;

    // Selecciona la menor escala para mantener proporciones
    const escalaFinal = Math.min(escalaX, escalaY);

    // Aplica el escalado proporcional
    content.style.transform = `scale(${escalaFinal})`;
    content.style.transformOrigin = "top left";

    // Ajustar márgenes para centrar el contenido
    const margenIzquierdo = (anchoVentana - content.offsetWidth * escalaFinal) / 2;
    const margenSuperior = (altoVentana - content.offsetHeight * escalaFinal) / 2;

    content.style.marginLeft = `${margenIzquierdo}px`;
    content.style.marginTop = `${margenSuperior}px`;

    // Ajuste dinámico de la fuente basado en la resolución
    const baseFontSize = 16; // Tamaño base en píxeles
    const nuevaFuente = baseFontSize * escalaFinal;

    document.documentElement.style.fontSize = `${nuevaFuente}px`;
}

// Ejecutar en carga y al cambiar tamaño
window.addEventListener("load", ajustarEscalado);
window.addEventListener("resize", ajustarEscalado);