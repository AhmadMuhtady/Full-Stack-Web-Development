function findMissingNumber(arr) {
	const n = arr.length + 1;
	const expectedSum = (n * (n + 1)) / 2;
	// let actualSum = 0;
	// if (arr.length === 0) return (count = 1);
	// for (let i = 0; i < arr.length; i++) {
	// 	actualSum += arr[i];
	// }
	const actualSum = arr.reduce((sum, num) => sum + num, 0);
	return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 3, 5]));
module.exports = findMissingNumber;
