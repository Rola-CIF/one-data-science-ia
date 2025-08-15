let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDeUsuario === numeroSecreto){
    console.log(`intentos: ${intentos}`)
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos == 1) ? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled")
    }else{
        // El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor")
        }else{
            asignarTextoElemento("p", "El número secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }    
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generaNumeroSecreto(){
    return Math.floor(Math.random()*10+1);
}

function condicionesIniciales(){
    // Asigna valor elemenetos mediante la función asignarTextoElemento()
    asignarTextoElemento("H1", "Juego del número Secreto");
    asignarTextoElemento("p", "Indica un número del 1 al 10");
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
    console.log(`numeroSecreto: ${numeroSecreto}`)
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();

