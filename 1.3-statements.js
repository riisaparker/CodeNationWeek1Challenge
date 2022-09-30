// CodeNation Week1 	=>	Statements  	

// RaeesaParker



// ---------- CHALLENGES ------------ // 


// ----------------------------
// ------- ACTIVITY 1


// -- Age Limit 

let age = 18;

let country = "UK";

if (age > 17 && country == "UK"){
	console.log("Yes I can serve you");
}
else{
	console.log("You aren't old enough")
}



// ----------------------------
// ------- ACTIVITY 2


// -- Pizza Menu

//  Define a Pizza Topping
let pizzaTopping = "Olives";


// Define three arrays of different preferences with each element being a topic
let favouriteToppings = ["Mushrooms", "Sweetcorn", "Onions", "Olives"];

let okayToppings = ["Peppers", "Cheese", "Figs", "Spinach"];

let badToppings = ["Pineapple", "Egg", "Broccoli", "Raw Tomatoe"];


// Create a switch array which checks if the topping is in each preferenceArray 
// => Returns true for right array 
// => Switch to appropriate statement and log  
switch(true){
	case favouriteToppings.includes(pizzaTopping):
		console.log(`I love ${pizzaTopping} on my pizza`)
		break;
	
	case okayToppings.includes(pizzaTopping):
		console.log(`I don't mind having ${pizzaTopping} on my pizza.`)
		break;
	
	case badToppings.includes(pizzaTopping):
		console.log(`${pizzaTopping} DOES NOT BELONG ON A PIZZA!.`)
		break;
	
	default:
		console.log(`I've never tried ${pizzaTopping} on a pizza before.`)
}






// ----------------------------
// ------- ACTIVITY 3


// -- Password Check

let password="itsSunnyToday"

if (password.length < 8){
	console.log("Your password is too short")
}else{
	console.log(`Your password is ${password} => Keep it safe!`)
}


// -- Stretch - Division Check

let num = 7

if ((num % 3 === 0) || (num % 5 === 0)){
	console.log(`${num} is divisible by 3 or 5`)
}else{
	console.log(`${num} is NOT divisible by 3 or 5`)
}







// ----------------------------
// ------- ACTIVITY 4

let number = 15

if ( (number % 3 === 0) && (number % 5 === 0) ){
	console.log("FizzBuzz")
}else if (number % 5 === 0){
	console.log("Buzz")
}else if (number % 3 == 0) {
	console.log("Fizz")
}else{
	console.log(number)
}




// ----------------------------
// ------- ACTIVITY 5

// -- Palindrome check

let inputNum = 2001

// Convert the number into a string = "12345"
let numString = inputNum.toString();

// Split the number into an array seperated by "" = ["1", "2", "3", "4", "5"]
let numArray = numString.split("");

// Need to use .reverse BUT THIS IS DESTRUCTIVE AND CHANGES THE ORIGINAL ARRAY TOO =>
// Reverse the array = ["5", "4", "3", "2", "1"] =>
// Join all the elements together = "54321" (.join automatically converts it into a string)
let reversedNumString = numArray.reverse().join("");


// Compare the revsered array with the original & log the response
if (reversedNumString === numString){
	console.log(`${inputNum} is a palindrome`)
}else{
	console.log(`${inputNum} This number is NOT a palindrome`)
}




// ----------------------------
// ------- ACTIVITY 6

// -- Where am I?

let dateToday = new Date()

let timeNow = dateToday.getHours();

let placeOfWork = "Manchester";

let townOfHome = "Preston";

let commuteMode = "Train"


// Check if time is between midnight and 8 or after 6pm
// => Commuting if eithr 8am or 5pm 
// => At work between 9 and 5

if ( (0<timeNow && timeNow< 8) || timeNow>18 ) {
	console.log(`I am at home in ${townOfHome}`)
}
else if( timeNow == 8 || timeNow == 17 ) {
	console.log(`I am commuting using the ${commuteMode} `);
}
else{
	console.log(`I am at work in ${placeOfWork}`)
}






// ----------------------------
// ------- ACTIVITY 7

// -- Find the last vowel

let inputString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

//  Make an empty Array to store indices
let indicesArray = [];

// Make array of vowels
let vowelsArray = ["a", "e", "i", "o", "u"];

// Convert to input string to Array
let stringArray = inputString.split("")


// Loop through the array over the length => If the letter is a vowel, store the index number
for (index = 0 ; index < inputString.length ; index++){

	if (vowelsArray.includes(stringArray[index]) ){
		indicesArray.push(index);
	}
}


// Console log the INDEX of the last number in the array 
console.log(`The last vowel in the string is located at index ${indicesArray[indicesArray.length - 1]}`)





// ----------------------------
// ------- ACTIVITY 8

// -- Is the first the same as the last

// Input word and change all characters to lower case
let word = "My name is Sam".toLowerCase()

// Convert string to array
let wordArray = word.split("")

if (wordArray[0] == wordArray[wordArray.length-1]){
	console.log("Returning True")
	// return true
}else{
	console.log("Returning False")
	// return false
}





// ----------------------------
// ------- ACTIVITY 9

// -- Even or Odd


let num1 = 7;

let num2 = 4;

if ( (num1 + num2) % 2 == 0 ){
	console.log(`The sum of ${num1} and ${num2} is even, the result is ${num1 + num2}`);
}else{
	console.log(`The product of ${num1} and ${num2} is ${num1*num2}`);
}











