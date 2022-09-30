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
/*Boton parar para parar la animación*/
var bStop;
var imgTranvia;
bStop = document.getElementById("stop");
bStop.addEventListener("click", parar);
console.log(bStop);
function parar(){
 console.log("paro el tranvia");
    imgTranvia = document.getElementById("tran");
    imgTranvia.style.animationPlayState = "paused" ;
    console.log(imgTranvia);
}
/*Boton para arrancar la animacion*/
 var bGo;
 bGo = document.getElementById("rearme");
 bGo.addEventListener("click",arrancar);
 
 function arrancar(){
    console.log("arranco la animacion");
    imgTranvia = document.getElementById("tran");
    imgTranvia.style.animationPlayState = "running" ;
    console.log(imgTranvia);
 }
