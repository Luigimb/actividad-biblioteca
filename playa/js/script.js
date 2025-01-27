var eventosHabilitados = true;
var contador = 0;
// Definimos la lista de objetos a encontrar
var objectes = ["l'ampolla de plàstic", "la bossa de plàstic", "l'ampolla de plàstic", "la palleta", "la bossa de paper", "el periòdic", "l'ampolla de vidre", "la bossa d'escombraries"];
// Impide que se pueda hacer click en otro objeto hasta que desaparezca el mensaje
function deshabilitarEventos() {
  eventosHabilitados = false;
  setTimeout(function () {
    eventosHabilitados = true;
  }, 3500);
}
// Incrementa el contador y comprueba si ya se han encontrado todos los objetos
function incrementarContador() {
  contador++;
  if (contador == objectes.length) {
    setTimeout(function () {
      var Fmensaje = document.getElementById("mensaje_final");
      Fmensaje.style.display = "block";
      Fmensaje.innerText = "Molt bé! Has trobat tots els objectes!";
      confettiEffect();
    }, 4000);
  }
}
// funcion para cuando haces clic en un objeto
function point(num) {
  // si el mensaje sigue en pantalla no continua
  if (!eventosHabilitados) return;
  // Deshabilita los eventos
  deshabilitarEventos();
  // Subraya la palabra en verde
  var mensaje = document.getElementById("mensaje");
  document.getElementById("texto" + num).style.textDecoration = "underline";
  document.getElementById("texto" + num).style.textDecorationColor = "#83d891";
  document.getElementById("texto" + num).style.textDecorationThickness = "5px";
  document.getElementById("texto" + num).style.textUnderlineOffset = "5px";
  // Muestra un mensaje
  mensaje.innerText = "Has trobat " + objectes[num - 1] + "!";
  mensaje.style.display = "block";
  // Rodea el objeto con un circulo verde
  var objeto = document.getElementById("objeto" + num);
  document.getElementById("point" + num).classList.add("pointfound");
  // Añade un check sobre la imagen del objeto
  var checkImg = document.createElement("img");
  checkImg.src = "img/check.svg";
  checkImg.style.position = "absolute";
  checkImg.style.width = (objeto.offsetWidth / 2) + "px";
  checkImg.style.height = (objeto.offsetHeight / 2) + "px";
  checkImg.style.top = objeto.offsetTop + (objeto.offsetHeight / 4) + "px";
  checkImg.style.left = objeto.offsetLeft + (objeto.offsetWidth / 4) + "px";
  document.body.appendChild(checkImg);
  // Incrementa el contador y comprueba si ya estan todos
  incrementarContador();
  // Animacion del mensaje
  setTimeout(function () {
    mensaje.style.animation =
      "ocultar-mensaje 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    setTimeout(function () {
      mensaje.style.display = "none";
      mensaje.style.animation = "";
    }, 500);
  }, 3000);

}