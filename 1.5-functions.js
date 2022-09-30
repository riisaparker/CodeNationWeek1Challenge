// CodeNation Week1 	=>	Functions

// RaeesaParker




 // ------ PRACTICE ------- // 


// -- Cinema 

let age = 5;

if (age < 18){
    console.log(`You are ${age} years old. Your ticket costs £8`)
}
else if(age >= 18 && age < 60){
    console.log(`You are ${age} years old. Your ticket costs £10.95`)
}
else{
    console.log(`You are ${age} years old. Your ticket costs £7.50`)
}


//  -- Favourite Colour

let favColour = "Green";

let favColourFunc = (favColour) => {
    console.log(`My favourite colour is ${favColour}`);
}

favColourFunc(favColour);

favColour = "Blue";

favColourFunc(favColour);




// ---------- CHALLENGES ------------ // 


// ----------------------------
// ------- ACTIVITY 1

// -- Factorial


const factorial = (n) => {
    if ( ( n === 0 ) || ( n === 1) ){
        return 1;
    } 
    else{
        return ( n * factorial( n - 1 ) );
    }
}

console.log( `The Factorial of 33 is ${factorial(33)}` )





// ----------------------------
// ------- ACTIVITY 2

// -- Order counting

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with toppings ${topping1} and ${topping2}.`);
    orderCount++;
    console.log(`Your order number is ${orderCount}.`);
}

takeOrder("Pineapple", "Mushrooms", orderCount);

takeOrder("Peppers", "Onions", orderCount);





// ----------------------------
// ------- ACTIVITY 3

// -- Cash Machine



// ----------------- VARIABLE SET UP --------------------

// Set up user prompt using readline => Require it => create the interface to take in inputs on command line
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//  Set up stored variables 
const storedPin = "1234";
const storedBalance = 500.00;



// ----------------- FUNCTIONS --------------------

// Function to check pin 
let checkPinFunc = (pin) => {
    if (pin == storedPin){
        return true;
    }
}

// Function to check balance
let checkBalanceFunc = (amount) => {
    if (amount < storedBalance){
        return true;
    }
}

// Create function to operate the ATM once the pin is correct
// Nested is the checkBalanceFunc
let  correctPinFunc = () => {

                rl.question("\n\nHow much money would you like to withdraw? ", function(amount){

                    // Check if there is enough money in the account => else output not enough funds
                    if (checkBalanceFunc(amount)){
                        console.log(`\n\nWithdrawing £${amount}. Your new balance is £${storedBalance-amount}`);
                        amount = storedBalance - amount;
                        rl.close()
                    }
                    else{
                        console.log(`\n\nYou do not have enough money to withdraw £${amount}`); 
                        rl.question("\n\nWould you like to enter a new amount?\ny for Yes\nn for no\n\n", function(tryAgain){
                            if (tryAgain == "y"){
                                // Rerun the correctPinFunction
                                correctPinFunc() 
                            }
                            else{
                                rl.close()
                            }
                        })
                        
                    }
                })
            }




// ----------------- MAIN CODE --------------------


// Create a function to run the ATM
function runATMFunc(){

    console.log("\n\n**************************************\n\nWELCOME TO THIS ATM SERVICE\n\n**************************************\n\n")

    // Ask the user for Pin 
    rl.question("Please enter your pin - ", function(enteredPin){

        // Run function to check pin => if correct => run correctPinFunc => else run
        if (checkPinFunc(enteredPin)){
            correctPinFunc()
        }
        else{
            console.log(`\n\nYour pin number is incorrect.`)
            rl.question("\n\nWould you like to try again?\ny for Yes\nn for no\n\n", function(answer){
                if (answer=="y"){
                    // Rerun the function until the correct pin is entered
                    runATMFunc()
                }
                else{
                    rl.close()
                }
            })
        }
    });

}


// Close the commandline input interface
rl.on('close', function () {
  console.log('\n\n**************************************\n\nTHANK YOU FOR USING THIS SERVICE\n\n**************************************\n\n');
  process.exit(0);
});


runATMFunc();













