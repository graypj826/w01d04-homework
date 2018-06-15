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
	console.log(stringToCompare)
	for (let i = 0; i < string1.length; i++){
		string1Array.push(string1[i].toUpperCase())
	}
	console.log(string1Array);
	for (let i = 0; i < string1.length; i++){
	if (string1Array[i] !== stringToCompare [i]){ 
		return "False";
		} else {
		return "True"
		}
	}
}

console.log(checkPalindrome("Radar"));