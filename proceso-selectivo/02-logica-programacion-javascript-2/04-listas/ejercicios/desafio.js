/*Saber cómo usar las funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. 
Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de desafíos (no obligatorios) centrados en la práctica para mejorar aún más tu 
experiencia de aprendizaje. ¡Vamos a practicar entonces!

Desafíos
1. Crea una lista vacía llamada "listaGenerica".*/
let listaGenerica = [];

/*
2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 
'C++', 'Kotlin' y 'Python'.*/
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementosDeUnaLista(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}

mostrarElementosDeUnaLista(lenguagesDeProgramacion);

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarElementosDeUnaListaInversa(lista) {
  for (let i = lista.length - 1; i >= 0; i--) {
    console.log(lista[i]);
  }
}

mostrarElementosDeUnaListaInversa(lenguagesDeProgramacion);

//6. Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(numeros);
console.log("Promedio:", promedio);

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log("Número mayor:", mayor);
  console.log("Número menor:", menor);
}

numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log("Suma:", suma);

/*
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no
existe en la lista.*/
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

numeros = [15, 8, 25, 5, 12];
let indice = encontrarIndiceElemento(numeros, 5);
console.log("indice:", indice);

//10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2){
    resultado = [];
    for (let i = 0; i < lista1.length; i++) {
        resultado.push(lista1[i] + lista2[i]);
    }
    return resultado;
}

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
resultado = sumarListas(lista1, lista2);
console.log("Resultado de la suma de dos listas", resultado);  

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}

const lista = [2, 3, 4];
resultado = cuadradoLista(lista);
console.log("El cuadrado de la lista: ", resultado);  