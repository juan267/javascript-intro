$(document).ready(function(event){

  document.getElementById('breeds').addEventListener('mouseenter', function(event) {
      this.style.backgroundColor = 'mediumaquamarine'
      // this; //-> element with id "breeds"
  });

  $('#breeds').on("mouseleave", function(event){
    console.log(event)
    $(this).css("background-color", "tomato")
  })

})


console.log('hola')

  // $("[href='http://tunaranja.co']")

  //   .addEventListener('click', function(event){
  //   event.preventDefault()
  // })




  // document.getElementById('breeds')
  //   .addEventListener('mouseleave',function(ev) {
  //     this.style.fontFamily = 'helvetica'
  //   this; //-> element with id "breeds"

  // }, false)


  // var breeds = document.getElementById('breeds');

  // //register a simple handler
  // breeds.addEventListener('click', function(ev) {
  //   console.log('clicked!');
  // }, false);

  // //removing a handler that looks identical
  // breeds.removeEventListener('click', function(ev) {
  //   console.log('clicked!');
  // }, false);

  // ///////// Do this instead

  // var handler = function(ev) {
  //   console.log('clicked!');
  // }

  // breeds = document.getElementById('breeds');

  // //register a simple handler
  // breeds.addEventListener('click', handler, false);

  // //and remove the registration
  // breeds.removeEventListener('click', handler, false);

  // /////////////////////////// Event Object

  // var handler = function() {
  //   console.log(event)


  //   // ev.preventDefault();
  //   // ev.stopPropagation();
  // }

  // document.getElementById('breeds')
  //   .addEventListener('click', handler, false);

  // ///////// Default Actions

  // /*
  //   - Submit
  //   - click
  //   - mouseDown
  //   - contextMenu
  //   - keyDown/keypress
  // */

  // var click_handler = function(ev) {
  //   //stops window.location from being set
  //   ev.preventDefault();
  // };

  // breeds.addEventListener('click', function(ev) {
  // //click, keypress, etc
  //   ev.type;

  //   //element event was invoked on
  //   ev.target;

  //   //current element in propagation
  //   ev.currentTarget;

  //   ev.timestamp;
  //   ev.bubbles;
  //   ev.cancelable;
  //   ev.eventPhase;
  // }, false);


  // ///// Delegation Propagation


  // document.body.addEventListener("click",
  //   function(ev){

  //     if(ev.target.nodeName === "A") {
  //       console.log("clicked on an anchor!");
  //       // do stuff!
  //     }

  //   }, false);

  // /// With jquery
  // $('body').on('click','div', function() {
  //   console.log('Here I am!');
  // });



// // document.querySelector("[href='http://tunaranja.co']").addEventListener('click', function(event){
// //   event.preventDefault()
// //   event.stopPropagation();
// //   alert('Super tu naranjas')
// // })

// var maria = {
//   hijos: {
//     german: {}
//   }
// }

// $(document).ready(function() {

//   var handler = function(event){
//     event.preventDefault()
//     alert('Las mejores naranjas')
//   }


//   $("[href='http://tunaranja.co']").on('click', function(event){
//     event.preventDefault()
//     alert('Las mejores naranjas')
//   })
// })

























// // $(document).ready(function() {
// //   $('#boton').on('click', function(event){
// //     event.preventDefault()
// //     console.log('Holaaa')
// //   })

// //   $('a[href="http://tunaranja.co"]').on('click', function(event){
// //     event.preventDefault()
// //     console.log('Tu Naranja')
// //   })
// // })

// // $('#breeds').on('click', function(evento){
// //   console.log('hola')
// // })

// // $(document).ready(function(){

// // })
