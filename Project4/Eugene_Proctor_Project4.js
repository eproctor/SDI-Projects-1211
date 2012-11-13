// alert("JavaScript works!");

// Number
// Format a number to use a specific number of decimal places, as for money: 2.1 to 2.10

console.log("Number");
console.log("Format a number to use a specific number of decimal places, for ex: money: 2.1 to 2.10");

var twoDecimal = function(number) {

console.log (number.toFixed(2));


};

var newNumber = twoDecimal(123);
var newNumber = twoDecimal(1);
var newNumber = twoDecimal(1.2334);
var newNumber = twoDecimal(1.2384);

// empty space
console.log("    ");								



// ...............................
// Number
// Display the number above and below a number within a certain percent


var topNumber = function(number) {

console.log ("Based on the number " + number + ".  "  +  Math.ceil(number) + " is the next number up.");
console.log ("Based on the number " + number + ".  "  +  Math.floor(number) + " is the next number down.");

};

var newNumber = topNumber(123.1);

// empty space
console.log("    ");								



