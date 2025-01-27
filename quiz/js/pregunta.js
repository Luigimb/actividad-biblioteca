function checkAnswer(button, escorrecta) { //esta funcion tiene dos atributos, boton que sera que boton se ha pulsado y escorrecta que es true o false dependiendo de si esa el la respuesta correcta o no.
    if (escorrecta) { 
      button.classList.add("correct"); // Añadir una clase CSS que indique que la respuesta es correcta (aplicará un estilo visual de correcto).
      nextbutton.disabled = false; // Habilitar el botón "nextButton" para permitir al usuario avanzar a la siguiente pregunta después de seleccionar la respuesta correcta.
      document.getElementById("astronauta").src = "../img/tierra_color_felicitacion.svg"; // Cambiar el icono del panda astronauta.
    } else {
      button.classList.add("incorrect"); // Añadir una clase CSS que indique que la respuesta es incorrecta (aplicará un estilo visual de incorrecto).
    }
}
// Función para pasar a la siguiente pregunta.
function nextQuestion(link) {
  nextbutton.disabled = true; // Deshabilitar el botón "nextbutton" para evitar que el usuario pase a la siguiente pregunta sin haber respondido la pregunta actual.
  window.location.href = link; // Redirigir al usuario a la página de la siguiente pregunta.
}