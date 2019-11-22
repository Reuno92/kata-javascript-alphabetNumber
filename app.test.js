const alphabetNumber = require('./app');

test('should return a = 1', () => {
	expect(alphabetNumberPosition('a')).toBe('1');
});

test('should return 1,2 with a,b', () => {
	expect(alphabetNumberPosition('ab')).toBe('1 2');
});

test('should return 1,2,3 with a,b,c', () => {
	expect(alphabetNumberPosition('abc')).toBe('1 2 3');
});

test('should return hello with 8,5,12,12,15', () => {
	expect(alphabetNumberPosition('hello')).toBe('8 5 12 12 15');
});

// Acceptation test
test('should return hello with 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11', () => {
	expected = 'The sunset sets at twelve o( clock.';
	received = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
	expect(alphabetNumberPosition(expected)).toBe(received);
});
