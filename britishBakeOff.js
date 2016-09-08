var bakeOffTextHolder = [];
var randomNumber = Math.floor(Math.random()*bakeOffTextHolder.length);


$(document).ready(function() {
	$.get('bakeoff.txt', function(data){
        bakeOffTextHolder = data.split('\n');
    });

	$("button").click(function() {
		$("#generatorResults").html(bakeOffTextHolder[randomNumber]);
	});
});

