//Functions that take as an argument, or return as a function

//Set interval

function sing(){
    console.log("Twinkle Twinkle");
    console.log("How I wonder..");
}
sing();

setInterval(sing, 1000); //(setInterval is a function that calls function i.e sing())

//clearInteral() uses to stop the setInterval()

setInterval(function(){
    console.log("Annonymus");
    console.log("what do you mean?");
},2000);