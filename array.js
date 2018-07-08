//Grouped Data
//Arrays are zero-based, every slot has a corresponding number.
var friends = ["L1,L2,L3,L4"];

console.log(friends[0]);

friends[0] = "L0"; //Array gets updated

friends[5] = "L9"; // Add array in the slot, put the number that doesnt exist in the slot

//Array can hold any type of Data
var random_collection = [49,true,"String",null];

//Array have length property
var nums = [45,37,89,24];
nums.length;

//Push and pop
var colors = ["red", "orange", "yellow"];
colors.push("green");
//Push adds an element at the end of the array, also return the length of the array
//Pop removes the last item in an array
 colors.pop()

var col = colors.pop(); // pop returns the removed element





