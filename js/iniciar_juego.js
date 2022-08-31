var boton_iniciar = document.querySelector(".boton_iniciar");

var palabras = ["prueba","perro","sueños"];
var palabra_secreta;
var letras = [];
var errores = 0;
var tablero_palabras = document.querySelector(".adivinar").getContext("2d");

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

    palabra_secreta = palabras[Math.floor(Math.random()*palabras.length)]
    dibujar_lineas();

}

function dibujar_lineas(){
    console.log(palabra_secreta);
    tablero_palabras.lineWidth = 4;/* grosor de linea */
    tablero_palabras.lineCap = "round";/* redondear extremos linea */ 
    tablero_palabras.lineJoin = "round";
    tablero_palabras.strokeStyle = "#0A3871";/* color de linea */
    tablero_palabras.scale(3,3);/* se aumenta la calidad del canvas al renderizar a una resolución inferior mayor y luego escalarlo*/
    tablero_palabras.beginPath();

    for(let i = 0; i < palabra_secreta.length; i++){
        tablero_palabras.moveTo(2+(i*(8.55+30)+(1-(palabra_secreta.length/8))*152),58);
        tablero_palabras.lineTo(32+(i*(8.55+30)+(1-(palabra_secreta.length/8))*152),58);
    }
    tablero_palabras.stroke();
    tablero_palabras.closePath();
}