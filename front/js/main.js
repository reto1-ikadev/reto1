"use restrict"
var arrayModos = new Array();
var modo;
var cuadro
arrayModos = document.getElementById("modo");
arrayModos.addEventListener("change", ocultar);

function ocultar(event){
    modo = " ";
    modo = event.target.value;
    console.log("modo " + modo);
    if(modo != "manual"){
        cuadro = document.getElementById("control");
        console.log(cuadro + " cuadro");
        cuadro.style.display= cuadro.value = "none";
        console.log("desaparezco");
    }
    else{
        console.log("aparezco");
        cuadro.style.display= cuadro.value = "block";
    }
}