const canvas_hangman = document.querySelector(".game__canvas--hangman");
const canvas_letters = document.querySelector(".game__canvas--guess");

var secret_word;
var pressed_keys = [];
var misses = [];
var hits = 0;
var game_active=false;
var words = ["PRUEBA","CSS","HTML","ALEGRIA","SUERTE","PERRO","GATO","ESTUDIO","ADIVINAR","EMPLEO"];

function new_game(){
    game_active=true;
    secret_word = words[Math.floor(Math.random()*words.length)];
    draw_initial_hangman();
    draw_initial_letters();
}

function clear_game(){
    pressed_keys = [];
    misses = [];
    hits = 0;
    ctx_hangman.clearRect(0, 0, canvas_hangman.width, canvas_hangman.height);
    ctx_letters.clearRect(0, 0, canvas_letters.width, canvas_letters.height);
}

var btn_new = document.querySelector(".game__btn--new");

btn_new.addEventListener("click", function(){
    clear_game();
    new_game();
});

var btn_withdraw = document.querySelector(".game__btn--withdraw");

btn_withdraw.addEventListener("click", function(){
    document.querySelector(".home").classList.remove("ocultado");
    document.querySelector(".game").classList.add("ocultado");

    clear_game();
    game_active=false;
});