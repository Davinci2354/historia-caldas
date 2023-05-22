var navbar = document.getElementById("navbar");
var biografia = document.getElementById("biografia");
var legado = document.getElementById("legado");
var inventos = document.getElementById("inventos");
var prototipo = document.getElementById("prototipo");
var nota = document.getElementById("nota");

var tabBiografia = document.getElementById("tab1");
var tabLegado = document.getElementById("tab2");
var tabInventos = document.getElementById("tab3");
var tabPrototipo = document.getElementById("tab4");
var tabNota = document.getElementById("tab5");

var imagen = document.getElementById("gif");
var audio = document.getElementById("musica");

var notaNumero = document.getElementById("notaNumero");
var bt1 = document.getElementById("btn1");
var bt2 = document.getElementById("btn2");
var bt3 = document.getElementById("btn3");
var bt4 = document.getElementById("btn4");
var bt5 = document.getElementById("btn5");
var enviar = document.getElementById("enviar");

audio.volume = 0.2;
audio.loop = true;

bt1.addEventListener('click', function(){
    imagen.src = 'https://j.gifs.com/ygdY27.gif';
    notaNumero.textContent = '10';

    audio.src = 'audio.mp3';
    audio.play();
});

bt2.addEventListener('click', function(){
    imagen.src = 'https://media.tenor.com/APeVPn5Z_BMAAAAd/neutral.gif';
    notaNumero.textContent = '20';

    
    audio.src = 'audio2.mp3';
    audio.play();
});

bt3.addEventListener('click', function(){
    imagen.src = 'https://media.tenor.com/LOY8kFwCof4AAAAd/nomessirve-messirve.gif';
    notaNumero.textContent = '30';
    
    audio.src = 'audio3.mp3';
    audio.play();
});

bt4.addEventListener('click', function(){
    imagen.src = 'https://media.tenor.com/CT3BTVR_8hsAAAAd/messirve.gif';
    notaNumero.textContent = '40';
    
    audio.src = 'audio3.mp3';
    audio.play();
});

bt5.addEventListener('click', function(){
    imagen.src = 'https://media.tenor.com/cgVZ3Ph5ZCkAAAAC/thanos-dance-cropped.gif';
    notaNumero.textContent = '50';

    audio.src = 'audio4.mp3';
    audio.play();
});

enviar.addEventListener('click', function(){
    imagen.src = 'https://media.tenor.com/Kl08LCPUrNcAAAAM/elprimobarabere.gif';

    audio.src = 'audio5.mp3';
    audio.play();
    alert('Nota Enviada!');
});

function toggleMenu() {
    navbar.classList.toggle("responsive");
}

function toggleBio() {
    tabBiografia.classList.add("active");
    tabLegado.classList.remove("active");
    tabInventos.classList.remove("active");
    tabPrototipo.classList.remove("active");
    tabNota.classList.remove("active");

    biografia.classList.add("seccion");
    biografia.classList.remove("nodisp");

    legado.classList.add("nodisp");
    inventos.classList.add("nodisp");
    prototipo.classList.add("nodisp");
    nota.classList.add("nodisp");

    legado.classList.remove("seccion");
    inventos.classList.remove("seccion");
    prototipo.classList.remove("seccion");
    nota.classList.remove("seccion");

    audio.pause()
}

function toggleLeg() {
    tabLegado.classList.add("active");
    tabBiografia.classList.remove("active");
    tabInventos.classList.remove("active");
    tabPrototipo.classList.remove("active");
    tabNota.classList.remove("active");

    legado.classList.add("seccion");
    legado.classList.remove("nodisp");

    biografia.classList.add("nodisp");
    inventos.classList.add("nodisp");
    prototipo.classList.add("nodisp");
    nota.classList.add("nodisp");

    biografia.classList.remove("seccion");
    inventos.classList.remove("seccion");
    prototipo.classList.remove("seccion");
    nota.classList.remove("seccion");

    audio.pause()
}

function toggleInv() {
    tabInventos.classList.add("active");
    tabBiografia.classList.remove("active");
    tabLegado.classList.remove("active");
    tabPrototipo.classList.remove("active");
    tabNota.classList.remove("active");

    inventos.classList.add("seccion");
    inventos.classList.remove("nodisp");
    biografia.classList.add("nodisp");
    legado.classList.add("nodisp");
    prototipo.classList.add("nodisp");
    nota.classList.add("nodisp");

    legado.classList.remove("seccion");
    biografia.classList.remove("seccion");
    prototipo.classList.remove("seccion");
    nota.classList.remove("seccion");

    audio.pause()
}

function togglePro() {
    tabPrototipo.classList.add("active");
    tabBiografia.classList.remove("active");
    tabInventos.classList.remove("active");
    tabLegado.classList.remove("active");
    tabNota.classList.remove("active");

    prototipo.classList.add("seccion");
    prototipo.classList.remove("nodisp");

    biografia.classList.add("nodisp");
    inventos.classList.add("nodisp");
    legado.classList.add("nodisp");
    nota.classList.add("nodisp");

    legado.classList.remove("seccion");
    inventos.classList.remove("seccion");
    biografia.classList.remove("seccion");
    nota.classList.remove("seccion");
    
    audio.pause()
}

function toggleNot() {
    tabNota.classList.add("active");
    tabBiografia.classList.remove("active");
    tabInventos.classList.remove("active");
    tabPrototipo.classList.remove("active");
    tabLegado.classList.remove("active");

    nota.classList.add("seccion");
    nota.classList.remove("nodisp");

    biografia.classList.add("nodisp");
    inventos.classList.add("nodisp");
    prototipo.classList.add("nodisp");
    legado.classList.add("nodisp");

    legado.classList.remove("seccion");
    inventos.classList.remove("seccion");
    prototipo.classList.remove("seccion");
    biografia.classList.remove("seccion");

    imagen.src = 'https://media.tenor.com/1nwjs8in1DUAAAAC/el-bicho-tomando-jugo-cr7.gif';
    notaNumero.textContent = '??';

}

window.addEventListener("scroll", function(){
    navbar.classList.toggle("down", window.scrollY>130);
});

window.addEventListener('load', function() {
    // Obtén todos los elementos <a>
    var links = document.getElementsByTagName('a');

    // Recorre todos los enlaces y agrega el evento de clic
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(event) {
        // Evita que se realice el desplazamiento automático
        event.preventDefault();
      });
    }
  });