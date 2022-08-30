var boton_cancelar = document.querySelector(".boton_cancelar");

boton_cancelar.addEventListener("click", function(){
    document.querySelector("#botones_principales").classList.remove("pagina_agregar_palabra");
    document.querySelector("#botones_principales").classList.add("pagina_bienvenida");
    document.querySelector(".entrada").style.display = "";
    document.querySelector("#alerta").style.display = "";
    document.querySelector(".boton_iniciar").style.display = "";
    document.querySelector(".boton_agregar").style.display = "";
    document.querySelector(".boton_guardar").style.display = "";
    document.querySelector(".boton_cancelar").style.display = "";
})