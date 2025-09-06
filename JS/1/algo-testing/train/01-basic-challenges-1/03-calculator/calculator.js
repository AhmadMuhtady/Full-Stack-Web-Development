function calculator(num1, num2, operator) {
	// if (operator === '+') {
	// 	return num1 + num2;
	// } else if (operator === '-') {
	// 	return num1 - num2;
	// } else if (operator === '/') {
	// 	return num1 / num2;
	// } else if (operator === '*') {
	// 	return num1 * num2;
	// } else if (operator === '%') {
	// 	return num1 % num2;
	// } else {
	// 	return 'Please insert operator ["+", "-", "*", "/", "%"]';
	// }
	switch (operator) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '/':
			return num1 / num2;
		case '*':
			return num1 * num2;
		case '%':
			return num1 % num2;
		default:
			throw Error('Invalid operator. Please insert ["+", "-", "*", "/", "%"]');
	}
}

module.exports = calculator;
