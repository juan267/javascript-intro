// Funciones

- Declaracion
- Invocacion
- Parametros
- Pueden ser llamadas recursivamente
- Funciones anonimas


// Function declaration

// rest y spread
function sum (a,b, ...rest) {
  console.log(rest)
  return a + b
}

// Esto no es valido
function(a,b) {
  return a + b
}

// Function Expression

var sum = function(a,b) {

}

function sum (a,b) {
  return a + b
}

// Funciones de alto nivel Higer order function


function things_to_eat(callback, food) {

}


// Un callback es una funcion que se pasa como argumento de otra funcion


// Scope
- Functional scope

function hola(name) {
  varsaludo = name + 'como estas'
  var chao = function() {
    var  bye = saludo + 'Hasta nunca'
  }
  return bye
}


- variables locale y globales

// This

- new
- call y apply
- sobre un objeto
- Default (Simple call)

// OOP
- Funciones constructoras
- Metodos
- Herencia
- Prototype chain


// Como funciona this
// Student('pepito', 23432) --> Window
// student = new Student('pepito', 23432) --> this es un {} nuevo
// student.speak('pepito', 23432) --> es el objeto sobre el que se invoco el metodo
// var pedro = {}
// Student.call(pedro), Student.apply(pedro) --> aca this es pedro


// Funcion constructora
// OOP en javascript


function View() {

}

function Controller(model, view) {
  this.model = model
  this.view = view
}

Controller.prototype.listenToRollDie = function() {

}

View.prototype.change_die_value = function(dieHtml) {

}

function Person(race, weight) {
  this.alive = true
  this.race = race
}


Person.prototype.eat = function(food) {
  console.log(`Much much estoy comiendo ${food} y me llamo ${this.name}`)
}

function Person(race, weight) {
  this.alive = true
  this.race = race
}

function Student(name, age, race, weight) {
  // this = {}.constructor = Student
  Person.call(this, race, weight)
  // this = {alive: true, race: 'hispanic'}
  this.name = name
  this.age = age
  // {alive: true, race: 'hispanic', name: 'juan', age: 5234}
}

juan = new Student('juan', 43, 'hispanic', 342)
// juan = {}

// Student()
// Student.call(juan)





Student.prototype = Object.create(Person.prototype)

Student.prototype.speak = function() {
  console.log(`Hola soy ${this.name}`)
}

// Prototype chain

juan = new Student('juan', 43)
juan.speak()
juan.eat()



// juan.speak()


function sum(n1, n2) {
  return n1 + n2
}


function multiply(callback, n1,n2, n3) {
  return callback(n1, n2) * n3
}

multiply(sum, 1,2,3) === 9

function myMap(fun, arr, num) {
  var result = []
  arr.forEach(function(element) {
    result.push(fun(element, num))
  })
  return result
}


myMap(function(element, num){
  return element * num
}, [1,2,3], 4)




//
