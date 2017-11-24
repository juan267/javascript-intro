// OOP En Javascript

//------------------------------------------------------------------------------------------------------------------
// TU CODIGO: Crea un Objeto literal "garden", y funcion constuctora y prototipos para Flower aca.
//------------------------------------------------------------------------------------------------------------------

var Flower = function(name, color) {
  this.name = name
  this.color = color
}

// La navaja de occam Heuristico --> La solucion mas sencilla es la mejor
Flower.prototype.identify = function() {
  return `I am an ${this.name} and I am ${this.color}.`
}

var garden = {
  name: "Kula Botanical Garden",
  location: "Makawao",
  plant: function(flowers) {
    this.flowers = flowers
  },
  selectByColor: function(color) {
    return this.flowers.filter(function(flower){
      return flower.color === color
    })
  },
  selectByName: function(name) {
    return this.flowers.filter(function(flower){
      return flower.name === name
    })
  }
}


//------------------------------------------------------------------------------------------------------------------
// PRUEBAS: **NO** Cambies nada debajo de esta linea. Tu trabajo es implementar el codigo arriba para hacer que estas pruebas pasen.
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}

function createFlowers() {
  var flowers = [
    new Flower("Aster", "red"),
    new Flower("Bird of Paradise", "orange"),
    new Flower("Daffodil", "yellow"),
    new Flower("Gladiolus", "pink"),
    new Flower("Iris", "purple"),
    new Flower("Narcissus", "white"),
    new Flower("Chrysanthemum", "yellow"),
  ];
  return flowers
}


garden.plant(createFlowers());


assert(
  garden.name === "Kula Botanical Garden", "the garden has a name"
);
assert(
  garden.location === "Makawao", "the garden is located in Maui"
);
assert(
  garden.selectByColor("yellow").length === 2, "the garden should have 2 yellow flowers"
);
assert(
  garden.selectByName("Iris").length === 1, "the garden should have 1 Iris"
);
assert(
  createFlowers()[0].identify() === "I am an Aster and I am red.", "asters are red"
);
assert(
  createFlowers()[2].name === "Daffodil", "expected 'Daffodil'"
);
assert(
  createFlowers()[0].identify === createFlowers()[5].identify, "only one implementation of the identify() function should exist"
);

console.log("Terminaste todo funciona");
