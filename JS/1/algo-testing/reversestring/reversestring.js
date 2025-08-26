// function reverseString(string) {
// 	return string.split('').reverse().join('');
// }

// function reverseString(str) {
// 	let reversed = '';
// 	for (let character of str) {
// 		reversed = character + reversed;
// 	}

// 	return reversed;
// }

function reverseString(str) {
	return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverseString;
