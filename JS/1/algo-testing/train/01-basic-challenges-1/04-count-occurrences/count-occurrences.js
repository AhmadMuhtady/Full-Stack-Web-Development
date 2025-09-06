function countOccurrences(str, letter) {
	// let count = 0;
	// for (let i = 0; i < str.length; i++) {
	// 	if (str[i] === letter) {
	// 		count++;
	// 	}
	// }
	// return count;

	return str.split(letter).length - 1;
}

console.log(countOccurrences('hello', 'l'));
module.exports = countOccurrences;
