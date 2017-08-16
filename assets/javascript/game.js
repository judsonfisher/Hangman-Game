var wins = 0;
var losses = 0;

var letters = ['A', 'B', 'C', 'D', 'E',
        'F', 'G', 'H', 'I', 'J', 'K',
        'L', 'M', 'N', 'O', 'P', 'Q',
        'R', 'S', 'T', 'U', 'V', 'W',
        'X', 'Y', 'Z'
        ]

var remainingGuesses = 6;

var word = ["parrot", "dog", "zebra", "octopus", "shark", "anteater"];
var word = word[Math.floor(Math.random() * word.length)];

var readout = []

for (var i = 0; i <= word.length; i++) {
	
	readout[i] = " _ ";
	
	readout.length = word.length;
	
	document.getElementById("readout").innerHTML = readout;
} 


document.onkeyup = function(event) {
	
	var guess = event.key;
	
	if (guess == word.charAt()) {	
		
		document.getElementById("readout").innerHTML = readout + " " + guess;

	} else { 

		remainingGuesses--;

		document.getElementById("remainingGuesses").innerHTML = "You have " + remainingGuesses + " guesses remaining!";
	
	}
		
		if (remainingGuesses == 0) {
			
			alert("GAME OVER!");
			
			location.reload();

		}	

}










