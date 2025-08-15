let numeroSecreto = generaNumeroSecreto();
let intentos = 1;
console.log(`numeroSecreto: ${numeroSecreto}`)
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDeUsuario === numeroSecreto){
    console.log(`intentos: ${intentos}`)
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos == 1) ? "vez" : "veces"}`)
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor")
        }else{
            asignarTextoElemento("p", "El número secreto es mayor")
        }
        intentos++;
    }    
    return;
}

function generaNumeroSecreto(){
    return Math.floor(Math.random()*10+1);
}

// Asigna valor elemenetos mediante la función asignarTextoElemento()
asignarTextoElemento("H1", "Juego del número Secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");