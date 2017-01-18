var bakeOffTextHolder = [];
var randomNumber = [];


$(document).ready(function() {
	$.get('bakeoff.txt', function(data){
        bakeOffTextHolder = data.split('\n');
        randomNumber = Math.floor(Math.random()*bakeOffTextHolder.length);
    });

	$("button").click(function() {
		$("#generatorResults").html(bakeOffTextHolder[randomNumber]);
		console.log(bakeOffTextHolder);
		console.log(randomNumber);
	});
});

