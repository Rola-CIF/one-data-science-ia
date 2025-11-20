function calcularDobleTriple(numero){
    return numero * 2 + " es el doble y " + numero * 3 + " es el triple.";
}

const numero = 5;
const resultado = calcularDobleTriple(numero);
console.log(resultado);

function calcularDoble(numero){
    return numero * 2;
}

function calcularTriple(numero){
    return numero * 3;
}

const doble = calcularDoble(numero);
const triple = calcularTriple(numero);
console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);

function calcularDobleTriple(numero){
    const resultado = {};
    resultado.doble = numero * 2;
    resultado.triple = numero * 3;
    return resultado;
}
let result = calcularDobleTriple(numero);
console.log(`El doble de ${numero} es ${result.doble} y el triple es ${result.triple}.`);