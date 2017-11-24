$(document).ready(function(){
	var racetrack = {
		length: $('.racetrack').width(),
		startLine: $('.racetrack').position().left,
		finishLine: startLine + (length - 100),
	}
});