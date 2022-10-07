"use restrict"
var arrayModos = new Array();
var array_pos_paradas = ["7%","21.6%","36.2%","50.8%","65.4%","80%"];
var modo;
var cuadro;
arrayModos = document.getElementById("modo");
arrayModos.addEventListener("change", ocultar);
var pos_origen ;
var pos_destino ;
const imgTranvia = document.getElementById("anim_tranvia1");
var botones = document.querySelectorAll(".boton");
var varAuto;
/*Esto es lo primero que se ejecuta al arrancar. Pide la posicion del tranvia al plc*/
//Esperar a estar con el plc antes de descomentar la linea de abajo

recibirDatosIniciales(); //Recibir los Datos nada mas abrir la pagina.

/******************************BOTONES Y LISTENERS DE LA PAGINA ******************************************************* */
/*Boton para arrancar la animacion*/
var bGo;
bGo = document.getElementById("rearme");
bGo.addEventListener("click",arrancar);

/*Boton parar para parar la animación*/
var bStop;
bStop = document.getElementById("stop");
bStop.addEventListener("click", parar)

/*Boton para encender la maquinaria*/
var bEnviar 
<<<<<<< HEAD
/*Boton para encender la maquinaria*/
=======
>>>>>>> retoques
var bOn 
bEnviar = document.getElementById("arrancar");
bEnviar.addEventListener("click", encender);

/*ComboBox paradas. Actualizar variables de las paradas*/




var selector_destino = document.getElementById("destino");

selector_destino.addEventListener("change", actualizarPosDestino);
imgTranvia.addEventListener("animationend", listener,false);

imgTranvia.id =  "anim_tranvia1";

/***SITUAR AL TRANVIA************************************************************************** */
//actualizarPosOrigen();
var posicionAutomatico = 0;
var posicionAutomaticoReversa = 6;



// Funcion para ocultar o mostrar el Div de los controles*********************************************/
function ocultar(event){
    modo = " ";
    modo = event.target.value;
    console.log("modo " + modo);
    var cuadro = document.getElementById("control");
    if(modo == "2"){
        
        console.log(cuadro + " cuadro");
        control.style.visibility= control.value = "hidden";
        // No se para que es necesario esta linea de esta forma: 
        // cuadro.style.display = cuadro.value = "none";
        // Pero no hay ninguna diferencia entre las dos.
        console.log("desaparezco");
        varAuto = 1;
        automatico();
    }
    else if(modo == "1"){
        varAuto = 0;
        console.log("aparezco");
        
        control.style.visibility= control.value = "visible";
    }
}
/*************************************CONTROLAR LA ANIMACION TRANVIA ******************************************************* */
async function parar(){
<<<<<<< HEAD
    await fetch("datos.html", { body: "%22app%22.estado_marcha_paro=0", headers: {"Content-Type": "application/x-www-form-urlencoded", }, method: "post" });
=======
    await fetch("datos.html", { body: "%22app%22.estado_marcha_paro=false", headers: {"Content-Type": "application/x-www-form-urlencoded", }, method: "post" });
>>>>>>> retoques
    console.log(estadoMarchaParo());
    console.log("paro el tranvia");
    imgTranvia.style.animationPlayState = "paused" ;
    if(typeof pos_destino !== 'undefined') {
        if(pos_destino !== "0") {
            botones[pos_destino - 1].style.fill = "red";
        }
    }
}

async function encender(){
	await fetch("datos.html", { body: "%22app%22.estado_marcha_paro=1", headers: {"Content-Type": "application/x-www-form-urlencoded", }, method: "post" });
	console.log(estadoMarchaParo());
}

 async function arrancar(){
    recibirDatos();
    if(marchaonomarcha == 1 ){

    console.log("arranco la animacion");
    fetch("datos.html", { body: "%22app%22.estado_parada_actual=" + pos_destino+ "", headers: { "Content-Type": "application/-x-www-urlencoded",}, method: "post"});
	fetch("datos.html", { body: "%22app%22.estado_movimiento=1", headers: { "Content-Type": "application/-x-www-urlencoded",}, method: "post"});
    /*accedo al elemento css donde están las variables y cambio el valor 
    de la variable posorigen por una de las posiciones guardadas en el array_pos_paradas */
	if(pos_origen < pos_destino){
		fetch("datos.html", { body: "%22app%22.estado_direccion=1", headers: { "Content-Type": "application/-x-www-urlencoded",}, method: "post"});
	}else{
		fetch("datos.html", { body: "%22app%22.estado_direccion=0", headers: { "Content-Type": "application/-x-www-urlencoded",}, method: "post"});
	}

		
    imgTranvia.style.animationPlayState = "running" ;
    todosEnVacio();
    if(typeof pos_destino !== 'undefined') {
        if(pos_destino !== "0") {
            botones[pos_destino - 1].style.fill = "#FFD700";
            console.log(imgTranvia.style.animationPlayState);
        }
    }
}
else{
    console.log("mal");
}
 }
 async function encender(){
    await fetch("datos.html", { body: "%22app%22.estado_marcha_paro=true", headers: {"Content-Type": "application/x-www-form-urlencoded", }, method: "post" });
    console.log(estadoMarchaParo());
}
/**CONTROLA LOS COLORES DE LAS PARADAS ************************************************************************************ */
 function todosEnVacio() {
    for(let boton of botones) {
        boton.style.fill = "#20B2AA";
    }
}
/* **CUANDO LA ANIMACIÓN TERMINA ACTUALIZA LA VARIABLE DE ORIGEN. SIN ESTO LA ANIMACIÓN VUELVE A LA PARADA DE ORIGEN**/
function listener(event){
    switch(event.type){
        case "animationend":
            console.log("animacion finalizada");
            document.querySelector(':root').style.setProperty("--posorigen",array_pos_paradas[pos_destino-1]);
            reiniciarAnimacion();
            if(typeof pos_destino !== 'undefined') {
                if(pos_destino !== "0") {
                    botones[pos_destino - 1].style.fill = "green";
                }
                break;
            }
    }
    /*Para que la animacion no vuelva a la posicion de origen, necesito decirle que 
    la variable origen tiene ahora el valor de la variable destino, y la de destino, tendra 
    el nuevo valor que se seleccione en el combo*/
}

function actualizarPosOrigen(){
    console.log("f(x) actualizar variables");
    /*Cambio las variables en el css para que la animacion se mueva de una parada a otra */
    document.querySelector(':root').style.setProperty("--posorigen",array_pos_paradas[pos_origen]);
    console.log("array"+array_pos_paradas[pos_origen]);
}

function actualizarPosDestino(){
    pos_destino = selector_destino.options[selector_destino.selectedIndex].value;
    document.querySelector(':root').style.setProperty("--posdestino",array_pos_paradas[pos_destino-1]);
    console.log(array_pos_paradas[pos_destino-1]);
}
/*REFRESCA LA INFORMACION DE LA PAGINA, PARA QUE REINICIE EL CONTADOR DE LA ANIMACIÓN*/
function reiniciarAnimacion(){
    /*Esta funcion la he tenido que crear para que el tranvia se vuelva a mover cada vez que pulso go. 
    Sin esto, la animación se para en una parada y no vuelve a arrancar. Solo ejecuta un ciclo*/
    fetch("datos.html", { body: "%22app%22.estado_movimiento=0", headers: { "Content-Type": "application/-x-www-urlencoded",}, method: "post"});
    imgTranvia.style.animation = "pause";
    imgTranvia.offsetHeight; /*Con esto consigo actualizar la animación*/
    imgTranvia.style.animation = null;
}



/******************************FUNCIONES DE COMUNICACION CON EL PLC ******************************************************************** */



/* Esta funcion posiciona el tranvia en la parada que se recibe del plc. Realiza una peticion de datos y llama a la f(x) actualizarPosOrigen*/
var datosRecibidos;
async function recibirDatosIniciales(){
    datosRecibidos = await fetch("datos.html").then((response) => response.json()).then((datos)=> {return datos } );
    pos_origen = estadoParadaActual();
    actualizarPosOrigen();
    

} 

/*Con esta funcion pedimos datos al plc sin actualizar la posicion de origen*/
async function recibirDatos(){
    datosRecibidos = await fetch("datos.html").then((response) => response.json()).then((datos)=> {return datos } );
    paradaActual = estadoParadaActual();
    estadoStopGo = estadoMarchaParo();
    direccion = estadoDireccion();
    velocidad = estadoVelocidad();


} 

/*Devuelve si el tranvia en el plc esta arrancado o no*/
var estadoStopGo;
function estadoMarchaParo(){
    let estadoMarPar = datosRecibidos['marcha'];
    return estadoMarPar;
}

/*Devuelve la direccion que lleva el tranvia */
var direccion;
function estadoDireccion(){
    let estadoDir = datosRecibidos['direccion'];
    return estadoDir;
}

/*Devuelve la velocidad de tranvia desde el plc */
var velocidad;
function estadoVelocidad(){
    let estadoVel = datosRecibidos['velocidad'];
    return estadoVel;
}

/*Esta funcion coge del result del fetch la parada y actualiza la parada actual*/
var paradaActual;
function estadoParadaActual(){
    let estadoParAct = datosRecibidos['parada'];
    return estadoParAct;
}

/*Esta funcion devuelve si el tranvia está parado o en movimiento desde el plc*/
function estadoMovimiento(){
    let estadoParAct = datosRecibidos['movimiento'];
    return estadoParAct;
}


/*********************************************MODO AUTOMATICO*********************************************************************************** */
/*Hay que probar si se puede llamar directamente a la funcion arrancarAutomatico sin que este dentro de otra funcion */
/*El tranvia comienza a moverse en modo automatico */
function automatico() {
    recibirDatos();
    if(varAuto == 1 && estadoStopGo == "1"){

         arrancarAutomatico();
    }
   
}
/*Funcion que arranca automatico*/
async function arrancarAutomatico() {
    while (estadoStopGo== "1") {
		recibirDatos();
    if(direccion ==1){
    for(let posicionAutomatico = paradaActual; posicionAutomatico <=4 && estadoStopGo == "0";  posicionAutomatico++) {
		recibirDatos();
        imgTranvia.addEventListener("animationend", listener,false);
    
        document.querySelector(':root').style.setProperty("--posorigen",array_pos_paradas[posicionAutomatico]);
        document.querySelector(':root').style.setProperty("--posdestino",array_pos_paradas[posicionAutomatico + 1]);
        
        botones[posicionAutomatico ].style.fill = "green";
        botones[posicionAutomatico + 1].style.fill = "#FFD700";
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Esperar"), 2000);
            imgTranvia.style.animationPlayState = "running" ; 
            console.log("arranco la animacion");
            //Modificar las variables del servidor
            fetch("datos.html", { body: "%22app%22.estado_parada_actual=" + posicionAutomatico+ "", headers: { "Content-Type": "application/-x-www-urlencoded",}, method: "post"});
	        fetch("datos.html", { body: "%22app%22.estado_movimiento=1", headers: { "Content-Type": "application/-x-www-urlencoded",}, method: "post"});
        });
    
        let result = await promise;

        reiniciarAnimacion();
        console.log("animacion finalizada");
         
        todosEnVacio();
        
    }
    }
    else{
    for(let posicionAutomatico = paradaActual; posicionAutomatico >= 1 && estadoStopGo =="0"; posicionAutomatico--) {
		recibirDatos();
        imgTranvia.addEventListener("animationend", listener,false);
        document.querySelector(':root').style.setProperty("--posorigen",array_pos_paradas[posicionAutomatico]);
        document.querySelector(':root').style.setProperty("--posdestino",array_pos_paradas[posicionAutomatico - 1]);
        

        botones[posicionAutomatico].style.fill = "green";
        botones[posicionAutomatico - 1].style.fill = "#FFD700";

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Esperar"), 2000);
            imgTranvia.style.animationPlayState = "running" ; 
            console.log("arranco la animacion");
            fetch("datos.html", { body: "%22app%22.estado_parada_actual=" + posicionAutomatico+ "", headers: { "Content-Type": "application/-x-www-urlencoded",}, method: "post"});
	        fetch("datos.html", { body: "%22app%22.estado_movimiento=0", headers: { "Content-Type": "application/-x-www-urlencoded",}, method: "post"});
        });
        let result = await promise;

        reiniciarAnimacion();
        console.log("animacion finalizada");
            
        todosEnVacio();
        
        }
        if(varAuto == 0) {
            todosEnVacio();
            
        }

    }
} 
    
}