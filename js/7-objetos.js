//notacion literal

const pelicula = {
    //propiedades -> clave : valor
    titulo: 'La mascara',
    anio : 1994,
    duracion: '1hr 40 min',
    genero: ['comedia', 'fantasia'],
    //metodos
    iniciarPeli: function (){
        console.log (this);
        document.write(`<p>...Comenzando la reproducción de ${this.titulo}</p>`)
    },
    pausa: () =>{
    // console.log (this); no puedo usar this en funcion en forma de flecha si voy a usar propiedad de un objeto
        document.write(`<p>Se pauso la pelicula</p>`)
    }
}

console.log(this);

//mostrar un objeto
console.log(pelicula);
document.write(pelicula);
document.write(`<h1>Pelicula: ${pelicula.titulo}</h1>`)
document.write(`<p>Duración: ${pelicula.duracion}</p>`)
document.write(`<p>Año de estreno: ${pelicula['anio']}</p>`)
document.write(`<p>Duración: ${pelicula.duracio}</p>`)

//agregar una nueva propiedad a un objeto
pelicula.estado = true;

console.log(pelicula);

//modificar una propiedad del objeto
pelicula.estado = false;

console.log(pelicula);

//agregamos un nuevo genero
pelicula.genero.push('Aventura');
console.log(pelicula.genero)

/* Desde acá todo es nuevo */

//borrar la propiedad de un objeto
delete pelicula.genero;
console.log(pelicula);

// Invocar o llamar el metodo de un objeto

pelicula.iniciarPeli();
pelicula.pausa();