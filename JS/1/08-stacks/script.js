// class Stack {
// 	constructor() {
// 		this._items = []; // where we keep our stack items
// 		this._count = 0; // keeps track of how many items are in the stack
// 	}

// 	push(item) {
// 		// this._items.push(item);
// 		this._items[this._count] = item; // put the new item at the top (current count index)
// 		this._count++; // increase count by 1
// 	}

// 	pop() {
// 		// this._items.pop();
// 		if (this.isEmpty()) {
// 			return 'Underflow'; // can't remove from empty stack
// 		}

// 		const item = this._items[this._count - 1]; // get the last item
// 		this._count--; // decrease count

// 		this._items.length = this._count;
// 		return item;
// 	}

// 	peek() {
// 		if (this.isEmpty()) {
// 			return 'No item';
// 		}

// 		return this._items[this._count - 1];
// 	}

// 	isEmpty() {
// 		return this._count === 0;
// 	}

// 	length() {
// 		return this._count;
// 	}

// 	clear() {
// 		this._items = [];
// 		this._count = 0;
// 	}
// }

// const stack = new Stack();
// stack.push('item 1');
// stack.push('item 2');
// stack.push('item 3');
// stack.push('item 4');
// stack.push('item 5');
// stack.push('item 6');

// stack.pop();

// console.log(`Top Item: ${stack.peek()}`);
// console.log(stack.length());
// console.log(stack);
// stack.clear();
// console.log(stack);

//

// Queues

class Queue {
	constructor() {
		this._items = [];
		this._count = 0; // next empty slot at the back
		this._front = 0; // index of the first item
	}

	// Check if the queue is empty
	isEmpty() {
		return this.length() === 0;
	}

	// Add item to the back
	enqueues(item) {
		this._items[this._count] = item;
		this._count++;
	}

	// Remove item from the front
	dequeues() {
		if (this.isEmpty()) return 'Undefined';
		const item = this._items[this._front];
		this._front++;
		// Optional: reset array if empty to avoid wasted space
		if (this._front === this._count) {
			this.clear();
		}
		return item;
	}

	// Peek at the front item without removing it
	peek() {
		if (this.isEmpty()) return 'No items in Queue';
		return this._items[this._front];
	}

	// Number of items in the queue
	length() {
		return this._count - this._front;
	}

	// Reset the queue
	clear() {
		this._items = [];
		this._count = 0;
		this._front = 0;
	}
}

// ✅ Example usage
const q = new Queue();
q.enqueues('item 1');
q.enqueues('item 2');
q.enqueues('item 3');
q.enqueues('item 4');

console.log(q.dequeues()); // "item 1"
console.log(q.peek()); // "item 2"
console.log(q.length()); // 3
console.log(q);

q.clear();
console.log(q); // empty queue
