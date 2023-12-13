function generateSequence(n) {
	const sequence = [];
	let current = 1;

	for (let i = 1; i <= n; i++) {
		sequence.push(current);
		current += i;
	}

	return sequence;
}

function formatSequence(sequence) {
	return sequence.join("-");
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Masukan angka: ", (n) => {
	n = parseInt(n);
	if (isNaN(n) || n <= 0) {
		console.log("Masukan angka integer");
	} else {
		const result = generateSequence(n);
		const formattedResult = formatSequence(result);

		console.log(`Input ${n}`);
		console.log(`Output: ${formattedResult}`);
	}

	rl.close();
});
