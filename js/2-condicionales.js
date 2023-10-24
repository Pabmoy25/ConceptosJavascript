/*  if(condicion logica){
codigo a ejecutar si se cumple la condicion logica
}
 */

// Ejercicio 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

/*  let numero1 = parseInt (prompt ("ingrese un primer numero"));
let numero2 = parseInt (prompt ("ingrese un segundo numero"));

if(numero1 > numero2) {
    console.log ("La variable numero 1 es mayor a la variable 2");
}*/

// Ejercicio 6.- 

const numero1 = parseInt (prompt ("ingrese un primer numero"));
const numero2 = parseInt (prompt ("ingrese un segundo numero"));

if (numero1 > numero2) {
    console.log ("El numero " +numero1+" es mayor que el numero "+numero2);
    } else {
        if (numero2 > numero1) {
        console.log ("El numero " +numero2+" es mayor que el numero "+numero1);
    } else {
        console.log ("Los numeros ingresados son iguales");
    }
    }
