//funciones declarativas
//funcion sin parametro
function saludar(){
    //todo el codigo que sabe hacer la funcion
    document.write(`<p>Hola mundo</p>`);
}

//funcion con parametros
function saludoCompleto(nombreIngresado, apellidoIngresado){
    const nombreCompleto = nombreIngresado +' '+apellidoIngresado;
    console.log(nombreCompleto);
    document.write(`<p>Hola ${nombreIngresado}, ${apellidoIngresado} que tengas un buen día.</p>`);
}

//funciones que retornan un valor
// function multiplicar(numero1, numero2){
//     const resultado = numero1 * numero2;
//     console.log(resultado);
//     return resultado;
// }

const multiplicar = (numero1, numero2) =>{
    const resultado = numero1 * numero2;
    console.log(resultado);
    return resultado;
}



//llamar o invocar a un funcion
saludar();

saludoCompleto('Tony', 'Stark');

const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');

saludoCompleto(nombre, apellido);
saludoCompleto();



