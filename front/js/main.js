var lugar = 1;// Esta variable es para hacer pruebas mas sin embargo se necesita
//mediante siemens obtener los valores por las variables
var aDondeVa = 6; // Lo mismo aplica esto a la anterior variable

const arrayLuces = document.querySelectorAll(".parada");
var cbModo = document.getElementById("cbModo");
var cbParadas = document.getElementById("cbParadas");

function todasEnRojo() {
    for(let luz of arrayLuces) {
        luz.style.fill = "red";
    }
}

function automaticoModo() {
    todasEnRojo();

switch(lugar) {
    case 1: {
        arrayLuces[0].style.fill = "green";
        break;
    }
    case 2: {
        arrayLuces[1].style.fill = "green";
        break;
    }
    case 3: {
        arrayLuces[2].style.fill = "green";
        break;
    }
    case 4: {
        arrayLuces[3].style.fill = "green";
        break;
    }
    case 5: {
        arrayLuces[4].style.fill = "green";
        break;
    }
    case 6: {
        arrayLuces[5].style.fill = "green";
        break;
    }
    default: {
        alert("Algo salio mal xd");
    }
}

switch(aDondeVa) {
    case 1: {
        arrayLuces[0].style.fill = "yellow";
        break;
    }
    case 2: {
        arrayLuces[1].style.fill = "yellow";
        break;
    }
    case 3: {
        arrayLuces[2].style.fill = "yellow";
        break;
    }
    case 4: {
        arrayLuces[3].style.fill = "yellow";
        break;
    }
    case 5: {
        arrayLuces[4].style.fill = "yellow";
        break;
    }
    case 6: {
        arrayLuces[5].style.fill = "yellow";
        break;
    }
    default: {
        alert("Algo salio mal xd");
    }
}
}

var lugarManual = cbParadas.selectedIndex;

function desplazar() {
    lugarManual = lugarManual + 1;
}

function manualModo() {
    //alert("Entro");
    todasEnRojo();

    switch(lugarManual) {
        case 0: {
            arrayLuces[0].style.fill = "green";
            break;
        }
        case 1: {
            arrayLuces[1].style.fill = "green";
            break;
        }
        case 2: {
            arrayLuces[2].style.fill = "green";
            break;
        }
        case 3: {
            arrayLuces[3].style.fill = "green";
            break;
        }
        case 4: {
            arrayLuces[4].style.fill = "green";
            break;
        }
        case 5: {
            arrayLuces[5].style.fill = "green";
            break;
        }
        default: {
            alert("Algo salio mal xd");
        }
    }
    if(lugar !== lugarManual) {
        desplazar();
    }
}

todasEnRojo();

if(cbModo.options[cbModo.selectedIndex].value.toLowerCase() === "manual") {
    //alert("Manuel");
    setInterval(manualModo, 1000);
} else if(cbModo.options[cbModo.selectedIndex].value.toLowerCase() === "automatico") {
    //alert("Automatico");
    setInterval(automaticoModo, 1000);
}

cbModo.addEventListener('change', function() {
    if(cbModo.options[cbModo.selectedIndex].value.toLowerCase() === "manual") {
        //alert("Manuel");

    } else if(cbModo.options[cbModo.selectedIndex].value.toLowerCase() === "automatico") {
        //alert("Automatico");
        setInterval(automaticoModo, 1000);
    }
        
});