"use restrict"
var arrayModos = new Array();
var array_pos_paradas = ["5%","21.8%","38.6%","55.4%","72.2%","89%"];
var modo;
var cuadro
arrayModos = document.getElementById("modo");
arrayModos.addEventListener("change", ocultar);
var pos_origen ;
var pos_destino ;
const imgTranvia = document.getElementById("anim_tranvia1");

/*Boton para arrancar la animacion*/
var bGo;
bGo = document.getElementById("rearme");
bGo.addEventListener("click",arrancar);

/*Boton parar para parar la animación*/
var bStop;
bStop = document.getElementById("stop");
bStop.addEventListener("click", parar);

/*ComboBox paradas. Actualizar variables de las paradas*/
var pos_inicio;
var pos_final;
var selector_origen = document.getElementById("origen");
var selector_destino = document.getElementById("destino");
// selector_origen.addEventListener("change", actualizarPosOrigen);
selector_destino.addEventListener("change", actualizarPosDestino);
imgTranvia.addEventListener("animationend", listener,false);
//imgTranvia.className = "animacion";
imgTranvia.id =  "anim_tranvia1";


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

function parar(){
    console.log("paro el tranvia");
    imgTranvia.style.animationPlayState = "paused" ;
}


 function arrancar(){
    console.log("arranco la animacion");
    /*accedo al elemento css donde están las variables y cambio el valor 
    de la variable posorigen por una de las posiciones guardadas en el array_pos_paradas */
    imgTranvia.style.animationPlayState = "running" ;
    console.log(imgTranvia.style.animationPlayState);
 }

 
function listener(event){
    switch(event.type){
        case "animationend":
            console.log("animacion finalizada");
            document.querySelector(':root').style.setProperty("--posorigen",array_pos_paradas[pos_destino-1]);
            reiniciarAnimacion();
            break;
    }
    /*Para que la animacion no vuelva a la posicion de origen, necesito decirle que 
    la variable origen tiene ahora el valor de la variable destino, y la de destino, tendra 
    el nuevo valor que se seleccione en el combo*/
}


function actualizarPosOrigen(){
    console.log("f(x) actualizar variables");
    /*Obtengo la parada de origen y la del destino para asegurar que no han seleccionado la misma en 
    origen y en destino*/
    pos_origen = selector_origen.options[selector_origen.selectedIndex].value;
    /*Cambio las variables en el css para que la animacion se mueva de una parada a otra */
    document.querySelector(':root').style.setProperty("--posorigen",array_pos_paradas[pos_origen-1]);
    console.log("array"+array_pos_paradas[pos_origen-1]);
}


function actualizarPosDestino(){
    pos_destino = selector_destino.options[selector_destino.selectedIndex].value;
    document.querySelector(':root').style.setProperty("--posdestino",array_pos_paradas[pos_destino-1]);
    console.log(array_pos_paradas[pos_destino-1]);
}

function reiniciarAnimacion(){
    /*Esta funcion la he tenido que crear para que el tranvia se vuelva a mover cada vez que pulso go. 
    Sin esto, la animación se para en una parada y no vuelve a arrancar. Solo ejecuta un ciclo*/
    imgTranvia.style.animation = "none";
    imgTranvia.offsetHeight; /*Con esto consigo actualizar la animación*/
    imgTranvia.style.animation = null;
}



