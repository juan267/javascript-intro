// 1. Todo es un llamado a un metodo en ruby
// 2. Todos los objectos actuan como un hash
// 3. "hola #{name}" vs "hola " + name
// 4. == vs ===
// 5. deep equality en ruby vs object superficial
// 6. no argument errors o arity
// 7. explicit returns
// 8. las funciones son ciudadanos de primer nivel
// 9. looping en arrays vs looping en objectos
// 10. como los arreglos son objetos
// 11. "this", "call", "apply"
// 12. clases vs funciones contructoras




name = 'juan'
uppercase_name = name.toUpperCase
uppercase_name = name.toUpperCase()

// Funciones son ciudadanos de primer nivel
if(true) {
  return 'truthy'
} else if(condition) {

} else {
  return 'falsy'
}

Math.pow(3)

arr = [4,5,6]

arr.map(function(n, i, array){
  return n * 2
})

arr.forEach(function(n, i, array){
  console.log(n)
})

arr.reduce(function(accu, n){
  return accu +n
}, 0)

for(var i = 0; i < 100; i++) {
  console.log(i)
}


function sum(n1, n2) {
  return n1 + n2
}

function sayhi(name) {
  return name + 'como estas'
}

function hi2(name, name2) {
  return name + ' y ' + name2 + ' estan matando perritos'
}

function makerHello(callback, name1, name2) {
  namePhrase = callback(name1, name2)
  return "Maker" + namePhrase
}

makerHello(hi2, 'Nicolas', 'Miguel')


//  Objetos Literales


// Funciones Constructoras

function Dog(name, age, color) {

  this.name = name
  this.age = age
  this.color = color

  this.bark = function() {
    console.log(`Guuuauuu ${this.name}`)
  }
}


var ozu = new Dog('ozu', 5, 'black')
var rex = new Dog('rex', 6, 'Yellow')

var ozu = {
  name: 'Ozu',
  bark: function() {
    console.log("Wau")
  }
}

var rex = {
  name: 'Rex',
  bark: function() {
    console.log("Wau")
  }
}


ozu.name
ozu.name = 'pepe'
ozu.age = 8
ozu.bark = function() {
  console.log("Wau")
}

ozu.bark()

var ozu = new Dog('ozu', 5, 'black')
var moshito = Dog('moshi', 7, 'white')

// This
1. Default: this es el contexto global window
2. new: this es un {}
3. Sobre un objeto: this es el objeto
4. call, apply, bind
