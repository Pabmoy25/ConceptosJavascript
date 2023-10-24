//Esto es un comentario en una linea

/* Esto es un comentarios en 
ultibples
lineas */

// Declarar una variable (Var - let - const)

let anioActual = 2023;
const url = "https://universe.rollingcodeschool.com";

// Mostrar mensajes

console.log("Este es un mensaje por consola");
console.log (anioActual);
console.log (url)
console.log ("Año: "+ (anioActual + 2));

// Modificar el contenido de una variable
anioActual = 2024;
console.log (anioActual);

// url = "otro valor";
console.log (url);

document.write ("<h1>Prueba de <br> titulo</h1>");
document.write ("Año: "+ anioActual + "<br>");
document.write ("Año: "+ anioActual);

// ventanas emergentes
alert ("Esta es una prueba de ventana emergente");

// graba una variable, siempre texto
let color = prompt ("Ingrese un color");
console.log (color);

// Solicitario a un usuario un numero, y al numero indicado por el usuario multiplicarlo x 15
let numeroSeleccionado = parseInt (prompt ("Ingresar un numero de 1 al 100"));
console.log(numeroSeleccionado);
console.log(numeroSeleccionado) + 15;

// parseInt ("10") devuelve 10
// parseFloat ("10,5") devuelve 10.5