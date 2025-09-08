const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
	let reverse = '';
	const queue = new Queue();
	for (let i = 0; i < str.length; i++) {
		queue.enqueue(str[i]);
	}

	while (!queue.isEmpty()) {
		reverse = queue.dequeue() + reverse;
	}
	return reverse;
};
console.log(reverseStringWithQueue('Hello'));

module.exports = reverseStringWithQueue;
