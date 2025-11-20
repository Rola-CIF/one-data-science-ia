/*
Haga lo que hicimos en aula: console.log
El console.log es una función muy importante en lenguajes de programación, especialmente cuando se trabaja con JavaScript. 
Su función principal es imprimir mensajes en la consola del entorno de desarrollo, lo que permite probar información relevante 
durante la ejecución de un programa.

Opinión del instructor

En el siguiente código, tenemos una sugerencia para agregar el comando console.log para verificar si los valores se están asignando 
correctamente a las variables y si las condiciones se están evaluando como se espera. Echa un vistazo:
Ahora, incluya comandos console.log en diferentes partes del código para verificar el flujo del programa, los valores de las 
variables y otra información relevante durante la fase de desarrollo.
*/

alert('Bienvenido al juego del número secreto');

let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}


/*
Programar requiere práctica. Hemos creado una lista adicional de actividades (no obligatorias) para que practiques y 
refuerces aún más tu aprendizaje.

¿Listo para practicar?

Desafíos:
1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra 
"¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".
*/
let diaDeLaSemana = prompt('¿Qué día de la semana es?');
if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

/*
2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta 
informativa.
*/

let numero = prompt('Escribe un número positivo o negativo');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}

/*
3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra 
"¡Enhorabuena, has ganado!". En caso contrario, muestra "Inténtalo de nuevo para ganar."
*/

let puntuacion = 105;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}

/*
4. Crea un mensaje que informe al usuario sobre el saldo de la cuenta, utilizando un template 
string para incluir el valor del saldo.
*/

let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo es de ${saldoCuenta}.`);

/*
5. Pide al usuario que ingrese su nombre usando prompt. Luego, muestra una alerta de bienvenida 
utilizando ese nombre.
*/
let nombre = prompt('Por favor, ingresa tu nombre');
alert(`¡Bienvenido, ${nombre}!`);





