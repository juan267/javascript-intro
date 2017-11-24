var student = {
  name: 'juan',
  age: 342,
  '5': 34321
}

var name = student['name']
var name = student.name
var name = student.name = 'NUEVO nombre'
student['height'] = '546'


students = ['s1', 's2', 's3']

for (var i = 0; i < students.length; i++) {
  console.log(students[i])
}

Las funciones son ciudadanos de primer nivel

var JuanforEach = function(pepito, array){
  for (var i = 0; i < array.length; i++) {
    pepito(array[i], i)
  }
}

JuanforEach(function(student, index){
  console.log(student)
}, students)

students.forEach(function(student){
  console.log(student)
})

students.map(function(student){
  console.log(student)
})


function sayHi(name1, name2) {
  return `soy ${name1} y me encuntro con ${name2}`
}

function sayHi(...names) {
  return `soy ${names[0]} y me encuntro con ${names[1]}`
}

function createMessage(callback, names) {
  var message = callback(...names)
  return `Hola ${message}`
}

createMessage(sayHi, ['pepito', 'fasf'])















