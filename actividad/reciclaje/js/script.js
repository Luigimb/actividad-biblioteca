body = document.getElementsByTagName("body")
scoreP = document.getElementById("score")
timerP = document.getElementById("timer")
menuInicial = document.getElementById("menu-inicial")
menuTimeOut = document.getElementById("menu-timeOut")
finalScoreP = document.getElementById("puntos-final")
contenedor = document.getElementById("contenedor")
gamebox = document.getElementById("gamebox")
trackMouse = false
var time = 0
var puntos = 0
// Total de imagenes de huevo distintas que hay
SRCtotal = 4
// Tiempo que durará el minijuego
minutos = 1
segundos = 0
// Esta variable sirve para evitar errores al hacer doble click a "empezar"
inicio = false
timerUpdate()
// escondemos el cesta hasta que empieze el juego
contenedor.style.display = "none"
// hace que le cesta siga al cursor
var posx = 0;
// maximo y minimo que podra moverse la cesta
minCX = 450;
maxCX = 1550;
// maximo y minimo que podra aparecer los huevos
minHX = 100;
maxHX = 1150;
maxHY = 700;
// tiempo maximo y minimo entre la salida de los huevos (en milisegundos)
minHTime = 200
maxHTime = 1000
// velocidad maxima y minima a la que cae el huevo
minHVel = 1
maxHVel = 5
// Probabilidad de que salga una roca
rocaProb = 20
// altura a la que se tiene que detectar si el huevo esta en la cesta
cestaY = 550
// Booleana para saber si el huevo ha sido ya atrapado
yaAtrapado = false
// booleana para saber si lo que se ha atrapado es una roca
esRoca = false
// tiempo maximo y minimo de la animacion de girar de los huevos cayendo (en segundos)
minAnimTime = 1
maxAnimTime = 10
document.addEventListener('mousemove', function() {
    e = window.event;
    // Guardamos la posicion actual y la anterior
    posx = e.clientX;
    // Establecer la nueva posición del elemento
    if (posx > minCX && posx < maxCX && trackMouse) {
        contenedor.style.left = posx-(contenedor.clientWidth-(contenedor.clientWidth*50/100)) + "px"
    }
})
// empieza el juego
function comenzar() {
    if (!inicio) {
        inicio = true
        // esconde el menu inicial
        menuInicial.style.display = "none"
        // hace aparecer el cesta
        contenedor.style.display = "block"
        // inicia el contador de tiempo
        timerInterval = setInterval(timer, 1000)
        // body[0].style.cursor = "none"
        setTimeout(crearHuevo, 1000)
    }
}
// contador de tiempo
function timer() {
    if (segundos > 0) {
        segundos--
    } else {
        minutos--
        segundos = 59
    }
    if (minutos == 0 && segundos == 0) {
        contenedor.style.display = "none"
        finalScoreP.innerHTML = "Has aconseguit: " + puntos + " punts"
        menuTimeOut.style.display = "block"
        clearInterval(timerInterval);
        inicio = false
        body[0].style.cursor = "default"
    }
    timerUpdate()
}
// Actualizar la cuenta atrás
function timerUpdate() {
    minutos2D = ("0" + minutos).slice(-2);
    segundos2D = ("0" + segundos).slice(-2);
    timerP.innerHTML = minutos2D + ":" + segundos2D
}
// huevoY = -20;
function tiempoHuevo() {
    // console.log("hola")
    Htime = Math.floor(Math.random() * maxHTime) + minHTime;
    setTimeout(crearHuevo, Htime)
}
function crearHuevo() {
    yaAtrapado = false
    huevo = document.createElement("img")
    aleat = Math.floor((Math.random() * 100)+1);
    if (aleat <= rocaProb) {
        huevo.src = "img/vidrio1.svg"
        esRoca = true
    } else {
        aleatSRC = Math.floor(Math.random() * SRCtotal) + 1;
        huevo.src = "img/plastico" + aleatSRC + ".svg"
        esRoca = false
    }
    // alert(gamebox)
    gamebox.appendChild(huevo)
    huevo.style.width =  "100px"
    huevo.style.position =  "absolute"
    animDir = Math.floor(Math.random() * 2) + 1;
    if (animDir == 1) {
        huevo.style.setProperty('--direction', '-360deg');
    } else {
        huevo.style.setProperty('--direction', '360deg');
    }
    animTime = Math.floor(Math.random() * maxAnimTime) + minAnimTime;
    huevo.style.setProperty('--timeFall', animTime+'s');
    huevoY = -20;
    huevoX = Math.floor(Math.random() * maxHX) + minHX;
    // alert(huevoX)
    huevo.style.left = huevoX + "px"
    animHuevo = setInterval(caerHuevo, 1, huevo)
}
function caerHuevo(huevo) {
    // console.log(huevoY)
    huevo.style.top = huevoY + "px"
    vel = Math.floor(Math.random() * maxHVel) + minHVel;
    huevoY += vel;
    cestaX = posx;
    // Si coge el huevo
    if (huevoY >= cestaY && huevoX < (cestaX-200) && huevoX > (cestaX-400) && inicio && !yaAtrapado) {
        // console.log("hola")
        yaAtrapado = true
        if (esRoca && puntos > 0) {
            puntos--
        } else if (!esRoca) {
            puntos++
        }
        scoreP.innerHTML = "Punts: " + puntos
        huevo.remove();
        clearInterval(animHuevo)
        tiempoHuevo()
        // cesta.classList.add("bounce")
        bounceAnim(true)
        setTimeout(bounceAnim,300,false)
    }
    // si no lo coge
    if (huevoY >= maxHY) {
        if (inicio) {
            huevo.remove();
            clearInterval(animHuevo)
            tiempoHuevo()
        }
    }
}
function track(trakear) {
    trackMouse = trakear
}
function bounceAnim(hacer) {
    if (hacer) {
        contenedor.classList.add("bounce")
        if (!esRoca) {
            contenedor.src = "img/contenedor_amarillo1.svg"
        } else {
            contenedor.src = "img/contenedor_amarillo2.svg"

        }
    } else {
        contenedor.classList.remove("bounce")
        contenedor.src = "img/contenedor_amarillo.svg"
    }
}