const alphabetNumberPosition = require('./mostClever');

let expected = '';
let received = '';

test(`should return 1 with a`, () => {
	expected = '1';
	received = 'a';
	expect(alphabetNumberPosition.shortest(received)).toBe(expected);
	expect(alphabetNumberPosition.longest(received)).toBe(expected);

});


test(`should return 1 2 with ab`, () => {
	expected = '1 2';
	received = 'ab';
	expect(alphabetNumberPosition.shortest(received)).toBe(expected);
	expect(alphabetNumberPosition.longest(received)).toBe(expected);
});


test(`should return 1 2 3 with abc`, () => {
	expected = '1 2 3';
	received = 'abc';
	expect(alphabetNumberPosition.shortest(received)).toBe(expected);
	expect(alphabetNumberPosition.longest(received)).toBe(expected);
});


test(`should return  with Hello`, () => {
	expected = '8 5 12 12 15';
	received = 'hello';
	expect(alphabetNumberPosition.shortest(received)).toBe(expected);
	expect(alphabetNumberPosition.longest(received)).toBe(expected);
});

// Acceptation test
test(`should return long number suite with long sentence`, () => {
	expected = "The sunset sets at twelve o' clock.";
	received = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
	expect(alphabetNumberPosition.shortest(expected)).toBe(received);
	expect(alphabetNumberPosition.longest(expected)).toBe(received);
});
