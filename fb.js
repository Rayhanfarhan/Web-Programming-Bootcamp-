var database = [

	{
		username: "Joy",
		password: "Lol"
	}
];


var newsFeed = [

	{
		username: "Bobby",
		timeline: "So tired of learning for mid"
	},

	{
		username: "Joy",
		timeline: "I love Robots"
	}

];

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

function signIn(user, pass){
	if (user === database[0].username && pass === database[0].password) {
		console.log(newsFeed);

	}
	else{
		alert("Sorry Wrong username and pass");
	}
}
signIn(userNamePrompt, passwordPrompt);


