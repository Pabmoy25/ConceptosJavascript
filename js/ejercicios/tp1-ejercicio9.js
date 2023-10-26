// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

let frase = prompt("Ingrese una frase");
console.log(frase.length);
console.log(frase.charAt(0));

//hola mundo
if(frase.charAt(0)==="a" || frase.charAt(0)==="e" || frase.charAt(0)==="i" ||
frase.charAt(0)==="o"|| frase.charAt(0)==="u"){
document.write(frase.charAt(0))
}
