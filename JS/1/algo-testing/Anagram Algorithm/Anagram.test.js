const anagram = require('./Anagram');

describe('Anagram Algorithm', () => {
	it('should be a function', () => {
		expect(typeof anagram).toEqual('function');
	});

	it('should return a boolean', () => {
		expect(typeof anagram('ram', 'arm')).toEqual('boolean');
	});

	it('should return true if Anagram', () => {
		expect(anagram('ram', 'arm')).toBeTruthy();
		expect(anagram('cinema', 'iceman')).toBeTruthy();
	});

	it('should return false if not Anagram', () => {
		expect(anagram('hello', 'fellow')).toBeFalsy();
		expect(anagram('world', 'twirl')).toBeFalsy();
		expect(anagram('lost', 'cost')).toBeFalsy();
	});
});
