// console.log('hola')

//  $(document).ready(function() {  // Codigo Procedural Procedimental --> OOP
//   // Event Listener
//   $('#roller button.add').on('click', function() { // Controlador
//     $('.dice').append('<div class="die">0</div>') // Vista
//   })

//   // Event listener
//   $('#roller button.roll').on('click', function() { // Controlador
//     $('.die').each(function(index, dieHtml) { // Controlador
//       var value = Math.floor((Math.random()*6)+1) // Model
//       $(dieHtml).text(value) // Vista
//     })
//   })
// })

$(document).ready(function(){

  var Controller = function(view, model) {
    this.view = view
    this.model = model
  }

  Controller.prototype.bindEvents = function() {
    console.log(this)
    $('#hola').on('click', this.view.paintDice)
    $('#roller button.add').on('click', this.view.paintDice)
    $('#roller button.roll').on('click', this.rollAllDices.bind(this))
  }

  Controller.prototype.run = function() {
    console.log('hola')
    this.bindEvents()
    this.view.paintDice()
  }

  Controller.prototype.rollAllDices = function() {
    var controller = this
    $('.die').each(function(index, dieHtml) { // Controlador
      controller.model.roll()
      controller.view.rollAllDices(dieHtml, controller.model.value)
    })
  }

  var Model = function() {
    this.value = 0
  }

  Model.prototype.roll = function() {
    this.value = Math.floor((Math.random()*6)+1) // Model
  }

  var View = function() {

  }

  View.prototype.paintDice = function() {
    console.log(this)
    $('.dice').append('<div class="die">0</div>')
  }

  View.prototype.rollAllDices =
  var view = new View()
  var model = new Model()
  var game = new Controller(view, model)
  game.run()
})
