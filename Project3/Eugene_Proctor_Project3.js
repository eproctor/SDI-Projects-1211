//alert("JavaScript works!");

// Eugene Proctor
// SDI 1211
// Project 3
// My Third JavaScript Project

 

// Global Variables
 

var superHero 	=   	/* Travel to the Staduim  */ 				"Ultra Man", 
	power1		= 		/* Cost to park at the stadium */  			"phaseshift",
	power2 		=  		/* Who won the game */						"Atoms hard as Diamonds",
	fightCrime 	=		/* Does Ultra Man fight crime today?*/		true
;

// Conditional, Argument Boolean, For Loop, Argument Array, Property Array
// Tested

if (fightCrime === true) {
	console.log ("Ultra Man will fight crime today.");
	console.log ("Ultra Man transforms into his Diamond Armor.");}
	
		if (fightCrime === true) {
			var callHisFriends = ["Quick Silver", "Mr Big", "Flying Ace", "The Hulk" ];
			console.log ("Ultra Man called his friends and his " + callHisFriends.length + " friends are coming to help him...")
			console.log ("His friends are " )
			for (var i = 0; i < callHisFriends.length; i++){
			console.log (callHisFriends[i]);
		
		
		
		}

} else {console.log ("Ultra Man sits on the couch and watch the Adventures on TV");

};

// Time it takes for Ultra Man to solve a crime in seconds...
console.log ("  ");

var timeClock = 10;
while (timeClock > 0) {
console.log ("Ultra Man can Phase Shift in " + timeClock + " seconds...");
timeClock --};
console.log ("   ");



var armor = {

	"vest"	:	5,	
	"glove"	:	10,
	"shoes"	:	10,
	"size"	:	function(){
		var totalArmor = this.vest + this.glove + this.shoes;
		return totalArmor; 
	},
	
// Mutator Method
	"setNewSize" : function(newVest) {
		this.vest = newVest;
	}

};

// What is Ultra Man's Weakness

var ultraManPower	= {

	power1 				: 	"Phase Shift",
	power2				: 	"Turn his Atoms into Diamonds",
	phaseThroughSolids	: 	"yes",
	phaseThroughGases	:	"yes",
	phaseThroughLiquids	:	function () {
		console.log("Ultra Man cannot phase through liquids.  This is his weakness");
	} 
	
};

var key = "power1";

console.log ( "Ultra Man's power is to " + ultraManPower[key] );

console.log ( "Ultra Man's power is to " + ultraManPower.power2 );

// Change a key value
ultraManPower.power1 = "What is Ultra Man's weakness? ";
console.log (ultraManPower[key]);

ultraManPower.phaseThroughLiquids();



//Math - how many help calls are left to resolve

var callsToResolve = function(helpCalls, resolvedCalls) {
	callsToResolve = helpCalls - resolvedCalls
	return callsToResolve;
};

var heroHelp = callsToResolve(30,25)
console.log ("The number of help calls to resolve is " + callsToResolve);




//Output

console.log("Their are " + armor.size() + " pieces of armor available for any Hero to use. ");
armor.setNewSize(50);
console.log("The total Pieces of armor with additional vest is " + armor.size());
console.log("   ");

