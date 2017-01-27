var bakeOffTextHolder = JSON.parse(data);
var selectedRecipe = [];
console.log("start"); //Unit Test
console.log(bakeOffTextHolder); //Unit Test

$(document).ready(function() {

	function pickRandomRecipe(){
		var obj_keys = Object.keys(bakeOffTextHolder);
		var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
		selectedRecipe = bakeOffTextHolder[ran_key];
		console.log(selectedRecipe.name); //Unit Test
	}

	$("button").click(function() {
		pickRandomRecipe();
		$("#generatorResults").html(selectedRecipe.name);
		$("#generatorResults").show();
		console.log(selectedRecipe.id); //Unit Test
		console.log("finish"); //Unit Test
	});
});
