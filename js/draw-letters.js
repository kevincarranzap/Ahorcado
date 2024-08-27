var ctx_letters= canvas_letters.getContext("2d");
ctx_letters.scale(3,3);/* se aumenta la calidad del canvas al renderizar a una resolución inferior mayor y luego escalarlo*/
ctx_letters.font = "bold 32px Sono_Monospace";

function draw_initial_letters(){
    ctx_letters.lineWidth = 6;/* grosor de linea */
    ctx_letters.lineCap = "round";/* redondear extremos linea */
    ctx_letters.strokeStyle = "#0A3871";/* color de linea */
    ctx_letters.beginPath();

    for(i in secret_word){
        ctx_letters.moveTo(ctx_letters.lineWidth/2+(i*(8.4+27)+(1-(secret_word.length/8))*canvas_letters.width/6),58);
        ctx_letters.lineTo(ctx_letters.lineWidth/2+29-3+(i*(8.4+27)+(1-(secret_word.length/8))*canvas_letters.width/6),58);
    }
    ctx_letters.stroke();
    ctx_letters.closePath();
}

function draw_letters_hit(index){
    ctx_letters.fillStyle = "#0A3871";
    ctx_letters.fillText(secret_word[index],6+(index*(8.4+27)+(1-(secret_word.length/8))*canvas_letters.width/6) ,canvas_letters.height/6 - 4);
}

function draw_letters_miss(){
    ctx_letters.fillStyle = "#dc1515";
    ctx_letters.clearRect(0, canvas_letters.height/6 + 12, canvas_letters.width, canvas_letters.height);
    for(i in misses) ctx_letters.fillText(misses[i], 6+(i*(8.4+27)+(1-(misses.length/8))*canvas_letters.width/6), canvas_letters.height/6 + 32 + 12);
}

function draw_letters_remaining(){
    for(i in secret_word){
        if(!pressed_keys.includes(secret_word[i])){
            ctx_letters.fillStyle = "#C8CFCC";
            ctx_letters.fillText(secret_word[i],6+(i*(8.4+27)+(1-(secret_word.length/8))*canvas_letters.width/6) ,canvas_letters.height/6 - 4);
        }
    }
}

function verify_letter(pressed_key){
    if(!pressed_keys.includes(pressed_key)){
        pressed_keys.push(pressed_key);
        if(secret_word.includes(pressed_key)){
            for (i in secret_word) {
                if (pressed_key == secret_word[i]){
                    draw_letters_hit(i);
                    hits++;
                }
            }
            if(hits==secret_word.length) ganaste();
        }else{
            misses.push(pressed_key);
            draw_hangman_miss();
            draw_letters_miss();

            if(misses.length >= 7){
                draw_letters_remaining();
                perdiste();
            }
        }
    }
}

document.onkeydown = (e) => {
    if (game_active) {
        //credits to --> https://internetdrew.medium.com/how-to-detect-a-letter-key-on-key-events-with-javascript-c749820dcd27
        if(e.code===`Key${e.key.toUpperCase()}` || e.code=="Semicolon") verify_letter(e.key.toUpperCase());
    }
}