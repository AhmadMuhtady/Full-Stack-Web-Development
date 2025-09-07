function arrayIntersection(arr1, arr2) {
	// const arr = [];
	// for (let i = 0; i < arr2.length; i++) {
	// 	if (arr1.includes(arr2[i]) && !arr.includes(arr2[i])) {
	// 		arr.push(arr2[i]);
	// 	}
	// }
	// return arr;
	const set1 = new Set(arr1);
	const set2 = new Set(arr2);
	const intersectionArray = [];
	for (let num of set2) {
		if (set1.has(num)) {
			intersectionArray.push(num);
		}
	}
	return intersectionArray;
}
console.log(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
module.exports = arrayIntersection;
