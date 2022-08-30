var boton_iniciar = document.querySelector(".boton_iniciar");

var palabras = ["javascript","perro","sueños"];
var palabra_secreta = palabras[Math.floor(Math.random()*palabras.length)];

boton_iniciar.addEventListener("click", function(){
    iniciar_juego();
});

function iniciar_juego(){
    document.querySelector("#botones_principales").classList.remove("pagina_bienvenida");
    document.querySelector("#botones_principales").classList.add("pagina_agregar_palabra");
    document.querySelector(".adivinar").style.display = "block";
    document.querySelector(".entrada").style.display = "";
    document.querySelector("#alerta").style.display = "";
    document.querySelector(".boton_iniciar").style.display = "none";
    document.querySelector(".boton_agregar").style.display = "none";
    document.querySelector(".boton_guardar").style.display = "";
    document.querySelector(".boton_cancelar").style.display = "";
    document.querySelector(".boton_nuevo").style.display = "block";
    document.querySelector(".boton_desistir").style.display = "block";
}