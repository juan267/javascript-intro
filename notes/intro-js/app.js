console.log("Hola js")


// Las funciones son ciudadanos de primer nivel

// Function expresion
function hola() {
   console.log('hola')
}

// Function declaration
var hola = function() {
  console.log('hola2')
}

var sayHi = function(name) {
  return `Hola ${name}`
}




// imperativo
for (var i = 0; i < names.length; i++) {
  console.log(names[i])
}

names.each do |name|
  puts name
end

names.forEach(function(name){
  console.log(name)
})

names = ["hola", 'hola2', 'hola3', 'hola4']

var myMap = function(array, callback) {
  var result = []
  for (var i = 0 ; i < array.length; i++) {
    result.push(callback(array[i]))
  }
  return result
}

myMap(names, function(){return name + "soy un callback"})

var callback = funtion(name){
  return name + "blah"
}

names.map(function(name){
  return name + "blah"
})


// Funciones constructoras
function Dog (name, age, breed) {
  this.name = name
  this.age = age
  this.breed = breed
  this.bark = function() {
    console.log("Woof")
  }
}



ozu = new Dog('ozu', 34, 'bulldog')
ozu = Dog('ozu', 34, 'bulldog')
ozu = Dog('ozu', 34, 'bulldog')
ozu = Dog('ozu', 34, 'bulldog')
ozu = Dog('ozu', 34, 'bulldog')






