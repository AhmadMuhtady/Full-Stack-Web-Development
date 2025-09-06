// function isPalindrome(str) {
// 	const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

// 	const reversedStr = formattedStr.split('').reverse().join('');

// 	return formattedStr === reversedStr;
// }
const isPalindrome = (str) => {
	const formattedStr = removeNonAlphaNumeric(str.toLowerCase());
	const reversedStr = reverseString(formattedStr);
	return formattedStr === reversedStr;
};

function removeNonAlphaNumeric(str) {
	let formattedStr = '';
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (isAlphaNumeric(char)) {
			formattedStr += char;
		}
	}
	return formattedStr;
}

function isAlphaNumeric(char) {
	const code = char.charCodeAt(0);
	return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function reverseString(str) {
	let reverse = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reverse += str[i];
	}
	return reverse;
}
module.exports = isPalindrome;
