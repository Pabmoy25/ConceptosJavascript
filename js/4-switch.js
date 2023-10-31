//operaciones validas consultar saldo, ingresar dinero y extraer dinero.
// if(opcion === 1){
//     document.write('Mostrar el saldo');
// }else if( opcion === 2){
//     document.write('Ingresar dinero');
// }else if(opcion === 3){
//     document.write('extraer dinero');
// }else{
//     document.write('Opción invalida');
// }
let saldo = 1000;

do {
  let opcion = prompt(
    "Seleccione una opción: 1- consultar saldo, 2- ingresar dinero, 3- extraer dinero"
  );
  console.log(opcion.toLowerCase());
  opcion = opcion.toLowerCase();

  switch (opcion) {
    case "consultar saldo":
    case "saldo":
    case "1":
      document.write(`<p>Su saldo es: $${saldo}</p>`);
      console.log(`<p>Su saldo es: $${saldo}</p>`);
      break;
    case "2":
      const deposito = parseFloat(
        prompt("Ingrese el monto que desea depositar")
      );
      //incrementar el saldo
      console.log(isNaN(deposito)); // true si no es un numero, da false si realmente es un numero
      //preguntar si deposito es un numero
      if (!isNaN(deposito) && deposito > 0) {
        saldo = saldo + deposito; // saldo += deposito;
        document.write(`Su saldo actual es: $${saldo}`);
        console.log(`Su saldo actual es: $${saldo}`);
      } else {
        alert(`Ingreso un monto invalido`);
      }
      break;
    case "3":
      const monto = parseFloat(prompt("Ingrese el monto que desea extraer"));
      if (!isNaN(monto) && monto > 0 && monto <= saldo) {
        saldo = saldo - monto; //saldo -= monto
        alert(`Retiro $${monto}, su saldo actual es $${saldo}`);
      } else {
        alert(`Ingreso un monto invalido`);
      }
      break;
    default:
      document.write("Opción invalida");
  }
} while (confirm("¿Desea realizar otra operación?"));
