const capitalizedWords = (str) => {
	return str
		.toLowerCase()
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.substr(1))
		.join(' ');
};

const makeMoney = (amount) => {
	return `$${amount}`;
};

export { capitalizedWords, makeMoney };
