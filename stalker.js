var first_name = prompt("Enter your first name: ");
var second_name = prompt("Enter your last name: ");
var age = prompt("Enter your age");
var howAge = (age * 365);

var full_name = first_name + " " + second_name;
alert("Your full name is: " + full_name);
alert("Your age is: " + age);

//Age
alert(age + " years is roughly " + howAge + " days");