var myVar = setInterval(myTimer, 1000);
var i=6
var start = false
function myTimer() {


    document.getElementById("demo").innerHTML = i;
    if (i===0){
      clearTimeout(myVar)
      start = true
    }
    i = i-1
}


$( "body" ).keyup(function(e) {
if (start) {
  if (e.key==="q"){

    player=$("#player1_strip .active")
    player.removeClass("active")

    player.next().addClass("active")
    if(player.next().hasClass("last")){
      $("body").css("background-color","blue")
      alert("Win player1_strip")

    }


  }
  else if (e.key==="p"){
    player=$("#player2_strip .active")
    player.removeClass("active")
    player.next().addClass("active")
    if(player.next().hasClass("last")){
      $("body").css("background-color","red")
      alert("Win player2_strip")
    }
  }
  }

});
