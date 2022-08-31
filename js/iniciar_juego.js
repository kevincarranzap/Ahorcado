var boton_iniciar = document.querySelector(".boton_iniciar");

var palabras = ["PRUEBA"];
var palabra_secreta;
var letras = [];
var errores = 0;
var aciertos = 0;
var tablero_palabras = document.querySelector(".adivinar").getContext("2d");
var tablero_ahorcado = document.querySelector(".ahorcado").getContext("2d");

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
    document.querySelector(".boton_agregar").style.display = "none";
    document.querySelector(".boton_guardar").style.display = "";
    document.querySelector(".boton_cancelar").style.display = "";
    document.querySelector(".boton_nuevo").style.display = "block";
    document.querySelector(".boton_desistir").style.display = "block";

    palabra_secreta = palabras[Math.floor(Math.random()*palabras.length)]
    dibujar_sombra_ahorcado();
    dibujar_ahorcado();
    dibujar_lineas();

}

function dibujar_sombra_ahorcado(){
    tablero_ahorcado.lineWidth = 4.39;/* grosor de linea */
    tablero_ahorcado.lineCap = "round";/* redondear extremos linea */ 
    tablero_ahorcado.lineJoin = "round";/* redondear juntas de linea */ 
    tablero_ahorcado.strokeStyle = "#a6b1ad75";/* color de linea */
    tablero_ahorcado.scale(3,3);/* se aumenta la calidad del canvas al renderizar a una resolución inferior mayor y luego escalarlo*/

    tablero_ahorcado.beginPath();
    tablero_ahorcado.moveTo(78.66,348);
    tablero_ahorcado.lineTo(78.66,3);
    
    tablero_ahorcado.moveTo(78.66,3);
    tablero_ahorcado.lineTo(247.58,3);
    tablero_ahorcado.moveTo(247.58,3);
    tablero_ahorcado.lineTo(247.58,46.87);
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
            tablero_ahorcado.lineTo(247.58,46.87);
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
    tablero_palabras.scale(3,3);/* se aumenta la calidad del canvas al renderizar a una resolución inferior mayor y luego escalarlo*/
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
    tablero_palabras.lineWidth = 4;
    tablero_palabras.fillStyle = "#0A3871";
    tablero_palabras.fillText(palabra_secreta[index],5+(index*(8.55+30)+(1-(palabra_secreta.length/8))*152) ,42);
}

function dibujar_letra_incorrecta(index,letra){
    tablero_palabras.font = "normal 32px Inter";
    tablero_palabras.lineWidth = 4;
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

document.onkeydown = (e) => {
    if((e.key>="a" && e.key<="z")||e.key=="ñ"){
        var letra = e.key.toUpperCase();
        if(letras.indexOf(letra)==-1){
            letras.push(letra);
            if(verificarLetra(letra)){
                for(let i = 0; i < palabra_secreta.length; i++){
                    if(letra == palabra_secreta[i]){
                        dibujar_letra_correcta(i);
                    }
                }
            }else{
                dibujar_letra_incorrecta(errores,letra);
                errores++;
            }
        }
    }
}