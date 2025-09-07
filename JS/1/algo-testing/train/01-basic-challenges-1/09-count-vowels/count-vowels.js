function countVowels(str) {
	let count = 0;
	const arr = str.toLowerCase().split('');
	const vowels = ['e', 'a', 'o', 'u', 'i'];
	for (let i = 0; i < arr.length; i++) {
		if (vowels.includes(arr[i])) {
			count++;
		}
	}
	return count;
	// const formattedStr = str.toLowerCase();
	// let count = 0;

	// for (let i = 0; i < formattedStr.length; i++) {
	// 	let char = formattedStr[i];
	// 	if (
	// 		char === 'a' ||
	// 		char === 'e' ||
	// 		char === 'u' ||
	// 		char === 'o' ||
	// 		char === 'i'
	// 	) {
	// 		count++;
	// 	}
	// }
	// return count;
}

console.log(countVowels('JavaScript'));
module.exports = countVowels;
