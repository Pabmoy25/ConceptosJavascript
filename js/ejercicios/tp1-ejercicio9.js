// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

let frase = prompt("Ingrese una frase");
console.log(frase.length);
console.log(frase.charAt(0));
frase = frase.toLocaleLowerCase();

// Hola mundo
// Escriba un programa

for (let i = 0; i < frase.length; i++) {
  if (
    frase.charAt(i) === "a" ||
    frase.charAt(i) === "e" ||
    frase.charAt(i) === "i" ||
    frase.charAt(i) === "o" ||
    frase.charAt(i) === "u"
  ) {
    document.write(frase.charAt(i));
  }
}

