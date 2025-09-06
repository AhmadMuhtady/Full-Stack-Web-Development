function titleCase(str) {
	const words = str.toLowerCase().split(' ');

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substring(1);
	}

	return words.join(' ');
}
console.log(titleCase('heLlo world'));
module.exports = titleCase;
