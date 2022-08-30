var entradaTexto = document.querySelector(".entrada");

entradaTexto.addEventListener("input", function(){
    verificarCondiciones();
});

function verificarCondiciones(){
    if (entradaTexto.value.length > 8){
        document.querySelector("#alerta").classList.remove("alerta_gris");
        document.querySelector("#alerta").classList.add("alerta_roja");
    }else{
        document.querySelector("#alerta").classList.remove("alerta_roja");
        document.querySelector("#alerta").classList.add("alerta_gris");
    }
}