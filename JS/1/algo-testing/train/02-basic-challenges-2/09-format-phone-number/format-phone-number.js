function formatPhoneNumber(arr) {
	const areaCode = arr.slice(0, 3).join('');
	const prefix = arr.slice(3, 6).join('');
	const lineNumber = arr.slice(6).join('');

	return `(${areaCode}) ${prefix}-${lineNumber}`;
}

module.exports = formatPhoneNumber;
