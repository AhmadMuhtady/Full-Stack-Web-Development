const Palindrome = require('./Palindrome');

describe('Palindrome', () => {
	it('should be a function', () => {
		expect(typeof Palindrome).toEqual('function');
	});

	it('should return a boolean', () => {
		expect(typeof Palindrome('hello')).toEqual('boolean');
	});

	it('should return true if its a Palindrome ', () => {
		expect(Palindrome('kayak')).toBeTruthy();
		expect(Palindrome('rotator')).toBeTruthy();
		expect(Palindrome('wow')).toBeTruthy();
	});

	it('should return false if its not a Palindrome ', () => {
		expect(Palindrome('hello')).toBeFalsy();
		expect(Palindrome('world')).toBeFalsy();
		expect(Palindrome('bye')).toBeFalsy();
	});

	it('should return false if includes spaces ', () => {
		expect(Palindrome(' wow')).toBeFalsy();
	});
});
