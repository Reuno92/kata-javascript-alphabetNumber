const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

alphabetNumber = function(sentence) {
	const SENTENCE = sentence.split('');
	let result = [];
	let i = 0, l = SENTENCE.length;

	for (i, l; i < l; i++) {
		result.push(findIndexLetter(SENTENCE[i]));
	}
	return result.join(',');
};

findIndexLetter = function(letter) {
	return LETTERS.findIndex(x => x === letter) + 1;
};

module.exports = alphabetNumber;

