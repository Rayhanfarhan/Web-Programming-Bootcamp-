//Create secret number
var secretNum = 4;
//ask user for guess
var guess = Number (prompt("Guess a number"));
//Either use a variable
//var guessNum = Number(guess);

//check if guess is right
//Or use Number class
if(guess === secretNum) {
	alert("You got it right!");
}

else if (guess > secretNum) {

	alert("You're guess is too high");

}


else {
	alert("Too Low guess again");
}
