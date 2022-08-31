var boton_agregar = document.querySelector(".boton_agregar");

boton_agregar.addEventListener("click", function(){
    document.querySelector("#botones_principales").classList.remove("pagina_bienvenida");
    document.querySelector("#botones_principales").classList.add("pagina_agregar_palabra");
    document.querySelector(".entrada").style.display = "block";
    document.querySelector("#alerta").style.display = "flex";
    document.querySelector(".boton_iniciar").style.display = "none";
    document.querySelector(".boton_agregar").style.display = "none";
    document.querySelector(".boton_guardar").style.display = "block";
    document.querySelector(".boton_cancelar").style.display = "block";
});

var boton_guardar = document.querySelector(".boton_guardar");

boton_guardar.addEventListener("click", function(){
    palabras.push(document.querySelector(".entrada").value.toUpperCase());
    document.querySelector(".entrada").value = "";
    iniciar_juego();
});