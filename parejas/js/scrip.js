// Total de imagenes que hay que relacionar
var remainingImages = 5;

// Imagen que cambiará al ser un elemento colocado
var imageAlternatives = {
    img1: ["img/relacionar/contenedor_lleno_azul.svg"],
    img2: ["img/relacionar/contenedor_lleno_gris.svg"],
    img3: ["img/relacionar/contenedor_lleno_amarillo.svg"],
    img4: ["img/relacionar/contenedor_lleno_marron.svg"],
    img5: ["img/relacionar/contenedor_lleno_verde.svg"]
};

function allowDrop(event) {
    event.preventDefault();
}

// Hace que el elemento sea arrastrable
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Hace que el elemento pueda dejarse en la caja
function drop(event, titleIndex) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var target = event.target;
    
    // Comprueba si la id de la imagen es la correcta para esa caja
    if (target.className === "title" && target.children.length === 0 && data === "img" + titleIndex) {
        target.innerHTML = "";
        var img = document.getElementById(data);
        img.style.border = "none";
        img.style.display = "none";
        img.style.background = "none";

        // Utilizar la imagen almacenada para esta imagen principal
        var alternativeImages = imageAlternatives[data];
        var alternativeImgSrc = alternativeImages[0];
        var alternativeImg = document.createElement("img");
        alternativeImg.style.border = "none";
        alternativeImg.src = alternativeImgSrc;
        alternativeImg.draggable = false

        target.appendChild(alternativeImg);

        // Quitar elemento drag de imagen colocada para que no se pueda sacar de la caja
        img.draggable = false;
        remainingImages--;

        // Si todas las imagenes están colocadas
        if (remainingImages === 0) {
            confettiEffect();
            document.getElementById("message").style.display = "block";
        }
    } else {
        document.getElementById("wrong").style.display = "block";
        setTimeout(function() {
            wrong.style.display = "none";
        }, 1500);
    }
}
// mensaje de exito
function showMessage(message) {
    var messageDiv = document.getElementById("message");
    messageDiv.innerText = message;
}
// mensaje de error
function showwrong(message) {
    var messageDiv = document.getElementById("wrong");
    messageDiv.innerText = message;
}
