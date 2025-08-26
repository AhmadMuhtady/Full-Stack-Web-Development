const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
	it('should be a function', () => {
		expect(typeof fizzbuzz).toEqual('function');
	});

	it('should return the number if not divisible by 3 or 5', () => {
		expect(fizzbuzz(1)).toEqual(1);
		expect(fizzbuzz(13)).toEqual(13);
		expect(fizzbuzz(17)).toEqual(17);
	});

	it('should return the FIZZ if divisible by 3', () => {
		expect(fizzbuzz(3)).toEqual('FIZZ');
		expect(fizzbuzz(6)).toEqual('FIZZ');
		expect(fizzbuzz(12)).toEqual('FIZZ');
	});

	it('should return the BUZZ if divisible by 5', () => {
		expect(fizzbuzz(5)).toEqual('BUZZ');
		expect(fizzbuzz(10)).toEqual('BUZZ');
		expect(fizzbuzz(20)).toEqual('BUZZ');
	});

	it('should return the FIZZBUZZ if divisible by 15', () => {
		expect(fizzbuzz(15)).toEqual('FIZZBUZZ');
		expect(fizzbuzz(30)).toEqual('FIZZBUZZ');
		expect(fizzbuzz(45)).toEqual('FIZZBUZZ');
	});
});
