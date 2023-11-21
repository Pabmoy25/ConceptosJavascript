//nombre, nivel, numPokedex, tipo, ataques

class Pokemon {
    //declarar propiedades privadas
    #nivel;
    constructor(
      nombreParam,
      nivelParam,
      numPokeDexParam,
      tipoParam,
      ataquesParam
    ) {
      //nombre propiedad = valor (se obtiene del metodo constructor ingresado por parametro);
      this.#nivel = nivelParam;
      this.nombre = nombreParam;
      this.numPokeDex = numPokeDexParam;
      this.tipo = tipoParam;
      this.ataques = ataquesParam;
      //propiedades por defecto
      this.estado = true;
    }
    //propiedades computadas get y set (se ven como metodos, pero son propiedades)
    get nivel() {
      return this.#nivel;
    }
  
    set nivel(nuevoNivel) {
      if (nuevoNivel >= 1 && nuevoNivel <= 100) {
        this.#nivel = nuevoNivel;
      } else {
        alert("El nivel debe ser mayor o igual a 1");
      }
    }
  
    //metodos
    mostrarDatos() {
      document.write(`<h2>Pokemon: ${this.nombre} </h2>
          <ul>
          <li>Nivel: ${this.nivel}</li>
          <li>Num pokedex: ${this.numPokeDex}</li>
          <li>Tipo: ${this.tipo}</li>
          <li>Ataques: ${this.ataques}</li>
          </ul>
          `);
    }
  }
  
  class PokemonLegendario extends Pokemon {
    constructor(
      nombreParam,
      nivelParam,
      numPokeDexParam,
      tipoParam,
      ataquesParam,
      ataquesEspecialesParam
    ) {
      //invocar al constructor de la clase padre
      super(nombreParam, nivelParam, numPokeDexParam, tipoParam, ataquesParam);
      this.ataquesEspeciales = ataquesEspecialesParam;
      this.rareza = "Unico";
    }
    //get y set
  
    //metodos
    // aqui sucede el polimorfismo
    mostrarDatos() {
      // super().mostrarDatos()
      document.write(`<h2>Pokemon: ${this.nombre} </h2>
          <ul>
          <li>Nivel: ${this.nivel}</li>
          <li>Num pokedex: ${this.numPokeDex}</li>
          <li>Tipo: ${this.tipo}</li>
          <li>Ataques: ${this.ataques}</li>
          <li>Ataques especiales: ${this.ataquesEspeciales}</li>
          <li>Rareza: ${this.rareza}</li>
          </ul>
          `);
    }
    
    //Este es un metodo nuevo
    mostrarDatosPokemonLegendario(){

    }
  }
  
  //crear o instanciar un objeto
  const bulbasaur = new Pokemon("Bulbasaur", 5, 1, "planta", [
    "hojitas",
    "latigo cepa",
    "placaje",
  ]);
  console.log(bulbasaur);
  document.write(`<h2>Pokemon: ${bulbasaur.nombre}</h2>`);
  document.write(`<p>Nivel: ${bulbasaur.nivel}</p>`);
  //modificar un valor con un setter
  bulbasaur.nivel = 7;
  document.write(`<p>Nivel: ${bulbasaur.nivel}</p>`);
  
  bulbasaur.mostrarDatos();
  
  const charmander = new Pokemon("Charmander", 3, 4, "fuego", [
    "arañazo",
    "bola de humo",
    "Ascuas",
  ]);
  
  charmander.mostrarDatos();
  
  const mewtwo = new PokemonLegendario(
    "Mewtwo",
    100,
    150,
    "psiquico",
    ["Confusión", "psicocorte"],
    ["Psico-Quiebre"]
  );
  
  mewtwo.mostrarDatos();