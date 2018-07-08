//v1

// var answer = prompt("Are we there yet");

// while (answer !== "yes" && answer !== "yeah"){
// 	var answer = prompt("Are we there yet");
// }
// alert("WE Made it!");






var answer = prompt("Are we there yet");
//The indexOf() method returns the position of the first occurrence of a specified value in a string.
//This method returns -1 if the value to search for never occurs.

while (answer.indexOf("yes") == -1){
	var answer = prompt("Are we there yet");
}
alert("WE Made it!");















