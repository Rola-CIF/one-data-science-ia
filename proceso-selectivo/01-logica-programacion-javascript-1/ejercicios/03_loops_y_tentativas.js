/*
Hemos llegado a otra lista de actividades (no obligatorias) para que practiques y
refuerces aún más tu aprendizaje. ¿Vamos a hacerlo? Desafíos:
*/
// 1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;
while (contador <= 10) {
console.log(contador);
contador++;
}

// 2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
contador = 10;
while (contador >= 0) {
console.log(contador);
contador--;
}

// 3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la 
// consola del navegador.
let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");
while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}

// 4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' 
// en la consola del navegador.
numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");;
contador = 0;
while (contador <= numeroMaximo) {
console.log(contador);
contador++
}

/*
Cuando escribimos programas en JavaScript, a menudo nos encontramos con la necesidad de tomar 
decisiones basadas en condiciones. Es aquí donde los operadores lógicos entran en escena y nos ayudan 
a crear una lógica sólida y eficaz.

A continuación, vamos a explorar los operadores lógicos de una manera simple y fácil de entender. 
Tendremos ejemplos claros para ilustrar su funcionamiento.

AND (&&)

El operador AND, representado por el símbolo "&&", se utiliza para combinar dos condiciones y evaluar
si ambas son verdaderas. Si ambas condiciones son verdaderas, el resultado será... verdadero. 
De lo contrario, lógicamente será falso. Por ejemplo:
*/
let edad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}

/*
OR( | | )

El operador OR, representado por los símbolos "||", se utiliza para verificar si al menos una 
de las condiciones es verdadera. Si una de las condiciones es verdadera, el resultado será verdadero. 
Si ambas son falsas, el resultado será falso. Aquí tienes un ejemplo: let tieneManzana = false; 
let tieneBanana = true;
*/
// si tiene manzana o tiene banama…
if (tieneManzana|| tieneBanana) {
  console.log("Tienes frutas!");
} else {
  console.log("No tienes frutas.");
}