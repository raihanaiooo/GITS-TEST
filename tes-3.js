const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function isBalanced(input) {
	const stack = [];
	const openingBrackets = ["(", "{", "["];
	const closingBrackets = [")", "}", "]"];

	for (let char of input) {
		if (openingBrackets.includes(char)) {
			stack.push(char);
		} else if (closingBrackets.includes(char)) {
			const lastOpeningBracket = stack.pop();
			const correspondingOpeningBracket =
				openingBrackets[closingBrackets.indexOf(char)];

			if (lastOpeningBracket !== correspondingOpeningBracket) {
				return "NO";
			}
		}
	}

	return stack.length === 0 ? "YES" : "NO";
}

// Take input from the user
rl.question("Enter a string with brackets: ", (userInput) => {
	// Check if the input is balanced and display the result
	const output = isBalanced(userInput);
	console.log(`Input: ${userInput}\nOutput: ${output}`);

	rl.close();
});
