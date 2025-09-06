function reverseString(str) {
	// let words = str.split(' ');

	// for (let i = 0; i < words.length; i++) {
	// 	words[i] = words[i].split('').reverse().join('');
	// }
	// return words.join(' ');

	let reversed = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
}

console.log(reverseString('Hello'));
module.exports = reverseString;
