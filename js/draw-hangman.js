var ctx_hangman = canvas_hangman.getContext("2d");
ctx_hangman.scale(3,3);/* se aumenta la calidad del context al renderizar a una resolución inferior mayor y luego escalarlo*/

function draw_initial_hangman(){
    ctx_hangman.lineWidth = 6;/* grosor de linea */
    ctx_hangman.lineCap = "round";/* redondear extremos linea */ 
    ctx_hangman.lineJoin = "round";/* redondear juntas de linea */ 
    
    // horca
    ctx_hangman.strokeStyle = "#AF5D00";/* color de linea */
    ctx_hangman.beginPath();
    ctx_hangman.moveTo(3,277);
    ctx_hangman.lineTo(277,277);
    ctx_hangman.moveTo(39,277);
    ctx_hangman.lineTo(39,3);
    ctx_hangman.moveTo(39,3);
    ctx_hangman.lineTo(208,3);
    ctx_hangman.moveTo(208,3);
    ctx_hangman.lineTo(208,47);
    ctx_hangman.stroke();
    ctx_hangman.closePath();
    
    // cabeza 
    ctx_hangman.strokeStyle = "#C8CFCC";/* color de linea */
    ctx_hangman.beginPath();
    ctx_hangman.arc(208, 75, 28, -Math.PI/2, 2 * Math.PI);
    // brazo derecho
    ctx_hangman.moveTo(174,165);
    ctx_hangman.lineTo(208,120);
    // brazo izquierdo
    ctx_hangman.moveTo(242,165);
    ctx_hangman.lineTo(208,120);
    // cuello y tronco
    ctx_hangman.moveTo(208,104);
    ctx_hangman.lineTo(208,200);
    // pierna derecha
    ctx_hangman.moveTo(174,262);
    ctx_hangman.lineTo(208,200);
    // pierna izquierda
    ctx_hangman.moveTo(242,262);
    ctx_hangman.lineTo(208,200);

    ctx_hangman.stroke();
    ctx_hangman.closePath();
}

function draw_hangman_miss(){
    ctx_hangman.strokeStyle = "#DC1515";/* color de linea */
    ctx_hangman.beginPath();

    switch(misses.length){
        case 1:// cabeza 
            ctx_hangman.arc(208, 75, 28, -Math.PI/2, 2 * Math.PI);
            break;
        case 2:// cuello
            ctx_hangman.moveTo(208,104);
            ctx_hangman.lineTo(208,120);
            break;
        case 3:// brazo derecho
            ctx_hangman.moveTo(174,165);
            ctx_hangman.lineTo(208,120);
            break;
        case 4:// brazo izquierdo
            ctx_hangman.moveTo(242,165);
            ctx_hangman.lineTo(208,120);
            break;
        case 5:// tronco
            ctx_hangman.moveTo(208,103.91);
            ctx_hangman.lineTo(208,200);
            break;
        case 6:// pierna derecha
            ctx_hangman.moveTo(174,262);
            ctx_hangman.lineTo(208,200);
            break;
        case 7:// pierna izquierda
            ctx_hangman.moveTo(242,262);
            ctx_hangman.lineTo(208,200);
            break;
        default:
            break;
    }

    ctx_hangman.stroke();
    ctx_hangman.closePath();
}

function ganaste(){
    dibujar_cuadro_mensaje(26, 110, 236, 135, 32);
    ctx_hangman.fillStyle = "#1b2824ea";
    ctx_hangman.fill();
    ctx_hangman.fillStyle = "blue";
    ctx_hangman.font = "bold 40px Inter";
    ctx_hangman.fillStyle = "#10da9d";
    ctx_hangman.fillText("Ganaste,",60,164);
    ctx_hangman.fillText("felicidades",42,216);
    game_active=false;
}

function perdiste(){
    dibujar_cuadro_mensaje(10, 138, 264, 78, 32);
    ctx_hangman.fillStyle = "#291c1cea";
    ctx_hangman.fill();
    ctx_hangman.font = "bold 40px Inter";
    ctx_hangman.fillStyle = "#ff5151";
    ctx_hangman.fillText("Fin del juego",22 ,190);
    game_active=false;
}

function dibujar_cuadro_mensaje(x,y,ancho,alto,radio){
    ctx_hangman.beginPath();
    ctx_hangman.moveTo(x,y+radio);
    ctx_hangman.lineTo(x,y+alto-radio);
    ctx_hangman.quadraticCurveTo(x,y+alto,x+radio,y+alto);
    ctx_hangman.lineTo(x+ancho-radio,y+alto);
    ctx_hangman.quadraticCurveTo(x+ancho,y+alto,x+ancho,y+alto-radio);
    ctx_hangman.lineTo(x+ancho,y+radio);
    ctx_hangman.quadraticCurveTo(x+ancho,y,x+ancho-radio,y);
    ctx_hangman.lineTo(x+radio,y);
    ctx_hangman.quadraticCurveTo(x,y,x,y+radio);
}