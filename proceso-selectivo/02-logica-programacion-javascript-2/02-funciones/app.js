let numeroSecreto = generaNumeroSecreto();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(typeof(numeroDeUsuario));
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario == numeroSecreto);
    return;
}

function generaNumeroSecreto(){
    return Math.floor(Math.random()*10+1);
}

// Asigna valor elemenetos mediante la función asignarTextoElemento()
asignarTextoElemento("H1", "Juego del número Secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");