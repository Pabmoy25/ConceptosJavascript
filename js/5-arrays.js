// declarar un array vacio

const alumnos = [];

// array con valores

const peliculas = ["Iroman 1", "El rey leon", "Harry Potter", "Blade Runner", 2012, true];

// Mostrar un array

console.log (peliculas);
document.write (peliculas);
document.write (`<br>`+ peliculas[0]);

// Cantidad de caracteres en un array
document.write (`<p>Cantidad de elementos: ${peliculas.length}</p>`);
document.write (`<p>Ultimo elementos del array: ${peliculas[peliculas.length - 1]}</p>`);
document.write (`<p>Consulto un elemento del array: ${peliculas[20]}</p>`);

document.write (`<h2>Lista de peliculas</h2>`)
document.write (`<ul>`)
for (let i = 0; i < peliculas.length; i++){
document.write (`<li>${peliculas[i]}</li>`)
}
document.write (`</ul>`)