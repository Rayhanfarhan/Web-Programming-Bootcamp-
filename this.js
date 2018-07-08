var comm = {};
comm.data = ["Hello", "Hi", "Bye"];
comm.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});
}

//this refers to object