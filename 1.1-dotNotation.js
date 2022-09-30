// CodeNation Week1 	=>	Dot Notation 	

// RaeesaParker



 // ------ PRACTICE ------- // 

// Hello World
console.log("Hello World!".toUpperCase());

// Math Random
console.log(Math.random());

// Math Random * 10 
console.log(Math.random()*10);

// Rounding
console.log(Math.floor(Math.random()*10));




// ------ CHALLENGES ------- // 


// ---- ACTIVITY - Grid 
console.log("   |   |\n   |   |\n   |   |\n-----------");
console.log("   |   |\n   |   |\n   |   |\n-----------");
console.log("   |   |\n   |   |\n   |   |");



// ---- STRETCH - Grid => 

//  Set lines and dashes as Array and string, respectively
const linesArray =["   |   |", "   |   |", "   |   |" ];

const dashes = "-----------"


// Loop over the code 3x => For each element in line array => log the value => log dashes if counter is < 2
for (let counter=0; counter<3; counter++){
	linesArray.forEach( (element) => console.log(element)  );
	
	if(counter<2){
		console.log(dashes);
	}
}





