const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
	const formatted = str.replace(/[^a-zA-z0-9]/g, '').toLowerCase();

	const charQueue = new Queue();
	const charStack = new Stack();

	for (let i = 0; i < formatted.length; i++) {
		const char = formatted.charAt(i);
		charQueue.enqueue(char);
		charStack.push(char);
	}

	while (!charQueue.isEmpty()) {
		if (charQueue.dequeue() !== charStack.pop()) {
			return false;
		}
	}

	return true;
}

module.exports = isPalindromeQueueStack;
