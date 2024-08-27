var add_word_input = document.querySelector(".add-word__input");

add_word_input.addEventListener("input", function(){
    if (add_word_input.value.length > 8){
        document.querySelector(".add-word__warning").classList.add("active-warning");
    }else{
        document.querySelector(".add-word__warning").classList.remove("active-warning");
    }
});

var btn_save = document.querySelector(".add-word__btn--save");

btn_save.addEventListener("click", function(){
    words.push(add_word_input.value.toUpperCase());
    add_word_input.value = "";

    document.querySelector(".add-word").classList.add("ocultado");
    document.querySelector(".game").classList.remove("ocultado");
    new_game();
});

var btn_cancel = document.querySelector(".add-word__btn--cancel");

btn_cancel.addEventListener("click", function(){
    document.querySelector(".home").classList.remove("ocultado");
    document.querySelector(".add-word").classList.add("ocultado");

    add_word_input.value = "";
});