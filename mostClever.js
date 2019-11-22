shortest = function(text) {
	return text
		.toUpperCase()
		.match(/[a-z]/gi)
		.map( (c) => c.charCodeAt() - 64)
		.join(' ');
};

longest = function(text) {
	let result = "";
	for(var i = 0; i < text.length; i++) {
		var code = text.toUpperCase().charCodeAt(i);
		if (code > 64 && code < 91 ) result += (code - 64) + " ";
	}

	return result.slice(0, result.length-1);
};

module.exports = { shortest, longest };
