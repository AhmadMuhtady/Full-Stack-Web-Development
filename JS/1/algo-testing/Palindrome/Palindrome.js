// solution
// const Palindrome = (str) => {
// 	const midpoint = str.length / 2;
// 	if (str.includes(' ')) return false;

// 	const right = str.slice(0, midpoint);
// 	const left = str.slice(-midpoint).split('').reverse().join('');

// 	return left === right;
// };

// const Palindrome = (str) => {
// 	if (str.includes(' ')) return false; // optional

// 	return str === str.split('').reverse().join('');
// };

// solution 3

function Palindrome(str) {
	return str.split('').every((char, index) => {
		return char === str[str.length - index - 1];
	});
}

module.exports = Palindrome;
