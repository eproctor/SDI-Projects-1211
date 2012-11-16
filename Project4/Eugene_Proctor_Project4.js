// alert("JavaScript works!");
// Eugene Proctor
// SDI 1211
// Project 4
//  My first JavaSricpt Project



//ok
// Number
// Format a number to use a specific number of decimal places, as for money: 2.1 to 2.10

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






// ...............................ok
// Number
// Display the number above and below a number within a certain percent


var topNumber = function(number) {

console.log ("Based on the number " + number + ".  "  +  Math.ceil(number) + " is the next number up.");
console.log ("Based on the number " + number + ".  "  +  Math.floor(number) + " is the next number down.");

};

var newNumber = topNumber(123.1);

// empty space
console.log("    ");								







// ...............................ok
// Number
// Given a string version of a number such as "42", return the value as an actual Number, such as 42. 


var input = function(string) {

console.log ("This is the numerical version of the string " + parseInt(string, 10));

};

var newInput = input("212.5");
console.log(" ")





// ............................... ok

// Array
// Find the total value of just the numbers in an array, even if some of the items are not numbers
//array.reduce(callback[, initialValue])

var total = [5, 10, 5, 15].reduce(function(a, b) {
	return a + b;
	
});

console.log (total + " is the total for the array." )
console.log(" ")






// ...............................ok
// String
// Title case a string (split into words, then uppercase the first letter of each word)

var wordOne = "top dog";


function capitaliseFirstLetter(string)
{

    return string.charAt(0).toUpperCase() + string.slice(1) + " " + string.charAt(0).toUpperCase() + string.slice(1) ;
}

console.log(wordOne.charAt(0).toUpperCase() + wordOne.slice(1,3) + " " + wordOne.charAt(4).toUpperCase() + wordOne.slice(5));
console.log(" ")






// ...............................ok
// String
// Is the string a URL?  Does it start with http: or https:?

var checkName = function(pre){
	if (pre === "http") {
			console.log("This site has a http prefix");
			return true;
	} else {
				
					if (pre === "https") {
					
					console.log("This site has a https prefix");
					return true;
	
	} else {
			console.log("This string is not a url.  It does not have an https: or http: prefix");
			return false;
			
	};
}
		
};

console.log(checkName("https"));