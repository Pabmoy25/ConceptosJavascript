//declarar un array vacio

const alumnos = [];

//array con valores

const peliculas = ['Ironman 1', 'El rey leon', 'harry Potter', 'BladeRunner', 2023, true];

function mostrarPeliculas(titulo){
    document.write(`<h2>Lista de peliculas ${titulo}</h2>`)
    document.write(`<ul>`)
    for(let i = 0; i < peliculas.length; i++){
        document.write(`<li>${peliculas[i]}</li>`)
    }
    document.write(`</ul>`)
}

//mostrar un array
console.log(peliculas);
document.write(peliculas);
document.write('<br>'+ peliculas[0]);
//cantidad de caracteres en un array
document.write(`<p>Cantidad de elementos: ${peliculas.length}</p>`);
document.write(`<p>Ultimo elemento del array: ${peliculas[peliculas.length - 1]}</p>`);
document.write(`<p>Consulto un elemento del array: ${peliculas[20]}</p>`);

mostrarPeliculas('');

//agregar elementos
peliculas.unshift('El grinch','mi pobre angelito');
mostrarPeliculas(`+ 2 elementos (${peliculas.length})`);

peliculas.splice(5,0, 'martes 13 🔪');
mostrarPeliculas(`+ 1 elementos (${peliculas.length})`)

peliculas.push('gladiador');
mostrarPeliculas(`+ 1 elementos (${peliculas.length})</h2>`)

//modificar los elementos del array
peliculas[7] = 'El padrino 1';
mostrarPeliculas(`modificamos un elemento (${peliculas.length})`)

//borrar elementos del array
peliculas.shift();
mostrarPeliculas(`- un elemento (${peliculas.length})`)

peliculas.splice(7,1);
// peliculas.splice(2,3);
// peliculas.splice(2); //borro todos los elementos desde la posicion 2

document.write(`<h2>Lista de peliculas - un elemento (${peliculas.length})</h2>`)
document.write(`</ul>`)
for(let i = 0; i < peliculas.length; i++){
        document.write(`<li>${peliculas[i]}</li>`)
    }
    document.write(`</ul>`)

peliculas.pop();


document.write(`<h2>Lista de peliculas - un elemento (${peliculas.length})</h2>`)
document.write(`</ul>`)
for(let i = 0; i < peliculas.length; i++){
        document.write(`<li>${peliculas[i]}</li>`)
    }
    document.write(`</ul>`)
    