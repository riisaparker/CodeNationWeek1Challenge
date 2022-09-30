// CodeNation Week1 	=>	Objects	

// RaeesaParker





 // ------ PRACTICE ------- // 

let person = {
	name : "Raeesa", 
	age : "27",
	favSongs: ["Here", "Hello", "Bye"],
	sayHi(){
		console.log(`Hello, my name is ${this.name}`);
	}
};

person.sayHi()





// ---------- CHALLENGES ------------ // 


// ----------------------------
// ------- ACTIVITY 1

// -- Alarm


let alarm ={
	weekendAlarm : "No alarm needed",
	weekdayAlarm : "Get up at 7am"
}

let day ="Sunday";


if (day == "Saturday" || day == "Sunday"){
	console.log(alarm.weekendAlarm)
}
else{
	console.log(alarm.weekdayAlarm)
}



// ----------------------------
// ------- ACTIVITY 2

// -- Pet

let pet ={
	name : "Toothless", 
	typeOfPet : "Cat",
	age : 5,
	colour : "Black",
	eatFunc(){
		console.log(`${this.name} is eating.`);
	} ,
	drinkFunc(){
		console.log(`${this.name} is drinking.`);
	}
}

pet.eatFunc();
pet.drinkFunc();





// ----------------------------
// ------- ACTIVITY 3

// -- Coffee Shop

// Set up user prompt using readline => Require it => create the interface to take in inputs on command line
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



let order = [];

let drinksOrderd = false;

let coffeeShop = {
	branch: "PRESTON", 
	drinksWithPrices: [
		["\n1. Espresso", 2.00],
		["\n2. Americano", 2.30],
		["\n3. Latte", 3.00],
		["\n4. Hot Chocolate", 3.00],
		["\n5. Tea", 1.50],
		["\n6. Water", 1.00]
	],
	foodWithPrices: [
		["\n1. Scone", 2.00],
		["\n2. Muffin", 2.50],
		["\n3. Carrot Cake", 3.00],
		["\n4. Chocolate Cake", 3.00],
		["\n5. Waffle", 4.00],
		["\n6. Pancakes", 4.00]
	],
	drinksOrdered(chosenDrink){
		console.log(`\nYour drinks order is ${this.drinksWithPrices[chosenDrink - 1][0]}`);

		// Log the ordered drink
		order.push(chosenDrink - 1);
	},
	foodOrdered(chosenFood){
		console.log(`Your food order is ${this.foodWithPrices[chosenFood - 1][0]} `);

		// Log the ordered food
		order.push(chosenFood - 1 )
	},
	totalOrdered(order){
		let total = coffeeShop.drinksWithPrices[order[0]][1] + coffeeShop.foodWithPrices[order[1]][1];
		console.log(`\nYour total order is £${total}.`);
		rl.close()
	}
}





// ----------------- MAIN CODE --------------------

// Create a function to take the order

let takeOrder = () => {

	console.log(`\n\n**************************************\n\nWELCOME TO OUR ${coffeeShop.branch} COFFEE SHOP\n\n**************************************\n\n`)

	// Take drinks order
	console.log("What would you like to drink?")
	console.log(coffeeShop.drinksWithPrices.toString())

	rl.question("Please select an option by typing a number\n", function(chosenDrink){
		coffeeShop.drinksOrdered(chosenDrink)
		drinksOrdered = true;

		// Take food order
		if (drinksOrdered = true){
			console.log("\nWhat would you like to eat?")
			console.log(coffeeShop.foodWithPrices.toString())
			rl.question("Please select an option by typing a number\n", function(chosenFood){
				coffeeShop.foodOrdered(chosenFood);

				// Calculate the final bill
				coffeeShop.totalOrdered(order);
			})
		}
	})
}

takeOrder()



// Close the commandline input interface
rl.on('close', function () {
  console.log('\n\n**************************************\n\nTHANK YOU FOR VISITING US\n\n**************************************\n\n');
  process.exit(0);
});












