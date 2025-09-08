function findFirstNonRepeatingCharacter(str) {
	const str1 = str.replace(/\s/g, '').toLowerCase();

	// // solution 1
	// const charCount = {};

	// for (const char of str1) {
	// 	charCount[char] = (charCount[char] || 0) + 1;
	// }

	// for (const char of str1) {
	// 	if (charCount[char] === 1) {
	// 		return char;
	// 	}
	// }

	// return null;

	// solution 2 maps
	const charCount = new Map();

	for (const char of str1) {
		charCount.set(char, (charCount.get(char) || 0) + 1);
	}

	for (const char of str1) {
		if (charCount.get(char) === 1) {
			return char;
		}
	}

	return null;
}
console.log(findFirstNonRepeatingCharacter('hello world'));
module.exports = findFirstNonRepeatingCharacter;
