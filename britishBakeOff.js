var bakeOffTextHolder = [
	'Signature Bake',
	'Technical Challenge',
	'Showstopper Bake'
];

var randomNumber = Math.floor(Math.random()*bakeOffTextHolder.length);


$(document).ready(function() {
	$("button").click(function() {
		$("#test").html(bakeOffTextHolder[randomNumber]);
	})
})
