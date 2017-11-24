$(document).ready(function(){
	var startLine = $('.racetrack').position().left;	//startline of the racetrack
	var finishLine = startLine + 900;			//finishline of the racetrack

	var count = $('#timer').html();
	var counter = setInterval(timerDisplay, 1000);

	function timerDisplay(){					//this function displays a timer
		if (count <= 0){
			return clearInterval(counter);
		}
		count--;
	 	$('#timer').html(count);
	}

	window.setTimeout(timer, count*1000);		//setTimeOut to call timer function

	function timer(){							//actual timer for the race
		race();
	}

	function race(){
		$(document).on('keyup', function(e){				// '.on' binds the keyup event to the document	
			if (e.which == 80){
				var player1Pos = $('#player1').position();
				if(player1Pos.left < finishLine){
					var move = player1Pos.left + 20;
					$('#player1').offset({left:move});
				} else if (player1Pos.left >= finishLine){ 
					alert("El jugador 1 ha ganado!");
				}
			} else if (e.which == 81){
				var player2Pos = $('#player2').position();
				if(player2Pos.left < finishLine){
					var move = player2Pos.left + 20;
					$('#player2').offset({left:move});
				} else if (player2Pos.left >= finishLine){ 
					alert("El jugador 2 ha ganado!");
				}
			}
		});
	}
	$('#start-race').on('click', function(){
		document.location.reload(true);
	});
});