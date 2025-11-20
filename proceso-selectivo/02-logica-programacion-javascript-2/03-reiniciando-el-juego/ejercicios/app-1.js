let numeroSecreto = generaNumeroSecreto();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(`numeroSecreto: ${numeroSecreto}`)
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", "Acertaste el número")
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor")
        }else{
            asignarTextoElemento("p", "El número secreto es mayor")
        }
    }    
    return;
}

function generaNumeroSecreto(){
    return Math.floor(Math.random()*10+1);
}

// Asigna valor elemenetos mediante la función asignarTextoElemento()
asignarTextoElemento("H1", "Juego del número Secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");