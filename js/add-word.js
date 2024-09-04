var add_word_input = document.querySelector(".add-word__input");

add_word_input.addEventListener("input", function(){
    if (add_word_input.value.length > 8 || add_word_input.value != add_word_input.value.normalize("NFD").replace(/\p{Diacritic}/gu, "")){
        document.querySelector(".add-word__warning").classList.add("active-warning");
        document.querySelector(".add-word__btn--save").classList.add("disabled");
    }else if (add_word_input.value == ""){
        document.querySelector(".add-word__warning").classList.remove("active-warning");
        document.querySelector(".add-word__btn--save").classList.add("disabled");
    }else{
        document.querySelector(".add-word__warning").classList.remove("active-warning");
        document.querySelector(".add-word__btn--save").classList.remove("disabled");
    }
});

var btn_save = document.querySelector(".add-word__btn--save");

btn_save.addEventListener("click", function(){
    words.push(add_word_input.value.toUpperCase());
    add_word_input.value = "";

    document.querySelector(".add-word").classList.add("hidden");
    document.querySelector(".game").classList.remove("hidden");
    new_game();
});

var btn_cancel = document.querySelector(".add-word__btn--cancel");

btn_cancel.addEventListener("click", function(){
    document.querySelector(".home").classList.remove("hidden");
    document.querySelector(".add-word").classList.add("hidden");

    add_word_input.value = "";
});