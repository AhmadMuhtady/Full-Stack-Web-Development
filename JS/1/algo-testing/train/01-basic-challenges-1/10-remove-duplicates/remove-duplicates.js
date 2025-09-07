function removeDuplicates(arr) {
	return Array.from(new Set(arr));

	const newArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (!newArray.includes(arr[i])) {
			newArray.push(arr[i]);
		}
	}
	return newArray;
}
console.log(removeDuplicates([true, true, false, true, false]));
module.exports = removeDuplicates;
