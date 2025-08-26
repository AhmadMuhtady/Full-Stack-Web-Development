const reverseString = require('./reversestring');

describe('reverseString', () => {
	it('should reverse a string function', () => {
		expect(typeof reverseString).toEqual('function');
	});

	it('should return a string', () => {
		expect(typeof reverseString('hello')).toEqual('string');
	});

	it('should return a reversed a string', () => {
		expect(reverseString('hello')).toEqual('olleh');
		expect(reverseString('bye')).toEqual('eyb');
		expect(reverseString('wow')).toEqual('wow');
		expect(reverseString('hello world')).toEqual('dlrow olleh');
	});
});
