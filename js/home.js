var btn_start = document.querySelector(".home__btn--start");

btn_start.addEventListener("click", function(){
    document.querySelector(".home").classList.add("ocultado");
    document.querySelector(".game").classList.remove("ocultado");

    new_game();
});

var btn_add = document.querySelector(".home__btn--add");

btn_add.addEventListener("click", function(){
    document.querySelector(".home").classList.add("ocultado");
    document.querySelector(".add-word").classList.remove("ocultado");
});