// $(document).ready(function() {  // Codigo Procedural Procedimental --> OOP
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

$(document).ready(function() {

  var Controller = function(die, view) {
    this.die = die
    this.view = view
  }



  Controller.prototype = {
    addListeners: function() {
      $('#roller button.add').on('click', this.view.paintDice) // Cuando se de un click sobre add quiero que pase View.prototype.paintDice()

      $('#roller button.roll').on('click', this.rollAllDices.bind(this)) // Cuando se de un click sobre add quiero que por cada dado el model me un nuevo Die.prototype.roll() value y luego llamar View.prototype.paintDievalue()
    }
  }

  Controller.prototype.rollAllDices = function(){
    var dices = this.view.getAllDicesFromDom()
    dices.forEach(function(dice){
      this.die.roll()
      this.view.paintDieValue(dice, this.die.value)
    }.bind(this))
  }



// View ///////////////////////////////////////////////////
  var View = function() {

  }

  View.prototype = {
    paintDice: function() {
      $('.dice').append('<div class="die">1</div>')
    },
    paintDieValue: function(dieElement, newValue) {
      $(dieElement).text(newValue)
    },
    getAllDicesFromDom: function() {
      return document.querySelectorAll('.die')
    }
  }


// Model /////////////////////////////////////////////////
  var Die = function(sides) {
    this.sides = sides
    this.value = 1
  }

  // Side effect
  Die.prototype.roll = function() {
    this.value = Math.floor((Math.random() * this.sides) + 1)
  }
// End Model ///////////////////////////////////////////////////



// Objectos ////////////////////////////////////////////////
  var die = new Die(16)
  var view = new View()
  // Dependency Injection
  var controller = new Controller(die, view)
  controller.addListeners()
})





