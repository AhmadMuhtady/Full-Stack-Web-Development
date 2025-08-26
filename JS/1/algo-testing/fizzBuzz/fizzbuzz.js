function fizzbuzz(number) {
	if (number % 15 === 0) {
		return 'FIZZBUZZ';
	} else if (number % 3 === 0) {
		return 'FIZZ';
	} else if (number % 5 === 0) {
		return 'BUZZ';
	} else {
		return number;
	}
}

module.exports = fizzbuzz;
