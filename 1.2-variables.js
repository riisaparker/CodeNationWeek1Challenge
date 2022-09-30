// CodeNation Week1 	=>	Variables  	

// RaeesaParker



 // ------ PRACTICE ------- // 


// Define the sentance and the index
let sentance = "All Around the World";

const index = 7; 

// Console log and change the 8th charater to uppercase
console.log(sentance.charAt(index).toUpperCase())



// ---------- CHALLENGES ------------ // 


// ----------------------------
// ------------- ACTIVITY 1

// -- Template Literals 

//  Store some data
let name = "Raeesa";
let age = "27";
let colour = "Green";


// Console log it 
console.log(`Hello. My name is ${name} I am ${age} years old and my favourite colour is ${colour}.`);



// -- Stretch - Template Literals

name = "Sam";
age = "30";
colour = "Blue";

console.log(`Hello. My name is ${name} I am ${age} years old and my favourite colour is ${colour}.`);



// ----------------------------
// // ------------- ACTIVITY 2

// -- Dinner  - 

let dailyFood = ["Oats", "Pizza" , "Pasta"];

console.log(`Today for breakfast I ate ${dailyFood[0]}, for lunch I ate ${dailyFood[1]}, and I ended with ${dailyFood[2]}.`)

dailyFood=["Pancakes", "Burgers" , "Salad"]

console.log(`Tomorrow for breakfast I will eat ${dailyFood[0]}, for lunch ${dailyFood[1]} and I will end with ${dailyFood[2]}`)




// ----------------------------
// ------------- ACTIVITY 3

// -- Birthday countdown  

//  Input next birthday in new Date format (mm/dd/yy) => set todays date
let birthday = new Date("04/25/2023")
let currentDate = new Date();


// Calculate the time in Milliseconds since January 1, 1970 using getTime()
let datesArrayMilli = [ birthday.getTime(), currentDate.getTime() ]


// Find difference in milliseconds between the two dates (this will be milliseconds until bday)
let countdownMilli = datesArrayMilli[0] - datesArrayMilli[1]; 


// Convert from milliseconds to days => rounding up => (milli => seconds => minutes => hours => days) (*1000 *60 *60 *24)
let countdownDays = Math.ceil(countdownMilli / (1000 * 60 * 60 * 24))

console.log(`There are ${countdownDays} until your birthday! WooHoo!`);




// ----------------------------
// ------------- ACTIVITY 4 - Rough but short

let spaces = ["X" , "O" , " " , "X" , "X" , " ", "O" , " " , " "  ]

console.log(`   |   |\n ${spaces[0]} | ${spaces[1]} |\n   |   |\n-----------`);
console.log(`   |   |\n ${spaces[3]} | ${spaces[4]} |\n   |   |\n-----------`);
console.log(`   |   |\n ${spaces[6]} |   |\n   |   |`);













