function ajustarContenido() {
    const content = document.querySelector(".content");

    // Obtener dimensiones de la ventana actual
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;

    // Dimensiones base de referencia del diseño
    const anchoBase = 1920; // Diseño base en ancho
    const altoBase = 1080; // Diseño base en alto

    // Escala según las proporciones de la ventana
    const escalaX = anchoVentana / anchoBase;
    const escalaY = altoVentana / altoBase;

    // Seleccionar la escala que mantenga proporciones
    const escalaFinal = Math.min(escalaX, escalaY);

    // Aplicar la escala al contenedor
    content.style.transform = `scale(${escalaFinal})`;

    // Ajustar el tamaño del contenido para que ocupe la pantalla completa
    const anchoEscalado = anchoBase * escalaFinal;
    const altoEscalado = altoBase * escalaFinal;

    // Centramos el contenido si sobra espacio
    const margenIzquierdo = (anchoVentana - anchoEscalado) / 2;
    const margenSuperior = (altoVentana - altoEscalado) / 2;

    content.style.marginLeft = `${margenIzquierdo}px`;
    content.style.marginTop = `${margenSuperior}px`;
}

// Ejecutar al cargar y al cambiar el tamaño de la ventana
window.addEventListener("load", ajustarContenido);
window.addEventListener("resize", ajustarContenido);