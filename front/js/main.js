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



class Prueba{
    constructor(jsonrpc, id, result){
        this.jsonrpc = jsonrpc;
        this.id = jsonrpc;
        this.result = result
    }
}


var arrayVariables = new Array();
arrayVariables.push(new Prueba("2.0", 1, 1));
arrayVariables.push(new Prueba("2.0", 2, 1));
arrayVariables.push(new Prueba("2.0", 3, 2));
arrayVariables.push(new Prueba("2.0", 4, 4));

console.log(arrayVariables.length)




//recibirDatos(); //Recibir los Datos nada mas abrir la pagina.
/*Boton para arrancar la animacion*/
var bGo;
bGo = document.getElementById("rearme");
bGo.addEventListener("click",arrancar);

/*Boton parar para parar la animación*/
var bStop;
bStop = document.getElementById("stop");
bStop.addEventListener("click", parar);

/*ComboBox paradas. Actualizar variables de las paradas*/
pos_origen = estadoParadaActual();
var selector_destino = document.getElementById("destino");
// selector_origen.addEventListener("change", actualizarPosOrigen);
selector_destino.addEventListener("change", actualizarPosDestino);
imgTranvia.addEventListener("animationend", listener,false);
//imgTranvia.className = "animacion";
imgTranvia.id =  "anim_tranvia1";

actualizarPosOrigen();
var posicionAutomatico = 0;
var posicionAutomaticoReversa = 6;

function ocultar(event){
    modo = " ";
    modo = event.target.value;
    console.log("modo " + modo);
    if(modo === "automatico"){
        cuadro = document.getElementById("control");
        console.log(cuadro + " cuadro");
        cuadro.style.display = "none";
        // No se para que es necesario esta linea de esta forma: 
        // cuadro.style.display = cuadro.value = "none";
        // Pero no hay ninguna diferencia entre las dos.
        console.log("desaparezco");
        varAuto = 0;
        automatico();
    }
    else if(modo === "manual"){
        varAuto = 1;
        console.log("aparezco");
        //cuadro.style.display= cuadro.value = "block";
        cuadro.style.display = "block";
    }
}

async function parar(){
	await fetch("datos.html", { body: "%22app%22.estado_parada_actual=3", headers: {"Content-Type": "application/x-www-form-urlencoded", }, method: "post" });
    console.log("paro el tranvia");
    imgTranvia.style.animationPlayState = "paused" ;
    if(typeof pos_destino !== 'undefined') {
        if(pos_destino !== "0") {
            botones[pos_destino - 1].style.fill = "red";
        }
    }
}


 function arrancar(){
    console.log("arranco la animacion");
    /*accedo al elemento css donde están las variables y cambio el valor 
    de la variable posorigen por una de las posiciones guardadas en el array_pos_paradas */
    imgTranvia.style.animationPlayState = "running" ;
    todosEnVacio();
    if(typeof pos_destino !== 'undefined') {
        if(pos_destino !== "0") {
            botones[pos_destino - 1].style.fill = "#FFD700";
            console.log(imgTranvia.style.animationPlayState);
        }
    }
 }

 
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
    /*Obtengo la parada de origen y la del destino para asegurar que no han seleccionado la misma en 
    origen y en destino*/
    /*Cambio las variables en el css para que la animacion se mueva de una parada a otra */
    document.querySelector(':root').style.setProperty("--posorigen",array_pos_paradas[pos_origen]);
    console.log("array"+array_pos_paradas[pos_origen]);
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

var datosRecibidos;
async function recibirDatos(){
    datosRecibidos = await fetch("datos.html").then((response) => response.json()).then((datos)=> {return datos } );
    pos_origen = estadoParadaActual();
    actualizarPosOrigen();
} 


function estadoMarchaParo(){
    let estadoMarPar = datosRecibidos['marcha'];
    return estadoMarPar;

}
function estadoDireccion(){
    let estadoDir = datosRecibidos['direccion'];
    return estadoDir;

}
function estadoVelocidad(){
    let estadoVel = datosRecibidos['velocidad'];
    return estadoVel;}

function automatico() {
    arrancarAutomatico();
}


function estadoParadaActual(){
    let estadoParAct = datosRecibidos['parada'];
    return estadoParAct;
}
function estadoMovimiento(){
    let estadoParAct = datosRecibidos['movimiento'];
    return estadoParAct;
}
async function arrancarAutomatico() {
    while (true) {
        
    for(let posicionAutomatico = 0; posicionAutomatico <=4;  posicionAutomatico++) {
        if(varAuto === 1) {
            todosEnVacio();
            break;
        }
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
        });
    
        let result = await promise;

        reiniciarAnimacion();
        console.log("animacion finalizada");
         
        todosEnVacio();
        
    }
    for(let posicionAutomatico = 5; posicionAutomatico >= 1; posicionAutomatico--) {
        if(varAuto === 1) {
            todosEnVacio();
            break;
        }
        imgTranvia.addEventListener("animationend", listener,false);
        document.querySelector(':root').style.setProperty("--posorigen",array_pos_paradas[posicionAutomatico]);
        document.querySelector(':root').style.setProperty("--posdestino",array_pos_paradas[posicionAutomatico - 1]);
        

        botones[posicionAutomatico].style.fill = "green";
        botones[posicionAutomatico - 1].style.fill = "#FFD700";

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Esperar"), 2000);
            imgTranvia.style.animationPlayState = "running" ; 
            console.log("arranco la animacion");
            //Modificar las variables del servidor
        });
        let result = await promise;

        reiniciarAnimacion();
        console.log("animacion finalizada");
            
        todosEnVacio();
    
        }
        if(varAuto === 1) {
            todosEnVacio();
            break;
        }
    }
}