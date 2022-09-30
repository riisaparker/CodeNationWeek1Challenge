// CodeNation Week1 	=>	Arrays and Loops  	

// RaeesaParker




 // ------ PRACTICE ------- // 


 let favDrinks = ["Coffee", "Tea", "Milkshake"]

 for (counter=0 ; counter < favDrinks.length ; counter ++ ){
 	console.log(favDrinks[counter]);
 }



// ---------- CHALLENGES ------------ // 


// ----------------------------
// ------- ACTIVITY 1


// -- Favourite Bands

let favBands = ["Blink182", "RiseAgainst", "HollowCoves"]

// Console log the bands
for (counter = 0 ; counter<favBands.length ; counter ++){
	console.log(favBands[counter]);
}

// Add two new bands => remove the last one
favBands.push("Wild", "Polisiekar")

favBands.pop()
 


// ----------------------------
// ------- ACTIVITY 2


// -- Cubing using map

let numbers = [2 , 3 , 4 , 5 , 6]

let cubedNums = numbers.map( num => num**3)

console.log(`Cubing ${numbers} gives ${cubedNums}`)




// ---------------------------- LOOPS  ---------------------------- //



// ----------------------------
// ------- ACTIVITY 1 

// See activity 1 above 




// ----------------------------
// ------- ACTIVITY 2

// Number generation


let randomNums = []

for (counter = 0 ; counter < 6 ; counter++ ){
	randomNums.push(Math.floor(Math.random() * 50 ))
}
console.log(`Six random numbers between 1 and 50 are ${randomNums}`)



// ----------------------------
// ------- ACTIVITY 3

// Backwards counter

for (counter = 9 ; counter >=0 ; counter--){
	console.log(counter);
}




// ----------------------------
// ------- ACTIVITY 4

// Film Checker

let films = ["Napoleon Dynamite", "Hunt for the Wilderpeople", "Little Miss Sunshine", "Juno"]

for (counter = 0 ; counter<films.length ; counter++){
	console.log(films[counter]);
}

if (films[2] != "Ghostbusters"){
	console.log("Boo! We want Ghostbusters");
}else{
	console.log("Yay!")
}




// ----------------------------
// ------- ACTIVITY 5

// -- Random numbers divisible by seven

let randomNumsUnder30 = [];

let divisibleArray = [];


for (counter = 0 ; counter < 6 ; counter++ ){
	randomNumsUnder30.push(Math.ceil(Math.random() * 30 ))

	if (randomNumsUnder30[counter] % 7 == 0 ){
		divisibleArray.push(randomNumsUnder30[counter])
	}
}
console.log(`Six random numbers between 1 and 30 are ${randomNumsUnder30}.\nThe numbers divisble by seven are ${divisibleArray}.`)





// ----------------------------
// ------- ACTIVITY 6

// -- Followers


// Set up the followers arrays and the blank mutal array
let bobsFollowers =["Jake", "Sam", "Will", "Chloe"];

let kylesFollowers = ["Declan", "Chantel", "Yves", "Sam"];

let mutalArray = [];


// Loop over bob's followers => check kyles followers over each index of bobs => if it matches push the bob follower to the mutual array
for (bobCounter = 0 ; bobCounter<bobsFollowers.length ; bobCounter++){

	for (kyleCounter = 0 ; kyleCounter<kylesFollowers.length ; kyleCounter++){
		if ( bobsFollowers[bobCounter] == kylesFollowers[kyleCounter]){
			mutalArray.push( bobsFollowers[bobCounter] )
		}
	}
}
console.log(`The mutal follower between Bob and Kyle is ${mutalArray}`)





// ----------------------------
// ------- ACTIVITY 7


/*

For Loop => 
Loops through a block of code until a counter reaches a specified number



While Loop =>
Loops through a block of code as long as the condition specified evaluates to true (e.g. while x<7). If the condition fails, the code is stopped. 


Do...While Loop =>
Loops through a block of code once; then the specified condition is evaluated. If the condition is true, the code is repeated as long as the specified condition is true.


Difference between While and Do...While => In a While loops, the condition is tested BEFORE the code is run. So if the condition is False, the code will not run. 
The advantages of the Do..While loop is that it executes the code at least once. 
*/




