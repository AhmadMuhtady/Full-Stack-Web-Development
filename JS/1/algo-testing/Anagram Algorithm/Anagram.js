const anagram = (str1, str2) => {
	const aCharMap = buildCharMap(str1);
	const bCharMap = buildCharMap(str2);

	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}

	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}

	return true;
};

function buildCharMap(str) {
	const CharMap = {};
	for (let char of str.toLowerCase().replace(/[^a-z0-9]/g, '')) {
		CharMap[char] = CharMap[char] + 1 || 1;
	}
	return CharMap;
}

module.exports = anagram;
