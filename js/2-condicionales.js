/*  if(condicion logica){
codigo a ejecutar si se cumple la condicion logica
}
 */

/*  let numero1 = parseInt (prompt ("ingrese un primer numero"));
let numero2 = parseInt (prompt ("ingrese un segundo numero"));

if(numero1 > numero2) {
    console.log ("La variable numero 1 es mayor a la variable 2");
}*/

// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const numero1 = parseInt(prompt("ingrese un primer numero"));
const numero2 = parseInt(prompt("ingrese un segundo numero"));

if (numero1 > numero2) {
  document.write("El número " + numero1 + " es mayor que el número " + numero2);
} else if (numero2 > numero1) {
  document.write("El número " + numero2 + " es mayor que el número " + numero1);
} else {
  document.write("Los números ingresados son iguales ("+numero2+")");
}


