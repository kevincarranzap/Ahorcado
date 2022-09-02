var boton_iniciar = document.querySelector(".boton_iniciar");

var palabras = ["PRUEBA","CSS","HTML","ALEGRIA","SUERTE","PERRO","GATO","ESTUDIO","ADIVINAR","EMPLEO"];
var palabra_secreta;
var letras;
var errores;
var aciertos;
var finalizado;
var tablero_palabras = document.querySelector(".adivinar").getContext("2d");
var tablero_ahorcado = document.querySelector(".ahorcado").getContext("2d");
tablero_ahorcado.scale(3,3);/* se aumenta la calidad del canvas al renderizar a una resolución inferior mayor y luego escalarlo*/
tablero_palabras.scale(3,3);/* se aumenta la calidad del canvas al renderizar a una resolución inferior mayor y luego escalarlo*/

boton_iniciar.addEventListener("click", function(){
    iniciar_juego();
});

function iniciar_juego(){
    document.querySelector("#botones_principales").classList.remove("pagina_bienvenida");
    document.querySelector("#botones_principales").classList.add("pagina_agregar_palabra");
    document.querySelector(".ahorcado").style.display = "block";
    document.querySelector(".adivinar").style.display = "block";
    document.querySelector(".entrada").style.display = "";
    document.querySelector("#alerta").style.display = "";
    document.querySelector(".boton_iniciar").style.display = "none";
    document.querySelector(".boton_iniciar").classList.add("juego_iniciado");
    document.querySelector(".boton_agregar").style.display = "none";
    document.querySelector(".boton_guardar").style.display = "";
    document.querySelector(".boton_cancelar").style.display = "";
    document.querySelector(".boton_nuevo").style.display = "block";
    document.querySelector(".boton_desistir").style.display = "block";

    letras = [];
    errores = 0;
    aciertos = 0;
    finalizado = false;
    palabra_secreta = palabras[Math.floor(Math.random()*palabras.length)];
    tablero_ahorcado.clearRect(0, 0, document.querySelector(".adivinar").width, document.querySelector(".adivinar").height);
    tablero_palabras.clearRect(0, 0, document.querySelector(".ahorcado").width, document.querySelector(".ahorcado").height);
    dibujar_sombra_ahorcado();
    dibujar_ahorcado();
    dibujar_lineas();

}

function dibujar_sombra_ahorcado(){
    tablero_ahorcado.lineWidth = 4.39;/* grosor de linea */
    tablero_ahorcado.lineCap = "round";/* redondear extremos linea */ 
    tablero_ahorcado.lineJoin = "round";/* redondear juntas de linea */ 
    tablero_ahorcado.strokeStyle = "#a6b1ad75";/* color de linea */

    tablero_ahorcado.beginPath();
    tablero_ahorcado.moveTo(78.66,348);
    tablero_ahorcado.lineTo(78.66,3);
    
    tablero_ahorcado.moveTo(78.66,3);
    tablero_ahorcado.lineTo(247.58,3);
    tablero_ahorcado.moveTo(247.58,3);
    tablero_ahorcado.lineTo(247.58,46.5);
    tablero_ahorcado.arc(247.58, 75, 28.52, -Math.PI/2, 2 * Math.PI);
    tablero_ahorcado.moveTo(213.28,165.8);
    tablero_ahorcado.lineTo(247.58,103.91);
    tablero_ahorcado.moveTo(281.88,165.8);
    tablero_ahorcado.lineTo(247.58,103.91);
    tablero_ahorcado.moveTo(247.58,103.91);
    tablero_ahorcado.lineTo(247.58,235.53);
    tablero_ahorcado.moveTo(213.28,297.42);
    tablero_ahorcado.lineTo(247.58,235.53);
    tablero_ahorcado.moveTo(281.88,297.42);
    tablero_ahorcado.lineTo(247.58,235.53);
    tablero_ahorcado.stroke();
    tablero_ahorcado.closePath();
}

function dibujar_ahorcado(){
    tablero_ahorcado.strokeStyle = "#0A3871";/* color de linea */
    tablero_ahorcado.beginPath();

    switch(errores){
        case 0:
            tablero_ahorcado.moveTo(3,348);
            tablero_ahorcado.lineTo(284,348);
            break;
        case 1:
            tablero_ahorcado.moveTo(78.66,348);
            tablero_ahorcado.lineTo(78.66,3);
            break;
        case 2:
            tablero_ahorcado.moveTo(78.66,3);
            tablero_ahorcado.lineTo(247.58,3);
            break;
        case 3:
            tablero_ahorcado.moveTo(247.58,3);
            tablero_ahorcado.lineTo(247.58,46.5);
            break;
        case 4:
            tablero_ahorcado.arc(247.58, 75, 28.52, -Math.PI/2, 2 * Math.PI);
            break;
        case 5:
            tablero_ahorcado.moveTo(213.28,165.8);
            tablero_ahorcado.lineTo(247.58,103.91);
            break;
        case 6:
            tablero_ahorcado.moveTo(281.88,165.8);
            tablero_ahorcado.lineTo(247.58,103.91);
            break;
        case 7:
            tablero_ahorcado.moveTo(247.58,103.91);
            tablero_ahorcado.lineTo(247.58,235.53);
            break;
        case 8:
            tablero_ahorcado.moveTo(213.28,297.42);
            tablero_ahorcado.lineTo(247.58,235.53);
            break;
        case 9:
            tablero_ahorcado.moveTo(281.88,297.42);
            tablero_ahorcado.lineTo(247.58,235.53);
            break;
        default:
            break;
    }

    tablero_ahorcado.stroke();
    tablero_ahorcado.closePath();
}

function dibujar_lineas(){
    tablero_palabras.lineWidth = 4;/* grosor de linea */
    tablero_palabras.lineCap = "round";/* redondear extremos linea */
    tablero_palabras.strokeStyle = "#0A3871";/* color de linea */
    tablero_palabras.beginPath();

    for(let i = 0; i < palabra_secreta.length; i++){
        tablero_palabras.moveTo(2+(i*(8.55+30)+(1-(palabra_secreta.length/8))*152),58);
        tablero_palabras.lineTo(32+(i*(8.55+30)+(1-(palabra_secreta.length/8))*152),58);
    }
    tablero_palabras.stroke();
    tablero_palabras.closePath();
}

function dibujar_letra_correcta(index){
    tablero_palabras.font = "normal 32px Inter";
    tablero_palabras.fillStyle = "#0A3871";
    tablero_palabras.fillText(palabra_secreta[index],5+(index*(8.55+30)+(1-(palabra_secreta.length/8))*152) ,42);
}

function dibujar_letra_incorrecta(index,letra){
    tablero_palabras.font = "normal 32px Inter";
    tablero_palabras.fillStyle = "#dc1515";
    tablero_palabras.fillText(letra,5+(index*(8.55+30)) ,115);
}

function verificarLetra(letra){
    if(palabra_secreta.search(letra)!=-1){
        return true;
    }else{
        return false
    }
}

function ganaste(){
    dibujar_cuadro_mensaje(26, 110, 236, 135, 32);
    tablero_ahorcado.fillStyle = "#1b2824ea";
    tablero_ahorcado.fill();
    tablero_ahorcado.fillStyle = "blue";
    tablero_ahorcado.font = "bold 40px Inter";
    tablero_ahorcado.fillStyle = "#10da9d";
    tablero_ahorcado.fillText("Ganaste,",60,164);
    tablero_ahorcado.fillText("felicidades",42,216);
    finalizado = true;
}

function perdiste(){
    dibujar_cuadro_mensaje(10, 138, 264, 78, 32);
    tablero_ahorcado.fillStyle = "#291c1cea";
    tablero_ahorcado.fill();
    tablero_ahorcado.font = "bold 40px Inter";
    tablero_ahorcado.fillStyle = "#ff5151";
    tablero_ahorcado.fillText("Fin del juego",22 ,190);
    finalizado = true;
}

function dibujar_cuadro_mensaje(x,y,ancho,alto,radio){
    tablero_ahorcado.beginPath();
    tablero_ahorcado.moveTo(x,y+radio);
    tablero_ahorcado.lineTo(x,y+alto-radio);
    tablero_ahorcado.quadraticCurveTo(x,y+alto,x+radio,y+alto);
    tablero_ahorcado.lineTo(x+ancho-radio,y+alto);
    tablero_ahorcado.quadraticCurveTo(x+ancho,y+alto,x+ancho,y+alto-radio);
    tablero_ahorcado.lineTo(x+ancho,y+radio);
    tablero_ahorcado.quadraticCurveTo(x+ancho,y,x+ancho-radio,y);
    tablero_ahorcado.lineTo(x+radio,y);
    tablero_ahorcado.quadraticCurveTo(x,y,x,y+radio);
}

document.onkeydown = (e) => {
    if(((e.key>="a" && e.key<="z")||e.key=="ñ") && finalizado == false){
        var letra = e.key.toUpperCase();
        if(letras.indexOf(letra)==-1){
            letras.push(letra);
            if(verificarLetra(letra)){
                for(let i = 0; i < palabra_secreta.length; i++){
                    if(letra == palabra_secreta[i]){
                        dibujar_letra_correcta(i);
                        aciertos++;
                    }
                }
                if(aciertos==palabra_secreta.length){
                    ganaste();
                }
            }else{
                if(errores >= 8){
                    errores++;
                    dibujar_ahorcado();
                    perdiste();
                }else{
                    dibujar_letra_incorrecta(errores,letra);
                    errores++;
                    dibujar_ahorcado();
                }
            }
        }
    }
}