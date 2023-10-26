// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

// 2,3,5,7

const numero = parseInt (prompt("Ingrese un número"));

if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !== 0){
    document.write ("Es número ingresado no es divisible por 2, ni por 3, ni por 5, ni por 7")
}

if (numero % 2 === 0){
    document.write ("Es divisible por 2. ")
}
if (numero % 3 === 0){
    document.write ("Es divisible por 3. ")
}
if (numero % 5 === 0){
    document.write ("Es divisible por 5. ")
}
if (numero % 7 === 0){
    document.write ("Es divisible por 7. ")
}
