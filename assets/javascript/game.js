var wins = 0;
var losses = 0;
var tally = 0;

//Here we must generate a random number between 19 and 120
var total = Math.floor((Math.random()* 100) + 19);

//Here we must generate a value for each crystal that will fall between 1 and 12
var red = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);


//Here is a function that is used to update the score we tally by choosing
var updateTally = function (){
	$('.tally').empty();
	$('.tally').append(tally);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}
//Here is a function that can be used to restart the game after a win or loss has occurred
var restart = function(){
	tally = 0;
    total = Math.floor((Math.random()* 100) + 19);
	red = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
	$('.total').empty();
	$('.total').append(total);
	updateTally();

    
}

// Here is the if else statement which decides how the game should proceed based upon what the computer generated value is and what the players current score is
var logic = function (){
	if (tally == total) {
		wins = wins + 1;
		
		restart();
	}else if(tally > total){
		losses = losses + 1;
		
		restart();
	}else{
		updateTally();
	}
}

$('.total').append(total);

$('.tally').append(tally);

//Here is a function for how a randomly generated value of the gem adds to the total already accrued within this game followed by the logic functiond defined above after choice is made
$(document).ready(function(){
	$('#red').click(function(){
		tally = tally + red;
		logic();
	})
	$('#blue').click(function(){
		tally = tally + blue;
		logic();
	})
	$('#yellow').click(function(){
		tally = tally + yellow;
		logic();
	})
	$('#green').click(function(){
		tally = tally + green;
		logic();
	})
});
