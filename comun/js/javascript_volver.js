/* Boton que te permite volver a la página de selección de juegos*/

function volverGaleriaActividades() {
    window.open("../index_actividades.html" + window.location.hash, "_self")

}

/* Boton que te permite volver */
function volverPrincipalInfantil() {
    var volverGaleria;
    volverGaleria = window.open("../index.html", "_self"); /* añadir link de página principal de ordenador infantil */
}
/* Boton que te permite volver para adivinanzas */
function volverPrincipal() {
    var volverGaleria;
    volverGaleria = window.open("../index.html", "_self"); /* añadir link de página principal de ordenador infantil */
}
function volver(href) {
    var volver;
    volver = window.open(href + window.location.hash, "_self");
}
// Boton para volver atras del historial
function volverAtras() {
    var volver;
    volver = window.history.back();
}