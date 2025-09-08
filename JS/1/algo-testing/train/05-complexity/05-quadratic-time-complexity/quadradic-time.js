/*
Quadradic Time O(n^2)

Quadradic time means that the time required to complete a function is proportional to the square of the input data set.
*/

const sumArray = (arr) => {
	let sum1 = 0;
	let sum2 = 0;

	for (let i = 0; i < arr.length; i++) {
		sum1 += arr[i];
		for (let j = 0; j < arr.length; j++) {
			sum2 += arr[j];
		}
	}

	return sum1 + sum2;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.time('Access Element 1');
console.log(sumArray(arr1));
console.timeEnd('Access Element 1');

const arr2 = Array.from({ length: 10000 }, (_, index) => index + 1);
console.time('Access Element 2');
console.log(sumArray(arr2));
console.timeEnd('Access Element 2');
