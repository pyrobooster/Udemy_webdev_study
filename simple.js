// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"


var age = prompt("what is your age SUCKA");

if (Number(age <= 18) ) {
	alert("You are too young son!");
} else if (Number(age === 18) {
	alert ("First year driving, dont dent her.");
} else {
	alert ("There is room for your walker in the back seat...");
}


if (Number(age) == 18) {
  alert("First year driving, dont dent her.");
} else if (Number(age) <= 18) {
  alert("You are too young son!");
} else {
   alert ("There is room for your walker in the back seat...");
}

