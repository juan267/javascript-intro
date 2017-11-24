//  OOP

function Cat(args) {
  this.name = args.name
  this.age = args.age
}

Cat.prototype.speak = function() {
  console.log(`Miauu ${this.name}`)
}

dali.speak()

dali = new Cat({name: 'dali', age: 0})
dali.color = 'gray'
dali.cry = function() {
  console.log('Auu')
}

antonia = new Cat({name: 'antonia', age: 3})

one = {
  one: 1
}

two = Object.create(one)
two.two = 2

three = Object.create(two)
three.three = 3

three.one

function Animal(name) {
  this.name = name
}

function Mammal(name) {
  Animal.call(this, name)
  this.drinkMilk = true
}

Mammal.prototype = Object.create(Animal.prototype)

Animal.prototype.speak = function () {
  console.log(`Hola soy ${this.name}`)
};


Mammal.prototype.muu = function() {
  console.log('Muuuuu')
}


perro = new Animal('ozu')
vaca = new Mammal('vaca')
{drinkMilk: true}
vaca.muu()
vaca.speak()


// Cuando hacemos New lo que esta pasando es lo siguiente
function newAnimal(name) {
}

pepito = newAnimal('pepito')
