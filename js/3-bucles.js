// While
/* 
While (consicion logica){
    aqui va todo el codigo que quiero repetrir varias veces
    agregar un codigo para cambiar la condicion logica
} 
*/

/*  let renglon = 1;

while (renglon <= 10){
document.write (`<p>Renglon número ${renglon}</p>` )
renglon++// renglon = renglon + 1
}
*/


// do while (hacer mientras)
let renglon = 1;

do {
    document.write (`<p>Renglon número ${renglon}</p>`);
    renglon++;
} while (renglon <=10)


// for

// for (iniciar una variable; condicion logica; incrementar o decrementar una variable)

for(let contador=5; contador <=0; contador--) {
    document.write (`<p>Cuenta regresiva ${contador}</p>` )
}





