/*
  Linear Time O(n)

  Linear time means that the time required to complete a function is directly proportional to the size of the input data set.
*/

const sumArray = (arr) => {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.time('Access Element 1');
console.log(sumArray(arr1));
console.timeEnd('Access Element 1');

const arr2 = Array.from({ length: 10000000 }, (_, index) => index + 1);
console.time('Access Element 2');
console.log(sumArray(arr2));
console.timeEnd('Access Element 2');
