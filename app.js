const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

alphabetNumber = function(sentence) {
	const SENTENCE = sentence.split('');
	let result = [];

	SENTENCE.map( x => {
		const index = LETTERS.findIndex(letter => x === letter) + 1;
		result.push(index);
	});

	return result.join(',');
};

module.exports = alphabetNumber;

