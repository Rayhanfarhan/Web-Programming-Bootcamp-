//Scope is the context that code is executed in

function doMath(){
    var x = 40;//Local Scope(Defined inside of the scope and so it will be only accessed inside the scope)
    console.log(x);
}

var x = "Hello" //Global Scope(defined outside of the function, that can be accessed to the parent scope)

var phrase = "Hi there";

function doSomething(){
    var phrase = "Goodbye!";
    console.log(phrase);
}
doSomething();
//(The Local variable will not be executed, only the variable that is declared outside of the function will be executed)