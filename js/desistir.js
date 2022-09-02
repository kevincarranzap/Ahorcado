var boton_desistir = document.querySelector(".boton_desistir");

boton_desistir.addEventListener("click", function(){
    document.querySelector("#botones_principales").classList.remove("pagina_agregar_palabra");
    document.querySelector("#botones_principales").classList.add("pagina_bienvenida");
    document.querySelector(".ahorcado").style.display = "";
    document.querySelector(".adivinar").style.display = "";
    document.querySelector(".boton_iniciar").style.display = "";
    document.querySelector(".boton_iniciar").classList.remove("juego_iniciado");
    document.querySelector(".boton_agregar").style.display = "";
    document.querySelector(".boton_nuevo").style.display = "";
    document.querySelector(".boton_desistir").style.display = "";
    finalizado="";
});