alert("Juego Acierta al número secreto")
let numeroLimite = prompt("Me indicas el número límite del juego:");
let limiteMaximosIntentos = prompt("Me indicas el número de máximos intentos:");
let numeroSecreto = Math.floor(Math.random()*numeroLimite)+1;
let numeroUsuario = 0;
let intentos = 1;

while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroLimite} por favor:`));
    console.log(numeroUsuario);
    if(numeroUsuario == numeroSecreto){
        alert(`¡You Win!, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`)
    } else {
        if(numeroUsuario > numeroSecreto){
            alert("El número sercreto es menor")
        } else{
            alert("El número secreto es mayor")
        }
        if(intentos >= limiteMaximosIntentos){
            alert(`Has completado tus ${intentos} intentos. ¡GAME OVER!`);
            break;
        }
        intentos++;        
    }
}
