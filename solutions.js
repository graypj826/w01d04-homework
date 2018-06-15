console.log("let's do this!")

//Verbal questions

// 2. // the difference between a parameter and an argument, is that the parameter is the input when the function is defined (const solutions = (parameter) =>) and the argument is the input when the function i scalled (solutions(argument))

// 3. console.log has no effect on the function it prints the information to the console for the dev to know what is going on. Return ends the function and produces an output (if there is one)

//Palindrome

// Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.

const checkPalindrome = (string1) =>{
	let stringToCompare = []
	let string1Array = []
	for (let i = string1.length-1; i >= 0; i--){
		stringToCompare.push(string1[i].toUpperCase())
	} 
	
	for (let i = 0; i < string1.length; i++){
		string1Array.push(string1[i].toUpperCase())
	}
	
	for (let i = 0; i < string1.length; i++){
	if (string1Array[i] !== stringToCompare [i]){ 
		return "False";
		} else {
		return "True"
		}
	}
}

console.log(checkPalindrome("Radar"));

console.log(checkPalindrome("Borscht"));

// Digit Sum

// Write a function sumDigits that accepts a number and returns the sum of its digits.

// console.log(sumDigits(42));
// => 6;

const sumDigits = (num) =>{
	let numStringArray =[];
	let numIntArray = [];
	let sumToDate = 0;

	if(typeof num !== 'number'){
		return "Try using a number?"
	} else {

	let numToString = num.toString();
	let digitsInNum = numToString.length;

	//push num as string to array

		for (let i = 0; i < digitsInNum; i++){
		numStringArray.push(numToString[i]);
		}

	console.log(numStringArray)

	//push digits to array
		for (let i = 0; i < digitsInNum; i++){
		let numInt = 0
		numInt = parseInt(numStringArray[i], 10);
		numIntArray.push(numInt);
		}
	
	console.log(numIntArray);
	
	//add together
		for (let i = 0; i < digitsInNum; i++){
			console.log(sumToDate += numIntArray[i])
		}
		return sumToDate;
	}	
}

console.log(sumDigits(4000));


//I'm getting a random 2

// Pythagoras

// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.

// hint: discover the Pythagorean Theorem on a website called google.com
// hint: checkout the Math methods in javascript

const calculateSide = (sideA, sideB) => {
	let aSquared = Math.pow(sideA, 2);
	console.log(aSquared)
	let bSquared = Math.pow(sideB, 2);
	console.log(bSquared)
	let cSquared = aSquared + bSquared;
	console.log(cSquared)
	let cSide = Math.sqrt(cSquared);
	console.log(cSide)
	return `${sideA} squared times ${sideB} squared equals ${cSquared}, and c is ${cSide}.`
}

console.log(calculateSide(8,6));

