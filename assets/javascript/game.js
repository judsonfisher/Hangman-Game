var wins = 0;
var losses = 0;

var letters = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var remainingGuesses = 6;

// Loads random word
var word = ["parrot", "dog", "zebra", "octopus", "shark", "anteater"];
var word = word[Math.floor(Math.random() * word.length)];

console.log(word);

var readout = []

// Creates placeholder for word letters
for (var i = 0; i <= word.length; i++) {
	
	readout[i] = " _ ";
	
	readout.length = word.length;
	
	document.getElementById("readout").innerHTML = readout;
} 

// Reads user key choice
document.onkeyup = function(event) {
	
	var guess = event.key;
	
	if (guess == word.charAt()) {	
		
		// Attempting to insert correct characters into readout
		document.getElementById("readout").innerHTML = readout + " " + guess;

	} else { 
		// Reduces guesses
		remainingGuesses--;

		// Inserting remaining guesses and letters gussed
		
		document.getElementById("lettersGuessed").innerHTML = "You guessed: " + guess;
		document.getElementById("remainingGuesses").innerHTML = "You have " + remainingGuesses + " guesses remaining!";
	
	}
		// Ends game and reloads page if guesses reduced
		if (remainingGuesses == 0) {
			
			//Uncertain of how to reset script properly
			alert("GAME OVER!");
			
			location.reload();

		}	

}










