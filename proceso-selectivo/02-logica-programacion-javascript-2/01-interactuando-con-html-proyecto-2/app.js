let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

function alertaClick(){
    alert("El botón fue clicado")
}

function preguntaCiudadDeBrasil(){
    ciudad = prompt("Indícame una ciudad de Brasil:");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function gustoAlLenguaje(){
    alert("Yo amo JS");
}

function calculaSuma(){
    alert("Suma de dos números")
    num1 = parseInt(prompt("Ingrese el primer número:"));
    num2 = parseInt(prompt("Ingrese el segundo número:"));
    alert(`El resulatdo de la suma es: ${num1 + num2}`);
}