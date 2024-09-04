var btn_start = document.querySelector(".home__btn--start");

btn_start.addEventListener("click", function(){
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".game").classList.remove("hidden");

    new_game();
});

var btn_add = document.querySelector(".home__btn--add");

btn_add.addEventListener("click", function(){
    document.querySelector(".home").classList.add("hidden");
    document.querySelector(".add-word").classList.remove("hidden");
});