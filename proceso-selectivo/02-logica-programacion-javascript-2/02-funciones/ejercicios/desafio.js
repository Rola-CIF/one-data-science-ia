/*
Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. 
Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de 
aprendizaje. ¡Así que vamos a practicar!

Desafíos:
1. Crear una función que muestre "¡Hola, mundo!" en la consola.*/
function saludo() {
  console.log("¡Hola, mundo!");
}
saludo();

//2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function muestraNombre(nombre) {
  console.log(`Hola ${nombre}`);
}
muestraNombre("CIF rola");

//3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function calcularDoble(numero) {
  return numero * 2;
}
let resultado = calcularDoble(13);
console.log(resultado);

//4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calculaPromedio(a, b, c) {
  return (a + b + c) / 3;
}
let promedio = calculaPromedio(13, 9, 77);
console.log(promedio);

//5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function calculaNumeroMayor(a, b) {
  return a > b ? a : b;
}
let numeroMayor = calculaNumeroMayor(13, 9);
console.log(numeroMayor);

//6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function calculaCuadrado(numero) {
  return numero * numero;
}
resultado = calculaCuadrado(2);
console.log(resultado);