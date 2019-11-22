const alphabetNumber = require('./app');

test('should return a = 1', () => {
	expect(alphabetNumber('a')).toBe('1');
});

test('should return 1,2 with a,b', () => {
	expect(alphabetNumber('ab')).toBe('1,2');
});

test('should return 1,2,3 with a,b,c', () => {
	expect(alphabetNumber('abc')).toBe('1,2,3');
});

test('should return hello with 8,5,12,12,15', () => {
	expect(alphabetNumber('hello')).toBe('8,5,12,12,15');
});

// Acceptation test
test('should return hello with 8,5,12,12,15,23,15,18,12,4', () => {
	expect(alphabetNumber('helloworld')).toBe('8,5,12,12,15,23,15,18,12,4');
});
